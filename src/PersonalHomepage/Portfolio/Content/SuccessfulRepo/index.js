import { Container, Link, LinksWrapper, List, StyledTile, TileDescription, TileTitle } from "./styled";

const SuccessfulRepo = ({ repositories }) => (
    <List>
        {repositories && repositories.map(({ id, name, description, html_url, homepage }) => (
            <StyledTile key={id}>
                <Container>
                    <TileTitle>{name}</TileTitle>
                    <TileDescription>{description}</TileDescription>
                    <LinksWrapper>
                        Demo:
                        <Link href={homepage} target="_blank">
                            {homepage}
                        </Link>
                        Repo:
                        <Link href={html_url} target="_blank">
                            {html_url}
                        </Link>
                    </LinksWrapper>
                </Container>
            </StyledTile>
        ))}
    </List>
);

export default SuccessfulRepo;