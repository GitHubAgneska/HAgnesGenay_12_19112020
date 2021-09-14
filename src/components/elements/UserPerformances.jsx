import PropTypes from "prop-types"
import { ResponsiveContainer, RadarChart, PolarGrid,PolarAngleAxis, Radar } from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    background-color: black;
    height:100%;
    width: 100%;
    max-width: 30%;
`;

const UserPerformances = ({userPerformances}) => {
    /* console.log('perf=', userPerformances) */
    return (

        <Wrapper>
            <ResponsiveContainer width="100%" height="100%">
                    <RadarChart  
                        data={userPerformances}
                        outerRadius={78} 
                        width={258} 
                        height={258} 
                    >
                        <PolarGrid stroke="white" />
                        <PolarAngleAxis
                            dataKey="kind" 
                            axisLine={false} 
                            tickLine={false}  
                            style={{ fontSize: '80%',fontWeight:'500', fill: 'rgba(255, 255, 255, 0.87)'}}
                            
                        />
                        <Radar 
                            name="" 
                            dataKey="value" 
                            fill="red" 
                            fillOpacity={0.6} 
                        />
                    </RadarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}
UserPerformances.propTypes = { userPerformances: PropTypes.array}
export default UserPerformances