import PropTypes from "prop-types"
import styled from "styled-components"
import icon_calories from '../../assets/icons/icon_calories.png';
import icon_protein from '../../assets/icons/icon_protein.png';
import icon_carbs from '../../assets/icons/icon_carbs.png';
import icon_fat from '../../assets/icons/icon_fat.png';

const KeyitemWrapper = styled.div `
    height:125px;
    display: flex; justify-content:center; align-items:center;
    background-color: #FBFBFB;
`;
const Keyitem = styled.div `
    /* border: 1px solid pink; */
    height:60px;width:195px;
    display: flex;
    flex-direction: row nowrap;
    align-items: center;
    justify-content: center;
`;
const KeyItemText = styled.div``;

const KeyItemIcon = styled.img `
    height:100%;
    background-color: white;
    border-radius:5px;
    margin-right:5%;
`;

const UserKeyDataItem = (props) => {
    
    console.log('keyData IN CHILD==', props.data)
    return(
        <KeyitemWrapper>
            <Keyitem>

                { props.data.keyDataType === 'Calories' ? 
                    <KeyItemIcon src={icon_calories} alt="" />
                    : 
                    props.data.keyDataType === 'Proteines' ?
                        <KeyItemIcon src={icon_protein} alt="" />
                        :  props.data.keyDataType === 'Glucides' ?
                        <KeyItemIcon src={icon_carbs} alt="" />
                
                        :  <KeyItemIcon src={icon_fat} alt="" />
                }

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