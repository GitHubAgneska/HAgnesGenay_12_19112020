import PropTypes from "prop-types"
import { ResponsiveContainer,LineChart,Line, CartesianGrid,XAxis,YAxis, Tooltip,Legend} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    flex-basis:30%;
    background-color: red;
    max-height:100%;
`;

const UserSessionsLength = ({userLengthSessions}) => {

    return (
        <Wrapper>
            <ResponsiveContainer>
                <LineChart width={400} height={250} data={userLengthSessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis dataKey="day" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="sessionLength" stroke="#fff" />
                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}
UserSessionsLength.propTypes = { userLengthSessions: PropTypes.array }
export default UserSessionsLength

