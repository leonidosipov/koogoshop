import styled from '@emotion/styled';
import { FormControlLabel, TextField, FormGroup } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const Wrapper = styled.article`
  height: 492px;
  width: 255px;
  left: 0px;
  top: 0px;
  border-radius: 10px;
  border: 1.5px solid #eaebed;

  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  padding: 24px 24px 10px 24px;
`;

/* export const StyledFCL = styled(FormControlLabel)<{ checked: boolean }>`
  & .MuiFormControlLabel-label {
    text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  }
`; */
