import styled from '@emotion/styled';
import { Button, Chip } from '@mui/material';
import { COLOR_PALLETTE } from 'global/pallette';

export const Wrapper = styled.article`
  height: 492px;
  width: 255px;
  position: relative;
  border-radius: 10px;
  border: 1.5px solid #eaebed;

  background-color: ${COLOR_PALLETTE.MAIN_WHITE};
`;

export const ContentWrapper = styled.section`
  padding: 20px 24px;
`;

export const CharacteristicsWrapper = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 18px;
`;

export const PriceWrapper = styled.section``;

export const ButtonWrapper = styled.div`
  display: flex;
  grid-gap: 10px;
`;

export const StyledChip = styled(Chip)`
  border-radius: 5px;
  position: absolute;
  top: 10px;
  left: 10px;
`;

/* export const StyledFCL = styled(FormControlLabel)<{ checked: boolean }>`
  & .MuiFormControlLabel-label {
    text-decoration: ${({ checked }) => (checked ? 'line-through' : 'none')};
  }
`; */

export const StyledButton = styled(Button)`
  padding: 11px 11px;
  border-radius: 50px;
  min-width: unset;
  & .MuiButton-startIcon {
    margin-right: 0px;
    margin-left: 0px;
  }
`;
