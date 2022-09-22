import { css } from "styled-components";

export const mediaQueries: any = {
  xs: 375,
  sm: 480,
  md: 600,
  lg: 801,
  xl: 1025,
  xxl: 1281,
};

const buildMediaQuery = (size: string) => (rules: any) =>
  css`
    @media (min-width: ${mediaQueries[size]}px) {
      ${rules}
    }
  `;

const mediaQueryXs = buildMediaQuery("xs");
const mediaQuerySm = buildMediaQuery("sm");
const mediaQueryMd = buildMediaQuery("md");
const mediaQueryLg = buildMediaQuery("lg");
const mediaQueryXl = buildMediaQuery("xl");
const mediaQueryXxl = buildMediaQuery("xxl");

const medias = [
  mediaQueryXs,
  mediaQuerySm,
  mediaQueryMd,
  mediaQueryLg,
  mediaQueryXl,
  mediaQueryXxl,
];

const buildMediaQueryStyles = (style: any, index: number) =>
  index === 0 ? style : medias[index - 1](style).join("");

export {
  mediaQueryXs,
  mediaQuerySm,
  mediaQueryMd,
  mediaQueryLg,
  mediaQueryXl,
  mediaQueryXxl,
  buildMediaQueryStyles,
};
