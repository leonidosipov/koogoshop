import { memo, useState } from 'react';

import { FormGroup, Box, Typography } from '@mui/material';

import { ProductCard, Accordion } from 'app/components';
import { useNotifier } from 'hooks/use-notifier';

import { useMainPage } from './hooks';
import { useDetailInfoSlice } from './hooks/useDetailInfoSlice';
import { ProductCardsContainer } from './styles';

export const MainPage = memo(() => {
  useDetailInfoSlice();
  useNotifier();
  const { products, productsLoading } = useMainPage();

  // const { list, handleChangeTodoItemStatus, handleDeleteToDoItem, handleAddTodoItem } = useMainPage();

  return (
    <Box>
      <Typography>Электросамокаты</Typography>
      <Accordion />
      <ProductCardsContainer>
        {products?.map(e => (
          <ProductCard {...e} key={e.id} />
        ))}
      </ProductCardsContainer>
    </Box>
  );
});
