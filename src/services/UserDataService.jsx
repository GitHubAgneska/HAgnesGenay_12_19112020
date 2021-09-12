import {UserModel} from '../models/UserModel'
import FetchDataService from '../services/FetchDataService'

/**   @object UserDataService */
/*  ----------------------------------------------------------------
*  -> Retrieves id in URL (if none  default id is provided)
*  -> Creates a new User from model 
*  -> Checks if user is already in local storage
*  -> Casts retrieved data into a user object ( --- TO REVIEW : userProfile component should delegate the entire task to this service)
*  -> return user object
* */
const UserDataService = {
    
    /** @function retrieveIdFromUrl */
    /** @returns {number} userId*/
    retrieveIdFromUrl: function() {
        
            let location = window.location;
            let defaultId = 12;
            let currentId = null;
            let idInUrl = parseInt(location.pathname.split('/userProfile/')[1]); // console.log('ID URL===', parseInt(idInUrl))
            idInUrl !== defaultId ? currentId = idInUrl : currentId = defaultId;
            return currentId;
    },

    /** @function checkUserInStorage */
    /** @param {number} userId */
    /** @returns {boolean} */
    checkUserInStorage: function(currentId) {
        
        let myStorage =  window.localStorage;
        return myStorage.getItem(currentId)? true:false;
        //  currentUser = JSON.parse(myStorage.getItem(currentId))

    },
    initFetchAndCache: function(currentId) {
        FetchDataService.fetchData(currentId);
    },

    /** @function castUserDataIntoUserModel */
    /** @param {Array} userDataFromPromiseAll*/
    /** @returns {object} currentUser  */
    castUserDataIntoUserModel: function(user) {

        let currentUser = new UserModel();

        currentUser.userMainData = user[0].data;
        currentUser.userActivityData = user[1].data;
        currentUser.userPerfData = user[2].data;
        currentUser.userSessionLengthData = user[3].data;
        // console.log('CURRENT USER AFTER REMAP==',currentUser )
        return currentUser;
    }
}
export default UserDataService





