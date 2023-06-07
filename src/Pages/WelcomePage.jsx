import React, { useMemo } from "react";
import { IconContext } from "react-icons";
import { GiCardRandom } from "react-icons/gi";
import Typography from "@material-ui/core/Typography";
import { Link as linkRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";
import "./styles/styles.css";

const WelcomePage = () => {
  const ObjStyles = useMemo(() => {return { size: "150px" };}, []);
  return (
    <div className="fullWelcome">
      <div className="mainWelcome">
        <Link component={linkRouter} to="/main" color="inherit">
          <IconContext.Provider value={ObjStyles}>
            <GiCardRandom className="icono" />
          </IconContext.Provider>
        </Link>
        <Typography variant="h6">¿quieres ver una imagen aleatoria?</Typography>
      </div>
    </div>
  );
};

export default WelcomePage;
