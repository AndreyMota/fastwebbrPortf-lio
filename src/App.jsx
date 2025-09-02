import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
/*import LinktreeDemo from "./pages/LinktreeDemo";
import ApresentacaoDemo from "./pages/ApresentacaoDemo";
import FunilDemo from "./pages/FunilDemo";*/
import WhatsAppButton from "./components/WhatsAppButton";

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-gray-50">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        <WhatsAppButton />
      </div>
    </Router>
  );
}

export default App;

/*
          <Route path="/linktree" element={<LinktreeDemo />} />
          <Route path="/apresentacao" element={<ApresentacaoDemo />} />
          <Route path="/funil" element={<FunilDemo />} /> */