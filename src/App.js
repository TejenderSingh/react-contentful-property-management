import React from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Globals/Footer";
import Navbar from "./components/Globals/Navbar";
import "./css/tailwind.css";
import about from "./pages/about";
import contact from "./pages/contact";
import error from "./pages/error";
import home from "./pages/home";
import properties from "./pages/properties";
import singleProperty from "./pages/SingleProperty";

function App() {
  return (
    <>
      <Navbar />
      <div
        className="antialiased text-gray-900 bg-gray-100 font-sans"
        style={{ paddingTop: "72px" }}
      >
        <div style={{ minHeight: "calc(100vh - 128px)" }}>
          <Switch>
            <Route path="/" exact component={home} />
            <Route path="/properties" exact component={properties} />
            <Route path="/about" exact component={about} />
            <Route path="/contact" exact component={contact} />
            <Route path="/properties/:slug" exact component={singleProperty} />
            <Route component={error} />
          </Switch>
        </div>
      </div>
      <div className="bg-gray-800">
        <Footer />
      </div>
    </>
  );
}

export default App;
