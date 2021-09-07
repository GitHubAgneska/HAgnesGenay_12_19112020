import styled from 'styled-components'
import {Link} from 'react-router-dom'

const StyledNavWrapper = styled.div `
    width: 70%;
    margin-left: 145px;
`;
const StyledNav = styled.nav ` 
    display: flex; flex-flow: row nowrap;
    justify-content: space-between;

`;
const StyledLink = styled(Link) `
    color:white;
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