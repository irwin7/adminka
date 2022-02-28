import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContextProvider } from "./components/Contexts/Context";
import Home from "./pages/Home";
import './assets/style/main.css';

function App() {
  return (
    <ContextProvider>
      <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </BrowserRouter>
      </div>
    </ContextProvider>
  );
}

export default App;