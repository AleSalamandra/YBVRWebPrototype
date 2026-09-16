export type SignedDistanceField = {
  width: number;
  height: number;

  inside: Uint8Array;
  distance: Float32Array;
};

const DIAGONAL = Math.SQRT2;

const INF = 1_000_000;


/* ========================================
   CHAMFER DISTANCE TRANSFORM
======================================== */

function buildDistanceTransform(
  inside: Uint8Array,

  width: number,
  height: number,

  targetInside: boolean
) {
  const length =
    width * height;

  const distance =
    new Float32Array(length);


  for (
    let index = 0;
    index < length;
    index += 1
  ) {
    const isInside =
      inside[index] === 1;

    const isTarget =
      targetInside
        ? isInside
        : !isInside;

    distance[index] =
      isTarget
        ? 0
        : INF;
  }


  /* =====================================
     FORWARD PASS
  ===================================== */

  for (
    let y = 0;
    y < height;
    y += 1
  ) {
    for (
      let x = 0;
      x < width;
      x += 1
    ) {
      const index =
        y * width + x;

      let value =
        distance[index];


      if (x > 0) {
        value = Math.min(
          value,
          distance[index - 1] + 1
        );
      }


      if (y > 0) {
        value = Math.min(
          value,
          distance[index - width] + 1
        );


        if (x > 0) {
          value = Math.min(
            value,
            distance[
              index -
              width -
              1
            ] +
              DIAGONAL
          );
        }


        if (
          x <
          width - 1
        ) {
          value = Math.min(
            value,
            distance[
              index -
              width +
              1
            ] +
              DIAGONAL
          );
        }
      }


      distance[index] =
        value;
    }
  }


  /* =====================================
     BACKWARD PASS
  ===================================== */

  for (
    let y = height - 1;
    y >= 0;
    y -= 1
  ) {
    for (
      let x = width - 1;
      x >= 0;
      x -= 1
    ) {
      const index =
        y * width + x;

      let value =
        distance[index];


      if (
        x <
        width - 1
      ) {
        value = Math.min(
          value,
          distance[index + 1] + 1
        );
      }


      if (
        y <
        height - 1
      ) {
        value = Math.min(
          value,
          distance[index + width] + 1
        );


        if (
          x <
          width - 1
        ) {
          value = Math.min(
            value,
            distance[
              index +
              width +
              1
            ] +
              DIAGONAL
          );
        }


        if (x > 0) {
          value = Math.min(
            value,
            distance[
              index +
              width -
              1
            ] +
              DIAGONAL
          );
        }
      }


      distance[index] =
        value;
    }
  }


  return distance;
}


/* ========================================
   SIGNED DISTANCE FIELD
======================================== */

export function buildSignedDistanceField(
  alpha: Uint8ClampedArray,

  width: number,
  height: number,

  threshold = 32
): SignedDistanceField {
  const length =
    width * height;


  const inside =
    new Uint8Array(length);


  for (
    let index = 0;
    index < length;
    index += 1
  ) {
    inside[index] =
      alpha[index] >= threshold
        ? 1
        : 0;
  }


  /*
    For interior pixels:
    distance to the nearest exterior.

    For exterior pixels:
    distance to the nearest interior.
  */

  const distanceToOutside =
    buildDistanceTransform(
      inside,
      width,
      height,
      false
    );


  const distanceToInside =
    buildDistanceTransform(
      inside,
      width,
      height,
      true
    );


  const distance =
    new Float32Array(length);


  for (
    let index = 0;
    index < length;
    index += 1
  ) {
    distance[index] =
      inside[index] === 1
        ? distanceToOutside[index]
        : -distanceToInside[index];
  }


  return {
    width,
    height,

    inside,
    distance,
  };
}