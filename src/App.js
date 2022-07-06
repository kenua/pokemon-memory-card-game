import React from "react";
import { nanoid } from "nanoid";

import Header from "./components/Header.js";
import Cards from "./components/Cards.js";

// import images
import robotImage1 from "./images/BombMan.jpg";
import robotImage2 from "./images/BubbleMan.jpg";
import robotImage3 from "./images/ClashMan.jpg";
import robotImage4 from "./images/CutMan.jpg";
import robotImage5 from "./images/ElecMan.jpg";
import robotImage6 from "./images/FireMan.jpg";
import robotImage7 from "./images/HeatMan.jpg";
import robotImage8 from "./images/IceMan.jpg";
import robotImage9 from "./images/MetalMan.jpg";
import robotImage10 from "./images/QuickMan.jpg";
import robotImage11 from "./images/SparkMan.jpg";
import robotImage12 from "./images/TopMan.jpg";

let robotsData = [
   robotImage1,
   robotImage2,
   robotImage3,
   robotImage4,
   robotImage5,
   robotImage6,
   robotImage7,
   robotImage8,
   robotImage9,
   robotImage10,
   robotImage11,
   robotImage12,
];

robotsData = robotsData.map((item) => {
   return {
      id: nanoid(),
      name: item.match(/(?<=\/)[\w]*(?=\.)/gi)[0],
      url: item,
      randomNumber: Math.floor(Math.random() * 12) + 1,
      clicked: false,
   };
});

function App() {
   const [robots, setRobots] = React.useState(robotsData);

   const clickRobot = (id) => {
      setRobots((prevState) =>
         prevState.map((item) =>
            item.id === id ? { ...item, clicked: true } : item
         )
      );
   };

   const resetClickedRobots = () => {
      setRobots((prevState) =>
         prevState.map((item) => ({ ...item, clicked: false }))
      );
   };

   const changeRandomNumber = () => {
      setRobots((prevState) =>
         prevState.map((item) => ({
            ...item,
            randomNumber: Math.floor(Math.random() * 12) + 1,
         }))
      );
   };

   const [score, setScore] = React.useState(0);

   const increaseScore = () => {
      setScore(score + 1);
   };

   const [highScore, setHighScore] = React.useState(0);

   const defineHighScore = () => {
      setHighScore(score);
      setScore(0);
   };

   return (
      <main>
         <Header score={score} highScore={highScore} />
         <Cards
            robots={robots}
            clickRobot={clickRobot}
            resetClickedRobots={resetClickedRobots}
            changeRandomNumber={changeRandomNumber}
            increaseScore={increaseScore}
            defineHighScore={defineHighScore}
         />
      </main>
   );
}

export default App;
