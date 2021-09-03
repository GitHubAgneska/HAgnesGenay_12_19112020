import PropTypes from "prop-types"
import {Fragment} from "react"
import {BarChart, ReferenceLine, XAxis, YAxis,Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"

const UserActivity = ({userActivitySessions}) => {

    return (
        <Fragment>

            <ResponsiveContainer width={700} height="80%">

                    <BarChart width={730} height={250} barSize={5} data={userActivitySessions}>

                        <XAxis />
                        <YAxis orientation="right" tickCount="3" />
{/*  <YAxis type= "category" allowDuplicatedCategory="true" dataKey="kilogram"  dataKey="calories" orientation="right" tickCount="3"  allowDecimals="false"/>*/}                        <ReferenceLine y={100} label="" stroke="grey" strokeDasharray="3 3" />
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
