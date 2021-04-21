import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">React Dictionary</header>
        <main>
          <Dictionary defaultKeyword="hello" />
        </main>
        <footer className="footer">
          This project was coded by{" "}
          <a href="https://www.linkedin.com/in/lucianafasano/" target="_blank">
            Luciana Fasano
          </a>{" "}
          and is open-sourced on{" "}
          <a
            href="https://github.com/lufasano/react-dictionary-project"
            target="_blank"
          >
            GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
