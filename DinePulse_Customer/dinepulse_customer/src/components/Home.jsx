import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";
import promoimage1 from "../assets/karari-roomali.jpg";
import promoimage2 from "../assets/SmoothieRainbow.jpg";
import promoimage3 from "../assets/Shrimp-Linguini.jpg";

const Home = () => {
  const navigate = useNavigate();

  return (
    <div className="home">
      <div className="intro-section">
        <div className="intro-text">
          <h1>WELCOME TO DINEPULSE</h1>
          <p>
            WHERE EXCEPTIONAL CUISINE MEETS A DELIGHTFUL ATMOSPHERE. SITUATED IN
            THE HEART OF KITCHENER, DINEPULSE IS NOT JUST A RESTAURANT; IT'S AN
            EXPERIENCE DESIGNED TO EXCITE YOUR TASTE BUDS AND RELAX YOUR SOUL.
            OUR DEDICATION TO FOOD GOES BEYOND THE KITCHEN, WITH EACH DISH
            METICULOUSLY PREPARED USING FRESH, LOCALLY-SOURCED INGREDIENTS.
          </p>
          <p>
            AT DINEPULSE, WE BELIEVE IN THE POWER OF FLAVORS TO CREATE LASTING
            MEMORIES. FROM OUR SIGNATURE DISHES INSPIRED BY INTERNATIONAL
            CUISINES TO OUR CHEF'S SPECIALS CRAFTED WITH CREATIVITY AND PASSION,
            EVERY BITE OFFERS A JOURNEY OF CULINARY DELIGHT. WHETHER YOU’RE A
            FOOD ENTHUSIAST SEEKING NEW ADVENTURES OR A CASUAL DINER LOOKING FOR
            A COMFORTING MEAL, OUR DIVERSE MENU HAS SOMETHING TO PLEASE EVERY
            PALATE.
          </p>
          <p>
            JOIN US AT DINEPULSE AND EMBARK ON A UNIQUE GASTRONOMIC JOURNEY. LET
            US PROVIDE YOU WITH AN UNFORGETTABLE DINING EXPERIENCE THAT WILL
            HAVE YOU COMING BACK FOR MORE.
          </p>
        </div>
        <div className="buttons">
          <button
            onClick={() => navigate("/reserve")}
            aria-label="Reserve a table"
          >
            RESERVE A TABLE TODAY!!!
          </button>
        </div>
      </div>
      <br/>

      {/*promotional contents*/}
      <div className="promotional-dishes">
          <h1>Our Special Dishes</h1>
          <p className="promotional-dishes-subheading">
              Savor the artistry of flavors with our curated selection of culinary masterpieces...
          </p>
          <br />
          <div className="promotional-container">
              <div className="promotional-dish">
                  <div className="promotion">
                      <span>Special</span>
                  </div>
                  <img src={promoimage1} alt="Karari Roomali" /><br />
                  <h2>Karari Roomali</h2>
                  <p>Karari Roomali is a popular Indian appetizer. Thin, crispy bread served folded, stuffed, or plain, 
                      often accompanied by chutneys. Delightfully satisfying street food with diverse fillings and 
                      flavors.
                  </p>
              </div>
              <div className="promotional-dish">
                  <div className="promotion">
                      <span>Exclusive</span>
                  </div> 
                  <img src={promoimage2} alt="Rainbow Smoothie" /><br />
                  <h2>Rainbow Smoothie</h2>
                  <p>Indulge in a vibrant rainbow smoothie with layers of antioxidant-rich fruits and creamy Greek yogurt, 
                      each adding a burst of color and flavor to this delightful treat!
                  </p>
              </div>

              <div className="promotional-dish">
                  <img src={promoimage3} alt="Shrimp Linguini" /><br />
                  <h2>Shrimp Linguini</h2>
                  <p>Plump, succulent shrimp intertwine with al dente pasta, enveloped in a vibrant garlic cream sauce, 
                    creating a satisfying and effortlessly elegant dinner experience reminiscent of classic Italian culinary traditions.
                  </p>
              </div>
          </div>
      </div> 
    </div>
  );
};

export default Home;
