import UserDataService from "./UserDataService";

const apiMockPath = "../mockData/";
class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId = userId;}}
let localUser = {id:null, data:[]};
let findUserDataWithId = (id) => { }

/**   @object FetchDataService */
/**   @returns {Promise} user object  */
/**  this service is in charge of getting data from the api / mock data
*   ----------------------------------------------------------------
*  -> calls UserDataService to get current user ID (from URL)
*  -> uses user id to set up 4 endpoints
*  -> uses Promise.all() to retrieve data from these 4 endpoints
*  -> returns Promise user object
* */
const FetchMockDataService = {

    fetchData : function() {

        let userId = UserDataService.retrieveIdFromUrl();
        localUser.id = userId;

        const mockEndpoints = [
            new endpointModel('mainData', apiMockPath + 'mainData.json'),// "../mockData/ mainData + /12 "; // --/user/12
            new endpointModel('activityData', apiMockPath + 'activity.json'),// "../mockData/ activity";  // -- /user/18/activity
            new endpointModel('sessionsLengthData', apiMockPath + 'average-sessions.json'),
            new endpointModel('performanceData', apiMockPath + 'performance.json')
        ];

        let requestsToMockApi = mockEndpoints.map( endpoint => fetch(endpoint.url, { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }}))
        // console.log('requestsToMockApi==', requestsToMockApi)

        return (
            Promise.all(requestsToMockApi)
            //Promise.all(requests)
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
                    console.log('MOCK data at fetch all==', data); // array of : 4 arrays of 2 objects each
                    // console.log('ID======>', data[0].data.id);
                    localUser.data = data;
                    console.log('localUser==', localUser)
                    return localUser
                })
                .catch(error => console.log(error.type) ) 
        )
    } 
}
export default FetchMockDataService







