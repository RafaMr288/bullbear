import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import Img_logo from "../imgs/logo.png"
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Registrar os componentes do Chart.js
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Grafico = () => {
  // Dados de exemplo para o gráfico
  const [data, setData] = useState({
    labels: ['day 1', 'day 2', 'day 3', 'day 4', 'day 5'], // Mêses ou timestamps
    datasets: [
        
      {
        label: 'Price Graphic',
        data: [0, 0, 0, 0, 0], // Exemplo de valores do preço
        borderColor: 'rgb(42, 100, 167)',
        tension: 0.1,
      },
    ],
  });

  const options = {
    plugins: {
      title: {
        display: false, // Habilita o título
        text: 'Price Over Time', // O título do gráfico
        position: 'top', // Posição do título
      },
      legend: {
        position: 'top',
        display:false,
      },
    },
    scales: {
      x: {
        title: {
          display: false, // Desativa a label abaixo do eixo X
        },
      },
      y: {
        title: {
          display: false, // Desativa a label abaixo do eixo Y
        },
      },
    },
  };

  return (
    <div style={{ width: '80%', margin: '0 auto', textAlign: 'center', display:"flex", justifyContent:"center", alignItems:"center", flexDirection:"column", padding:"20px" }}>
      {/* Informações do topo */}
      <div style={{ marginBottom: '20px', display:"flex", justifyContent:"space-around", gap:"25px", alignItems:"center", width:"80%", flexWrap:"wrap" }}>
        <img src={Img_logo} alt="Logo" style={{ width: '50px', height: '50px', marginBottom: '10px' }} />
        <h2 style={{color:"#FFCC00"}}>BullBear</h2>
        <p>Price: Launch</p>
        <p>MarketCap: Launch</p>
        <p>Vol: Launch</p>
      </div>

      {/* Gráfico de linhas */}
      <Line data={data} options={options} style={{maxWidth:"600px", maxHeight:"400px"}}/>
    </div>
  );
};

export default Grafico;
