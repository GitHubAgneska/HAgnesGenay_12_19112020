import PropTypes from "prop-types"
import { Fragment } from "react"
import styled from "styled-components"

const Wrapper = styled.section`
    height:30%;
    padding: 4em;
    border: 2px solid grey;
`;
const UserIntro = ({userFirstName,introSentence}) => {

    return(
        <Fragment>
            <Wrapper>
                <h1 className="userFirstName">Bonjour {userFirstName}</h1>
                <p>{introSentence}</p>
            </Wrapper>
        </Fragment>
    )
}

UserIntro.propTypes = {
    firstName: PropTypes.string
    /* firstName: PropTypes.string.isRequired  => ! incompatible w/ fetch load time .. */
}
export default UserIntro