import { memo, useState } from 'react';

import { FormGroup, Box } from '@mui/material';

import { ProductCard } from 'app/components';
import { useNotifier } from 'hooks/use-notifier';

import { useMainPage } from './hooks';

export const MainPage = memo(() => {
  useNotifier();
  // const { list, handleChangeTodoItemStatus, handleDeleteToDoItem, handleAddTodoItem } = useMainPage();

  return (
    <Box>
      <ProductCard />
    </Box>
  );
});
