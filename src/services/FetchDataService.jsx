
import { UserModel } from "../models/UserModel";

const apiBaseUrl = 'http://localhost:3000/user/';
const myStorage = window.localStorage;
class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId= userId;}}

/** This is a description of the foo function. */
const FetchDataService = {

    clearStorage: function () { myStorage.clear() },

    fetchData : function(userId) {
       //  myStorage.clear()
        let user = new UserModel();
        user.userId = userId; console.log('USERID IN FETCH==', userId);
       //  if (!userId) { userId = 12;}
        const endpoints = [
            new endpointModel('mainData', apiBaseUrl + userId),
            new endpointModel('activityData', apiBaseUrl + userId + '/activity'),
            new endpointModel('sessionsLengthData', apiBaseUrl + userId + '/average-sessions'),
            new endpointModel('performanceData', apiBaseUrl + userId + '/performance')
        ];
            // console.log('ENDPOINTS==',endpoints);
            let requests = endpoints.map( endpoint => fetch(endpoint.url) );
            //console.log('requests==',requests);
            try {
                Promise.all(requests)
                    .then(responses => {
                        for ( let response of responses ) {
                            response.status === 200 ? 
                            console.log(response.status)
                            : console.log('error response:', response.status)
                        }
                        return responses;
                    })
                    .then(responses => Promise.all(responses.map(r => r.json())))
                    .then(data => { // returns an ARRAY
                        console.log('data at fetch all==', data);
                        console.log('ID======>', data[0].data.id);
                        
                        myStorage.setItem(user.userId, JSON.stringify(data))

                      /*   user.userMainData = Object.assign(user.userMainData, data[0].data);
                        user.userActivityData = data[1].data;
                        user.userSessionLengthData = data[2].data;
                        user.userPerfData = data[3].data;

                        user.allUserData.push(user.userMainData,user.userActivityData,user.userSessionLengthData, user.userPerfData );
                        //console.log('allUserData==', user.allUserData)
                        myStorage.setItem(user.userId, JSON.stringify(user.allUserData)); */
     /*                    Object.assign(user.allUserDataObject, user.userMainData );
                        Object.assign(user.allUserDataObject, user.userActivityData );
                        Object.assign(user.allUserDataObject, user.userSessionLengthData );
                        Object.assign(user.allUserDataObject, user.userPerfData );
                        console.log('USER DATA OBJECT=',user.allUserDataObject);

                        myStorage.setItem(user.userId, JSON.stringify(user.allUserDataObject)); */
                    })
            }
            catch(error) { console.log(error) }
        }    
}
export default FetchDataService







