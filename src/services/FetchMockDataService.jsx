import UserDataService from "./UserDataService";

const apiMockPath = "../mockData/";
class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId = userId;}}
let localUser = { id:null, data:[] };

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
            new endpointModel('mainData', apiMockPath + 'mainData.json'),
            new endpointModel('activityData', apiMockPath + 'activity.json'),
            new endpointModel('sessionsLengthData', apiMockPath + 'average-sessions.json'),
            new endpointModel('performanceData', apiMockPath + 'performance.json')
        ];

        let requestsToMockApi = mockEndpoints.map( endpoint => fetch(endpoint.url, { headers : { 'Content-Type': 'application/json', 'Accept': 'application/json' }}))
        // console.log('requestsToMockApi==', requestsToMockApi)

        return (
            Promise.all(requestsToMockApi)
                .then(responses => {
                    for ( let response of responses ) {
                        response.status === 200 ? 
                        console.log(response.status)
                        : console.log('error response:', response.status)
                    }
                    return responses;
                })
                .then(responses => Promise.all(responses.map(r => r.json())) )
                .then( data => { 
                    // console.log('all data at fecth mock ===', data)
                    let users = data;
                    localUser.id = userId;
                    // find data object for user id
                    let obj1 = users[0].find(x => x.id === userId).data
                    let obj2 = users[1].find(x => x.id === userId).data
                    let obj3 = users[2].find(x => x.id === userId).data
                    let obj4 = users[3].find(x => x.id === userId).data
                    
                    localUser.data.push(obj1,obj2,obj3,obj4);
                    // console.log('localUser======>', localUser)
                    return localUser;
                })
                .catch(error => console.log(error.type) ) 
        )
    } 
}
export default FetchMockDataService

