import { IconSpinner, Info, Wrapper } from "./styled";

const Loading = () => (
    <Wrapper>
        <Info>Please wait, projects are being loaded...</Info>
        <IconSpinner />
    </Wrapper>
);

export default Loading;