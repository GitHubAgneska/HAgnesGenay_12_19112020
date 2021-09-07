import PropTypes from "prop-types"
import { Fragment } from "react"
import { ResponsiveContainer,LineChart,Line, CartesianGrid,XAxis,YAxis, Tooltip,Legend} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    padding: 4em;
    background-color: red;

`;
const UserSessionsLength = ({userLengthSessions}) => {

    return (
        <Fragment>
            <Wrapper style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer width="100%" height="100%">

                    <LineChart width={400} height={250} data={userLengthSessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <XAxis dataKey="day" />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
                    </LineChart>

                </ResponsiveContainer>
            </Wrapper>
        </Fragment>
    )
}

UserSessionsLength.propTypes = {
    userLengthSessions: PropTypes.array
}

export default UserSessionsLength

