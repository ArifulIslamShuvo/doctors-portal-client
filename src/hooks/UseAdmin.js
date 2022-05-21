import React, { useEffect, useState } from 'react';

const useAdmin = user => {
   const [admin, setadmin] = useState(false);
   const [adminLoadig, setAdminLoading] = useState(true);
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
            setAdminLoading(false);
        })
       }
   },[user]);
   return [admin, adminLoadig];
};

export default useAdmin;