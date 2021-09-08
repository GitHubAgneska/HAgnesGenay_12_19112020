import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledNavWrapper = styled.div `
    width: 70%;
    margin: 0% 5% 0% 10%;
    box-shadow: 0px 0px 10px #0000008f;
`;
const StyledNav = styled.nav ` 
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;

`;
const StyledLink = styled(Link) `
    color:white;
    font-size:1.667vw  // 24px in viewport 1440
    font-weight:400;
    padding: 0% 4%;
    &:active, &:hover { text-decoration: underline;}
`;


const NavMain = () => {

    return (
        <StyledNavWrapper>
            <StyledNav>
                <StyledLink to="/userProfile/18">Accueil</StyledLink>
                <StyledLink to="/userProfile/18">Profil</StyledLink>
                <StyledLink to="/userProfile/18">Réglages</StyledLink>
                <StyledLink to="/userProfile/18">Communauté</StyledLink>
            </StyledNav>
        </StyledNavWrapper>
    )
}
export default NavMain