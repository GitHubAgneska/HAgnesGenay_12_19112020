import { Link } from 'react-router-dom'
import icon_yoga from '../../assets/icons/icon_yoga.png'
import icon_swim from '../../assets/icons/icon_swim.png'
import icon_bike from '../../assets/icons/icon_bike.png'
import icon_weight from '../../assets/icons/icon_weight.png'

import styled from "styled-components"

const StyledNavWrapper = styled.div `
    width: 120px; height:100vh;
    background-color:black; 
    display: flex; flex-flow: column nowrap; align-items: center;
    justify-content: space-between;
`;

const StyledNavSide = styled.nav `
    padding-top:355px;
`;

const StyledUl = styled.ul `
    display: flex; flex-flow: column nowrap;
    align-items: center;
`;

const SideIcon = styled.img`
    height: 65px;
    width: 65px;
    border-radius: 5px;
    margin: 10px 0px;
    &:hover { box-shadow: 0px 0px 15px #fff; }
`;

const StyledP = styled.p`
    font-size:12px; font-weight:400;
    transform: rotate(-90deg);
    width:140px;margin-top:165px;
    color:white;
`;


const NavSide = () => {
    return(
        <StyledNavWrapper>
            <StyledNavSide>
                <StyledUl>
                    <li><Link to="/"><SideIcon src={icon_yoga} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><SideIcon src={icon_swim} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><SideIcon src={icon_bike} alt="yoga icon" /></Link></li>
                    <li><Link to="/"><SideIcon src={icon_weight} alt="yoga icon" /></Link></li>
                </StyledUl>
            </StyledNavSide>
            <StyledP>Copyright SportSee 2020</StyledP>
        </StyledNavWrapper>
    )
}
export default NavSide