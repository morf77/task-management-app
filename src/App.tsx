import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/template/home";
import CreatePage from "./components/template/create";
import UpdatePage from "./components/template/update";
import LayoutMain from "./layouts/main";

function App() {
  // layout can change base on conditions in future but for this app i use just one layout!
  return (
    <div className="App">
      <LayoutMain>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/update/:id" element={<UpdatePage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </BrowserRouter>
      </LayoutMain>
    </div>
  );
}

export default App;
