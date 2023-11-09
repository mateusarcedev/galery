import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-image";
import React, { useState } from "react";
import audioFile from "./unstopable.mp3";


function App() {
  const [audio, setAudio] = useState(new Audio(audioFile));
  const [isPlaying, setIsPlaying] = useState(false);

  const toggleAudio = () => {
    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="app">
      <header>
        <div className="header-wrapper">
          <h1>
            AS SINGULARIDADES DESAFIOS ENFRENTADOS NO CAMPO DE ESTÁGIO
            SUPERVISIONADO EM SAÚDE COLETIVA TEFÉ - AM, LEVANDO SAÚDE A TODOS
          </h1>
        </div>
      </header>
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} slideInterval={5000} onClick={toggleAudio} />
      </div>
    </div>
  );
}

export default App;
