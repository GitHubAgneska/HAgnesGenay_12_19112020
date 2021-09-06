import styled from 'styled-components'
import {Link} from 'react-router-dom'

const NavMain = () => {

    return (
        <div>
            <nav>
                <ul>
                    <li><Link to="/userProfile/18">Accueil</Link></li>
                    <li><Link to="/userProfile/18">Profil</Link></li>
                    <li><Link to="/userProfile/18">Réglages</Link></li>
                    <li><Link to="/userProfile/18">Communauté</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavMain