import React, { useState, useEffect } from "react";
import axios from "axios";
import BASE_URL from "../services/Endpoint";
import { yellowChair, blueChair, redChair } from "../services/Helpers";

const SeatSelection = ({ cantidadAsientos = 3 }) => {
  const [asientos, setAsientos] = useState([]);
  const [asientosSeleccionados, setAsientosSeleccionados] = useState([]);
  const [resultado, setResultado] = useState([]);
  const [asientosSeleccionadosInfo, setAsientosSeleccionadosInfo] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`${BASE_URL}`);
        const sala = response.data.horarios[0].sala;
        const allAsientos = sala.filas.flatMap((fila) =>
          fila.asientos.map((asiento) => ({ ...asiento, seleccionable: true }))
        );
        setAsientos(allAsientos);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    setAsientosSeleccionadosInfo(
      asientosSeleccionados.map((id) => {
        const asientoSeleccionado = asientos.find(asiento => asiento.id === id);
        return asientoSeleccionado ? { id, numeroDeAsiento: asientoSeleccionado.numeroDeAsiento } : null;
      }).filter(asiento => asiento !== null)
    );
  }, [asientosSeleccionados]);

  const seleccionarAsiento = (id, ocupado, seleccionable) => {
    if (ocupado) {
      alert("Este asiento ya está reservado");
      return;
    }

    if (!seleccionable) {
      alert("Este asiento no está disponible para selección");
      return;
    }

    if (asientosSeleccionados.length >= cantidadAsientos) {
      setAsientosSeleccionados([]);
    }

    if (asientosSeleccionados.includes(id)) {
      setAsientosSeleccionados((prevSeleccionados) =>
        prevSeleccionados.filter((asiento) => asiento !== id)
      );
    } else {
      setAsientosSeleccionados((prevSeleccionados) =>
        prevSeleccionados.length < cantidadAsientos
          ? [...prevSeleccionados, id]
          : [id]
      );
    }
  };

  const groupAsientosByFila = () => {
    const groupedAsientos = {};
    asientos.forEach((asiento) => {
      const fila = asiento.numeroDeAsiento.charAt(0);
      const numero = asiento.numeroDeAsiento.slice(1);
      if (!groupedAsientos[fila]) {
        groupedAsientos[fila] = [];
      }
      groupedAsientos[fila].push({ ...asiento, numeroDeAsiento: numero });
    });
    return groupedAsientos;
  };

  return (
    <>
      
      <div className="mx-auto pl-12">
        <h2 className="text-2xl font-bold mb-1.5 pt-10">Selecciona tus asientos</h2>
        <p className="text-1 mb-6">Para cambiar tu lugar asignado da click en el asiento deseado</p>
        <div className="flex justify-start mb-10">
          <div className="w-85 flex items-center justify-center mr-6">
            <img className="w-7 h-7" src={yellowChair} alt="silla" />
            <p className="ml-1.5">Selección</p>
          </div>
          <div className="w-85 flex items-center justify-center mr-6">
            <img className="w-7 h-7" src={redChair} alt="silla" />
            <p className="ml-1.5">Ocupado</p>
          </div>
          <div className="w-85 flex items-center justify-center">
            <img className="w-7 h-7" src={blueChair} alt="silla" />
            <p className="ml-1.5">Disponible</p>
          </div>
        </div>
        <hr className="border-b-3 border-gray-500 p-2.5" style={{ width: '48%' }} />
        {Object.entries(groupAsientosByFila()).map(([fila, asientosFila], index, array) => (
          <div
            key={fila}
            className={`mb-4 sm:h-full sm:w-100 ${index === array.length - 1 ? "pb-10" : ""}`}
          >
            <div className="flex items-center mb-1">
              <p className="mr-2 text-sm">{fila}</p>
              <div className="flex flex-wrap">
                {asientosFila.map((asiento, index) => (
                  <React.Fragment key={asiento.id}>
                    <div
                      key={asiento.id}
                      className="m-1 cursor-pointer relative ml-2"
                      onClick={() =>
                        seleccionarAsiento(
                          asiento.id,
                          asiento.ocupado,
                          asiento.seleccionable
                        )
                      }
                    >
                      <img
                        src={
                          asientosSeleccionados.includes(asiento.id)
                            ? yellowChair
                            : asiento.ocupado
                            ? redChair
                            : blueChair
                        }
                        alt={`Asiento ${asiento.numeroDeAsiento}`}
                        className={`w-7 h-7`}
                      />
                      <span className="absolute top-1/3 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-sm">
                        {asiento.numeroDeAsiento}
                      </span>
                    </div>
                    {asiento.numeroDeAsiento === "7" && <div style={{ width: "50px" }} />}
                  </React.Fragment>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SeatSelection;
