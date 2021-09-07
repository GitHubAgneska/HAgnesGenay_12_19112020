import { Link } from 'react-router-dom';
import logo_main from '../../assets/logos/logo_main.png'
import NavMain from './Nav_main'
import styled from 'styled-components'

const Wrapper = styled.div `
    width: 100%;
    height:90px; // 6.250vw; // - in viewport 1440
    background-color:black;
    position: fixed; z-index:3;
`;
const StyledHeader = styled.header `
    display: flex; flex-flow: row nowrap;
    align-items: center;
    margin: 15px auto 15px 25px;  // - in viewport 1440
    // margin: 1.042vw auto 1.042vw 1.736vw;
`;

const MainLogo = styled.img`
    height:60px;  // - 4.167vw; // in viewport 1440
    width:180px;  // 12.500vw; // - in viewport 1440
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