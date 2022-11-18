import React from "react";
import { StyledRegisterVideo } from "./styles";

const index = () => {
  return (
    <StyledRegisterVideo>
      <button className="add-video">+</button>
      <form>
        <div>
          <button className="close-modal">x</button>
          <input placeholder="Título do vídeo" />
          <input placeholder="URL" />
          <button type="submit">Cadastrar</button>
        </div>
      </form>
    </StyledRegisterVideo>
  );
};

export default index;
