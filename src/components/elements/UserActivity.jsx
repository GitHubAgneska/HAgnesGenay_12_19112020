import PropTypes from "prop-types"
import { Fragment } from "react"
import { BarChart } from "recharts"

const UserActivity = ({userActivitySessions}) => {

    return (
        <Fragment>
            <BarChart />
        </Fragment>
    )
}

UserActivity.propTypes = {
    userActivitySessions: PropTypes.array.isRequired
}

export default UserActivity