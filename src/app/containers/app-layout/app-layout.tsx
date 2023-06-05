import { memo } from 'react';

import { AppContainer, RouteWrapper } from './styled';

interface Props {
  children: React.ReactNode;
}

export const AppLayout = memo(({ children }: Props) => (
  <AppContainer>
    <RouteWrapper>{children}</RouteWrapper>
  </AppContainer>
));
