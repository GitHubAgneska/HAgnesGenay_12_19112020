
import { UserModel } from "../models/UserModel";

const apiBaseUrl = 'http://localhost:3000/user/';
const myStorage = window.localStorage;
class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId= userId;}}

/** This is a description of the foo function. */
const FetchDataService = {

    clearStorage: function () { myStorage.clear() },

    fetchData : function(userId) {

        let user = new UserModel();
        user.userId = userId; console.log('USERID IN FETCH==', userId, user);
        
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
                        // console.log('data at fetch all==', data);
                        console.log('ID======>', data[0].data.id);

                        user.userMainData = data[0].data;
                        user.userActivityData = data[1].data;
                        user.userSessionLengthData = data[2].data;
                        user.userPerfData = data[3].data;

                        user.allUserData.push(user.userMainData,user.userActivityData,user.userSessionLengthData, user.userPerfData );
                        //console.log('allUserData==', user.allUserData)

                        myStorage.setItem(user.userId, JSON.stringify(user.allUserData));
                    })
            }
            catch(error) { console.log(error) }
        }    
}
export default FetchDataService







