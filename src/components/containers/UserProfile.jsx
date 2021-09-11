import React from 'react';
import {makeIntroSentence, UserKeyDataItem, ActivitySessionModel, PerformanceModel, SessionLengthModel} from '../../models/UserModel'
import UserIntro from '../elements/UserIntro';
import UserActivity from '../elements/UserActivity';
import UserKeyData from '../elements/UserKeyData';
import UserPerformances from '../elements/UserPerformances';
import UserScore from '../elements/UserScore';
import UserSessionsLength from '../elements/UserSessionsLength';
import FetchDataService from '../../services/FetchDataService';

import icon_calories from '../../assets/icons/icon_calories.png';
import icon_protein from '../../assets/icons/icon_protein.png';
import icon_carbs from '../../assets/icons/icon_carbs.png';
import icon_fat from '../../assets/icons/icon_fat.png';
import { MainWrapper, SectionA, SectionB, SectionC, SectionD } from '../../style/userProfile_style'

let location = window.location;
let defaultId = 18;
let currentId = null;

/** Method that checks and handles change id in URL and retrieves new provided id */
let checkUserIdHasChanged = () => {
    return location.search.split('/userProfile/')[1] !== defaultId ? currentId = location.search.split('/userProfile/')[1] : currentId = defaultId;
}

/**  
 *   creation of a Singleton for 'fetch()'
 *   This will ensure that INIT FETCH will only be called once, when the app is launched
 *   The next calls to fetch() service will occur 
 *   if the ID is changed in the url and the page is reloaded with a new id
**/
export const createSingleton = (createInstance) => {
    let instance = undefined;
    return {
        getInstance: () => instance || (instance = createInstance())
    };
};

const init = () => ({ fetch: () => {
    currentId = defaultId;
    // checkUserIdHasChanged()
    FetchDataService.fetchData(currentId)}
});

const data = createSingleton(init);
data.getInstance().fetch();


export default class UserProfile extends React.Component { 
        
        constructor(props){
            super(props);
            this.userId = currentId;

            this.storage = window.localStorage;

            this.userMainData = JSON.parse(this.storage.getItem('userMainData'));
            this.userActivityData = JSON.parse(this.storage.getItem('userActivityData'));
            this.userSessionLengthData = JSON.parse(this.storage.getItem('userSessionsLength'));
            this.userPerfData = JSON.parse(this.storage.getItem('userPerfData'));

            this.state = {

                    userId: currentId,
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

                console.log('storage =>',  JSON.parse(this.storage.getItem(18)))
                //console.log('storage =>',  (this.storage.getItem(18)))
                //console.log('storage =>',  this.userMainData)
                //console.log('storage =>',  this.userActivityData)

                this.setState({
                    
                    //userId: this.userMainData.id,
                    userFirstName: this.userMainData.userInfos.firstName,
                    userLastName: this.userMainData.userInfos.lastName,
                    userAge: this.userMainData.userInfos.age,
                    userScore: this.userMainData.score ||  this.userMainData.todayScore,
                    introSentence:  makeIntroSentence(this.userMainData.score ||  this.userMainData.todayScore),

                    userKeyDataCal: new UserKeyDataItem('Calories', this.userMainData.keyData.calorieCount, 'kCal', icon_calories),
                    userKeyDataProt: new UserKeyDataItem('Proteines', this.userMainData.keyData.proteinCount, 'g', icon_protein),
                    userKeyDataGlu: new UserKeyDataItem('Glucides', this.userMainData.keyData.carbohydrateCount, 'g', icon_carbs),
                    userKeyDataLipid: new UserKeyDataItem('Lipides', this.userMainData.keyData.lipidCount, 'g', icon_fat),
                    
                    userActivitySessions: this.userActivityData.sessions.map(session =>
                        new ActivitySessionModel(session.day, session.kilogram, session.calories)),

                    userLengthSessions: this.userSessionLengthData.sessions.map(session => 
                        new SessionLengthModel(session.day, session.sessionLength)),

                    userPerformances: this.userPerfData.data.map(perf =>
                        new PerformanceModel(perf.value, perf.kind))
                })
            }

            render() {
                console.log(
                    this.state.userId,
                    this.state.userScore,
                    this.state.introSentence,
                    this.state.userFirstName,
                    this.state.userActivitySessions,
                    this.state.userLengthSessions,
                    this.state.userPerformances,
                    this.state.userKeyDataCal
                    );
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



