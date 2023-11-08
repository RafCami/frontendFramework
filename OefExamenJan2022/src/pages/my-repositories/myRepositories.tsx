import { FunctionComponent } from 'react'

interface myRepositoriesProps {
    
}

const myRepositories: FunctionComponent<myRepositoriesProps> = () => {
    return (
        <>
            <div className="tabContainer">
                <div>
                    {/* Zorg dat de active klasse dynamisch aangepast wordt als de gebruiker een ander tab selecteert.*/}
                    <h1 className={"active"}>My projects</h1>
                </div>
                <div>
                    <h1>Public projects</h1>
                </div>
            </div>

            <div className="projects-repositories">
                <div>
                    <h3>Projects</h3>

                    {/* Plaats de projecten die voldoen aan de criteria (gebruiker, publiek, privé) hier. */}
                </div>
                <div>
                    <h3>Repositories</h3>

                    {/* Plaats de repositories in het geselecteerde project hier. */}
                </div>
            </div>
        </>
    )
}

export default myRepositories
