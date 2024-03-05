import { Link } from "react-router-dom"

const NavBar = () =>{
    return(
        <div>
            <Link to= '/'>Personajes</Link>
            <Link to = '/comics'>Comic</Link>
        </div>
    )
}

export default NavBar