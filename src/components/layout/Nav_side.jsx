
import icon_yoga from '../../assets/icons/icon_yoga.png'
import icon_swim from '../../assets/icons/icon_swim.png'
import icon_bike from '../../assets/icons/icon_bike.png'
import icon_weight from '../../assets/icons/icon_weight.png'
import { Link } from 'react-router-dom'

const NavSide = () => {
    return(
        <div>
            <nav>
                <ul>
                    <li><Link to="/"><img src={icon_yoga} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><img src={icon_swim} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><img src={icon_bike} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><img src={icon_weight} alt="yoga icon" /></Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default NavSide