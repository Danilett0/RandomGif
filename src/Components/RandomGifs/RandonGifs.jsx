import React, { useState, useEffect } from "react";
import axios from "axios";
// import PropTypes from 'prop-types'

const RandonGifs = ({ props }) => {
  const api_key = "XrhlhNkC54XUvG0UDVbWFWVNJuddJvta";
  const SearchWord = props;
  console.log(SearchWord);
  const Url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${SearchWord}`;
  console.log(Url);
  const [miImagen, setmiImagen] = useState('');

  useEffect(() => {
    const consulta = () => {
      axios
        .get(Url)
        .then((response) => {
          const { data } = response;
          
          const ImagneGif = data.data.images.fixed_width_still.url;

          setmiImagen(ImagneGif);
        })
        .catch((error) => {
          if (error.response) {
            const { data, status } = error.response;
            console.log(
              "mi servidor me respondio un error:",
              data.message,
              status
            );
          } else if (error.request) {
            console.log(
              "servidor no disponible o no hay conexxio de internet "
            );
          } else {
            console.log("errores imprevistos");
          }
        });
    };

    consulta();
  }, []);

  return (
    <div className="mainRandomG">
      <img className="ImgRandom" src={miImagen} alt="" />
      <h1 className="RandomWord">{props}</h1>
    </div>
  );
};

export default RandonGifs;