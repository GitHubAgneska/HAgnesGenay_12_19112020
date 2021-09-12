import React from 'react';
import {makeIntroSentence, UserKeyDataItem, ActivitySessionModel, PerformanceModel, SessionLengthModel} from '../../models/UserModel'
import UserIntro from '../elements/UserIntro';
import UserActivity from '../elements/UserActivity';
import UserKeyData from '../elements/UserKeyData';
import UserPerformances from '../elements/UserPerformances';
import UserScore from '../elements/UserScore';
import UserSessionsLength from '../elements/UserSessionsLength';

import UserDataService from '../../services/UserDataService'
import { MainWrapper, SectionA, SectionB, SectionC, SectionD } from '../../style/userProfile_style'


export default class UserProfile extends React.Component { 
        
        constructor(props){
            super(props);
            
            this.state = {
                    userId: null, userFirstName: '', userLastName: '', userAge: null, userScore: null, introSentence: '',
                    userKeyData: [], userKeyDataCal: {}, userKeyDataProt: {}, userKeyDataGlu: {}, userKeyDataLipid: {},
                    userActivitySessions:[], userActSession: {},
                    userLengthSessions: [],userLengthSession:{},                    
                    userPerformances: [], userPerformance: {}
                };
            }

            componentDidMount() {
                let currentUser = UserDataService.setUpDataForUser();
                /* console.log('CURRENT USER++',currentUser); */
                this.setState({
                    userId: currentUser.userMainData.id,
                    userFirstName: currentUser.userMainData.userInfos.firstName,
                    userLastName: currentUser.userMainData.userInfos.lastName,
                    userAge: currentUser.userMainData.userInfos.age,
                    userScore: currentUser.userMainData.score ||   currentUser.userMainData.todayScore,
                    introSentence:  makeIntroSentence( currentUser.userMainData.score || currentUser.userMainData.todayScore),

                    userKeyDataCal: new UserKeyDataItem('Calories', currentUser.userMainData.keyData.calorieCount, 'kCal', 'icon_calories'),
                    userKeyDataProt: new UserKeyDataItem('Proteines', currentUser.userMainData.keyData.proteinCount, 'g', 'icon_protein'),
                    userKeyDataGlu: new UserKeyDataItem('Glucides', currentUser.userMainData.keyData.carbohydrateCount, 'g', 'icon_carbs'),
                    userKeyDataLipid: new UserKeyDataItem('Lipides', currentUser.userMainData.keyData.lipidCount, 'g', 'icon_fat'),
                    
                    // object.
                    userActivitySessions: currentUser.userActivityData.sessions.map(session =>
                        new ActivitySessionModel(session.day, session.kilogram, session.calories)),
                    
                    // object.sessions
                    userLengthSessions: currentUser.userSessionLengthData.data.map(session => 
                        new SessionLengthModel(session.day, session.sessionLength)),
                    
                    // object.data
                    userPerformances:  currentUser.userPerfData.sessions.map(perf =>
                        new PerformanceModel(perf.value, perf.kind))
                })
            }

            render() {
            /*  console.log(
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



