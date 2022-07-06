import React from "react";
function Cards(props) {
   // sort images and generate a JSX list
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
      let { id, clicked } = e.target.dataset;

      if (id) {
         // increase score
         if (clicked === "false") {
            clickRobot(id);
            increaseScore();
            changeRandomNumber();

            // reset score and set highScore
         } else if (clicked === "true") {
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
