import * as ST from './styled.ts';
import MainPage from '@pages/MainPage.tsx';
import { Header } from '@components/Header';
function App() {
  return (
    <>
      <ST.GlobalStyles />

      <ST.AppWrapper>
        <Header />
        <MainPage />
      </ST.AppWrapper>
    </>
  );
}

export default App;
