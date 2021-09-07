
import icon_yoga from '../../assets/icons/icon_yoga.png'
import icon_swim from '../../assets/icons/icon_swim.png'
import icon_bike from '../../assets/icons/icon_bike.png'
import icon_weight from '../../assets/icons/icon_weight.png'
import { Link } from 'react-router-dom'

import styled from "styled-components"

const Wrapper = styled.section `
    width: 120px; height:100vh;
    background-color:black;
    position: fixed;
`;

const StyledUl = styled.ul `
    display: flex; flex-flow: column nowrap;
    align-items: center;
`;

const SideIcon = styled.img`
    height: 65px;
    width: 65px;
    border-radius: 5px;
`


const NavSide = () => {
    return(
        <Wrapper>
            <nav>
                <StyledUl>
                    <li><Link to="/"><SideIcon src={icon_yoga} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><SideIcon src={icon_swim} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><SideIcon src={icon_bike} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><SideIcon src={icon_weight} alt="yoga icon" /></Link></li>
                </StyledUl>
            </nav>
        </Wrapper>
    )
}

export default NavSide