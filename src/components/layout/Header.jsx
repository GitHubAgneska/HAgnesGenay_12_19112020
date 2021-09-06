import logo_main from '../../assets/logos/logo_main.png'
import NavMain from '../elements/Nav_main'
import styled from 'styled-components'

const Header = () => {

    return(

        <div>
            <header>
                <div>
                    <img src={logo_main} alt="main logo" />
                </div>
                <NavMain />
            </header>
        </div>
    )
}

export default Header