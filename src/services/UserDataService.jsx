
import FetchDataService from '../services/FetchDataService';
import {UserModel} from '../models/UserModel'

/*
*   this service acts as a middleware between userProfile component
*   and fetch service
*   ----------------------------------------------------------------
*  -> Retrieves id in URL (if none  default id is provided)
*  -> Creates a new User from model 
*  -> Checks if user is already in local storage (if not calls fetch service that will store it)
*  -> Casts retrieved data into a user object
*  -> return user object
* */

const UserDataService = {
    
    setUpDataForUser: function() {


            let location = window.location; let myStorage =  window.localStorage;
            let defaultId = 12;
            let currentId = null;

            /** Method that retrieves ID from URL */
            let getUserId = () => {
                let idInUrl = location.pathname.split('/userProfile/')[1]; console.log('ID URL===', parseInt(idInUrl))
                return idInUrl !== defaultId ? currentId = idInUrl : currentId = defaultId;
            }

            /** Call  getUserId method */
            currentId = getUserId();

            /** Create a new User from model */
            let currentUser = new UserModel();

            /** Check if user is already in local storage 
             *  -> if yes : get data for this user into currentUser
             *  -> else : call fetchDataService that will store new data for user with id
             */
            let checkUserInStorage = (currentId) => { return myStorage.getItem(currentId)? currentUser.allUserData = JSON.parse(myStorage.getItem(currentId)) : FetchDataService.fetchData(currentId)  }
            /** Call method */
            checkUserInStorage(currentId);


            /**  Method that maps data array from cache, to user object  */
            let remapRawDataToObject = (currentUser) => { 
                
                currentUser.userMainData = currentUser.allUserData[0].data;
                currentUser.userActivityData = currentUser.allUserData[1].data;;
                currentUser.userPerfData = currentUser.allUserData[2].data;;
                currentUser.userSessionLengthData = currentUser.allUserData[3].data;;
                console.log('CURRENT USER AFTER REMAP==',currentUser )
            }
            /** Call method */
            remapRawDataToObject(currentUser);

            /** Return user object to component that requests it */
            return currentUser;

    }
}
export default UserDataService





