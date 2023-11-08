import ImageGallery from "react-image-gallery";
import { images } from "../data/gallery-image";

function App() {
  return (
    <div className="app">
      <header>
        <div className="header-wrapper">
          <h1>
            AS SINGULARIDADES  DESAFIOS ENFRENTADOS NO 
CAMPO DE ESTÁGIO SUPERVISIONADO EM SAÚDE COLETIVA TEFÉ - AM, LEVANDO SAÚDE A TODOS 
</h1>
        </div>
      </header>
      <div className="image-gallery-wrapper">
        <ImageGallery items={images} />
      </div>
    </div>
  );
}

export default App;
