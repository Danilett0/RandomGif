import React from "react";
import { Link } from "react-router-dom";
import ImageNotFound from "../Images/not_found.jpg";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

const NotFoundPage = () => {
  return (
    <div className="mainNotFound">
      <img className="ImgNotFound" src={ImageNotFound} alt="" />
      <Link to="/">
        <Typography variant="h6">llevame al inicio</Typography>
      </Link>
    </div>
  );
};

export default NotFoundPage;
