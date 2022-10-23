import React from "react";
import RandomWords from "../Components/RandomWords/RandomWords";

const MainPage = (props) => {
  return (
    <div className="mainPage">
      <RandomWords />
    </div>
  );
};

MainPage.propTypes = {};

export default MainPage;
