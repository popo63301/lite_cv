import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

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
          fontSize: "20px",
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div>Hello, je suis Sofiane BADDAG.</div>
          <div>Développeur x Formateur passionné et expérimenté,</div>
          <div>Avec plus de 5 ans de bouteilles derrière lui.</div>
          <div>
            Je peux vous proposer des prestations de qualité à des prix très
            avantageux par rapport au marché.
          </div>
          <div>Je peux me rendre disponible ASAP en freelance.</div>
          <div>Je suis basé à Toulouse mais aussi à Paris.</div>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <div
          style={{
            color: "#63BFB0",
            textAlign: "center",
            fontSize: "20px",
            padding: "30px 0px",
          }}
        >
          Mes technos:
        </div>
        <ul>
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
        }}
      >
        <div style={{ textAlign: "left" }}>
          <div>Aussi j’aime bien les langues (humaines),</div>
          <div style={{ marginTop: "5px" }}>je les collectionne:</div>
        </div>
        <ul>
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
          padding: "60px 0px",
          fontSize: "20px",
        }}
      >
        contact: sofiane.baddag@gmail.com
      </div>
    </div>
  );
}

export default App;
