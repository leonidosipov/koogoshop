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
import { Price } from '../price';

const options = {
  name: 'Kugoo Kirin',
  characteristics: [
    { id: 'capacity', value: '2000 mAh' },
    { id: 'power', value: '1,2 л.с.' },
    { id: 'speed', value: '60 km/ч' },
    { id: 'time', value: '5 часов' },
  ],
  price: { price: '29000 р', discount: '19000 р' },
};

const imagesMap = { capacity: <Capacity />, time: <Time />, power: <Power />, speed: <Speed /> };

export const ProductCard = () => {
  return (
    <Wrapper>
      <Box height="231px" />
      <ContentWrapper>
        <StyledChip label="ХИТ" color="secondary" />
        <Typography variant="h6">{options.name} </Typography>

        <CharacteristicsWrapper>
          {options.characteristics.map(e => (
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
            <Price {...options.price} />
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
