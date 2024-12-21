import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Update from "./pages/Update";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="update/:id" element={<Update />} />
      </Route>
    </Routes>
  </BrowserRouter>
  );
}

export default App;
