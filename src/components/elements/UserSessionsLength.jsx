import PropTypes from "prop-types"
import { ResponsiveContainer,LineChart,Line, ReferenceArea,CartesianGrid,XAxis,YAxis, Tooltip,Legend} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    flex-basis:30%;
    background-color: red;
    max-height:100%;
`;
const CustomTooltipClass = {
    width:"50px",
    height:"50px",
    backgroundColor:"white",
    color:"grey", padding:"10%",
    fontSize:"10px", fontWeight:"bold"
} 

const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
        return (
            <div style={CustomTooltipClass}>
                <p key={Math.random()}>{payload.sessionLength}mn</p> 
                {/*  { payload.map( (item) => ( <p key={Math.random()}>{item.sessionLength}mn</p> ))} */}
            </div>
        );
    }
    return null;
};

const renderLegend = () => {
    return (
        <p style={{color:'white', opacity:'0.7', width:'60%'}}>Durée moyenne des sessions</p>
);
}

const UserSessionsLength = ({userLengthSessions}) => {
    console.log(userLengthSessions);
    return (
        <Wrapper>
            <ResponsiveContainer>
                <LineChart width={400} height={250} data={userLengthSessions} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <XAxis axisLine={false} dataKey="day" tickLine={false} style={{fill:'white', opacity:'0.7'}} />
                    <Tooltip content={<CustomTooltip />} cursor={{ stroke: 'grey', strokeWidth: 5 }} />
                    <Legend  verticalAlign="top" content={renderLegend} />
                    <Line dot={false} type="monotone" dataKey="sessionLength" stroke="#fff" />
{/*                     <ReferenceArea x1={150} x2={180} y1={200} y2={300} stroke="black" strokeOpacity={0.3} />
 */}                </LineChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}
UserSessionsLength.propTypes = { userLengthSessions: PropTypes.array }
export default UserSessionsLength

