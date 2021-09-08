import PropTypes from "prop-types"
import UserKeyDataItem from "./UserKeyDataItem"
import styled from "styled-components"

const Wrapper = styled.section `
    /* border:2px solid green; */
    width:100%;height:100%;
    display:flex;flex-flow:column nowrap;
    justify-content: space-between;
`;

const UserKeyData = (props) => {
    // console.log('keyData INPARENT', props) // object of objects
    return(
        <Wrapper>
            {Object.keys(props).map(i => (
                <UserKeyDataItem data={props[i]} key= {i} />
            ))}
        </Wrapper>
    )
}
UserKeyData.propTypes = { userKeyData: PropTypes.array }
export default UserKeyData