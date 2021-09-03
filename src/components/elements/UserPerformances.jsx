import PropTypes from "prop-types"
import { Fragment } from "react"
import { RadarChart } from "recharts"

const UserPerformances = (userPerformances) => {

    return (
        <Fragment>
            <RadarChart />
        </Fragment>
    )
}

UserPerformances.propTypes = {
    userPerformances: PropTypes.array.isRequired
}
export default UserPerformances