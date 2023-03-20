import { useDispatch, useSelector } from "react-redux";
import { Text, ThemeButton } from "./styled";
import {  selectIsDarkTheme, toggleTheme } from "./themeSwitchSlice";

const ThemeSwitch = () => {
    const isDarkTheme = useSelector(selectIsDarkTheme);
    const dispatch = useDispatch();

    return (
       <ThemeButton onClick={() => dispatch(toggleTheme())}>
            <Text>DARK MODE {isDarkTheme ? "ON" : "OFF"}</Text>
       </ThemeButton>
    )
};

export default ThemeSwitch;