export interface IBreakpoints {
  small: number;
  medium: number;
  large: number;
  xLarge: number;
  xxLarge: number;
  xxxLarge: number;
  /** returns @media(min-width: ${breakpoint}px) */
  mediaQuery: (breakpoint: number) => string;
}
