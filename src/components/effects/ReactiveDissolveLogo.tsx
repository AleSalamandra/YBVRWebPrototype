"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";


type EdgePoint = {
  x: number;
  y: number;

  nx: number;
  ny: number;

  seed: number;
};


type ReactiveDissolveLogoProps = {
  src: string;

  className?: string;

  logoHeight?: number;

  logoOffsetX?: number;
  logoOffsetY?: number;

  dissolveRadius?: number;
  dissolveAmount?: number;

  particleIntensity?: number;
  lightIntensity?: number;

  sweepDelay?: number;
  sweepDuration?: number;

  edgeSampleStep?: number;
};


function clamp(
  value: number,
  min: number,
  max: number
) {
  return Math.min(
    Math.max(value, min),
    max
  );
}


function lerp(
  from: number,
  to: number,
  amount: number
) {
  return (
    from +
    (to - from) * amount
  );
}


function hash(
  x: number,
  y: number
) {
  const value =
    Math.sin(
      x * 12.9898 +
      y * 78.233
    ) *
    43758.5453;

  return (
    value -
    Math.floor(value)
  );
}


export default function ReactiveDissolveLogo({
  src,

  className = "",

  logoHeight = 0.94,

  logoOffsetX = 0,
  logoOffsetY = 0,

  dissolveRadius = 0.2,
  dissolveAmount = 0.78,

  particleIntensity = 0.72,
  lightIntensity = 1,

  sweepDelay = 0.8,
  sweepDuration = 10,

  edgeSampleStep = 2,
}: ReactiveDissolveLogoProps) {

  const rootRef =
    useRef<HTMLDivElement>(null);

  const canvasRef =
    useRef<HTMLCanvasElement>(null);

  const [canvasReady, setCanvasReady] =
    useState(false);


  useEffect(() => {
    const root =
      rootRef.current;

    const canvas =
      canvasRef.current;


    if (
      !root ||
      !canvas
    ) {
      return;
    }


    const context =
      canvas.getContext(
        "2d",
        {
          alpha: true,
        }
      );


    if (!context) {
      return;
    }


    let disposed = false;

    let animationFrame = 0;

    let resizeObserver:
      ResizeObserver |
      null = null;


    const image =
      new Image();


    /* =====================================
       POINTER STATE
    ===================================== */

    const mouseTarget = {
      x: 0,
      y: 0,
    };

    const mouseCurrent = {
      x: 0,
      y: 0,
    };


    let activeTarget = 0;
    let activeCurrent = 0;


    /* =====================================
       LOGO GEOMETRY
    ===================================== */

    let drawX = 0;
    let drawY = 0;

    let drawWidth = 1;
    let drawHeight = 1;

    let cssWidth = 1;
    let cssHeight = 1;

    let edgePoints:
      EdgePoint[] = [];


    /* =====================================
       TIMING
    ===================================== */

    let previousTime =
      performance.now();

    let startTime =
      previousTime;


    const prefersReducedMotion =
      window.matchMedia(
        "(prefers-reduced-motion: reduce)"
      ).matches;


    /* =====================================
       POINTER EVENTS
    ===================================== */

    const deactivate = () => {
      activeTarget = 0;
    };


    const handlePointerMove = (
      event: PointerEvent
    ) => {
      const bounds =
        root.getBoundingClientRect();


      const inside =
        event.clientX >= bounds.left &&
        event.clientX <= bounds.right &&
        event.clientY >= bounds.top &&
        event.clientY <= bounds.bottom;


      if (!inside) {
        deactivate();

        return;
      }


      mouseTarget.x =
        event.clientX -
        bounds.left;

      mouseTarget.y =
        event.clientY -
        bounds.top;


      activeTarget = 1;
    };


    const handleWindowMouseOut = (
      event: MouseEvent
    ) => {
      if (
        event.relatedTarget === null
      ) {
        deactivate();
      }
    };


    const handleVisibilityChange = () => {
      if (document.hidden) {
        deactivate();
      }
    };


    window.addEventListener(
      "pointermove",
      handlePointerMove,
      {
        passive: true,
      }
    );

    window.addEventListener(
      "blur",
      deactivate
    );

    document.addEventListener(
      "mouseout",
      handleWindowMouseOut
    );

    document.addEventListener(
      "visibilitychange",
      handleVisibilityChange
    );


    /* =====================================
       BUILD SVG EDGE MAP
    ===================================== */

    const buildEdgeMap = () => {
      if (
        !image.complete ||
        image.naturalWidth === 0 ||
        image.naturalHeight === 0
      ) {
        return;
      }


      const logoAspect =
        image.naturalWidth /
        image.naturalHeight;


      drawHeight =
        cssHeight *
        logoHeight;


      drawWidth =
        drawHeight *
        logoAspect;


      drawX =
        cssWidth *
        logoOffsetX;


      drawY =
        (
          cssHeight -
          drawHeight
        ) *
        0.5
        +
        cssHeight *
        logoOffsetY;


      const analysisWidth =
        Math.max(
          1,
          Math.round(
            drawWidth
          )
        );


      const analysisHeight =
        Math.max(
          1,
          Math.round(
            drawHeight
          )
        );


      const maskCanvas =
        document.createElement(
          "canvas"
        );


      maskCanvas.width =
        analysisWidth;

      maskCanvas.height =
        analysisHeight;


      const maskContext =
        maskCanvas.getContext(
          "2d",
          {
            willReadFrequently: true,
          }
        );


      if (!maskContext) {
        return;
      }


      maskContext.clearRect(
        0,
        0,
        analysisWidth,
        analysisHeight
      );


      maskContext.drawImage(
        image,
        0,
        0,
        analysisWidth,
        analysisHeight
      );


      const pixels =
        maskContext.getImageData(
          0,
          0,
          analysisWidth,
          analysisHeight
        ).data;


      const alphaAt = (
        x: number,
        y: number
      ) => {
        if (
          x < 0 ||
          y < 0 ||
          x >= analysisWidth ||
          y >= analysisHeight
        ) {
          return 0;
        }


        const index =
          (
            y *
            analysisWidth +
            x
          ) *
          4
          +
          3;


        return pixels[index];
      };


      const points:
        EdgePoint[] = [];


      const step =
        Math.max(
          1,
          Math.round(
            edgeSampleStep
          )
        );


      const gradientDistance =
        Math.max(
          2,
          step
        );


      for (
        let y = step;
        y < analysisHeight - step;
        y += step
      ) {
        for (
          let x = step;
          x < analysisWidth - step;
          x += step
        ) {
          const alpha =
            alphaAt(
              x,
              y
            );


          if (alpha < 40) {
            continue;
          }


          const left =
            alphaAt(
              x - gradientDistance,
              y
            );

          const right =
            alphaAt(
              x + gradientDistance,
              y
            );

          const top =
            alphaAt(
              x,
              y - gradientDistance
            );

          const bottom =
            alphaAt(
              x,
              y + gradientDistance
            );


          const minimumNeighbour =
            Math.min(
              left,
              right,
              top,
              bottom
            );


          if (
            minimumNeighbour >
            210
          ) {
            continue;
          }


          const gradientX =
            right -
            left;

          const gradientY =
            bottom -
            top;


          const length =
            Math.hypot(
              gradientX,
              gradientY
            );


          let normalX = 0;
          let normalY = -1;


          if (length > 0.001) {
            normalX =
              -gradientX /
              length;

            normalY =
              -gradientY /
              length;
          }


          points.push({
            x:
              drawX +
              x,

            y:
              drawY +
              y,

            nx:
              normalX,

            ny:
              normalY,

            seed:
              hash(
                x,
                y
              ),
          });
        }
      }


      edgePoints =
        points;
    };


    /* =====================================
       RESIZE
    ===================================== */

    const resize = () => {
      const bounds =
        root.getBoundingClientRect();


      cssWidth =
        Math.max(
          1,
          bounds.width
        );

      cssHeight =
        Math.max(
          1,
          bounds.height
        );


      const pixelRatio =
        Math.min(
          window.devicePixelRatio ||
          1,

          1.5
        );


      canvas.width =
        Math.round(
          cssWidth *
          pixelRatio
        );

      canvas.height =
        Math.round(
          cssHeight *
          pixelRatio
        );


      canvas.style.width =
        `${cssWidth}px`;

      canvas.style.height =
        `${cssHeight}px`;


      context.setTransform(
        pixelRatio,
        0,
        0,
        pixelRatio,
        0,
        0
      );


      buildEdgeMap();
    };


    /* =====================================
       MATERIAL
    ===================================== */

    const drawMaterial = (
      elapsed: number
    ) => {
      context.save();


      context.globalCompositeOperation =
        "source-over";

      context.globalAlpha = 1;


      context.drawImage(
        image,
        drawX,
        drawY,
        drawWidth,
        drawHeight
      );


      context.globalCompositeOperation =
        "source-in";


      const materialGradient =
        context.createLinearGradient(
          drawX,
          drawY,

          drawX +
          drawWidth,
          drawY +
          drawHeight
        );


      materialGradient.addColorStop(
        0,
        "#020202"
      );

      materialGradient.addColorStop(
        0.23,
        "#0a0a0a"
      );

      materialGradient.addColorStop(
        0.46,
        "#171717"
      );

      materialGradient.addColorStop(
        0.66,
        "#080808"
      );

      materialGradient.addColorStop(
        0.84,
        "#141414"
      );

      materialGradient.addColorStop(
        1,
        "#030303"
      );


      context.fillStyle =
        materialGradient;


      context.fillRect(
        0,
        0,
        cssWidth,
        cssHeight
      );


      /* ===================================
         CURSOR LIGHT
      =================================== */

      if (
        activeCurrent >
        0.001
      ) {
        context.globalCompositeOperation =
          "source-atop";


        const lightRadius =
          Math.min(
            cssWidth,
            cssHeight
          ) *
          0.2;


        const light =
          context.createRadialGradient(
            mouseCurrent.x,
            mouseCurrent.y,
            0,

            mouseCurrent.x,
            mouseCurrent.y,
            lightRadius
          );


        const strength =
          activeCurrent *
          lightIntensity;


        light.addColorStop(
          0,
          `rgba(255,255,255,${
            0.34 *
            strength
          })`
        );

        light.addColorStop(
          0.22,
          `rgba(245,248,255,${
            0.18 *
            strength
          })`
        );

        light.addColorStop(
          0.55,
          `rgba(220,225,235,${
            0.055 *
            strength
          })`
        );

        light.addColorStop(
          1,
          "rgba(255,255,255,0)"
        );


        context.fillStyle =
          light;


        context.fillRect(
          0,
          0,
          cssWidth,
          cssHeight
        );
      }


      /* ===================================
         INTRO SWEEP
      =================================== */

      if (
        !prefersReducedMotion
      ) {
        const sweepTime =
          (
            elapsed -
            sweepDelay
          ) /
          sweepDuration;


        if (
          sweepTime >= 0 &&
          sweepTime <= 1
        ) {
          const progress =
            sweepTime *
            sweepTime *
            (
              3 -
              2 *
              sweepTime
            );


          const sweepX =
            lerp(
              -cssWidth * 0.2,

              cssWidth * 1.2,

              progress
            );


          const band =
            Math.max(
              100,
              cssWidth *
              0.09
            );


          context.globalCompositeOperation =
            "source-atop";


          const sweep =
            context.createLinearGradient(
              sweepX -
              band,
              cssHeight,

              sweepX +
              band,
              0
            );


          sweep.addColorStop(
            0,
            "rgba(255,255,255,0)"
          );

          sweep.addColorStop(
            0.38,
            "rgba(255,255,255,0.025)"
          );

          sweep.addColorStop(
            0.5,
            "rgba(255,255,255,0.52)"
          );

          sweep.addColorStop(
            0.58,
            "rgba(255,255,255,0.10)"
          );

          sweep.addColorStop(
            1,
            "rgba(255,255,255,0)"
          );


          context.fillStyle =
            sweep;


          context.fillRect(
            0,
            0,
            cssWidth,
            cssHeight
          );
        }
      }


      context.restore();
    };


    /* =====================================
       DISSOLVE
    ===================================== */

    const drawDissolve = (
      elapsed: number
    ) => {
      if (
        prefersReducedMotion ||
        activeCurrent <
        0.01
      ) {
        return;
      }


      const radius =
        Math.min(
          cssWidth,
          cssHeight
        ) *
        dissolveRadius;


      const maxInwardDepth =
        Math.max(
          14,
          radius *
          0.26
        );


      const maxParticleTravel =
        Math.max(
          32,
          radius *
          0.95
        );


      /* ===================================
         SHARED PARTICLE SCALE

         Both erosion and exterior particles
         use the same visual scale.
      =================================== */

      const getDotSize = (
        seed: number,
        influence: number
      ) => {
        return (
          0.45 +
          seed * 0.75 +
          influence * 0.42
        );
      };


      /* ===================================
         PASS 1
         MICRO EROSION INTO LOGO
      =================================== */

      context.save();


      context.globalCompositeOperation =
        "destination-out";


      context.fillStyle =
        "#000000";


      for (
        const point
        of edgePoints
      ) {
        const dx =
          point.x -
          mouseCurrent.x;

        const dy =
          point.y -
          mouseCurrent.y;


        const distance =
          Math.hypot(
            dx,
            dy
          );


        if (
          distance >
          radius
        ) {
          continue;
        }


        const proximity =
          1 -
          distance /
          radius;


        const influence =
          Math.pow(
            proximity,
            1.15
          ) *
          activeCurrent *
          dissolveAmount;


        /*
          Much less restrictive than before.

          More contour points participate,
          but every cut remains tiny.
        */

        const erosionGate =
          clamp(
            0.18 +
            influence *
            0.82,

            0,
            0.96
          );


        if (
          point.seed >
          erosionGate
        ) {
          continue;
        }


        const inwardDepth =
          influence *
          (
            8 +
            point.seed *
            maxInwardDepth
          );


        const layers =
          3 +
          Math.floor(
            influence *
            8
          );


        const tangentX =
          -point.ny;

        const tangentY =
          point.nx;


        for (
          let layer = 0;
          layer < layers;
          layer += 1
        ) {
          const layerSeed =
            hash(
              point.x +
              layer *
              17.31,

              point.y +
              layer *
              41.73
            );


          const t =
            layers <= 1
              ? 0
              : layer /
                (
                  layers -
                  1
                );


          const inwardDistance =
            inwardDepth *
            t;


          const sideways =
            (
              layerSeed -
              0.5
            ) *
            (
              2 +
              influence *
              6
            );


          const cutX =
            point.x -
            point.nx *
            inwardDistance +
            tangentX *
            sideways;


          const cutY =
            point.y -
            point.ny *
            inwardDistance +
            tangentY *
            sideways;


          const dotSize =
            getDotSize(
              layerSeed,
              influence
            );


          context.globalAlpha =
            clamp(
              0.3 +
              influence *
              0.68,

              0,
              0.95
            );


          context.beginPath();


          context.arc(
            cutX,
            cutY,
            dotSize,
            0,
            Math.PI *
            2
          );


          context.fill();
        }
      }


      context.restore();


      /* ===================================
         PASS 2
         HIGH-DENSITY EXTERIOR PARTICLES
      =================================== */

      context.save();


      context.globalCompositeOperation =
        "source-over";


      for (
        const point
        of edgePoints
      ) {
        const dx =
          point.x -
          mouseCurrent.x;

        const dy =
          point.y -
          mouseCurrent.y;


        const distance =
          Math.hypot(
            dx,
            dy
          );


        if (
          distance >
          radius
        ) {
          continue;
        }


        const proximity =
          1 -
          distance /
          radius;


        const influence =
          Math.pow(
            proximity,
            1.25
          ) *
          activeCurrent *
          dissolveAmount;


        /*
          Much higher emission density.

          Even low influence produces some
          particles, while the centre of the
          effect becomes substantially denser.
        */

        const emissionGate =
          clamp(
            0.22 +
            influence *
            particleIntensity *
            1.35,

            0,
            0.98
          );


        if (
          point.seed >
          emissionGate
        ) {
          continue;
        }


        const tangentX =
          -point.ny;

        const tangentY =
          point.nx;


        /*
          Each valid edge point can spawn
          several independent particles.
        */

        const particleCount =
          2 +
          Math.floor(
            influence *
            5
          );


        for (
          let copy = 0;
          copy < particleCount;
          copy += 1
        ) {
          const particleSeed =
            hash(
              point.x +
              copy *
              29.17,

              point.y +
              copy *
              63.41
            );


          const phase =
            (
              elapsed *
              (
                0.28 +
                particleSeed *
                0.18
              )
              +
              particleSeed *
              13.7
            )
            %
            1;


          /*
            Particles still follow the cursor,
            but not all by the exact same path.
        */

          const followStrength =
            clamp(
              0.18 +
              influence *
              (
                0.56 +
                particleSeed *
                0.22
              ),

              0,
              0.9
            );


          const targetX =
            lerp(
              point.x,
              mouseCurrent.x,
              followStrength
            );


          const targetY =
            lerp(
              point.y,
              mouseCurrent.y,
              followStrength
            );


          const outwardBias =
            (
              2 +
              influence *
              maxParticleTravel *
              (
                0.16 +
                particleSeed *
                0.2
              )
            )
            *
            phase;


          const tangentSpread =
            (
              particleSeed -
              0.5
            )
            *
            (
              10 +
              influence *
              24
            );


          const particleX =
            lerp(
              point.x,
              targetX,
              phase
            )
            +
            point.nx *
            outwardBias
            +
            tangentX *
            tangentSpread *
            phase;


          const particleY =
            lerp(
              point.y,
              targetY,
              phase
            )
            +
            point.ny *
            outwardBias
            +
            tangentY *
            tangentSpread *
            phase;


          /*
            EXACT SAME SCALE LANGUAGE
            as the internal erosion.
          */

          const dotSize =
            getDotSize(
              particleSeed,
              influence
            );


          const fadeIn =
            clamp(
              phase /
              0.12,

              0,
              1
            );


          const fadeOut =
            1 -
            clamp(
              (
                phase -
                0.55
              ) /
              0.45,

              0,
              1
            );


          const alpha =
            fadeIn *
            fadeOut *
            influence *
            (
              0.45 +
              particleSeed *
              0.35
            );


          context.globalAlpha =
            clamp(
              alpha,
              0,
              0.72
            );


          if (
            particleSeed >
            0.78
          ) {
            context.fillStyle =
              "#d3d6da";
          } else if (
            particleSeed >
            0.46
          ) {
            context.fillStyle =
              "#92969b";
          } else {
            context.fillStyle =
              "#5f6368";
          }


          context.beginPath();


          context.arc(
            particleX,
            particleY,
            dotSize,
            0,
            Math.PI *
            2
          );


          context.fill();
        }
      }


      context.restore();
    };


    /* =====================================
       LOOP
    ===================================== */

    const animate = (
      now: number
    ) => {
      if (disposed) {
        return;
      }


      const delta =
        Math.min(
          (
            now -
            previousTime
          ) /
          1000,

          0.05
        );


      previousTime =
        now;


      const elapsed =
        (
          now -
          startTime
        ) /
        1000;


      const pointerFollow =
        1 -
        Math.exp(
          -delta *
          15
        );


      mouseCurrent.x =
        lerp(
          mouseCurrent.x,
          mouseTarget.x,
          pointerFollow
        );


      mouseCurrent.y =
        lerp(
          mouseCurrent.y,
          mouseTarget.y,
          pointerFollow
        );


      const activeFollow =
        1 -
        Math.exp(
          -delta *
          13
        );


      activeCurrent =
        lerp(
          activeCurrent,
          activeTarget,
          activeFollow
        );


      context.clearRect(
        0,
        0,
        cssWidth,
        cssHeight
      );


      drawMaterial(
        elapsed
      );


      drawDissolve(
        elapsed
      );


      animationFrame =
        requestAnimationFrame(
          animate
        );
    };


    /* =====================================
       IMAGE LOAD
    ===================================== */

    image.onload = () => {
      if (disposed) {
        return;
      }


      resize();


      mouseTarget.x =
        drawX +
        drawWidth *
        0.35;

      mouseTarget.y =
        drawY +
        drawHeight *
        0.5;


      mouseCurrent.x =
        mouseTarget.x;

      mouseCurrent.y =
        mouseTarget.y;


      startTime =
        performance.now();

      previousTime =
        startTime;


      resizeObserver =
        new ResizeObserver(
          resize
        );


      resizeObserver.observe(
        root
      );


      setCanvasReady(
        true
      );


      animationFrame =
        requestAnimationFrame(
          animate
        );
    };


    image.onerror = () => {
      setCanvasReady(
        false
      );
    };


    image.src =
      src;


    /* =====================================
       CLEANUP
    ===================================== */

    return () => {
      disposed = true;


      cancelAnimationFrame(
        animationFrame
      );


      resizeObserver?.disconnect();


      window.removeEventListener(
        "pointermove",
        handlePointerMove
      );

      window.removeEventListener(
        "blur",
        deactivate
      );

      document.removeEventListener(
        "mouseout",
        handleWindowMouseOut
      );

      document.removeEventListener(
        "visibilitychange",
        handleVisibilityChange
      );
    };
  }, [
    src,

    logoHeight,

    logoOffsetX,
    logoOffsetY,

    dissolveRadius,
    dissolveAmount,

    particleIntensity,
    lightIntensity,

    sweepDelay,
    sweepDuration,

    edgeSampleStep,
  ]);


  const classes = [
    "reactive-dissolve-logo",
    className,
  ]
    .filter(Boolean)
    .join(" ");


  const style = {
    "--reactive-logo-height":
      `${logoHeight * 100}%`,

    "--reactive-logo-offset-x":
      `${logoOffsetX * 100}%`,

    "--reactive-logo-offset-y":
      `${logoOffsetY * 100}%`,
  } as CSSProperties;


  return (
    <div
      ref={rootRef}
      className={classes}
      style={style}
      aria-hidden="true"
    >
      <img
        src={src}
        alt=""
        className={[
          "reactive-dissolve-logo__fallback",

          canvasReady
            ? "is-hidden"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />

      <canvas
        ref={canvasRef}
        className={[
          "reactive-dissolve-logo__canvas",

          canvasReady
            ? "is-ready"
            : "",
        ]
          .filter(Boolean)
          .join(" ")}
      />
    </div>
  );
}