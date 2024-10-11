

const SkillsList = ({src, skill}) => {
  return (
    <span> 
        <img src={src} alt="Checkmark Icon" />
        <p>{skill}</p>
    </span>
  )
}

export default SkillsList;