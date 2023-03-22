import { useDispatch, useSelector } from "react-redux";
import { IconWrapper, Text, ThemeButton, Toogle, Wrapper } from "./styled";
import { selectIsDarkTheme, toggleTheme } from "./themeSwitchSlice";
import SunLight from "./images/SunLight.svg";
import SunDark from "./images/SunDark.svg";

const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
        <Wrapper>
            <ThemeButton onClick={() => dispatch(toggleTheme())}>
                <Text>DARK MODE {isDarkTheme ? "ON" : "OFF"}</Text>
                <IconWrapper>
                    <Toogle
                        src={isDarkTheme ? SunDark : SunLight}
                        moveRight={isDarkTheme}>
                    </Toogle>
                </IconWrapper>
            </ThemeButton>
        </Wrapper>
    )
};

export default ThemeSwitch;