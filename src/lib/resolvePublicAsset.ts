import fs from "node:fs";
import path from "node:path";


const DEFAULT_EXTENSIONS = [
  ".png",
  ".jpg",
  ".jpeg",
] as const;


export function resolvePublicAsset(
  relativeBasePath: string,
  extensions: readonly string[] = DEFAULT_EXTENSIONS
) {
  const cleanPath = relativeBasePath
    .replace(/^\/+/, "")
    .replace(/\.[^.\/]+$/, "");

  const directory =
    path.posix.dirname(cleanPath);

  const baseName =
    path.posix
      .basename(cleanPath)
      .toLowerCase();

  const allowedExtensions =
    new Set(
      extensions.map((extension) =>
        extension.startsWith(".")
          ? extension.toLowerCase()
          : `.${extension.toLowerCase()}`
      )
    );

  const absoluteDirectory =
    path.join(
      process.cwd(),
      "public",
      ...directory.split("/")
    );


  try {
    const files =
      fs.readdirSync(
        absoluteDirectory,
        {
          withFileTypes: true,
        }
      );

    const match =
      files.find((file) => {
        if (!file.isFile()) {
          return false;
        }

        const parsed =
          path.parse(file.name);

        return (
          parsed.name.toLowerCase() ===
            baseName &&
          allowedExtensions.has(
            parsed.ext.toLowerCase()
          )
        );
      });


    if (!match) {
      return null;
    }


    return `/${path.posix.join(
      directory,
      match.name
    )}`;
  } catch {
    return null;
  }
}
