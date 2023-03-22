import { Description, EmailText, IconsContainter, LetsTalk, Wrapper, Link } from "./styled";
import { email } from "../../base/email";
import { ReactComponent as Github } from "./images/Github.svg";
import { ReactComponent as Facebook } from "./images/Facebook.svg";
import { ReactComponent as Linkedin } from "./images/Linkedin.svg";
import { ReactComponent as Instagram } from "./images/Instagram.svg";

const Footer = () => (
    <Wrapper>
        <LetsTalk>LET'S TALK!</LetsTalk>
        <EmailText href={`mailto:${email}`} title={email}>
            bartlomiej.snochowski@gmail.com
        </EmailText>
        <Description>
        Hello! I am open to new cooperation and learning new things. If you want to contact me, go ahead!
        </Description>
        <IconsContainter>
            <Link href="https://github.com/xxFino" target="_blank" title="Github">
                <Github />
            </Link>
            <Link href="https://www.facebook.com/bartek.snochowski" target="_blank" title="Facebook">
                <Facebook />
            </Link>
            <Link href="https://www.linkedin.com/in/bartłomiej-snochowski-4bb28526b/" target="_blank" title="Linkedin">
                <Linkedin />
            </Link>
            <Link href="https://www.instagram.com/xzbartekx" target="_blank" title="Instagram">
                <Instagram />
            </Link>
        </IconsContainter>
    </Wrapper>
);

export default Footer;
