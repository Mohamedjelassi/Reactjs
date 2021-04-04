import React, { Component } from "react";
import css from './App.css'
import Phpp from './component/Profile/ProfilPhoto';
import Name from './component/Profile/FullName';
import Addr from './component/Profile/Address';




class App extends Component {
  render() {
    return (
      <>
        <div className="hm">
          <div className="home">
            <div>
              <Phpp />
            </div>
            <div className="about">
              <Name />
              <Addr />
            </div>


          </div>
        </div>
      </>
    );
  }
}
export default App;