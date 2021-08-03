export interface IMoviePosterProps {
  image: {
    source: string | null;
    alt: string;
    width: number;
  };
}

export const defaultProps = {
  image: {
    width: 200,
  },
};
