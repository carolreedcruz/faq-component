import "./styles/App.css";
import FAQ from "./components/FAQ";
import NavbarImage from "./assets/Navbar.png";
import FooterImage from "./assets/Footer.png";

function App() {
  return (
    <div className="app">
      <img src={NavbarImage} alt="Header" className="static-image" />

      <section className="hero-section">
        <div className="hero-text">
          <h1>Vanliga frågor och svar</h1>
          <p>
            Här har vi samlat vanliga frågor och svar om våra försäkringar,
            betalningar och villkor.
          </p>
        </div>
      </section>

      <FAQ />

      <img src={FooterImage} alt="Footer" className="static-image" />
    </div>
  );
}

export default App;
