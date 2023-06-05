import { memo } from 'react';

import styled from '@emotion/styled';
import { useLocation } from 'react-router-dom';

import { getCookie } from 'utils/cookie';

interface Props {
  children: React.ReactNode;
}

const Background = styled.div`
  background-color: #e4e4e4;
`;

export const PageLayout = memo(({ children }: Props) => {
  const token = getCookie('token');
  const { pathname } = useLocation();

  if (!token || pathname === '/login') return <>{children}</>;
  return <Background>тут скоро будет лейаут</Background>;
});
