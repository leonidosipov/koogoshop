import { StyledImage } from './styles';

interface Props {
  src: string;
}

export const ImageComponent = ({ src }: Props) => {
  return <StyledImage src={src} alt="image" />;
};
