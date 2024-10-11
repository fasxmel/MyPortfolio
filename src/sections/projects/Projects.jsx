import styles from './Projects.module.css';
import iconNft  from '../../assets/iconNft.png';
import iconMovie  from '../../assets/iconMovie.jpg';
import ProjectCard from '../../common/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className={styles.container}>
      <h1 className={styles.sectionTitle}>Projects</h1>
      <div className={styles.containerProjects}>

         <ProjectCard  
         src={iconNft} 
         link={"https://github.com/fasxmel/MyNFT"}
         h3={"MyNFT"}
         p={"NFT marketplace"}
         />
         {/* TODO: Add more projects */}
         <ProjectCard  
         src={iconMovie} 
         link={"https://github.com/fasxmel/Exspres-Movie"}
         h3={"Movie"}
         p={"Movie app"}
         />

      </div>
    </section>
  )
}

export default Projects;