import styled from '@emotion/styled';
import { FormControlLabel, TextField, FormGroup } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const TopSection = styled.article`
  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  padding: 24px 24px 10px 24px;
`;

export const StyledFCL = styled(FormControlLabel)<{ checked: boolean }>`
  & .MuiFormControlLabel-label {
    text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  }
`;

export const Wrapper = styled.div`
  /*  background-color: ${COLOR_PALLETTE.MAIN_BLACK};
  padding: 24px 24px 10px 24px; */
  margin-top: 64px;
  display: flex;
  flex-direction: column;
  grid-gap: 24px;
  width: 100%;
  min-width: 400px;
  max-width: 700px;
  align-items: flex-start;
`;
export const StyledTextField = styled(TextField)`
  width: 100%;
`;

export const StyledFormGroup = styled(FormGroup)`
  width: 100%;
  grid-gap: 16px;
`;

// MuiTypography-root MuiTypography-body1 MuiFormControlLabel-label css-ahj2mt-MuiTypography-root
