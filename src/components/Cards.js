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
            <div className="cards__card" style={style} key={robot.id}>
               <div className="card__title-container card__title-container--reverse">
                  <p>{robot.name}</p>
               </div>
               <div className="card__title-container card__title-container--normal">
                  <p>{robot.name}</p>
               </div>
            </div>
         );
      });

   return <section className="cards">{cardList}</section>;
}

export default Cards;
