import Summary from './components/Summary';
import Skills from './components/Skills';
import Contact from './components/Contact';

function App() {
  return (
    <>
      <header className="header">
        <a href="#home" className="logo">BOJJIDORA ADDURI</a>
        <nav className="navbar">
          <a href="#home">Home</a>
          <a href="#summary">Summary</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="home" id="home">
        <div className="home-content">
          <h3>Hello, It's me</h3>
          <h1>BOJJIDORA ADDURI</h1>
          <h3>And I'm <span>Sitecore Technical Lead</span></h3>
          <p>Proven experience in designing and delivering robust, scalable web applications using C# .NET, ASP.NET MVC, and Sitecore (SXA, Headless, JSS, XM, XP, XM Cloud), complemented by expertise in front-end technologies including Next.js, Vue.js, Angular, and React.</p>
          <div className="home1">
            <a href="mailto:bojjidoraa@gmail.com">Email</a>
            <a href="tel:+919962016004">Call</a>
          </div>
          <a href="#contact" className="btn-box">Contact Me</a>
        </div>
        <div className="image">
          <img src="/Portfolio/Portfolio_files/photo.png" className="shape" alt="background" />
          <img src="/Portfolio/Portfolio_files/propic.png" className="boy" alt="profile" />
        </div>
      </section>

      <main>
        <Summary />
        <Skills />
        <Contact />
      </main>
    </>
  );
}

export default App;
