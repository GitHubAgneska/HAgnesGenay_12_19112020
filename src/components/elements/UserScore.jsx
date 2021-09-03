import PropTypes from "prop-types"
import { Fragment } from "react"
import { PieChart } from "recharts"

const UserScore = (userScore) => { 
    return (
        <Fragment>
            <PieChart />
        </Fragment>
    )
}

UserScore.propTypes = {
    userScore: PropTypes.number.isRequired
}
export default UserScore