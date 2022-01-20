import FetchDataService from '../../services/FetchDataService'
import FetchMockDataService from '../../services/FetchMockDataService'

const apiBaseUrl = 'http://localhost:3000/user/';
const apiMockPath = "../mockData/";
class endpointModel { constructor(name, url, userId) { this.name = name; this.url = url; this.userId= userId;}}
let localUser = {id:null, data:[]};

export function FetchDataServiceFactory() {
    this.create = ( apiBaseUrl,endpointModel,localUser ) => {
        return new FetchDataService(apiBaseUrl,endpointModel,localUser);
    };
}