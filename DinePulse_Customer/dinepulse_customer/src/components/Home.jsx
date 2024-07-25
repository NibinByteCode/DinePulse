import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Home.css";

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
          <button onClick={() => navigate("/login")} aria-label="Login">
            LOGIN
          </button>
          <button onClick={() => navigate("/register")} aria-label="Register">
            REGISTER
          </button>
          <button
            onClick={() => navigate("/reserve")}
            aria-label="Reserve a table"
          >
            RESERVE A TABLE TODAY!!!
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
