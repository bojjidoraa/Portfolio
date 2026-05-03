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
          <p>Sitecore Technical Lead with over 15 years of experience designing and delivering robust, scalable web applications using C# .NET, ASP.NET MVC, and Sitecore.</p>
          <div className="home1">
            <a href="mailto:bojjidoraa@gmail.com">Email</a>
            <a href="tel:+919885992914">Call</a>
          </div>
          <a href="#contact" className="btn-box">Contact Me</a>
        </div>
        <div className="image">
          <img src="/Portfolio_files/background33333333.png" className="shape" alt="background" />
          <img src="/Portfolio_files/propic.png" className="boy" alt="profile" />
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
