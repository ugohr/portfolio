import {
  useEffect,
  useRef,
  useState
} from 'react'
import './App.css'

function App() {

  const [offset, setOffset] = useState(0)
  const [hideTechnologies, setHideTechnologies] = useState(true)

  const skillsRef = useRef()

  useEffect(() => {
    document.title = 'Ugo H.'

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault()
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        })
      })
    })

    const onScroll = () => setOffset(window.pageYOffset)
    window.removeEventListener('scroll', onScroll)
    window.addEventListener('scroll', onScroll, {passive: true})

    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (offset >= skillsRef.current.offsetTop && hideTechnologies === true)
      setHideTechnologies(false)
  }, [offset, hideTechnologies])

  return (
    <div className="app">
      <div id="content">
        <div id="intro">
          <span id="intro-title" ref={skillsRef}>Hi, I'm Ugo H.</span>
          <span id="intro-subtitle">Mobile and Web Developer</span>
          <a id="intro-contact" href="mailto:ugohbg+portfolio@gmail.com">Contact me</a>
        </div>
        <div id="skills">
          <div class="section-header">
            <span class="section-title">My skills</span>
          </div>
          <div id="skills-content">
            <div class="skills-col">
              <p class="skills-col-title">Languages</p>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/js-logo.png')} alt="JavaScript" class="skill-image" />
                <span class="skill-name">JavaScript</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/html-logo.png')} alt="HTML" class="skill-image" />
                <span class="skill-name">HTML</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/css-logo.png')} alt="CSS" class="skill-image" />
                <span class="skill-name">CSS</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/php-logo.png')} alt="PHP" class="skill-image" />
                <span class="skill-name">PHP</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/sql-logo.png')} alt="SQL" class="skill-image" />
                <span class="skill-name">SQL</span>
              </div>
              <p class="skills-col-title">Libraries</p>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/react-logo.png')} alt="React.js" class="skill-image" />
                <span class="skill-name">React.js</span>
              </div>
            </div>
            <div class="skills-col">
              <p class="skills-col-title">Frameworks</p>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/react-logo.png')} alt="React Native" class="skill-image" />
                <span class="skill-name">React Native</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/laravel-logo.png')} alt="Laravel" class="skill-image" />
                <span class="skill-name">Laravel</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/express-logo.png')} alt="Express" class="skill-image skill-image-revert" />
                <span class="skill-name">Express</span>
              </div>
              <p class="skills-col-title">Cloud</p>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/firebase-logo.png')} alt="Firebase" class="skill-image" />
                <span class="skill-name">Firebase</span>
              </div>
              <div class={"skill" + (hideTechnologies ? " skill-hidden" : "")}>
                <img src={require('./images/amplify-logo.png')} alt="AWS Amplify" class="skill-image" />
                <span class="skill-name">AWS Amplify</span>
              </div>
            </div>
          </div>
        </div>
        <div id="experience">
          <div class="section-header">
            <span class="section-title">My experience</span>
          </div>
          <div class="experience">
            <div class="experience-image-container">
              <img src={require('./images/agence-mna.png')} alt="Agence MNA" class="experience-image" />
            </div>
            <div class="experience-content">
              <p class="experience-name">
                Marc Nicolas Architectures website
              </p>
              <p class="experience-description">
                A complete redesign of the website using modern and future-proof technologies.
              </p>
              <p class="experience-keywords">
                Full-Stack, Laravel
              </p>
              <a href="https://agence-mna.com" target="_blank" rel="noreferrer" class="experience-link">Link to website</a>
            </div>
          </div>
          <div class="experience-separator"></div>
          <div class="experience">
            <div class="experience-image-container">
              <img src={require('./images/switup.png')} alt="Switup" class="experience-image" />
            </div>
            <div class="experience-content">
              <p class="experience-name">
                Switup - Workout app
              </p>
              <p class="experience-description">
                A cross-platform mobile application to log your workouts.<br />
                Includes goal, body measurement and nutrition tracking.
              </p>
              <p class="experience-keywords">
                Mobile, React Native, JavaScript
              </p>
              <div class="experience-links">
                <a href="https://apps.apple.com/tt/app/switup-musculation-fitness/id1551956246" target="_blank" rel="noreferrer" class="experience-link">iOS</a>
                <a href="https://play.google.com/store/apps/details?id=com.switup" target="_blank" rel="noreferrer" class="experience-link">Android</a>
              </div>
            </div>
          </div>
        </div>
        <footer>
          <p id="credits">Built and designed by Ugo H.</p>
          <p id="source">Source code available on <a href="https://github.com/ugohr/portfolio">GitHub</a></p>
          <a href="https://github.com/ugohr" id="footer-github">
            <img src={require('./images/github-logo.png')} alt="GitHub" width={20} height={20} />
          </a>
        </footer>
      </div>
      <nav id="sidebar-nav">
        <div id="links">
          <a href="#intro">Home</a>
          <a href="#skills">Skills</a>
          <a href="#experience">Experience</a>
        </div>
        <div id="logos">
          <a href="https://github.com/ugohr">
            <img src={require('./images/github-logo.png')} alt="GitHub" width={20} height={20} />
          </a>
        </div>
      </nav>
    </div>
  )
}

export default App
