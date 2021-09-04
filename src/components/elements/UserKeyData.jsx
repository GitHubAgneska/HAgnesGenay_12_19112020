import PropTypes from "prop-types"
import { Fragment } from "react"

const UserKeyData = (userKeyData) => {

    console.log('keyDAta', userKeyData)

    return(
        <Fragment>
            <ul>
               {/*  {Object.keys(userKeyData)} */}
            </ul>

        </Fragment>
    )
}

UserKeyData.propTypes = {
    userKeyData: PropTypes.array

}

export default UserKeyData