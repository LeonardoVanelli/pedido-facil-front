import * as React from 'react';
import { UserProvider } from '../hooks/useUser';

interface IProps {
  children: React.ReactNode;
}

function Providers({ children }: IProps) {
  return <UserProvider>{children}</UserProvider>;
}

export { Providers };
