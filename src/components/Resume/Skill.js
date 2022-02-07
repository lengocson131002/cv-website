import styled from "styled-components";
import ProgressBar from "./ProgressBar";

const SkillWrapper = styled.div`
  margin-bottom: 2rem;

  h3 {
    color:${({ theme }) => theme.color.primary};
    font-size: 2rem;
    font-weight: 600;
    margin-bottom: 5px;
  }

  p {
    font-size: 1.4rem;
    font-weight: 300;
    white-space: pre-wrap;
    line-height: 2.5rem;
  }
`;

const Skill = ({ name, description, subSkills }) => {
  return (
    <SkillWrapper>
      <h3>{name}</h3>
      <p>{description}</p>
      {subSkills && (
        subSkills.map(skill => (
          <ProgressBar name={skill.name} value={skill.level} />
        ))
      )}
    </SkillWrapper>
  )
}
export default Skill;