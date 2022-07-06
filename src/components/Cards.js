import React from "react";
function Cards(props) {
   const cardList = [...props.robots]
      .sort((a, b) => {
         return a.randomNumber - b.randomNumber;
      })
      .map((robot) => {
         let style = {
            backgroundImage: `url(${robot.url})`,
         };

         return (
            <div
               className="cards__card"
               style={style}
               key={robot.id}
               data-id={robot.id}
               data-clicked={robot.clicked}
            >
               <div className="card__title-container card__title-container--reverse">
                  <p>{robot.name}</p>
               </div>
               <div className="card__title-container card__title-container--normal">
                  <p>{robot.name}</p>
               </div>
            </div>
         );
      });

   const checkImage = (e) => {
      const {
         clickRobot,
         resetClickedRobots,
         changeRandomNumber,
         increaseScore,
         defineHighScore,
      } = props;
      let target = e.target;

      if (target.dataset.id) {
         if (target.dataset.clicked === "false") {
            clickRobot(target.dataset.id);
            increaseScore();
            changeRandomNumber();
         } else if (target.dataset.clicked === "true") {
            resetClickedRobots();
            defineHighScore();
            changeRandomNumber();
         }
      }
   };

   return (
      <section className="cards" onClick={checkImage}>
         {cardList}
      </section>
   );
}

export default Cards;
