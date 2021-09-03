import PropTypes from "prop-types"
import {Fragment} from "react"
import {BarChart, CartesianGrid, ReferenceLine, XAxis, Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"

const UserActivity = ({userActivitySessions}) => {

    return (
        <Fragment>

            <ResponsiveContainer width={700} height="80%">

                    <BarChart width={730} height={250} barSize={5} data={userActivitySessions}>

                        <XAxis dataKey="day"/>
                        <ReferenceLine y={100} label="" stroke="grey" strokeDasharray="3 3" />
                        <ReferenceLine y={250} stroke="grey" strokeDasharray="3 3" />
                        <Legend/>
                        <Bar dataKey="kilogram" fill="#8884d8"/>
                        <Bar dataKey="calories" fill="#82ca9d"/>

                    </BarChart>

            </ResponsiveContainer>


        </Fragment>
    )
} 
UserActivity.propTypes = {
    userActivitySessions: PropTypes.array.isRequired
}

export default UserActivity
