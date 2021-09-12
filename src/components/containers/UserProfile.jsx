import React from 'react';
import {makeIntroSentence, UserKeyDataItem, ActivitySessionModel, PerformanceModel, SessionLengthModel} from '../../models/UserModel'
import UserIntro from '../elements/UserIntro';
import UserActivity from '../elements/UserActivity';
import UserKeyData from '../elements/UserKeyData';
import UserPerformances from '../elements/UserPerformances';
import UserScore from '../elements/UserScore';
import UserSessionsLength from '../elements/UserSessionsLength';

import UserDataService from '../../services/UserDataService'
import FetchDataService from '../../services/FetchDataService'
import { MainWrapper, SectionA, SectionB, SectionC, SectionD } from '../../style/userProfile_style'


FetchDataService.fetchData();

export default class UserProfile extends React.Component { 
        
        constructor(props){
            super(props);
            this.storage = window.localStorage;
            this.userId = UserDataService.retrieveIdFromUrl();
            this.user = JSON.parse(this.storage.getItem(this.userId));console.log('USER===', this.user)
            this.currentUser = UserDataService.castUserDataIntoUserModel(this.user);

            this.state = {
                    userId: this.userId, userFirstName: '', userLastName: '', userAge: null, userScore: null, introSentence: '',
                    userKeyData: [], userKeyDataCal: {}, userKeyDataProt: {}, userKeyDataGlu: {}, userKeyDataLipid: {},
                    userActivitySessions:[], userActSession: {},
                    userLengthSessions: [],userLengthSession:{},                    
                    userPerformances: [], userPerformance: {}
                };
            }

            componentDidMount() {

                // console.log('CURRENT USER++',this.currentUser);

                this.setState({
                    userId: this.userId,
                    userFirstName: this.currentUser.userMainData.userInfos.firstName,
                    userLastName: this.currentUser.userMainData.userInfos.lastName,
                    userAge: this.currentUser.userMainData.userInfos.age,
                    userScore: this.currentUser.userMainData.score ||   this.currentUser.userMainData.todayScore,
                    introSentence:  makeIntroSentence( this.currentUser.userMainData.score || this.currentUser.userMainData.todayScore),

                    userKeyDataCal: new UserKeyDataItem('Calories', this.currentUser.userMainData.keyData.calorieCount, 'kCal', 'icon_calories'),
                    userKeyDataProt: new UserKeyDataItem('Proteines', this.currentUser.userMainData.keyData.proteinCount, 'g', 'icon_protein'),
                    userKeyDataGlu: new UserKeyDataItem('Glucides', this.currentUser.userMainData.keyData.carbohydrateCount, 'g', 'icon_carbs'),
                    userKeyDataLipid: new UserKeyDataItem('Lipides', this.currentUser.userMainData.keyData.lipidCount, 'g', 'icon_fat'),
                    
                    userActivitySessions: this.currentUser.userActivityData.sessions.map(session =>
                        new ActivitySessionModel(session.day, session.kilogram, session.calories)),
                    
                    userLengthSessions: this.currentUser.userSessionLengthData.data.map(session => 
                        new SessionLengthModel(session.day, session.sessionLength)),
                    
                    userPerformances: this.currentUser.userPerfData.sessions.map(perf =>
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



