import { number } from 'prop-types';
import { useState } from 'react';
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


// SET-UP LOCAL STORAGE for all recipes array
const myStorage = window.localStorage;
let allData = [];

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
                        console.log('data==', data);
                        // if ( data.)
                        allData = data;
                        allData.forEach(folder => { 
                            if ( folder.data.hasOwnProperty('keyData') ) { 
                                userMainData = folder.data;
                                myStorage.setItem('userMainData',JSON.stringify(userMainData));
                            }
                            if ( folder.data.hasOwnProperty('kind')) {
                                userActivityData = folder.data;
                                myStorage.setItem('userActivityData',JSON.stringify(userActivityData))
                            }
                            if ( folder.data.hasOwnProperty('sessions') && typeof(folder.data.sessions[0].day.value) === number ) { 
                                console.log('IS SESSION===',folder);
                            }
                        })
                        myStorage.setItem('allData',JSON.stringify(allData))
                    })
            }
            catch(error) { console.log(error) }
        }    
}
export default FetchDataService







