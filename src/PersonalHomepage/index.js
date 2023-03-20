import Header from "./Header";
import Skills from "./Skills";
import { Container } from "./styled";
import { currentSkills, nextSkills } from "./Skills/skills"
import Footer from "./Footer";
import Portolio from "./Portfolio";

function PersonalHomepage() {
    return (
        <Container>
            <Header />
            <Skills
                title="My skillset includes 🛠️"
                skills={currentSkills}
            />
            <Skills
                title="What I want to learn next 🚀"
                skills={nextSkills}
            />
            <Portolio />
            <Footer />
        </Container>
    );
};

export default PersonalHomepage;