import styles from './Skills.module.css';
import checkMarkIcon from '../../assets/checkmark-dark.svg';
import SkillsList from '../../common/SkillsList';


const Skills = () => {
  return (
    <section id="skills" className={styles.container}>
      <h1 className={styles.sectionTitle}>Skills</h1>

      <div className={styles.skillList}>
       <SkillsList src={checkMarkIcon} skill="HTML" />
       <SkillsList src={checkMarkIcon} skill="CSS" />
       <SkillsList src={checkMarkIcon} skill="JavaScript" />
       <SkillsList src={checkMarkIcon} skill="Node.js" />
       <SkillsList src={checkMarkIcon} skill="MongoDB" />
       <hr />
       <SkillsList src={checkMarkIcon} skill="React" />
       <SkillsList src={checkMarkIcon} skill="Angular" />
       <SkillsList src={checkMarkIcon} skill="TypeScript" />
       <SkillsList src={checkMarkIcon} skill="Next" />
       <hr />
       <SkillsList src={checkMarkIcon} skill="Tailwind" />
       <SkillsList src={checkMarkIcon} skill="Bootstrap" />
       <SkillsList src={checkMarkIcon} skill="Figma" />
       <SkillsList src={checkMarkIcon} skill="Git" />
       <SkillsList src={checkMarkIcon} skill="Github" />
      </div>
    </section>
  )
}

export default Skills;