import React, { useState, useEffect } from "react";
import { RandonWordApyKey } from "../config/config.js";
import axios from "axios";

const RandonGifs = ({ palabra }) => {
  const SearchWord = palabra;
  const Url = `https://api.giphy.com/v1/gifs/random?api_key=${RandonWordApyKey}&tag=${SearchWord}`;

  const [miImagen, setmiImagen] = useState(SearchWord);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const consulta = () => {
      if (SearchWord) {
        axios.get(Url).then((response) => {
            const { data } = response;
            const ImagneGif = data.data.images.preview_gif.url;
            setmiImagen(ImagneGif);
            setIsLoading(false);
          })
          .catch((error) => {
            if (error.response) {
              const { data, status } = error.response;
              console.log(
                "mi servidor me respondio un error:",
                data.message,
                status
              );
            } else if (error.request) { console.log("servidor no disponible") }
          });
      }
    };

    consulta();
  }, [SearchWord, Url]);

  return (
    <div className="mainRandomG">
      {isLoading ? (
        <div className="loading-skeleton"></div>
      ) : (
        <img className="ImgRandom" src={miImagen} alt="" />
      )}
      <h1 className="RandomWord">{palabra}</h1>
    </div>
  );
};

export default RandonGifs;
