import styles from './Hero.module.css';
import profileImg  from '../../assets/profile.jpeg';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedInIconLight  from '../../assets/linkedin-light.svg';
import linkedInIconDark  from '../../assets/linkedin-dark.svg';
import githubIconLight  from '../../assets/github-light.svg';
import githubIconDark  from '../../assets/github-dark.svg';
import CV from '../../assets/CV.pdf';
import { useTheme } from '../../common/ThemeContext';



const Hero = () => {
   const { theme, toggleTheme } = useTheme();

   const themeIcon = theme === 'light' ? sun : moon;
   const linkedInIcon = theme === 'light' ? linkedInIconLight : linkedInIconDark;
   const githubIcon = theme === 'light' ? githubIconLight : githubIconDark;

  return (
    <section id="hero" className={styles.containerHero}>
      <div className={styles.containerImg}>
        <img className={styles.profileImg} src={profileImg} alt="Profile Image of Hristoz Ognyanov" />
        <img onClick={toggleTheme} className={styles.themeIcon} src={themeIcon} alt="Coolor mode Icon" />
      </div>

      <div className={styles.containerText}>
        <h1 className={styles.title}>Hristoz <br/> Ognyanov</h1>
        <h2 className={styles.description}>Web Developer</h2>
        <span>
            <a href="https://linkedin.com/in/hristoz-ognyanov-18b7512ab" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
            </a>
            <a href="https://github.com/fasxmel" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
            </a>
        </span>
        <p className={styles.description}>
        I am a passionate web developer always looking for my next challenge.<br/>
        I thrive on creating innovative and dynamic web solutions and am eager to bring my skills to new and exciting opportunities. 
        I am open to collaborating on projects that push boundaries and drive growth.
        </p>
        <a href={CV} target="_blank">
          <button className={styles.button} download>Resume</button>
        </a>
      </div>
    </section>
  )

}

export default Hero; 