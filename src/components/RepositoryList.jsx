import { useState, useEffect } from "react"
import { RepositoryItem } from "./RepositoryItem"

import '../styles/repositories.scss'


const repository = {
    name: "Unform",
    description: "Form in React",
    link: "https://github.com/unform/unform"
}

export function RepositoryList() {

    const [repositories, setRepositories] = useState([]);

    useEffect(() =>{
    
        fetch('https://api.github.com/users/jaelsonrc/repos').then( response => response.json()).then(data =>setRepositories(data));

    }, []);



    return (
        <section className="repository-list">
            <h1>Lista de Repositorios</h1>


            <ul>
                {repositories.map(repo => <RepositoryItem key={repo.name} repository={repo} />)}
            </ul>

        </section>
    )
}