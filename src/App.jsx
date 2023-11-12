import { useState } from "react";

function App() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "#63BFB0",
          color: "white",
          padding: "60px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "30px",
          lineHeight: "2",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div>
            Hello, je suis <b style={{ color: "black" }}>Sofiane BADDAG</b>,
          </div>
          <div>
            <b style={{ color: "black" }}>Développeur x Formateur</b> passionné
            et expérimenté,
          </div>
          <div>
            Avec plus de <b style={{ color: "black" }}>5 ans</b> de bouteilles
            derrière lui.
          </div>
          <div>
            Je peux vous proposer des prestations de qualité à des{" "}
            <b style={{ color: "black" }}>prix très avantageux</b> par rapport
            au marché.
          </div>
          <div>
            Je peux me rendre disponible <b style={{ color: "black" }}>ASAP</b>{" "}
            en freelance.
          </div>
          <div>
            Je suis basé à <b style={{ color: "black" }}>Toulouse</b> mais aussi
            à <b style={{ color: "black" }}>Paris</b>.
          </div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "50px 0px",
          fontSize: "40px",
        }}
      >
        <div
          style={{
            color: "#63BFB0",
            textAlign: "center",
            // padding: "50px 0px",
          }}
        >
          Mes technos:
        </div>
        <ul style={{ fontSize: "30px" }}>
          <li>
            Intégration <b>(les classiques)</b>: HTML / CSS / Tailwind
          </li>
          <li>
            Fullstack JS <b>(le feu)</b>: Javascript / React / NodeJS + HTML /
            CSS
          </li>
          <li>
            Mobile <b>(la puissance)</b>: React Native
          </li>
          <li>
            CMS <b>(le futur)</b>: Wordpress
          </li>
          <li>
            Elixir enthusiast <b>(la puissance)</b>
          </li>
        </ul>
      </div>
      <div
        style={{
          backgroundColor: "#25B4D0",
          color: "white",
          padding: "60px 0px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          fontSize: "40px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div>Aussi j’aime bien les langues (humaines),</div>
          <div style={{ marginTop: "5px" }}>je les collectionne:</div>
        </div>
        <ul style={{ fontSize: "30px" }}>
          <li>anglais</li>
          <li>français</li>
          <li>arabe</li>
          <li>persan</li>
          <li>berbère</li>
          <li>allemand</li>
          <li>turc</li>
          <li>indonésien</li>
        </ul>
      </div>
      <div
        style={{
          textAlign: "center",
          padding: "100px 0px",
          fontSize: "40px",
        }}
      >
        <div>Discutons ensemble de vos besoins:</div>
        <div style={{ marginTop: "20px" }}>
          <a
            href="mailto: sofiane.baddag@gmail.com"
            style={{ textDecoration: "none" }}
          >
            sofiane.baddag@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
