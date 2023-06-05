import { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';

import { todoListData } from './config';
import { TodoListItemDTO } from './types';

export function useMainPage() {
  const [list, setList] = useState<TodoListItemDTO[]>(todoListData);

  const handleDeleteToDoItem = (id: string) => {
    const arr = [...list];
    const index = arr.findIndex(o => id === o.id);
    arr.splice(index, 1);
    setList(arr);
  };

  /* export const todoListData = [
  { id: '1', text: 'Thirst', checked: false },
  { id: '2', text: '2Thirst', checked: true },
  { id: '3', text: '3Thirst', checked: false },
];
 */
  /* 
  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };
*/
  const handleAddTodoItem = (text: string) => {
    const arr = [...list];
    const obj = { id: uuidv4(), text, checked: false };
    arr.unshift(obj);
    setList(arr);
  };

  const handleChangeTodoItemStatus = (id: string) => {
    const arr = [...list];
    const index = arr.findIndex(o => id === o.id);
    const obj = arr.find(o => id === o.id) as TodoListItemDTO;
    const indexChecked = arr.findIndex(o => o.checked); // -1
    arr.splice(index, 1);
    if (indexChecked === -1) {
      arr.push({ ...obj, checked: !obj.checked });
      setList(arr);
      return;
    }
    arr.splice(indexChecked, 0, { ...obj, checked: !obj.checked });
    setList(arr);
  };

  return { list, handleChangeTodoItemStatus, handleDeleteToDoItem, handleAddTodoItem };
}

// unchecked
// unchecked
// unchecked
// unchecked
// unchecked
// checked
// checked
// checked
// checked
// checked
// checked

// -----

// false

/* 
  index checked: !checked

*/

// ------

// true //index === 0

/* 



*/
