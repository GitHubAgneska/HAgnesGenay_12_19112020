import PropTypes from "prop-types"
import {Fragment} from "react"
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';

import styled from "styled-components"

const Wrapper = styled.section `
    padding: 4em;
    border: 2px solid grey;
`;


const UserScore = ({userScore}) => {
    // console.log('score==',userScore )


    const data = [ { name: 'Score', value: userScore*100 } ];
    const COLOR = '#0088FE';
    const RADIAN = Math.PI / 180;
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="grey" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
            { userScore*100}%<span>de votre objectif</span>
           {/*  {`${(percent * 100).toFixed(0)}%`}<span>de votre objectif</span> */}
            </text>
        );
    };

    return (
        
        <Fragment>
            <Wrapper style={{ width: '100%', height: 300 }}>
                <ResponsiveContainer>
                        <PieChart width={800} height={400} >
                            <Pie data={data}
                                label={renderCustomizedLabel}
                                cx="50%"
                                cy="50%"
                                startAngle={220}
                                endAngle={0}
                                innerRadius={70}
                                outerRadius={80}
                                fill="#8884d8"
                                paddingAngle={5}
                                dataKey="value">
                                { data.map((entry, index) => (
                                    <Cell key={ `cell-${index}` } fill={COLOR}/> )) } 
                                    
                            </Pie>
                        </PieChart>
                </ResponsiveContainer>
            </Wrapper>
        </Fragment>
    )
} 
UserScore.propTypes = {
    userScore: PropTypes.number
}

export default UserScore
