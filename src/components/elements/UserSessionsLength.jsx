import PropTypes from "prop-types"
import { Fragment } from "react"
import { LineChart } from "recharts"

const UserSessionsLength = (userLengthSessions) => {

    return (
        <Fragment>
            <LineChart />
        </Fragment>
    )
}

UserSessionsLength.propTypes = {
    userLengthSessions: PropTypes.array.isRequired
}

export default UserSessionsLength

