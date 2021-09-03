import PropTypes from "prop-types"
import { Fragment } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
    padding: 4em;
    border: 2px solid grey;
`;
const UserIntro = ({userFirstName}) => {

    return(
        <Fragment>
            <Wrapper>
                <h1 className="userFirstName">Bonjour {userFirstName}</h1>
                <p>placeholder</p>
            </Wrapper>
        </Fragment>
    )
}

UserIntro.propTypes = {
    firstName: PropTypes.string.isRequired
}
export default UserIntro