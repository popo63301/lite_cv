function App() {
  return (
    <div>
      <div className="part1">
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
      <div className="part2">
        <div
          style={{
            color: "#63BFB0",
            textAlign: "center",
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
      <div className="part3">
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
      <div className="part4">
        <div>
          Discutons ensemble de <b>vos besoins</b>:
        </div>
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
