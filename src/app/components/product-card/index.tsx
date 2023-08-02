import {
  ShoppingBasketOutlined as ShoppingBasketOutlinedIcon,
  FavoriteBorder as FavoriteBorderIcon,
} from '@mui/icons-material';
import { Box, Typography, Button } from '@mui/material';

import { Time, Speed, Power, Capacity } from 'assets/icons';

import {
  Wrapper,
  ContentWrapper,
  CharacteristicsWrapper,
  PriceWrapper,
  StyledButton,
  ButtonWrapper,
  StyledChip,
} from './styles';
import { ImageComponent } from '../image-component';
import { Price } from '../price';

interface CharacteristicProps {
  id: string;
  value: string;
}
interface PriceProps {
  price: string;
  discount: string;
}

interface Props {
  name: string;
  characteristics: CharacteristicProps[];
  price: PriceProps;
  img: string;
}

const imagesMap = { capacity: <Capacity />, time: <Time />, power: <Power />, speed: <Speed /> };

export const ProductCard = ({ name, characteristics, price, img }: Props) => {
  return (
    <Wrapper>
      <Box height="231px">
        <ImageComponent src={img} />
      </Box>
      <ContentWrapper>
        <StyledChip label="ХИТ" color="secondary" />
        <Typography variant="h6">{name} </Typography>

        <CharacteristicsWrapper>
          {characteristics.map(e => (
            <Box key={e.id} display="flex" alignItems="center">
              <Box marginRight="12px">{imagesMap[e.id as keyof typeof imagesMap]}</Box>
              <Typography variant="inherit" whiteSpace="nowrap">
                {e.value}
              </Typography>
            </Box>
          ))}
        </CharacteristicsWrapper>
        <Box
          display="flex"
          alignItems="center"
          justifyContent="space-between"
          marginTop="24px"
          marginBottom="16px">
          <PriceWrapper>
            <Price {...price} />
          </PriceWrapper>
          <ButtonWrapper>
            <StyledButton variant="outlined" startIcon={<ShoppingBasketOutlinedIcon />} />
            <StyledButton variant="outlined" startIcon={<FavoriteBorderIcon />} />
          </ButtonWrapper>
        </Box>
        <Button fullWidth variant="contained" color="primary">
          Купить в 1 клик
        </Button>
      </ContentWrapper>
    </Wrapper>
  );
};

//  <Chip label="Basic" />
