import PropTypes from "prop-types"
import { ResponsiveContainer,RadarChart, PolarGrid,PolarAngleAxis,PolarRadiusAxis,Radar } from "recharts"
import styled from "styled-components"

const Wrapper = styled.section`
    background-color: black;
    flex-basis:30%;
    max-height:100%;
`;

/* style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }} */
{/* <Label angle={270} position='insideLeft' offset={10}
    value=" TA / Pouls"
    style={{ textAnchor: 'middle', fontSize: '80%', fill: 'rgba(0, 0, 0, 0.87)' }}></Label> */}

const UserPerformances = ({userPerformances}) => {
    /* console.log('perf=', userPerformances) */
    return (

        <Wrapper>
            <ResponsiveContainer width="100%" height="100%">
                    <RadarChart outerRadius={90} width={730} height={250} data={userPerformances}>
                        <PolarGrid  stroke="#ffffff"  />
                        <PolarAngleAxis dataKey="kind" style={{ fontSize: '80%', fill: 'rgba(255, 255, 255, 0.87)'}} />
                        <Radar name="" dataKey="value" fill="red" fillOpacity={0.6} />
                    </RadarChart>
            </ResponsiveContainer>
        </Wrapper>
    )
}
UserPerformances.propTypes = { userPerformances: PropTypes.array}
export default UserPerformances