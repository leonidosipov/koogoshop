import { memo, useState } from 'react';

import { FormGroup, Box, Typography } from '@mui/material';

import { ProductCard } from 'app/components';
import { useNotifier } from 'hooks/use-notifier';

import { data } from './config';
import { useMainPage } from './hooks';
import { ProductCardsContainer } from './styles';

export const MainPage = memo(() => {
  useNotifier();
  // const { list, handleChangeTodoItemStatus, handleDeleteToDoItem, handleAddTodoItem } = useMainPage();

  return (
    <Box>
      <Typography>Электросамокаты</Typography>
      <ProductCardsContainer>
        {data.map(e => (
          <ProductCard {...e} key={e.id} />
        ))}
      </ProductCardsContainer>
    </Box>
  );
});
