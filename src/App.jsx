import PageContent from "./components/PageContent";
import Footer from "./components/Footer";
import { Route, Routes } from "react-router-dom";
import PlaceOrder from "./pages/PlaceOrder";
import "../src/App.css";

const App = () => {
  return (
    <div className="app-wrapper">
      <Routes>
        <Route path="/" element={<PageContent />} />
        <Route path="/placeorder" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
