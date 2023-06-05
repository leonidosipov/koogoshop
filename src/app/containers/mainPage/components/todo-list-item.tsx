import { Checkbox, Button, Box } from '@mui/material';

import { StyledFCL } from '../styles';
import { TodoListItemDTO } from '../types';

interface Props extends TodoListItemDTO {
  onChange: (id: string) => void;
  onDelete: (id: string) => void;
}

export function TodoListItem({ id, text, checked, onChange, onDelete }: Props) {
  const handleChange = () => {
    onChange(id);
  };

  const handleDelete = () => {
    onDelete(id);
  };

  return (
    <Box display="flex" justifyContent="space-between">
      <StyledFCL
        control={<Checkbox checked={checked} onChange={handleChange} name={id} />}
        label={text}
        checked={checked}
      />
      <Button variant="contained" color="secondary" onClick={handleDelete}>
        X
      </Button>
    </Box>
  );
}
