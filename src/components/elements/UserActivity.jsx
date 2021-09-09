import PropTypes from "prop-types"
import {BarChart, ReferenceLine, XAxis, YAxis,Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    height:100%;
    width: 100%
    background-color:#74798C;
`;

const CustomTooltipClass = {
    width:"50px",
    height:"70px",
    backgroundColor:"red",
    color:"white", padding:"10%",
    fontSize:"10px", fontWeight:"bold"
} 

const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
        return (
            <div style={CustomTooltipClass}>
                <p>{`${payload[0].value}`}Kg</p>
                <p>{`${payload[1].value}`}kCal</p>
            </div>
        );
    }
    return null;
};
const CustomizedCursor = ({active}) => {
    if (active) {
        return ( <div style={{width:"50px",height:"100px",opacity:"0.5"}}></div> );
    }
    return null;
}

let getDay = (x) => { return (x.day.substr(x.day.length-1) > 0? x.day.substring(x.day.length-1):x.day.substring(x.day.length-2)); }
let getAverageWeight = (x) => { let overAll = 0; let days = 0;  x.forEach(w => { overAll+=w; days+=1;return overAll/days; }) }

const UserActivity = ({userActivitySessions}) => {
        
    return (
        <Wrapper>
            <ResponsiveContainer>
                    <BarChart width={730} height={100} barSize={8} data={userActivitySessions}>
                        
                        <XAxis dataKey={getDay} tickLine={false} />
                        
                        <YAxis orientation="right" tickCount="4" allowDecimals={false}  tickLine={false} dataKey="kilogram"  domain={['dataMin +50', 'dataMax+3']}/>
                        <ReferenceLine y="70" stroke="grey" strokeDasharray="3 3" />
                        <Legend verticalAlign="top" height={36}/>
                        <Bar dataKey="kilogram" fill="red" radius={[50, 50, 0, 0]} />
                        <Bar dataKey="calories" fill="black" radius={[50, 50, 0, 0]} maxBarSize="60"/>
                        <Tooltip content={<CustomTooltip />} />
                        {/* <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />}/> */}
                    </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
} 
UserActivity.propTypes = { userActivitySessions: PropTypes.array.isRequired }
export default UserActivity
