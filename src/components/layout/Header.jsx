import { Link } from 'react-router-dom';
import logo_main from '../../assets/logos/logo_main.png'
import NavMain from './Nav_main'
import styled from 'styled-components'

const Wrapper = styled.div `
    width: 100%;height:90px;
    background-color:black;
    position: fixed; z-index:3;
`;
const StyledHeader = styled.header `
    display: flex; flex-flow: row nowrap;
    align-items: center;
    margin: 15px auto 15px 25px;
`;

const MainLogo = styled.img`
    height: 60px;
    width: 180px;
`

const Header = () => {

    return(

        <Wrapper>
            <StyledHeader>
                <div>
                    <Link to="/" ><MainLogo src={logo_main} alt="main logo" /></Link>
                </div>
                <NavMain />
            </StyledHeader>
        </Wrapper>
    )
}

export default Header