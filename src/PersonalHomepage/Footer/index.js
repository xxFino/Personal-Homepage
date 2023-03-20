import { Description, EmailText, IconsContainter, LetsTalk, Wrapper, Icon, Link } from "./styled";
import { email } from "../../base/email";
import { ReactComponent as Github } from "./images/Github.svg";
import facebook from "./images/Facebook.svg";
import linkedin from "./images/LinkedIN.svg";
import instagram from "./images/Instagram.svg";

const Footer = () => (
    <Wrapper>
        <LetsTalk>LET'S TALK!</LetsTalk>
        <EmailText href={`mailto:${email}`} title={email}>
            bartlomiej.snochowski@gmail.com
        </EmailText>
        <Description>
            I'm always open to new projects whenever I have the time. If you have a website, dashboard or mobile app in mind and need some help to make your ideas come to life, feel free to conatct me
        </Description>
        <IconsContainter>
            <Link href="https://github.com/xxFino" target="_blank" title="Github">
                <Github />
            </Link>
            <Icon src={facebook} alt="" />
            <Icon src={linkedin} alt="" />
            <Icon src={instagram} alt="" />
        </IconsContainter>
    </Wrapper>
);

export default Footer;
