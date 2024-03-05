import { Link } from "react-router-dom"

const Character = ({personaje}) =>{
    return(
        <li>
            <Link to={`/comics/${personaje.id}`}>{personaje.name}</Link>
            <img alt={personaje.name} src={personaje.thumbnail.path+'.jpg'}/>
        </li>
    )
}

export default Character