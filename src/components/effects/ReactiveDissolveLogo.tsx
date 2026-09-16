"use client";

import {
  type CSSProperties,
  useEffect,
  useRef,
  useState,
} from "react";

import {
  buildSignedDistanceField,
  type SignedDistanceField,
} from "@/components/effects/dissolve/distanceField";

import {
  createNoiseTile,
  sampleNoise,
  type NoiseTile,
} from "@/components/effects/dissolve/noise";


type ReactiveDissolveLogoProps = {
  src: string;

  className?: string;

  logoHeight?: number;

  logoOffsetX?: number;
  logoOffsetY?: number;

  interactionRadius?: number;

  blobReach?: number;
  blobIntensity?: number;

  attractionStrength?: number;

  lightIntensity?: number;

  sweepDelay?: number;
  sweepDuration?: number;

  renderScale?: number;
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


function smoothstep(
  edge0: number,
  edge1: number,
  value: number
) {
  if (edge0 === edge1) {
    return value < edge0
      ? 0
      : 1;
  }

  const t =
    clamp(
      (value - edge0) /
        (edge1 - edge0),

      0,
      1
    );

  return (
    t *
    t *
    (3 - 2 * t)
  );
}


export default function ReactiveDissolveLogo({
  src,

  className = "",

  logoHeight = 0.94,

  logoOffsetX = 0,
  logoOffsetY = 0,

  interactionRadius = 0.24,

  blobReach = 110,
  blobIntensity = 0.92,

  attractionStrength = 72,

  lightIntensity = 1,

  sweepDelay = 0.8,
  sweepDuration = 10,

  renderScale = 0.72,
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
       POINTER
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
       CSS GEOMETRY
    ===================================== */

    let cssWidth = 1;
    let cssHeight = 1;

    let drawX = 0;
    let drawY = 0;

    let drawWidth = 1;
    let drawHeight = 1;


    /* =====================================
       EFFECT BOX
    ===================================== */

    let boxX = 0;
    let boxY = 0;

    let boxWidth = 1;
    let boxHeight = 1;

    let paddingCss = 1;


    /* =====================================
       ANALYSIS GEOMETRY
    ===================================== */

    let analysisScale = 1;

    let analysisWidth = 1;
    let analysisHeight = 1;


    /* =====================================
       ANALYSIS CANVAS
    ===================================== */

    const analysisCanvas =
      document.createElement("canvas");

    const analysisContext =
      analysisCanvas.getContext(
        "2d",
        {
          alpha: true,
          willReadFrequently: true,
        }
      );


    if (!analysisContext) {
      return;
    }


    /* =====================================
       BLOB BUFFER
    ===================================== */

    const blobCanvas =
      document.createElement("canvas");

    const blobContext =
      blobCanvas.getContext(
        "2d",
        {
          alpha: true,
        }
      );


    if (!blobContext) {
      return;
    }


    let blobFrame:
      ImageData |
      null = null;


    /* =====================================
       DISTANCE FIELD
    ===================================== */

    let signedField:
      SignedDistanceField |
      null = null;


    let alpha =
      new Uint8ClampedArray(1);


    /* =====================================
       NOISE
    ===================================== */

    const noiseLarge:
      NoiseTile =
      createNoiseTile(
        128,
        917,
        8
      );


    const noiseMedium:
      NoiseTile =
      createNoiseTile(
        128,
        3141,
        5
      );


    const noiseFine:
      NoiseTile =
      createNoiseTile(
        128,
        8128,
        2
      );


    /* =====================================
       TIME
    ===================================== */

    let previousTime =
      performance.now();


    let startTime =
      previousTime;


    let lastBlobRender =
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
       REBUILD
    ===================================== */

    const rebuild = () => {
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
          0.5 +
        cssHeight *
          logoOffsetY;


      /*
        Generous space around the SVG.

        This is where the lava / blob
        material is allowed to exist.
      */

      paddingCss =
        Math.max(
          blobReach * 1.5,

          Math.min(
            cssWidth,
            cssHeight
          ) * 0.2
        );


      boxX =
        drawX -
        paddingCss;


      boxY =
        drawY -
        paddingCss;


      boxWidth =
        drawWidth +
        paddingCss * 2;


      boxHeight =
        drawHeight +
        paddingCss * 2;


      /* ===================================
         ANALYSIS RESOLUTION
      =================================== */

      const largestDimension =
        Math.max(
          boxWidth,
          boxHeight
        );


      const maxAnalysisDimension =
        1100;


      analysisScale =
        Math.min(
          renderScale,

          maxAnalysisDimension /
            Math.max(
              largestDimension,
              1
            )
        );


      analysisScale =
        Math.max(
          0.35,
          analysisScale
        );


      analysisWidth =
        Math.max(
          1,
          Math.round(
            boxWidth *
            analysisScale
          )
        );


      analysisHeight =
        Math.max(
          1,
          Math.round(
            boxHeight *
            analysisScale
          )
        );


      analysisCanvas.width =
        analysisWidth;


      analysisCanvas.height =
        analysisHeight;


      blobCanvas.width =
        analysisWidth;


      blobCanvas.height =
        analysisHeight;


      analysisContext.clearRect(
        0,
        0,
        analysisWidth,
        analysisHeight
      );


      const logoX =
        paddingCss *
        analysisScale;


      const logoY =
        paddingCss *
        analysisScale;


      const logoWidth =
        drawWidth *
        analysisScale;


      const logoHeightPixels =
        drawHeight *
        analysisScale;


      analysisContext.drawImage(
        image,

        logoX,
        logoY,

        logoWidth,
        logoHeightPixels
      );


      const imageData =
        analysisContext.getImageData(
          0,
          0,

          analysisWidth,
          analysisHeight
        );


      alpha =
        new Uint8ClampedArray(
          analysisWidth *
          analysisHeight
        );


      for (
        let index = 0;
        index < alpha.length;
        index += 1
      ) {
        alpha[index] =
          imageData.data[
            index * 4 + 3
          ];
      }


      signedField =
        buildSignedDistanceField(
          alpha,

          analysisWidth,
          analysisHeight,

          24
        );


      blobFrame =
        blobContext.createImageData(
          analysisWidth,
          analysisHeight
        );
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
          window.devicePixelRatio || 1,
          1.75
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


      context.imageSmoothingEnabled =
        true;


      context.imageSmoothingQuality =
        "high";


      rebuild();
    };


    /* =====================================
       MOVING FBM-LIKE NOISE
    ===================================== */

    const getAnimatedNoise = (
      x: number,
      y: number,

      time: number,

      warpX: number,
      warpY: number
    ) => {
      const px =
        x + warpX;


      const py =
        y + warpY;


      /*
        Big slow clouds.
      */

      const large =
        sampleNoise(
          noiseLarge,

          px * 0.052 +
            time * 0.65,

          py * 0.052 -
            time * 0.37
        );


      /*
        Medium moving volume.
      */

      const medium =
        sampleNoise(
          noiseMedium,

          px * 0.105 -
            time * 0.92,

          py * 0.105 +
            time * 0.61
        );


      /*
        Small organic detail.
      */

      const fine =
        sampleNoise(
          noiseFine,

          px * 0.22 +
            time * 1.75,

          py * 0.22 +
            time * 1.08
        );


      return (
        large * 0.58 +
        medium * 0.29 +
        fine * 0.13
      );
    };


    /* =====================================
       BUILD EXTERNAL BLOB ONLY
    ===================================== */

    const buildBlobFrame = (
      elapsed: number
    ) => {
      if (
        !signedField ||
        !blobFrame
      ) {
        return;
      }


      blobFrame.data.fill(0);


      if (
        activeCurrent <= 0.002 ||
        prefersReducedMotion
      ) {
        blobContext.putImageData(
          blobFrame,
          0,
          0
        );

        return;
      }


      const cursorX =
        (
          mouseCurrent.x -
          boxX
        ) *
        analysisScale;


      const cursorY =
        (
          mouseCurrent.y -
          boxY
        ) *
        analysisScale;


      const radius =
        Math.min(
          cssWidth,
          cssHeight
        ) *
        interactionRadius *
        analysisScale;


      const reach =
        blobReach *
        analysisScale;


      const attraction =
        attractionStrength *
        analysisScale;


      const boundsPadding =
        radius +
        reach +
        attraction;


      const minX =
        Math.max(
          0,

          Math.floor(
            cursorX -
            boundsPadding
          )
        );


      const maxX =
        Math.min(
          analysisWidth - 1,

          Math.ceil(
            cursorX +
            boundsPadding
          )
        );


      const minY =
        Math.max(
          0,

          Math.floor(
            cursorY -
            boundsPadding
          )
        );


      const maxY =
        Math.min(
          analysisHeight - 1,

          Math.ceil(
            cursorY +
            boundsPadding
          )
        );


      for (
        let y = minY;
        y <= maxY;
        y += 1
      ) {
        for (
          let x = minX;
          x <= maxX;
          x += 1
        ) {
          const index =
            y *
              analysisWidth +
            x;


          const signedDistance =
            signedField.distance[
              index
            ];


          /*
            Critical change:

            We NEVER touch anything inside
            the original SVG.
          */

          if (
            signedDistance >= 0
          ) {
            continue;
          }


          const outsideDistance =
            -signedDistance;


          if (
            outsideDistance >
            reach
          ) {
            continue;
          }


          /* =================================
             CURSOR DISTANCE
          ================================= */

          const dx =
            cursorX - x;


          const dy =
            cursorY - y;


          const distance =
            Math.hypot(
              dx,
              dy
            );


          /*
            The interaction radius itself
            is distorted by slow noise.

            No perfect circular brush.
          */

          const radiusNoise =
            sampleNoise(
              noiseLarge,

              x * 0.041 +
                elapsed * 0.48,

              y * 0.041 -
                elapsed * 0.29
            );


          const localRadius =
            radius *
            (
              0.76 +
              radiusNoise * 0.48
            );


          const cursorInfluence =
            (
              1 -
              smoothstep(
                localRadius * 0.1,
                localRadius,
                distance
              )
            ) *
            activeCurrent;


          if (
            cursorInfluence <= 0.001
          ) {
            continue;
          }


          /* =================================
             OUTSIDE DISTANCE FALLOFF
          ================================= */

          const depth01 =
            clamp(
              outsideDistance /
                Math.max(
                  reach,
                  0.001
                ),

              0,
              1
            );


          /*
            Strong attachment near the edge,
            increasingly free/cloud-like
            toward the outside.
          */

          const edgeAttachment =
            Math.pow(
              1 - depth01,
              0.72
            );


          /* =================================
             DOMAIN WARP TOWARD CURSOR
          ================================= */

          const safeDistance =
            Math.max(
              distance,
              0.001
            );


          const directionX =
            dx /
            safeDistance;


          const directionY =
            dy /
            safeDistance;


          const tangentX =
            -directionY;


          const tangentY =
            directionX;


          /*
            Pull gets stronger toward the
            centre of the cursor influence.
          */

          const pull =
            cursorInfluence *
            attraction *
            (
              0.45 +
              edgeAttachment *
                0.55
            );


          const curlNoise =
            sampleNoise(
              noiseMedium,

              x * 0.08 -
                elapsed * 0.48,

              y * 0.08 +
                elapsed * 0.35
            ) -
            0.5;


          const curl =
            curlNoise *
            attraction *
            0.65 *
            cursorInfluence;


          const warpX =
            -directionX *
              pull +
            tangentX *
              curl;


          const warpY =
            -directionY *
              pull +
            tangentY *
              curl;


          /* =================================
             LAVA NOISE
          ================================= */

          const animatedNoise =
            getAnimatedNoise(
              x,
              y,

              elapsed,

              warpX,
              warpY
            );


          /*
            Bias near the contour means
            blobs remain physically attached
            to the original object instead
            of looking like random smoke.
          */

          const attachmentBias =
            edgeAttachment *
            0.17;


          const blobField =
            animatedNoise +
            attachmentBias;


          /*
            Soft threshold:
            connected fluid shapes instead
            of individual particles.
          */

          const cloud =
            smoothstep(
              0.43,
              0.69,
              blobField
            );


          if (
            cloud <= 0.001
          ) {
            continue;
          }


          /*
            Organic fade outside.

            Not a hard contour.
          */

          const reachFade =
            Math.pow(
              1 - depth01,
              1.1
            );


          const alphaValue =
            clamp(
              cloud *
              reachFade *
              cursorInfluence *
              blobIntensity,

              0,
              0.88
            );


          if (
            alphaValue <=
            0.002
          ) {
            continue;
          }


          const pixelIndex =
            index * 4;


          /*
            Dark mineral material.

            It will be revealed much more
            by the interactive light later.
          */

          const materialValue =
            Math.round(
              22 +
              animatedNoise *
                44 +
              edgeAttachment *
                12
            );


          blobFrame.data[
            pixelIndex
          ] =
            materialValue;


          blobFrame.data[
            pixelIndex + 1
          ] =
            materialValue + 1;


          blobFrame.data[
            pixelIndex + 2
          ] =
            materialValue + 3;


          blobFrame.data[
            pixelIndex + 3
          ] =
            Math.round(
              alphaValue *
              255
            );
        }
      }


      blobContext.putImageData(
        blobFrame,
        0,
        0
      );
    };


    /* =====================================
       CRISP BASE LOGO
    ===================================== */

    const drawBaseMaterial = () => {
      context.save();


      /*
        Original SVG goes straight into
        the final canvas.

        Nothing ever masks or erodes it.
      */

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
        0.2,
        "#080808"
      );


      materialGradient.addColorStop(
        0.42,
        "#161616"
      );


      materialGradient.addColorStop(
        0.62,
        "#090909"
      );


      materialGradient.addColorStop(
        0.82,
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


      context.restore();
    };


    /* =====================================
       DRAW BLOB
    ===================================== */

    const drawBlob = () => {
      if (
        activeCurrent <= 0.002 ||
        prefersReducedMotion
      ) {
        return;
      }


      context.save();


      context.imageSmoothingEnabled =
        true;


      context.imageSmoothingQuality =
        "high";


      context.globalCompositeOperation =
        "source-over";


      context.drawImage(
        blobCanvas,

        boxX,
        boxY,

        boxWidth,
        boxHeight
      );


      context.restore();
    };


    /* =====================================
       INTERACTIVE LIGHT
    ===================================== */

    const drawInteractiveLight = () => {
      if (
        activeCurrent <= 0.002
      ) {
        return;
      }


      context.save();


      /*
        Because the blob is already drawn,
        the same light naturally reveals
        both logo and external material.
      */

      context.globalCompositeOperation =
        "source-atop";


      const radius =
        Math.min(
          cssWidth,
          cssHeight
        ) *
        0.21;


      const light =
        context.createRadialGradient(
          mouseCurrent.x,
          mouseCurrent.y,
          0,

          mouseCurrent.x,
          mouseCurrent.y,
          radius
        );


      const strength =
        activeCurrent *
        lightIntensity;


      light.addColorStop(
        0,
        `rgba(255,255,255,${
          0.36 *
          strength
        })`
      );


      light.addColorStop(
        0.16,
        `rgba(250,252,255,${
          0.24 *
          strength
        })`
      );


      light.addColorStop(
        0.4,
        `rgba(225,230,238,${
          0.085 *
          strength
        })`
      );


      light.addColorStop(
        0.72,
        `rgba(210,215,225,${
          0.025 *
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


      context.restore();
    };


    /* =====================================
       INITIAL LIGHT SWEEP
    ===================================== */

    const drawSweep = (
      elapsed: number
    ) => {
      if (
        prefersReducedMotion
      ) {
        return;
      }


      const sweepTime =
        (
          elapsed -
          sweepDelay
        ) /
        sweepDuration;


      if (
        sweepTime < 0 ||
        sweepTime > 1
      ) {
        return;
      }


      const progress =
        smoothstep(
          0,
          1,
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
          cssWidth * 0.09
        );


      context.save();


      context.globalCompositeOperation =
        "source-atop";


      const sweep =
        context.createLinearGradient(
          sweepX - band,
          cssHeight,

          sweepX + band,
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
        "rgba(255,255,255,0.50)"
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


      context.restore();
    };


    /* =====================================
       FRAME
    ===================================== */

    const drawFrame = (
      elapsed: number
    ) => {
      context.clearRect(
        0,
        0,
        cssWidth,
        cssHeight
      );


      drawBaseMaterial();

      drawBlob();

      drawInteractiveLight();

      drawSweep(elapsed);
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


      /* ===================================
         SMOOTH CURSOR
      =================================== */

      const pointerFollow =
        1 -
        Math.exp(
          -delta * 13
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


      /* ===================================
         SMOOTH ACTIVATION
      =================================== */

      const activeFollow =
        1 -
        Math.exp(
          -delta * 10
        );


      activeCurrent =
        lerp(
          activeCurrent,
          activeTarget,
          activeFollow
        );


      /*
        Heavy procedural field runs at
        roughly 30fps.

        Final compositing remains at the
        browser refresh rate.
      */

      if (
        now -
          lastBlobRender >=
        32
      ) {
        lastBlobRender =
          now;


        buildBlobFrame(
          elapsed
        );
      }


      drawFrame(
        elapsed
      );


      animationFrame =
        requestAnimationFrame(
          animate
        );
    };


    /* =====================================
       LOAD
    ===================================== */

    image.onload = () => {
      if (disposed) {
        return;
      }


      resize();


      mouseTarget.x =
        drawX +
        drawWidth * 0.35;


      mouseTarget.y =
        drawY +
        drawHeight * 0.5;


      mouseCurrent.x =
        mouseTarget.x;


      mouseCurrent.y =
        mouseTarget.y;


      startTime =
        performance.now();


      previousTime =
        startTime;


      lastBlobRender =
        startTime - 100;


      resizeObserver =
        new ResizeObserver(
          resize
        );


      resizeObserver.observe(
        root
      );


      setCanvasReady(true);


      animationFrame =
        requestAnimationFrame(
          animate
        );
    };


    image.onerror = () => {
      setCanvasReady(false);
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

    interactionRadius,

    blobReach,
    blobIntensity,

    attractionStrength,

    lightIntensity,

    sweepDelay,
    sweepDuration,

    renderScale,
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