import { Providers } from './context';
import { Routes } from './routes';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <div>
      <Providers>
        <GlobalStyle />
        <Routes />
      </Providers>
    </div>
  );
}

export { App };
