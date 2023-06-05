import { memo, useState } from 'react';

import { FormGroup } from '@mui/material';

import { useNotifier } from 'hooks/use-notifier';

import { Field, TodoListItem } from './components';
import { useMainPage } from './hooks';
import { Wrapper, StyledFormGroup } from './styles';

export const MainPage = memo(() => {
  useNotifier();
  const { list, handleChangeTodoItemStatus, handleDeleteToDoItem, handleAddTodoItem } = useMainPage();

  return (
    <Wrapper>
      <Field onClick={handleAddTodoItem} />
      <StyledFormGroup>
        {list.map(o => (
          <TodoListItem
            {...o}
            key={o.id}
            onChange={handleChangeTodoItemStatus}
            onDelete={handleDeleteToDoItem}
          />
        ))}
      </StyledFormGroup>
    </Wrapper>
  );
});
