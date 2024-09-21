
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./page/home.js"; 
import About from "./page/about.js";
import Contact from "./page/contact.js";
import Navbar from "./inventorynavbar.js";
import './inventory.css';

function AppRouter() {
    return (
        <>
            <Router>
                <div className="App">
                    <div className="App-header">
                        <Navbar />
                        <Routes>
                            <Route index element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/contact" element={<Contact />} />
                        
                        </Routes>
                    </div>
                </div>
            </Router>
        </>
    );
}

export default AppRouter;
