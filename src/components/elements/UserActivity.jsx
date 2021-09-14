import PropTypes from "prop-types"
import {BarChart, CartesianGrid, ReferenceLine, XAxis, YAxis,Tooltip, Legend, Bar, ResponsiveContainer} from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    padding:5%;
    height:100%;
    width: 100%;
`;

const Title = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    h2 {
        font-size: 1rem;
        font-weight: 500;
        color: grey;
    }
`;

const StyledLegend = styled.div`
    display: flex;
    column-gap: 2rem;
`

const Unit = styled.div`
    display: flex;
    align-items: center;
    p {
        margin-left: 1rem;
        font-size: 1rem;
        color: grey;
    }
`

const Color = styled.div`
    background-color: ${(props) => props.color};
    height: .8rem;
    width: .8rem;
    border-radius: 10rem;
`
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
        return ( <div style={{width:"50px",height:"100px", stroke:'grey', backgroundColor:"grey"}}></div> );
    }
    return null;
}

const renderLegend = () => {
        return (
            <ul style={{width: '100%',display: 'flex', flexFlow:'row nowrap', justifyContent:'flex-end', listStyle:'circle'}}>
                <li>Poids</li>
                <li style={{margin:'0 5%' , listStyle:'circle'}}>Calories brûlées</li>
            </ul>
    );
}

let getDay = (x) => { return (x.day.substr(x.day.length-1) > 0? x.day.substring(x.day.length-1):x.day.substring(x.day.length-2)); }
let getAverageWeight = (x) => { let overAll = 0; let days = 0;  x.forEach(w => { overAll+=w; days+=1;return overAll/days; }) }

const UserActivity = ({userActivitySessions}) => {
        
    return (
        <Wrapper>

                <Title>
                    <h2>Activité quotidienne</h2>
                    <StyledLegend>
                        <Unit>
                            <Color color="grey"/>
                            <p>Poids (kg)</p>
                        </Unit>
                        <Unit>
                            <Color color="red"/>
                            <p>Calories brûlées (kCal)</p>
                        </Unit>
                    </StyledLegend>
                </Title>
                
                <ResponsiveContainer>
                <BarChart barSize={8} data={userActivitySessions} >

                    <CartesianGrid
                        vertical={false}
                        strokeDasharray="4 2"
                    />
                    <XAxis 
                        dataKey={getDay}
                        tickLine={false}
                        dy = {10} 
                    />
                    
                    <YAxis 
                        dataKey="kilogram"  
                        domain={['dataMin-1', 'dataMax+1']}
                        orientation="right" 
                        tickLine={false}
                        tickCount="5"
                        allowDecimals={false}  
                        dx={20}
                    />
                    <YAxis
                        yAxisId = "calories"
                        dataKey = "calories"
                        allowDecimals={false}  
                        hide = {true}
                        tickLine={false}
                        domain = {[0, 'dataMax-25']}
                    />

                    {/* <ReferenceLine y="70" stroke="grey" strokeDasharray="3 3" /> */}
                    {/* <Legend content={renderLegend} verticalAlign="top" height={40} align="right" iconType="circle" iconSize="10"/> */}
                    {/*  <Legend verticalAlign="top" height={40} align="right" iconType="circle" iconSize="10" /> */}
                    <Bar dataKey="kilogram" fill="black" radius={[50, 50, 0, 0]} />
                    <Bar dataKey="calories"  yAxisId="calories" fill="red" radius={[50, 50, 0, 0]}  />
                    {/* <Tooltip content={<CustomTooltip />} cursor={<CustomizedCursor />}/> */}
                    <Tooltip content={<CustomTooltip />} cursor={{ opacity:'0.5', zIndex:'-9' }} />
                </BarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
} 
UserActivity.propTypes = { userActivitySessions: PropTypes.array.isRequired }
export default UserActivity