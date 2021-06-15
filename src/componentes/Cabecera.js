import PropTypes from "prop-types";
import React from "react";

export const Cabecera = React.memo((props) => {
  const { nMarcados, marcarTodos } = props;
  const onClickMarcarTodos = (e) => {
    e.preventDefault();
    marcarTodos();
  };
  return (
    <header className="cabecera text-center py-2 row">
      <h1 className="col-12">Señores que te apuntan con el dedo</h1>
      <span className="col-12 mt-2">
        <span className="total">{nMarcados}</span> señores que te apuntan con el
        dedo marcados
      </span>
      <a
        href="marcar-todos"
        className="marcar-todos col-2 offset-5 btn mt-2"
        onClick={onClickMarcarTodos}
      >
        Marcar todos
      </a>
    </header>
  );
});

Cabecera.propTypes = {
  nMarcados: PropTypes.number.isRequired,
  marcarTodos: PropTypes.func.isRequired,
};
