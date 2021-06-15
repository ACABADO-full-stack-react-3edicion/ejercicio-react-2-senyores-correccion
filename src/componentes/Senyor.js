import PropTypes from "prop-types";

export const Senyor = (props) => {
  const {
    senyor: { id, nombre, profesion, foto, estado, twitter, marcado },
    toggleSenyor,
  } = props;
  const getInicial = () => {
    const partesNombre = nombre.split(" ");
    const posicion = partesNombre[0].length > 2 ? 0 : 1;
    return partesNombre[posicion].charAt(0).toUpperCase();
  };
  return (
    <article
      className={`senyor col-8 offset-2 mb-4${marcado ? " marcado" : ""}`}
      onClick={() => toggleSenyor(id)}
    >
      <div className="row">
        <div className="avatar col">
          <img
            src={`img/${foto}`}
            className="img-fluid rounded-circle"
            width="214"
            alt=""
          />
          <span className="inicial text-center rounded-circle">
            {getInicial()}
          </span>
        </div>
        <div className="info col">
          <h2 className="nombre-senyor">{nombre}</h2>
          <ul className="datos list-unstyled mt-2">
            <li className="datos-profesion row">
              <span className="nombre-dato col-4">Profesión:</span>
              <span className="valor-dato col">{profesion}</span>
            </li>
            <li className="datos-estado row">
              <span className="nombre-dato col-4">Estado:</span>
              <span className="valor-dato col">{estado}</span>
            </li>
            <li className="datos-twitter row">
              <span className="nombre-dato col-4">Twitter:</span>
              <span className="valor-dato col">{twitter}</span>
            </li>
          </ul>
        </div>
      </div>
      <i className="icono fas fa-check"></i>
    </article>
  );
};

Senyor.propTypes = {
  senyor: PropTypes.shape({
    nombre: PropTypes.string.isRequired,
    profesion: PropTypes.string.isRequired,
    estado: PropTypes.string.isRequired,
    twitter: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired,
    marcado: PropTypes.bool.isRequired,
  }).isRequired,
  toggleSenyor: PropTypes.func.isRequired,
};
