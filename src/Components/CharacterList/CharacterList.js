import Character from "../Character/Character"

const CharacterList = ({personajes}) =>{
    return(
        <ul>
            {personajes.map(personaje => 
                <div key={personaje.id}>
                    <Character personaje={personaje}/>
                </div>)
            }
        </ul> )
}

export default CharacterList