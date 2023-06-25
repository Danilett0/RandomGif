import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import RandomGifs from "./RandonGifs";
import { GiPerspectiveDiceSixFacesRandom as RandomImg } from "react-icons/gi";
import Typography from "@material-ui/core/Typography";

const RandomWords = () => {
  const [mipalabra, setMipalabra] = useState("");
  const [contador, setcontador] = useState(1);

  const inputRef = useRef();

  useEffect(() => {
    const url = `https://catfact.ninja/fact`;
    axios.get(url).then((response) => {
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

  const BuscarGif = () => {
    const nuevovalor = inputRef.current.value;
    setMipalabra(nuevovalor);
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
          <input type="text" name="inputref" ref={inputRef} />
          <button className="new" onClick={BuscarGif}>
            ¡Buscar!
          </button>
        </div>
      </Typography>
    </div>
  );
};

export default RandomWords;
