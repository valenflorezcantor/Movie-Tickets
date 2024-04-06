import React, { useState } from "react";
// import TicketSummary from "../components/TicketSummary"


const PaymentForm = () => {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
  });
  // const [resultado, setResultado] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const validateEmail = () => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(formData.email);
  };

  const validateCardNumber = () => {
    const cardNumber = formData.cardNumber.replace(/\s/g, "");
    let sum = 0;
    let alternate = false;
    for (let i = cardNumber.length - 1; i >= 0; i--) {
      let digit = parseInt(cardNumber.charAt(i), 10);
      if (alternate) {
        digit *= 2;
        if (digit > 9) {
          digit -= 9;
        }
      }
      sum += digit;
      alternate = !alternate;
    }
    return sum % 10 === 0 && sum > 0;
  };

  const validateCVV = () => {
    // Validar el CVV (debe ser un número de 3 o 4 dígitos)
    const cvvRegex = /^[0-9]{3,4}$/;
    return cvvRegex.test(formData.cvv);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateEmail()) {
      alert("Por favor, ingresa un correo electrónico válido.");
      return;
    }
    if (formData.name.trim() === "") {
      alert("Por favor, ingresa un nombre válido.");
      return;
    }
    if (!validateCardNumber()) {
      alert("Por favor, ingresa un número de tarjeta válido.");
      return;
    }
    if (!validateCVV()) {
      alert("Por favor, ingresa un CVV válido.");
      return;
    }

    console.log("Datos válidos:", formData);
  };

  return (
    <div>
      {/* <TicketSummary resultado={resultado} /> */}
      <div className="min-h-screen flex items-center justify-start bg-gray-100">
        <div className="bg-white p-8 rounded shadow-md max-w-lg">
          <h2 className="text-xl font-semibold mb-4">Información personal</h2>
          <p>Completa los datos del formulario para realizar el pago.</p>
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
          >
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Correo Electrónico
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Ingrese su correo electrónico"
                value={formData.email}
                onChange={handleInputChange}
                className="bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 text-gray-600"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Nombre en la Tarjeta
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                placeholder="Ingrese nombre en la tarjeta"
                className="bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="cardNumber"
                className="block text-sm font-medium text-gray-700"
              >
                Número de Tarjeta
              </label>
              <input
                type="text"
                id="cardNumber"
                name="cardNumber"
                placeholder="1234 1234 1234 1234"
                value={formData.cardNumber}
                onChange={handleInputChange}
                className="bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
              />
            </div>
            <div className="grid grid-cols-2 gap-4 mb-4">
              <div>
                <label
                  htmlFor="expiry"
                  className="block text-sm font-medium text-gray-700"
                >
                  Fecha de Caducidad
                </label>
                <input
                  type="month"
                  id="expiry"
                  name="expiry"
                  className="bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
              <div>
                <label
                  htmlFor="cvv"
                  className="block text-sm font-medium text-gray-700"
                >
                  CVV
                </label>
                <input
                  type="text"
                  id="cvv"
                  name="cvv"
                  placeholder="Enter CVV"
                  value={formData.cvv}
                  onChange={handleInputChange}
                  className="bg-gray-200 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                />
              </div>
            </div>
            <button
              type="submit"
              className="bg-indigo-500 text-white px-4 py-2 rounded"
            >
              Realizar Pago
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PaymentForm;
