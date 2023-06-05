import { useState } from 'react';

import AddIcon from '@mui/icons-material/Add';
import { Button, SvgIcon, Box } from '@mui/material';

import { StyledTextField } from '../styles';

interface Props {
  onClick: (text: string) => void;
}

export function Field({ onClick }: Props) {
  const [value, setValue] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    // console.log(e);
    setValue(e.target.value);
  };

  const handleAddItem = () => {
    onClick(value);
    setValue('');
  };

  return (
    <Box display="flex" width="100%">
      <StyledTextField placeholder="Введите задачу" value={value} onChange={handleChange} />
      <Button variant="contained" color="secondary" onClick={handleAddItem}>
        <SvgIcon component={AddIcon} />
      </Button>
    </Box>
  );
}
