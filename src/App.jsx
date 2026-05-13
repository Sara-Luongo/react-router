import { BrowserRouter, Routes, Route } from "react-router";
import HomePage from "./pagine/HomePage";
import Layout from "./components/Layout";
import ChiSiamo from "./pagine/ChiSiamo";
import ListaProdotti from "./pagine/ListaProdotti";
import NotFound from "./pagine/NotFound";

function App() {
  return <BrowserRouter>
    <Routes>

      <Route path="" element={<Layout />}>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/ChiSiamo" element={<ChiSiamo />} />
        <Route path="/Listaprodotti" element={<ListaProdotti />} />
        <Route path="*" element={<NotFound />} />
      </Route>

    </Routes>
  </BrowserRouter>

}
export default App;
