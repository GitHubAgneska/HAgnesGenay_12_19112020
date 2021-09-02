
const apiBaseUrl = 'http://localhost:3000/user/';
let userId = 18;

let userMainData = {}, userActivityData = {}, userSessionLengthData= {}, userPerfData = {}

class endpointModel { constructor(name, url, data) { this.name = name; this.url = url; this.data= {};}}

const endpoints = [

    new endpointModel('mainData', apiBaseUrl + userId),
    new endpointModel('activityData', apiBaseUrl + userId + '/activity'),
    new endpointModel('sessionsLengthData', apiBaseUrl + userId + '/average-sessions'),
    new endpointModel('performanceData', apiBaseUrl + userId + '/performance')
];


const myStorage = window.localStorage;

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
                    .then(data => {

                        userMainData = data[0];
                        userActivityData = data[1];
                        userSessionLengthData = data[2];
                        userPerfData = data[3];

                        myStorage.setItem('userMainData',JSON.stringify(userMainData));
                        myStorage.setItem('userActivityData',JSON.stringify(userActivityData));
                        myStorage.setItem('userSessionsLength',JSON.stringify(userSessionLengthData));
                        myStorage.setItem('userPerfData',JSON.stringify(userPerfData));

                    })
            }
            catch(error) { console.log(error) }
        }    
}
export default FetchDataService







