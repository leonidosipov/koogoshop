import styled from '@emotion/styled';
import { FormControlLabel, TextField, FormGroup } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const MainPrice = styled.span<{ discounted: boolean }>`
  text-decoration: ${props => (props.discounted ? 'line-through' : 'none')};
`;
