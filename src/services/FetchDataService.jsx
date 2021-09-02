
const apiBaseUrl = 'http://localhost:3000/user/';
let userId = 18;

let userMainData = {}, userActivityData = {}, userPerfData = {}, userSessionsData= {};

class endpointModel { constructor(name, url, data) { this.name = name; this.url = url; this.data= {};}}

const endpoints = [

    new endpointModel('mainData', apiBaseUrl + userId),
    new endpointModel('activityData', apiBaseUrl + userId + '/activity'),
    new endpointModel('performanceData', apiBaseUrl + userId + '/performance'),
    new endpointModel('sessionsData', apiBaseUrl + userId + '/average-sessions'),
];


const FetchDataService = {
    
    fetchData : function() {

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
                    .then(data => { })
            }
            catch(error) { console.log(error) }
            
        }
    
}
export default FetchDataService







