import React from 'react';
import {makeIntroSentence, UserKeyDataItem, ActivitySessionModel, PerformanceModel, SessionLengthModel} from '../../models/UserModel'
import UserIntro from '../elements/UserIntro';
import UserActivity from '../elements/UserActivity';
import UserKeyData from '../elements/UserKeyData';
import UserPerformances from '../elements/UserPerformances';
import UserScore from '../elements/UserScore';
import UserSessionsLength from '../elements/UserSessionsLength';

import icon_calories from '../../assets/icons/icon_calories.png';
import icon_protein from '../../assets/icons/icon_protein.png';
import icon_carbs from '../../assets/icons/icon_carbs.png';
import icon_fat from '../../assets/icons/icon_fat.png';


import styled from "styled-components"

import FetchDataService from '../../services/FetchDataService';
FetchDataService.fetchData(); // necessary to inititate cache at 1st browser opening ===> should be A SINGLETON ?

const MainWrapper = styled.section`
        border:4px solid yellow;
        position: absolute;
        height: 90%;width:90vw;
        top: 90px;
        left: 120px;
`;
const SectionA = styled.section`
    height:13.889vw; // 200px
    border: 2px solid grey;
    margin-bottom:25px;
`;
const SectionB = styled.section`
    width:250px;
    height:600px;
    float: right;
    &::after {
        content: "";
        display: block;
        clear: both;
    }
`;
const SectionC = styled.section`
    height:325px;
    width: 57.986vw; // 835px 
    margin-bottom:25px;
`;
const SectionD = styled.section`
    height:265px;
    width: 57.986vw; // 835px
    display:flex;flex-flow:row nowrap;
    margin-bottom:25px;
`;



export default class UserProfile extends React.Component { 

        constructor(props){
            super(props);

            this.storage = window.localStorage;
            this.userMainData = JSON.parse(this.storage.getItem('userMainData'));
            this.userActivityData = JSON.parse(this.storage.getItem('userActivityData'));
            this.userSessionLengthData = JSON.parse(this.storage.getItem('userSessionsLength'));
            this.userPerfData = JSON.parse(this.storage.getItem('userPerfData'));

            this.state = {
                    userId: null,
                    userFirstName: '',
                    userLastName: '',
                    userAge: null,
                    userScore: null,
                    introSentence: '',

                    userKeyData: [],
                    userKeyDataCal: {},
                    /* userKeyDataCal: new UserKeyDataItem({keyDataType:'',keyDataValue:null, keyDataUnit:'',keyDataIcon:'' }), */
                    userKeyDataProt: {},
                    /* userKeyDataProt: new UserKeyDataItem({keyDataType:'',keyDataValue:null, keyDataUnit:'',keyDataIcon:'' }), */
                    userKeyDataGlu: {},
                   /*  userKeyDataGlu: new UserKeyDataItem({keyDataType:'',keyDataValue:null, keyDataUnit:'',keyDataIcon:'' }), */
                    userKeyDataLipid: {},
                   /*  userKeyDataLipid: new UserKeyDataItem({keyDataType:'',keyDataValue:null, keyDataUnit:'',keyDataIcon:'' }), */
                    
                    userActivitySessions:[],
                    userActSession: {},

                    userLengthSessions: [],
                    userLengthSession:{},
                   /*  userLengthSession: new SessionLengthModel({day:null, sessionLength:null}), */
                    
                    userPerformances: [],
                    userPerformance: {},
                    /* userPerformance: new PerformanceModel({value: null, kind: ''}) */
                };
            }

            componentDidMount() {
                
                this.setState({
                    
                    userId: this.userMainData.data.id,

                    userFirstName: this.userMainData.data.userInfos.firstName,
                    userLastName: this.userMainData.data.userInfos.lastName,
                    userAge: this.userMainData.data.userInfos.age,
                    userScore: this.userMainData.data.score ||  this.userMainData.data.todayScore,
                    introSentence:  makeIntroSentence(this.userMainData.data.score ||  this.userMainData.data.todayScore),

                    
                    userKeyDataCal: new UserKeyDataItem('Calories', this.userMainData.data.keyData.calorieCount, 'kCal', icon_calories),
                    userKeyDataProt: new UserKeyDataItem('Proteines', this.userMainData.data.keyData.proteinCount, 'g', icon_protein),
                    userKeyDataGlu: new UserKeyDataItem('Glucides', this.userMainData.data.keyData.carbohydrateCount, 'g', icon_carbs),
                    userKeyDataLipid: new UserKeyDataItem('Lipides', this.userMainData.data.keyData.lipidCount, 'g', icon_fat),
                    
                    userActivitySessions: this.userActivityData.data.sessions.map(session =>
                        new ActivitySessionModel(session.day, session.kilogram, session.calories)),

                    userLengthSessions: this.userSessionLengthData.data.sessions.map(session => 
                        new SessionLengthModel(session.day, session.sessionLength)),

                    userPerformances: this.userPerfData.data.data.map(perf =>
                        new PerformanceModel(perf.value, perf.kind))
                })
            }

            render() {
                /* console.log(
                    this.state.userId,
                    this.state.userScore,
                    this.state.introSentence,
                    this.state.userFirstName,
                    this.state.userActivitySessions,
                    this.state.userLengthSessions,
                    this.state.userPerformances,
                    this.state.userKeyDataCal
                    ); */
                    
                    const {
                        userFirstName, userScore, introSentence, 
                        userActivitySessions, userLengthSessions,
                        userPerformances,
                        userKeyDataCal, userKeyDataProt, userKeyDataGlu,userKeyDataLipid
                    
                    } = this.state;
                    
                    return (

                        <main>
                            <MainWrapper>

                                <SectionA>
                                    <UserIntro {...{userFirstName,introSentence }} />
                                </SectionA>

                                <SectionB>
                                    <UserKeyData {...{userKeyDataCal, userKeyDataProt, userKeyDataGlu,userKeyDataLipid}} />
                                </SectionB>        
                                
                                <SectionC>
                                    <UserActivity {...{userActivitySessions}} />
                                </SectionC>

                                <SectionD>
                                    <UserSessionsLength {...{userLengthSessions}} />
                                    <UserPerformances {...{userPerformances}} />
                                    <UserScore {...{userScore}} />
                                </SectionD>

                            </MainWrapper>
                        </main>

                    )
            }
}



