import React, { Component, createContext } from "react";

export const SideNavContext = createContext();

class SideNavContextProvider extends Component {
  state = {
    navOpen: false
  };
  toggleSideNav = () => {
    this.setState(prevState => {
      return { navOpen: !prevState.navOpen };
    });
  };
  closeSideNav = () => {
    this.setState({
      navOpen: false
    });
  };
  render() {
    return (
      <SideNavContext.Provider
        value={{
          ...this.state,
          toggleSideNav: this.toggleSideNav,
          closeSideNav: this.closeSideNav
        }}
      >
        {this.props.children}
      </SideNavContext.Provider>
    );
  }
}

export { SideNavContextProvider };
