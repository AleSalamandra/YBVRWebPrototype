export type NoiseTile = {
  size: number;
  data: Float32Array;
};


/* ========================================
   SEEDED RANDOM
======================================== */

function createRandom(
  seed: number
) {
  let state =
    seed >>> 0;


  return () => {
    state +=
      0x6d2b79f5;


    let value =
      state;


    value =
      Math.imul(
        value ^
          (value >>> 15),

        value | 1
      );


    value ^=
      value +
      Math.imul(
        value ^
          (value >>> 7),

        value | 61
      );


    return (
      (
        value ^
        (value >>> 14)
      )
      >>> 0
    ) /
      4294967296;
  };
}


/* ========================================
   BLUR
======================================== */

function blurNoise(
  source: Float32Array,
  size: number
) {
  const result =
    new Float32Array(
      source.length
    );


  const wrap = (
    value: number
  ) => {
    return (
      value +
      size
    ) %
      size;
  };


  for (
    let y = 0;
    y < size;
    y += 1
  ) {
    for (
      let x = 0;
      x < size;
      x += 1
    ) {
      let total = 0;

      let samples = 0;


      for (
        let oy = -1;
        oy <= 1;
        oy += 1
      ) {
        for (
          let ox = -1;
          ox <= 1;
          ox += 1
        ) {
          const px =
            wrap(
              x + ox
            );

          const py =
            wrap(
              y + oy
            );


          total +=
            source[
              py *
                size +
              px
            ];


          samples += 1;
        }
      }


      result[
        y * size + x
      ] =
        total /
        samples;
    }
  }


  return result;
}


/* ========================================
   NORMALIZE
======================================== */

function normalizeNoise(
  data: Float32Array
) {
  let minimum =
    Infinity;

  let maximum =
    -Infinity;


  for (
    let index = 0;
    index < data.length;
    index += 1
  ) {
    minimum =
      Math.min(
        minimum,
        data[index]
      );

    maximum =
      Math.max(
        maximum,
        data[index]
      );
  }


  const range =
    Math.max(
      0.0001,
      maximum - minimum
    );


  for (
    let index = 0;
    index < data.length;
    index += 1
  ) {
    data[index] =
      (
        data[index] -
        minimum
      ) /
      range;
  }
}


/* ========================================
   CREATE TILE
======================================== */

export function createNoiseTile(
  size = 128,
  seed = 1,
  blurPasses = 3
): NoiseTile {
  const random =
    createRandom(seed);


  let data =
    new Float32Array(
      size * size
    );


  for (
    let index = 0;
    index < data.length;
    index += 1
  ) {
    data[index] =
      random();
  }


  for (
    let pass = 0;
    pass < blurPasses;
    pass += 1
  ) {
    data =
      blurNoise(
        data,
        size
      );
  }


  normalizeNoise(data);


  return {
    size,
    data,
  };
}


/* ========================================
   BILINEAR SAMPLE
======================================== */

export function sampleNoise(
  tile: NoiseTile,

  x: number,
  y: number
) {
  const {
    size,
    data,
  } = tile;


  const wrappedX =
    (
      (
        x % size
      ) +
      size
    ) %
    size;


  const wrappedY =
    (
      (
        y % size
      ) +
      size
    ) %
    size;


  const x0 =
    Math.floor(
      wrappedX
    );

  const y0 =
    Math.floor(
      wrappedY
    );


  const x1 =
    (
      x0 + 1
    ) %
    size;

  const y1 =
    (
      y0 + 1
    ) %
    size;


  const tx =
    wrappedX - x0;

  const ty =
    wrappedY - y0;


  const a =
    data[
      y0 * size + x0
    ];

  const b =
    data[
      y0 * size + x1
    ];

  const c =
    data[
      y1 * size + x0
    ];

  const d =
    data[
      y1 * size + x1
    ];


  const top =
    a +
    (b - a) * tx;


  const bottom =
    c +
    (d - c) * tx;


  return (
    top +
    (
      bottom -
      top
    ) *
      ty
  );
}