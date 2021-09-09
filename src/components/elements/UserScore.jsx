import PropTypes from "prop-types"
import { Fragment } from "react";
import { PieChart, Pie, Sector,Legend, Cell, ResponsiveContainer } from 'recharts';
import styled from "styled-components"

const Wrapper = styled.section `
    /* border: 2px solid grey; */
    /*   flex-basis:30%;
    max-height:100%; */

    background-color: #FBFBFB;
    padding:5%;
    height:100%;
    width: 100%;
`;

const UserScore = ({userScore}) => {
    // console.log('score==',userScore )
    const data = [ { name: 'Score', value: userScore*100 } ];
    const COLOR = '#0088FE';
    const RADIAN = Math.PI / 180;
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
        
/*         const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN); */

        return (
            <Fragment>
                <text x={cx} y={cy} dy={10} textAnchor="middle" fill={'black'} style={{width:'50%', fontSize:'28px', fontWeight:'bold'}}>
                    { userScore*100}% 
                </text>
                <text x={cx+10} y={cy+20} dy={15} textAnchor="middle" fill={'grey'} style={{fontSize:'18px'}}>
                    de votre
                </text>
                <text x={cx+10} y={cy+45} dy={15} textAnchor="middle" fill={'grey'} style={{fontSize:'18px'}}>
                    objectif
                </text>
            </Fragment>
        );
    };

    return (
        <Wrapper>
            <ResponsiveContainer>
                    <PieChart width={800} height={400}>
                        <Pie data={data}
                            label={renderCustomizedLabel}
                            cx="50%"
                            cy="50%"
                            startAngle={220}
                            endAngle={0}
                            innerRadius={70}
                            outerRadius={80}
                            fill="white"
                            paddingAngle={5}
                            
                            dataKey="value">
                            { data.map((entry, index) => (
                                <Cell key={ `cell-${index}` } fill={COLOR} radius={[50, 50, 50, 50]}/> )) } 
                                
                        </Pie>
                        <Legend verticalAlign="top" height={40} align="right" iconType="circle" iconSize="10" />

                    </PieChart>
            </ResponsiveContainer>
        </Wrapper>
    )
} 
UserScore.propTypes = { userScore: PropTypes.number }
export default UserScore
