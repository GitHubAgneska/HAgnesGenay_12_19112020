import UserDataService from "./UserDataService";


const apiBaseUrl = 'http://localhost:3000/user/';
const apiMockBaseUrl = "../mockData/";
// "../mockData/ mainData"; // --/user/12
// "../mockData/ activity";  // -- /user/18/activity
// "../mockData/ performance";  // --/user/18/performance
// "../mockData/ average-sessions"; // --/user/18/average-sessions
let findUserDataWithId = (id) => { }

class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId= userId;}}
let localUser = {id:null, data:[]};

/**   @object FetchDataService */
/**   @returns {Promise} user object  */
/**  this service is in charge of getting data from the api / mock data
*   ----------------------------------------------------------------
*  -> calls UserDataService to get current user ID (from URL)
*  -> uses user id to set up 4 endpoints
*  -> uses Promise.all() to retrieve data from these 4 endpoints
*  -> returns Promise user object
* */
const FetchDataService = {

    fetchData : function() {

        let userId = UserDataService.retrieveIdFromUrl();
        localUser.id = userId;

        const endpoints = [
            new endpointModel('mainData', apiBaseUrl + userId),
            new endpointModel('activityData', apiBaseUrl + userId + '/activity'),
            new endpointModel('sessionsLengthData', apiBaseUrl + userId + '/average-sessions'),
            new endpointModel('performanceData', apiBaseUrl + userId + '/performance')
        ];
        const mockEndpoints = [
            new endpointModel('mainData', apiMockBaseUrl + userId),
            new endpointModel('activityData', apiMockBaseUrl + userId + '/activity'),
            new endpointModel('sessionsLengthData', apiMockBaseUrl + userId + '/average-sessions'),
            new endpointModel('performanceData', apiMockBaseUrl + userId + '/performance')
        ];
        let requests = endpoints.map( endpoint => fetch(endpoint.url) );

        return (
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
                    // console.log('ID======>', data[0].data.id);
                    localUser.data = data
                    return localUser
                })
                .catch(error => console.log(error.type) ) 
        )
    } 
}
export default FetchDataService







