import React, { Fragment } from 'react';
import {UserKeyDataModel, ActivitySessionModel, PerformanceModel, SessionLengthModel} from '../../models/UserModel'

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

                userKeyData: new UserKeyDataModel({calorieCount:null, proteinCount:null, carbohydrateCount:null, lipidCount:null}),

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

                    userKeyData: Object.entries(this.userMainData.data.keyData), // is an object,
                    
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
                    this.state.userFirstName,
                    this.state.userKeyData,
                    this.state.userActivitySessions,
                    this.state.userLengthSessions,
                    this.state.userPerformances
                    );
                
                    return (
                        
                        <Fragment>
                            <div style={{height:'500px', backgroundColor:'grey'}}>

                            </div>
                        </Fragment>
            
                    )
            }
}



