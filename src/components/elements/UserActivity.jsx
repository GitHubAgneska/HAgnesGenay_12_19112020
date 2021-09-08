import PropTypes from "prop-types"
import {BarChart, ReferenceLine, XAxis, YAxis,Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    height:100%;
    width: 100%
    background-color:#74798C;
`;

const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
        return (
            <div style={{width:"50px",height:"100px", backgroundColor:"red", color:"white", padding:"10%"}}>
                <p>{`${payload[0].value}`}Kg</p>
                <p>{`${payload[1].value}`}kCal</p>
            </div>
        );
    }
    return null;
};

const UserActivity = ({userActivitySessions}) => {
    console.log(userActivitySessions);
    return (
        <Wrapper>
            <ResponsiveContainer>
                    <BarChart width={730} height={250} barSize={5} data={userActivitySessions}>
                        
                        <XAxis />
                        <YAxis orientation="right" tickCount="3" />
                        {/*  <YAxis type= "category" allowDuplicatedCategory="true" dataKey="kilogram"  dataKey="calories" orientation="right" tickCount="3"  allowDecimals="false"/>*/}                        <ReferenceLine y={100} label="" stroke="grey" strokeDasharray="3 3" />
                        <ReferenceLine y={250} stroke="grey" strokeDasharray="3 3" />
                        <Legend/>
                        <Bar dataKey="kilogram" fill="red"/>
                        <Bar dataKey="calories" fill="black"/>
                        <Tooltip content={<CustomTooltip />} cursor={false}/>
                    </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
} 
UserActivity.propTypes = { userActivitySessions: PropTypes.array.isRequired }
export default UserActivity
