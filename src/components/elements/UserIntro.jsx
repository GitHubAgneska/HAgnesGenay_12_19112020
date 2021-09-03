import PropTypes from "prop-types"
import { Fragment } from "react"

const UserIntro = ({userFirstName}) => {

    return(
        <Fragment>
            <p className="userFirstName">Bonjour {userFirstName}</p>
        </Fragment>
    )
}

UserIntro.propTypes = {
    firstName: PropTypes.string.isRequired
}
export default UserIntro