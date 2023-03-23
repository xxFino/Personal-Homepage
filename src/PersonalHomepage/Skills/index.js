import { List, ListItems, SkillsPoints, SkillsTitle, Wrapper } from "./styled";

const Skills = ({ title, skills }) => (
    <Wrapper>
        <SkillsTitle>{title}</SkillsTitle>
        <List>
            {skills.map(skill => (
                <ListItems key={skill}>
                    <SkillsPoints />
                    {skill}
                </ListItems>
            ))}
        </List>
    </Wrapper>
);

export default Skills;