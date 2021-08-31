import React, { createContext, useState, useEffect } from 'react'

const apiBaseUrl = 'http://localhost:3000/user/18';
/* const apiBaseUrl = 'http://localhost:3000/user/'`${userId}`; */

export const UserContext = createContext();

let localUser = {};
function fetchData () {
    return (
        fetch(apiBaseUrl)
            .then(response => { if (response.ok) { return response.json() } throw response })
            .then(data => { 
                console.log(data);
                localUser = data;
            })
            .catch(error => console.log(error.type) ) 
    )
}


export function UserProvider({children}) {
    
    const [user, setUser] = useState({user:{}});
    
    useEffect(() => {
        fetchData().then(user => {
            setUser(user);
        })
    }, [user]);
    
    return <UserContext.Provider value={localUser}>{children}</UserContext.Provider>
}





