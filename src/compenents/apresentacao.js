import { useEffect, useState } from "react";
import * as echarts from "echarts";
import Img_logo from "../imgs/logo.png"
import "./apresentacao.css";
import { db, ref, get, set, onValue } from "./firebaseConfig";

function Apresentacao() {

  const [clicks, setClicks] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const clickRef = ref(db, "clicks");

    // Atualiza em tempo real
    onValue(clickRef, (snapshot) => {
      if (snapshot.exists()) {
        setClicks(snapshot.val());
      }
    });
  }, []);

  const handleClick = async () => {
    const clickRef = ref(db, "clicks");
    const snapshot = await get(clickRef);
    const newClicks = (snapshot.exists() ? snapshot.val() : 0) + 1;
    await set(clickRef, newClicks);
  };

  useEffect(() => {
    var chartDom = document.getElementById("main");
    if (chartDom) {
      var myChart = echarts.init(chartDom);

      const option = {
        tooltip: {
          trigger: 'item',
        },
        legend: {
          top: '5%',
          left: 'center',
          textStyle:{
            color: "rgba(255,255,255,1)"
          }
        },
        series: [
          {
            name: 'BullBear',
            type: 'pie',
            radius: ['40%', '70%'],
            avoidLabelOverlap: false,
            padAngle: 5,
            itemStyle: {
              borderRadius: 10
            },
            label: {
              color: 'rgba(255, 255, 255, 1)',
              show: false,
              position: 'center'
            },
            emphasis: {
              label: {
                show: true,
                fontSize: 28,
                fontWeight: 'bold'
              }
            },
            labelLine: {
              show: false
            },
            data: [
              { value: 60, name: 'Public Distribuition 60%' },
              { value: 18, name: 'Reservation 18%' },
              { value: 12, name: 'Expasion 12%' },
              { value: 5, name: 'Rewards 5%' },
              { value: 5, name: 'Marketing 5%' }
            ]
          }
        ]
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

  const [disponibleS, setdisponibles] = useState(null)

  function disponible() {
    setdisponibles(true)
    setTimeout(() => {
      setdisponibles(false)
    }, 3500);
  }

  return (
    <div className="apresentacao" id="tokenomics">

      <div className="apresentacao-2" id="tokenomics">
        <div className="like">
          <h1>Project Likes: {clicks}</h1>
          {visible && (
        <button
          onClick={() => {
            setVisible(false)
            handleClick()
          }}
          className=""
        >
          Project Like
        </button>
      )}
        </div>
        
        <img src={Img_logo} width='80px'></img>
        <h2>$BullBear Token Presentation</h2>
        <p>
        BullBear emerges as a revolution in the world of cryptocurrencies, bringing an innovative project focused on exponential growth and the development of a solid and secure ecosystem for investors and traders. Our mission is to provide a dynamic and efficient environment for crypto asset trading, with strategic incentives to drive adoption and liquidity of our token.
        </p>
        <h2>MAX SUPPLY</h2>
        <p>100B</p>
        <div id="main" style={{ width: "100%", height: "400px", marginTop:"20px" }}></div>
        <h2 id="burn">Burn System</h2>
        <p>BullBear has an innovative token burn project! Every week, 1% of all transactions will be burned, reducing the total supply and increasing the asset's scarcity. This mechanism aims to boost the token's long-term value and benefit the community.</p>
        <div className="token">
          <p className="address">ADDRESS: launch</p>
          <button onClick={()=>{disponible()}}>COPY IN LAUNCH</button>
          {disponibleS ? (
            <p style={{width:"100%"}}>available at launch</p>
          ): (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}

export default Apresentacao;
