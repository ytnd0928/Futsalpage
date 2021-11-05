import "./styles.css";
import logo from "../src/images/logo.jpg";

export default function App() {
  return (
    <div className="App">
      <head>
        <title>teamName</title>
        <meta name="description" content="埼玉県上尾市のフットサルチーム" />
      </head>
      <body>
        <header className="header wrapper">
          <img className="logo" src={logo} />
          <nav>
            <ul className="main-nav">
              <li>TeamName</li>
              　　　　<li>news</li>
              <li>member</li>
              <li>sns</li>
              <li>contact</li>
            </ul>
          </nav>
        </header>

        <div id="home" className="big-bg">
          <div className="homeContent wrapper">
            <h1 className="homeTitle">Team-Name</h1>
          </div>
        </div>
      </body>
    </div>
  );
}
