import { Box, Typography } from '@mui/material';

import { MainPrice } from './styles';

interface PriceProps {
  price: string;
  discount?: string | null;
}

export const Price = ({ price, discount }: PriceProps) => {
  return (
    <Box>
      <MainPrice discounted={!!discount}>{price}</MainPrice>
      {discount && <Typography variant="h6">10000</Typography>}
    </Box>
  );
};
