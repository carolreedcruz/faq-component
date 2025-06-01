import "./styles/App.css";
import FAQ from "./components/FAQ";
import NavbarImage from "./assets/Navbar.png";
import FooterImage from "./assets/Footer.png";
import HeroImage from "./assets/header-image.jpg";

function App() {
  return (
    <div className="app">
      <header role="banner">
        <img
          src={NavbarImage}
          alt="Navigationsmeny med logotyp och länkar"
          className="static-image"
        />
      </header>

      <main>
        <section
          className="hero-section"
          aria-labelledby="faq-title"
          role="region"
        >
          <img
            src={HeroImage}
            alt="En segelbåt på ett öppet hav med solreflektioner i vattnet och berg i bakgrunden"
            className="hero-background-image"
          />
          <div className="hero-overlay" />
          <div className="hero-text">
            <h1 id="faq-title">Vanliga frågor och svar</h1>
            <p>
              Här har vi samlat vanliga frågor och svar om våra försäkringar,
              betalningar och villkor.
            </p>
          </div>
        </section>

        <FAQ />
      </main>

      <footer role="contentinfo">
        <img
          src={FooterImage}
          alt="Företagsinformation, supportlänkar och kontaktuppgifter"
          className="static-image"
        />
      </footer>
    </div>
  );
}

export default App;
