import styled from '@emotion/styled';
import { FormControlLabel, TextField, FormGroup } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

/* export const TopSection = styled.article`
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  padding: 24px 24px 10px 24px;
`;

export const StyledFCL = styled(FormControlLabel)<{ checked: boolean }>`
  & .MuiFormControlLabel-label {
    text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  }
`;
*/

export const ProductCardsContainer = styled.div`
  margin-top: 64px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 16px;
`;

/*
export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledFormGroup = styled(FormGroup)`
  width: 100%;
  grid-gap: 16px;
`; */
