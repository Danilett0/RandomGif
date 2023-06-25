import React, { useState, useEffect } from "react";
import axios from "axios";
import RandomGifs from "./RandonGifs";
import { UrlRandomGif } from "../config/config.js";
import { GiPerspectiveDiceSixFacesRandom as RandomImg } from "react-icons/gi";
import Typography from "@material-ui/core/Typography";

const RandomWords = () => {
  const [mipalabra, setMipalabra] = useState("");
  const [contador, setcontador] = useState(1);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    axios
      .get(UrlRandomGif)
      .then((response) => {
        const { data } = response;
        const RandomWord = data.fact.split(" ", 4).join(" ").replace(",", "");

        setMipalabra(RandomWord);
      })
      .catch((error) => {
        if (error.response) {
          const { data, status } = error.response;
          console.log("Servidor respondio con error:", data.message, status);
        } else if (error.request) {
          console.log("servidor no disponible");
        }
      });
  }, [contador]);

  const GenerarGifRandom = () => {
    setcontador(contador + 1);
  };

  const GuardarValor = (event) => {
    setInputValue(event.target.value);
  };

  const BuscarGif = () => {
    setMipalabra(inputValue);
  };

  return (
    <div className="mainRandomW">
      <div className="contador">
        <p>
          Gif Random <span className="number">{contador}</span>
        </p>
      </div>
      <Typography variant="h5">
        <RandomGifs palabra={mipalabra}></RandomGifs>
        <div className="opciones">
          <RandomImg
            className="Icon"
            onClick={GenerarGifRandom}
            title="Generar Random Gif"
          />
          <input type="text" onChange={GuardarValor} />
          <button className="new" onClick={BuscarGif}>
            ¡Buscar!
          </button>
        </div>
      </Typography>
    </div>
  );
};

export default RandomWords;
