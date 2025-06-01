import "./styles/App.css";
import FAQ from "./components/FAQ";

function App() {
  return (
    <div className="app">
      <header className="header-placeholder">Header</header>

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

      <footer className="footer-placeholder">Footer</footer>
    </div>
  );
}

export default App;
