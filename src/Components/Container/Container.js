import {useState } from "react"
import CharacterList from "../CharacterList/CharacterList"


const Container = () =>{
    const [input, setInput] = useState('')
    const [characters, setCharacteres] = useState ([])

        const buscarPersonaje = () =>{
            fetch(`http://gateway.marvel.com/v1/public/characters?ts=1&name=${input}&apikey=44599fcde6fcd38fcbc61c5e1884b1f2&hash=98dafe2528fce268fe5a9a48bb1febb7`).then(res => res.json().then(respuesta => {
                setCharacteres(respuesta.data.results)}))
        .catch(error => console.log(error))
    }
    

    return(
        <div>
            <h1>Marvel API</h1>
            <input value={input} onChange={(e)=> setInput(e.target.value)}/>
            <button onClick={buscarPersonaje}>Buscar</button>
            {characters.length === 0 ? <h1>NO EXISTE PERSONAJE</h1> : null}
                <CharacterList personajes ={characters}/>
        </div>
    )
}

export default Container