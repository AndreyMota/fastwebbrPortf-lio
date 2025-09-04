import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import SalePage from './Pages/A/SellPage';
import Quiz from './Pages/A/QuizPage';
import GlobalStyle from './globalStyle';
import QuizB from './Pages/B/QuizPageB';
import SalePageB from './Pages/B/SellPageB';
import { styled } from "styled-components";

const FunnelWrapper = styled.div`
  min-height: 100vh;
  width: 100%
  background-color: #121212;
`

export default function FunnelDemo() {
  return (
    <FunnelWrapper>
      <GlobalStyle />
      <Routes>
        <Route index element={<QuizB />}/>
        <Route path="DescubraOSeuPotencial" element={<SalePage />}/>    
      </Routes>
    </FunnelWrapper>
  );
}

