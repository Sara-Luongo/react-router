import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./components/HomePage";
import Layout from "./components/Layout";
import ChiSiamo from "./components/ChiSiamo";
import Prodotti from "./components/Prodotti";

function App() {
  return <BrowserRouter>
    <Routes>

      <Route path="" element={<Layout />}>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ChiSiamo" element={<ChiSiamo />} />
        <Route path="/prodotti" element={<Prodotti />} />
      </Route>

    </Routes>
  </BrowserRouter>

}
export default App;
