import React, { useEffect, useState } from 'react';

const UseAdmin = user => {
   const [admin, setadmin] = useState(false);
   useEffect(() => {
       const email = user?.email;
       if(email){
        fetch(`http://localhost:5000/admin/${email}`, {
            method:'GET',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('accessToken')}`
            }
        })
        .then(res=>res.json())
        .then(data => {
            console.log('data inside useToken', data);
           
            setadmin(data.admin);
        })
       }
   },[user]);
   return [admin];
};

export default UseAdmin;