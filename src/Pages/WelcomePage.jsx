import React from "react";
import { IconContext } from "react-icons";
import { GiCardRandom } from "react-icons/gi";
import Typography from "@material-ui/core/Typography";
import { Link as linkRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";

const WelcomePage = () => {
  return (
    <div className="fullWelcome">
      <div className="mainWelcome">
        <Link component={linkRouter} to="/main" color="inherit">
          <IconContext.Provider value={{ size: "150px" }}>
            <GiCardRandom className="icono" />
          </IconContext.Provider>
        </Link>
        <Typography variant="h6">¿quieres ver una imagen aleatoria?</Typography>
      </div>
    </div>
  );
};

export default WelcomePage;
