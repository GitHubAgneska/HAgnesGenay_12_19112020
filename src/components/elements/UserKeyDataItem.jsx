import PropTypes from "prop-types"
import styled from "styled-components"

const KeyitemWrapper = styled.div `
    width: 250px;height:125px;
    display: flex;justify-content:center;align-items:center;
    background-color: lightgrey;
`;
const Keyitem = styled.div `
    border: 1px solid pink;
    height:60px;width:195px;
    display: flex; flex-direction: row nowrap;
`;
const KeyItemText = styled.div``;

const KeyItemIcon = styled.img `
    height:100%;
    background-color: white;
    border-radius:5px;
    margin-right:5%;
`;


const UserKeyDataItem = (props) => {
    
    // console.log('keyData IN CHILD==', props.data)
    return(
        <KeyitemWrapper>
            <Keyitem>
                <KeyItemIcon src={props.data.keyDataIcon} alt="" />
                {/*  <img src={require(`${props.data.keyDataIcon}`)} alt="" /> */}
                <KeyItemText>
                    <h1 style={{margin:0}}>{props.data.keyDataValue}{props.data.keyDataUnit}</h1>
                    <h2 style={{margin:0, fontSize:"12px" }}>{props.data.keyDataType}</h2>
                </KeyItemText>
            </Keyitem>
        </KeyitemWrapper>
    )
}

UserKeyDataItem.propTypes = {
    keyDataType: PropTypes.string,
    keyDataCount: PropTypes.number,
    keyDataIcon: PropTypes.string
}   
export default UserKeyDataItem