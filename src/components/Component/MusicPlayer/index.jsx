import React, { useEffect, useState } from "react";
import { MusicPlWr,  Battery, Span, Img, FlashWr } from "./style";
// import MusicPlayerIMG from "./../../../assets/img/MusicPlayerUI.jpeg";
import flash from './../../../assets/svg/flash.svg'
import GlobalStyles from './styles/GlobalStyles';

import Content from './components/Content';
import Player from './components/Player';

const MusicPlayer = () => {
  const [batteryLevel, setBatteryLevel] = useState(null);
  // const [battery, setBattery] = useState(0.29);
  const [batteryCharging, setBatteryCharging] = useState(null);

  useEffect(() => {
    function handleBatteryChange(event) {
      const { level, charging } = event.target;
      setBatteryLevel(level);
      setBatteryCharging(charging);
    }

    navigator.getBattery().then((battery) => {
      setBatteryLevel(battery.level);
      setBatteryCharging(battery.charging);
      battery.addEventListener("levelchange", handleBatteryChange);
      battery.addEventListener("chargingchange", handleBatteryChange);
    });

    return () => {
      navigator.getBattery().then((battery) => {
        battery.removeEventListener("levelchange", handleBatteryChange);
        battery.removeEventListener("chargingchange", handleBatteryChange);
      });
    };
  }, []);
  console.log(batteryLevel, "bu nima boldi");
  return (
    <MusicPlWr>
      <GlobalStyles />
      <Content />
      <Player />
      <div color="white">
        {batteryLevel !== null && (
          <p>
            Battery level: {Math.round(batteryLevel * 100)}%{" "}
            <span>
              <Battery>
                <FlashWr
                  style={{
                    height: "13px",
                    width: `${batteryLevel * 100}%`,
                    backgroundColor: batteryCharging
                      ? "#72e455"
                      : batteryLevel * 100 < 30
                      ? "red"
                      : "#fff",
                    borderRadius: "3px",
                  }}
                >{batteryCharging ? <Img src={flash} alt="flash" /> : ""}</FlashWr>
              </Battery>
              <Span></Span>
            </span>
          </p>
        )}
      </div>
                  
      <div color="white">
        {batteryCharging !== null && (
          <p>Battery info: {batteryCharging ? "Charging" : batteryLevel * 100 < 30 ? 'low battery connect to charger' : 'Optimized'}</p>
        )}
      </div>
    </MusicPlWr>
  );
};

export default MusicPlayer;
