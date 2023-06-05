import styled from '@emotion/styled';

export const AppContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  height: 100%;
  /*   display: grid;
  grid-template-columns: 32px 1fr 32px;
  grid-template-rows: 64px 1fr 48px;

  background: #242424;
  grid-template-areas:
    '. hd .'
    '. route .'
    '. ft .'; */
`;
export const RouteWrapper = styled.div`
  grid-area: route;
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
`;
