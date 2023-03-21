import ErrorRepo from "./ErrorRepo";
import LoadingRepo from "./LoadingRepo";
import SuccessfulRepo from "./SuccessfulRepo";

const Content = ({ state, repositories }) => {
    switch (state) {
        case "initial":
            return null;
        case "loading":
            return <LoadingRepo />
        case "error":
            return <ErrorRepo />
        case "successful":
            return <SuccessfulRepo repositories={repositories} />        
        default:
            throw new Error(`incorrect state: ${state}`)
    };
};

export default Content;