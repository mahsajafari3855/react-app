import React, {Component} from "react";
import {Route,Routes} from "react-router-dom"

import Navbar from "./components/Navbar";
import Products from "./components/Products";
import Aboutus from "./components/Aboutus";

import Footer from "./components/Footer";
import Landing from "./components/Landing";

class App extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <Routes>
                <Route path="/" exact element={<Landing/>}/>
                <Route path="/products" element={<Products/>}/>
                <Route path="/aboutus" element={<Aboutus/>}/>
                </Routes>
               
                <Footer />
            </div>
        )
    }
}

export default App;