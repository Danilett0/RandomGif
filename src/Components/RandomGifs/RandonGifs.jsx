import React, { useState, useEffect } from "react";
import axios from "axios";
// import PropTypes from 'prop-types'

const RandonGifs = ({ palabra }) => {
  const api_key = "XrhlhNkC54XUvG0UDVbWFWVNJuddJvta";
  const SearchWord = palabra;
  const Url = `https://api.giphy.com/v1/gifs/random?api_key=${api_key}&tag=${SearchWord}`;
  
  const [miImagen, setmiImagen] = useState(SearchWord);

  useEffect(() => {
    const consulta = () => {
      if(SearchWord){
        console.log(Url);
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
      }else{
        console.log('nadaaaaa');
      }
  
    };

    consulta();
  }, [ SearchWord,Url]);

  return (
    <div className="mainRandomG">
      <img className="ImgRandom" src={miImagen} alt="" />
      <h1 className="RandomWord">{palabra}</h1>
    </div>
  );
};

export default RandonGifs;
