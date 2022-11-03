import { Enum } from "types/common";

const enum Fields {
  Path = "path",
  Url = "url",
}

type Pattern<E extends Enum<E>> = { [K in keyof E]?: Pattern<E> };

type Url<E extends Enum<E>, P extends Pattern<E>> = {
  [K in keyof P]: {
    url: string;
    path: E[keyof E];
  } & Url<E, P[K]>;
};

const builder = <E extends Enum<E>, P extends Pattern<E>>(
  path: E,
  pattern?: P,
  currentUrl: string = ""
): Url<E, P> => {
  if (!pattern) {
    return {} as Url<E, P>;
  }

  return Object.fromEntries(
    Object.entries(pattern).map(([currentPath, nextPattern]) => {
      const _path = path[currentPath as keyof E];
      const _url = [currentUrl, _path].join("/").replaceAll(/\/\/+/g, "/");

      return [
        currentPath,
        {
          [Fields.Path]: _path,
          [Fields.Url]: _url,
          ...builder(path, nextPattern, _url),
        },
      ];
    })
  ) as Url<E, P>;
};

const buildUrl = <E extends Enum<E>, P extends Pattern<E>>(
  path: E,
  pattern: P
): Url<E, P> => {
  return builder(path, pattern);
};

export default buildUrl;
