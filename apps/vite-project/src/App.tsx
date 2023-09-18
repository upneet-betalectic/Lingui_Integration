import "./App.css";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./home/Home";
import Onboarding from "./onboarding";
import LanguageToggler from "./language/languageToggler";

function App() {
  
  return (
    <div className="flex flex-col">
      
     <Router>
       <Routes>
         <Route path="/" element={<Home />} />
         <Route path="/onboarding" element={<Onboarding />} />
       </Routes>
     </Router>
      {/* <Home/>
      <LanguageToggler/>
      <Onboarding/> */}
      <footer>
        <LanguageToggler/>
      </footer>
    </div>
  );
}

export default App;
