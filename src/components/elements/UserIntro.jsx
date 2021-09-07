import PropTypes from "prop-types"
import styled from "styled-components"

const Wrapper = styled.section`
    height:13.889vw; // 200px
    border: 2px solid grey;

`;
const StyledH1 = styled.h1 `
    @use 'sass:math';-webkit-line-clamp: calc(floor(100% / 20));
    font-size: 3.333vw ;    // 48px; // 3em - in viewport 1440
    font-weight:500;
    margin-left: 7.639vw;   // 110px; - in viewport 1440
    margin-bottom:1.389vw;  // 20px;  - in viewport 1440
`;
const StyledSpan = styled.span`
    color:red;
`;

const Styledp = styled.p`
    margin-left:  7.639vw; // 110px; - in viewport 1440
    font-size: 1.250vw;    // 18px || 1.125em - in viewport 1440
`;

const UserIntro = ({userFirstName,introSentence}) => {

    return(
        <Wrapper>
            <StyledH1 className="userFirstName">Bonjour <StyledSpan>{userFirstName}</StyledSpan></StyledH1>
            <Styledp>{introSentence}</Styledp>
        </Wrapper>
    )
}

UserIntro.propTypes = {
    firstName: PropTypes.string
    /* firstName: PropTypes.string.isRequired  => ! incompatible w/ fetch load time .. */
}
export default UserIntro