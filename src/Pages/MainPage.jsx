import React from "react";
import RandomWords from "../Components/RandomWords/RandomWords";
import './styles/styles.css'

const MainPage = () => {
  return (
    <div className="mainPage" >
      <RandomWords />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
