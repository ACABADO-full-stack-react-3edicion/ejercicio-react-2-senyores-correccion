import { useCallback, useEffect, useState } from "react";
import { Cabecera } from "./componentes/Cabecera";
import { Senyor } from "./componentes/Senyor";
import { senyoresAPI } from "./datos/senyores";

function App() {
  const [senyores, setSenyores] = useState([]);
  const nMarcados = senyores.filter((senyor) => senyor.marcado).length;
  const marcarTodos = useCallback(() => {
    setSenyores((senyores) =>
      senyores.map((senyor) => ({
        ...senyor,
        marcado: true,
      }))
    );
  }, []);
  const toggleSenyor = (id) => {
    setSenyores(
      senyores.map((senyor) => {
        if (senyor.id === id) {
          return {
            ...senyor,
            marcado: !senyor.marcado,
          };
        } else {
          return senyor;
        }
      })
    );
  };
  useEffect(() => {
    setTimeout(() => {
      setSenyores(senyoresAPI);
    }, 2000);
  }, []);
  return (
    <div className="contenedor-general container-xl">
      <Cabecera nMarcados={nMarcados} marcarTodos={marcarTodos} />
      <main className="principal mt-2 row">
        {senyores.map((senyor) => (
          <Senyor key={senyor.id} senyor={senyor} toggleSenyor={toggleSenyor} />
        ))}
      </main>
    </div>
  );
}

export default App;
