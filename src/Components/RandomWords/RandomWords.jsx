import React, { useState, useEffect } from "react";
import axios from "axios";
import RandomGifs from "../RandomGifs/RandonGifs";
import Typography from "@material-ui/core/Typography";
import "./styles.css";

const RandomWords = () => {
  const [mipalabra, setMipalabra] = useState("");

  useEffect(() => {
    const consulta = () => {
      const url = `https://catfact.ninja/fact`;
      axios
        .get(url)
        .then((response) => {
          const { data } = response;
          const RandomWord = data.fact.split(" ", 4).join(" ").replace(",", "");

          setMipalabra(RandomWord);
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
    <div className="mainRandomW">
      <Typography variant="h5">
        <RandomGifs palabra={mipalabra}></RandomGifs>
      </Typography>
    </div>
  );
};

export default RandomWords;
