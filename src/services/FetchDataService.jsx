
import { UserModel } from "../models/UserModel";
import UserDataService from "./UserDataService";

const apiBaseUrl = 'http://localhost:3000/user/';
const myStorage = window.localStorage;
class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId= userId;}}


/**   @object FetchDataService */
/**   @param {number} userId - used by FetchDataService.fetchData() property */
/**   @returns {void}  */
/**  this service is in charge of getting data from the api / mock data
*   ----------------------------------------------------------------
*  -> called with user id
*  -> uses user id to set up 4 endpoints
*  -> uses Promise.all() to retrieve data from these 4 endpoints
*  -> stores resolved data ( array of 4 objects ) into local storage with user id
* */
const FetchDataService = {

    clearStorage: function () { myStorage.clear() },

    fetchData : function() {

        let userId = UserDataService.retrieveIdFromUrl();
        let userInStorage = UserDataService.checkUserInStorage();
        
        const endpoints = [
            new endpointModel('mainData', apiBaseUrl + userId),
            new endpointModel('activityData', apiBaseUrl + userId + '/activity'),
            new endpointModel('sessionsLengthData', apiBaseUrl + userId + '/average-sessions'),
            new endpointModel('performanceData', apiBaseUrl + userId + '/performance')
        ];
        let requests = endpoints.map( endpoint => fetch(endpoint.url) );
        
        if ( !userInStorage) { 
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
    
                        myStorage.setItem(userId, JSON.stringify(data));
                    })
            }
            catch(error) { console.log(error) }
        
        } else { return userId }
    } 
}
export default FetchDataService







