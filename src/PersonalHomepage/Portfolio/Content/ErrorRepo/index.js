import { GithubLink, Info, Paragraph, Wrapper } from "./styled";
import { ReactComponent as Danger } from "./Danger.svg";
const ErrorRepo = () => (
    <Wrapper>
        <Danger />
        <Info>Ooops! Something went wrong...</Info>
        <Paragraph>Sorry, failed to load Github projects.
            You can check them directly on Github.</Paragraph>
        <GithubLink href="https://github.com/xxFino">Go to Github</GithubLink>
    </Wrapper>
);

export default ErrorRepo;