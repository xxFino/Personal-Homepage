import { Description, EmailLink, Envelope, Informations, Name, Photo, ThisIs, Wrapper } from "./styled";
import photo from "./images/phone.jpg";
import envelope from "./images/Message.svg";
import { email } from "../../base/email";
import ThemeSwitch from "./ThemeSwitch";

const Header = () => (
    <Wrapper>
        <Photo src={photo} alt="Bartłomiej Snochowski" />
        <Informations>
            <ThisIs>THIS IS</ThisIs>
            <Name>Bartłomiej Snochowski</Name>
            <Description>👨🏻‍💻👨🏻‍💻 I'm a passionate Frontend Developer in love with React, currently looking for new job opportunities.</Description>
            <EmailLink href={`mailto:${email}`} title={email}>
                <Envelope src={envelope} alt="" />
                Hire me
            </EmailLink>
        </Informations>

        <ThemeSwitch />
    </Wrapper>
);

export default Header;
