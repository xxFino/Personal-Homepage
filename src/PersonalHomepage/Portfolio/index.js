import { Header, Icon, LastProjects, Wrapper, Link } from "./styled";
import github from "./github.svg";
import { SubHeader } from "../SubHeader/styled";
import Content from "./Content";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchRepositories, selectRepositories, selectRepositoriesStatus } from "./personalHomepageSlice";

const Portolio = () => {
    const dispatch = useDispatch();

    const repositoriesStatus = useSelector(selectRepositoriesStatus);
    const repositories = useSelector(selectRepositories);

    useEffect(() => {
        dispatch(fetchRepositories());
    }, [dispatch]);

    return (
        <Wrapper>
            <Header>
                <Link href="https://github.com/xxFino" target="_blank">
                    <Icon src={github} alt="" />
                </Link>
                <SubHeader>Portolio</SubHeader>
                <LastProjects>My recent projects</LastProjects>
            </Header>
            <Content
                state={repositoriesStatus}
                repositories={repositories}
            />
        </Wrapper>
    );
};

export default Portolio;