import { useEffect } from "react";
import * as echarts from "echarts";
import "./apresentacao.css";

function Apresentacao() {
  useEffect(() => {
    var chartDom = document.getElementById("main");
    if (chartDom) {
      var myChart = echarts.init(chartDom);

      const option = {
        title: {
          text: "TOKENOMICS",
          left: "center",
        },
        tooltip: {
          trigger: "item",
        },
        legend: {
            top: 30,
            left: "left",
            textAlign: "center",    
            orient: 'horizontal' ,
            align: 'auto' ,
        },
        series: [
          {
            name: "ECONOMY",
            type: "pie",
            radius: "50%",
            data: [
              { value: 60, name: "Public Distribution" },
              { value: 20, name: "Reservation" },
              { value: 12, name: "Expansion" },
              { value: 5, name: "Rewards" },
              { value: 3, name: "Marketing" },
            ],
            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
          },
        ],
      };

      myChart.setOption(option);

      // Responsividade ao redimensionar a tela
      window.addEventListener("resize", () => myChart.resize());

      return () => {
        window.removeEventListener("resize", () => myChart.resize());
        myChart.dispose(); // Evita vazamento de memória
      };
    }
  }, []);

  return (
    <div className="apresentacao">
      <div className="apresentacao-2">
        <h2>BullBear Swap Presentation</h2>
        <p>
        BullBear emerges as a revolution in the world of cryptocurrencies, bringing an innovative project focused on exponential growth and the development of a solid and secure ecosystem for investors and traders. Our mission is to provide a dynamic and efficient environment for crypto asset trading, with strategic incentives to drive adoption and liquidity of our token.
        </p>
        <h2>TOTAL SUPPLY</h2>
        <p>100B</p>
        <div id="main" style={{ width: "100%", height: "400px", marginTop:"20px" }}></div>
      </div>
    </div>
  );
}

export default Apresentacao;
