import PropTypes from "prop-types"
import { Fragment } from "react";
import styled from "styled-components"

const StyledH1 = styled.h1 `
    font-size: 3.333vw ;    // 48px; // 3em - in viewport 1440
    font-weight:500;
    margin-left: 0;
    margin-top: 0;
    margin-bottom:1.389vw;  // 20px;  - in viewport 1440
`;
const StyledSpan = styled.span`color:red;`;

const Styledp = styled.p`
    font-size: 1.250vw; // 18px || 1.125em - in viewport 1440
`;

const UserIntro = ({userFirstName,introSentence}) => {

    return(
        <Fragment>
            <StyledH1 className="userFirstName">Bonjour <StyledSpan>{userFirstName}</StyledSpan></StyledH1>
            <Styledp>{introSentence}</Styledp>
        </Fragment>
    )
}
UserIntro.propTypes = {
    firstName: PropTypes.string
    /* firstName: PropTypes.string.isRequired  => ! incompatible w/ fetch load time .. */
}
export default UserIntro