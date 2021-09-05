import PropTypes from "prop-types"


const UserKeyDataItem = (props) => {
    
    console.log('keyData IN CHILD==', props.data)
    return(
        <div>
            <img src={props.data.keyDataIcon} alt="" />
           {/*  <img src={require(`${props.data.keyDataIcon}`)} alt="" /> */}
            <h1>{props.data.keyDataValue}{props.data.keyDataUnit}</h1>
            <h2>{props.data.keyDataType}</h2>
        </div>
    )
}

UserKeyDataItem.propTypes = {
    keyDataType: PropTypes.string,
    keyDataCount: PropTypes.number,
    keyDataIcon: PropTypes.string
}   
export default UserKeyDataItem