import React from "react";
import { StyledRegisterVideo } from "./styles";

const RegisterVideo = () => {
  const [formVisivel, setFormVisivel] = React.useState(true);
  const [values, setValues] = React.useState({ titulo: "", url: "" });

  return (
    <StyledRegisterVideo>
      <button className="add-video" onClick={() => setFormVisivel(true)}>
        +
      </button>
      {formVisivel && (
        <form>
          <div>
            <button
              className="close-modal"
              onClick={() => setFormVisivel(false)}
            >
              x
            </button>
            <input
              placeholder="Título do vídeo"
              value={values.titulo}
              onChange={(e) => {
                const value = e.target.value;
                console.log(value);
                setValues({
                  ...values,
                  titulo: value,
                });
              }}
            />
            <input
              placeholder="URL"
              value={values.url}
              onChange={(e) => {
                const value = e.target.value;
                console.log(value);
                setValues({
                  ...values,
                  url: value,
                });
              }}
            />
            <button type="submit">Cadastrar</button>
          </div>
        </form>
      )}
    </StyledRegisterVideo>
  );
};

export default RegisterVideo;
