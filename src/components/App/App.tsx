import * as ST from './styled.ts';
import MainPage from '@pages/MainPage.tsx';
function App() {
  return (
    <>
      <ST.GlobalStyles />
      <ST.AppWrapper>
        <MainPage />
      </ST.AppWrapper>
    </>
  );
}

export default App;
