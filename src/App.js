import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import Footer from "./components/Globals/Footer/Footer";
import SideNav from "./components/Globals/MobileNav/SideNav";
import Navbar from "./components/Globals/Navbar/Navbar";
import "./css/tailwind.css";
import about from "./pages/about";
import contact from "./pages/contact";
import error from "./pages/error";
import home from "./pages/home";
import properties from "./pages/properties";
import singleProperty from "./pages/SingleProperty";
import { SideNavContextProvider } from "./SideNavContext";
import ThemeContext from "./ThemeContext";

function App() {
  const { darkMode } = useContext(ThemeContext);
  let classes = "bg-gray-100 text-gray-900";
  if (darkMode) {
    classes = "bg-gray-800 text-gray-500";
  }
  return (
    <>
      <SideNavContextProvider>
        <SideNav />
        {/* {backdrop} */}
        <Navbar />
      </SideNavContextProvider>
      <div
        className={`antialiased ${classes} font-sans`}
        style={{
          paddingTop: "72px",
          transition: "background-color .2s ease"
        }}
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
