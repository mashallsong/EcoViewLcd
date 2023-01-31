import { BrowserRouter, Routes, Route } from "react-router-dom";

import Lcd from "./Pages/Lcd";




function App() {
  return (
    <div className="root-wrap">
      <BrowserRouter>
            <Routes>
                <Route path="/" element={<Lcd />} />
                <Route path="/Lcd" element={<Lcd />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
 