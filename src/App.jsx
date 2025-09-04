import { Routes, Route, useLocation } from "react-router-dom";
import Home from "./pages/Home";
/*import LinktreeDemo from "./pages/LinktreeDemo";
import ApresentacaoDemo from "./pages/ApresentacaoDemo";*/
import FunnelDemo from "./Pages/FunilDemo/App";
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  const location = useLocation();
  const isFunnel = location.pathname.startsWith("/funnel");

  return (
    <div className={isFunnel ? "": "min-h-screen bg-gray-50"}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/funnel/*" element={<FunnelDemo />} />
      </Routes>
      <WhatsAppButton />
    </div>
  );
}

export default App;

/*
          <Route path="/linktree" element={<LinktreeDemo />} />
          <Route path="/apresentacao" element={<ApresentacaoDemo />} />
          <Route path="/funil" element={<FunilDemo />} /> */