function Skills() {
  return (
    <section className="skills" id="skills">
      <h2>My Skills</h2>
      <div className="skills-container">
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Sitecore</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>Sitecore CMS customization and personalization</li>
                <li>Sitecore Headless Services (JSS) and GraphQL</li>
                <li>Unicorn, TDS, Sitecore CLI</li>
                <li>Azure AI Search, Solr, Coveo</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Backend</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>ASP.NET MVC</li>
                <li>SQL procedures and statements</li>
                <li>Solution architecture and information architecture</li>
                <li>CI/CD pipeline management</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>Frontend</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>React, Next.js, Angular, and Vue.js</li>
                <li>Modern UI development and component design</li>
                <li>Responsive interfaces and performance tuning</li>
                <li>Umbraco, WordPress, SDL Tridion integration</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="flip-card">
          <div className="flip-card-inner">
            <div className="flip-card-front">
              <h3>DevOps</h3>
            </div>
            <div className="flip-card-back">
              <ul>
                <li>AWS and Azure DevOps</li>
                <li>GitHub and Azure pipeline management</li>
                <li>Agile methodology</li>
                <li>Containerized development and cloud deployment</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;
