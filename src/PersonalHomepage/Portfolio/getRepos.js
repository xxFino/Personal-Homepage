import axios from "axios";

export const getRepos = () => 
    axios.get("https://api.github.com/users/xxFino/repos")
        .then(response => response.data);