import PropTypes from "prop-types"
import { Fragment } from "react";
import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from 'recharts';
import styled from "styled-components"

const Wrapper = styled.section `
    /* border: 2px solid grey; */
    /*   flex-basis:30%;
    max-height:100%; */

    background-color: #FBFBFB;
    padding:5%;
    height:100%;
    width: 100%;
    max-width: 30%;
`;

const UserScore = ({userScore}) => {
    // console.log('score==',userScore )
    const data = [ { name: 'Score', value: userScore*100 } ];
    const RADIAN = Math.PI / 180;
    
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
     /* const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN); */

        return (
            <Fragment>
                <text x={cx} y={cy} dy={0} textAnchor="middle" fill={'black'} style={{width:'50%', fontSize:'28px', fontWeight:'bold'}}>
                    { userScore*100}% 
                </text>
                <text x={cx} y={cy+15} dy={15} textAnchor="middle" fill={'grey'} style={{fontSize:'18px'}}>
                    de votre
                </text>
                <text x={cx} y={cy+45} dy={15} textAnchor="middle" fill={'grey'} style={{fontSize:'18px'}}>
                    objectif
                </text>
            </Fragment>
        );
    };
    const renderLegend = () => {
        return (
            <p style={{color:'grey', width:'60%', fontSize:'15px', fontWeight:'500', marginTop:'0'}}>Score</p>
        );
    }

    return (
        <Wrapper>
            <ResponsiveContainer>
                    <PieChart width={800} height={400}>
                        <Pie 
                            dataKey="value"
                            data={data}
                            label={renderCustomizedLabel}
                            labelLine={false}
                            cx="50%"
                            cy="45%"
                            startAngle={220}
                            endAngle={0}
                            innerRadius={70}
                            outerRadius={82}
                            paddingAngle={5}
                            cornerRadius={40}
                        >
                            { data.map((entry, index) => (
                                <Cell 
                                    key={`cell-${index}`}
                                    stroke = "transparent"
                                    fill='red'
                                    radius={[50, 50, 50, 50]}/> )) } 
                        </Pie>
                        <Legend verticalAlign="top" align="left" content={renderLegend} />
                                
                    </PieChart>
            </ResponsiveContainer>
        </Wrapper>
    )
} 
UserScore.propTypes = { userScore: PropTypes.number }
export default UserScore
