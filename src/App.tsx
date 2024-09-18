import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/template/home";
import CreatePage from "./components/template/create";
import EditPage from "./components/template/edit";
import LayoutMain from "./layouts/main";
import Navigation from "./components/organism/navigation";

function App() {
  // layout can change base on conditions in future but for this app i use just one layout!
  return (
    <div className="App">
      <LayoutMain>
        <BrowserRouter>
          <Navigation />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/edit/:id" element={<EditPage />} />
            <Route path="/create" element={<CreatePage />} />
          </Routes>
        </BrowserRouter>
      </LayoutMain>
    </div>
  );
}

export default App;
