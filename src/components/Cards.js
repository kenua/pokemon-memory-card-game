import React from "react";
import image1 from "../images/MM-BombMan.webp";
import image2 from "../images/MM-IceMan.webp";
import image3 from "../images/hombrerapido.webp";

function Cards() {
   let st1 = {
      backgroundImage: `url("${image1}")`,
   };
   let st2 = {
      backgroundImage: `url("${image2}")`,
   };
   let st3 = {
      backgroundImage: `url("${image3}")`,
   };

   return (
      <section className="cards">
         <div className="cards__card" style={st1}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st2}>
            <div className="card__title-container card__title-container--reverse">
               <p>Iceman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Iceman</p>
            </div>
         </div>
         <div className="cards__card" style={st3}>
            <div className="card__title-container card__title-container--reverse">
               <p>QuickMan</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>QuickMan</p>
            </div>
         </div>

         <div className="cards__card" style={st1}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st2}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st3}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>

         <div className="cards__card" style={st1}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st2}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st3}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>

         <div className="cards__card" style={st1}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st2}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
         <div className="cards__card" style={st3}>
            <div className="card__title-container card__title-container--reverse">
               <p>Cutman</p>
            </div>
            <div className="card__title-container card__title-container--normal">
               <p>Cutman</p>
            </div>
         </div>
      </section>
   );
}

export default Cards;
