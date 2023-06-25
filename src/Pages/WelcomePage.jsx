import React, { useMemo } from "react";
import { IconContext } from "react-icons";
import { GiPerspectiveDiceSixFacesRandom } from "react-icons/gi";
import Typography from "@material-ui/core/Typography";
import { Link as linkRouter } from "react-router-dom";
import Link from "@material-ui/core/Link";

const WelcomePage = () => {
  const ObjStyles = useMemo(() => {return { size: "150px" };}, []);
  return (
    <div className="fullWelcome">
      <div className="mainWelcome">
        <Link component={linkRouter} to="/main" color="inherit">
          <IconContext.Provider value={ObjStyles}>
            <GiPerspectiveDiceSixFacesRandom className="icono" />
          </IconContext.Provider>
        </Link>
        <Typography variant="h6">¿quieres ver una imagen aleatoria?</Typography>
        <Typography variant="p" align="center" style={{marginTop: "20px"}}> Aquí podrás generar textos e imágenes aleatorios con solo un clic. Nunca sabes qué te va a tocar!. </Typography>
      </div>
    </div>
  );
};

export default WelcomePage;
