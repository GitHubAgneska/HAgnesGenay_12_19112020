import React, { Fragment, Suspense } from 'react';
import {UserKeyDataModel,makeIntroSentence, UserKeyDataItemType, ActivitySessionModel, PerformanceModel, SessionLengthModel} from '../../models/UserModel'
import UserIntro from '../elements/UserIntro';
import UserActivity from '../elements/UserActivity';
import UserKeyData from '../elements/UserKeyData';
import UserPerformances from '../elements/UserPerformances';
import UserScore from '../elements/UserScore';
import UserSessionsLength from '../elements/UserSessionsLength';


import styled from "styled-components"

const Wrapper = styled.section`
    padding: 4em;
    border: 2px solid grey;
`;

// import FetchDataService from '../../services/FetchDataService';
// FetchDataService.fetchData();

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

                userActivitySessions:[],
                userActSession: new ActivitySessionModel(),

                userLengthSessions: [],
                userLengthSession: new SessionLengthModel({day:null, sessionLength:null}),
                
                userPerformances: [],
                userPerformance: new PerformanceModel({value: null, kind: ''})

                };
            }

            componentDidMount() {
                
                this.setState({
                    
                    userId:this.userMainData.data.id,

                    userFirstName: this.userMainData.data.userInfos.firstName,
                    userLastName: this.userMainData.data.userInfos.lastName,
                    userAge: this.userMainData.data.userInfos.age,
                    userScore: this.userMainData.data.score ||  this.userMainData.data.todayScore,
                    introSentence:  makeIntroSentence(this.userMainData.data.score ||  this.userMainData.data.todayScore),

                    userKeyData: Array.from(Object.entries(this.userMainData.data.keyData)).map((key, value) => (
                        new UserKeyDataItemType(key, value)
                    )),
                    
                    userActivitySessions: this.userActivityData.data.sessions.map(session =>  // is an array of objects
                        new ActivitySessionModel(session.day, session.kilogram, session.calories)
                    ),

                    userLengthSessions: this.userSessionLengthData.data.sessions.map(session => 
                        new SessionLengthModel(session.day, session.sessionLength)
                    ),

                    userPerformances: this.userPerfData.data.data.map(perf =>
                        new PerformanceModel(perf.value, perf.kind)
                    )
                })
            }

            render() {
                console.log(
                    this.state.userId,
                    this.state.userScore,
                    this.state.introSentence,

                    this.state.userFirstName,
                    this.state.userKeyData,
                    this.state.userActivitySessions,
                    this.state.userLengthSessions,
                    this.state.userPerformances
                    );
                
                    const {userFirstName, userScore, userKeyData, userActivitySessions, userLengthSessions, userPerformances} = this.state;
                    return (

                        <Fragment>
                            <Wrapper>
                                                
                                <UserIntro {...{userFirstName}} />
                                <UserKeyData {...{userKeyData}} />
                                <UserActivity {...{userActivitySessions}} />
                                <UserScore {...{userScore}} />
                                <UserPerformances {...{userPerformances}} />
                                <UserSessionsLength {...{userLengthSessions}} />

                            </Wrapper>
                        </Fragment>

                    )
            }
}



