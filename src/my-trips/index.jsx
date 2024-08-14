import { db } from '@/service/firebaseConfig';
import { collection, getDocs, where, query } from 'firebase/firestore';
import React, { useEffect, useState } from 'react'
import { useNavigation } from 'react-router-dom';
import UserTripCardItem from './components/UserTripCardItem';

function MyTrips() {
    const navigation= useNavigation();
    const [userTrips, setUserTrips]= useState([]);

    useEffect(()=>{
        GetUserTrips();
    }, [])

    const GetUserTrips=async()=>{
        const user= JSON.parse(localStorage.getItem('user'));
        
        if(!user)
            {
                navigation('/');
                return;
            }
            setUserTrips([]);
            const q=query(collection(db, 'AITrips'), where ('userEmail', '==', user?.email));
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach((doc) => {
            const trips = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })); // Include doc.id in trip data
             setUserTrips(trips);
        });

    }
  return (
    <div className= 'sm:px-10 md:px-32 lg:px-56 xl:px-72 px-5 mt-10'>
      <h2 className= 'font-bold text-3xl'> My Trips</h2>
      <div className= 'grid grid-cols-2 mt-10 md:grid-cols-3 gap-5'>
       {userTrips?.length>0 ?  userTrips.map((trip) => (
                    <UserTripCardItem key={trip.id} trip={trip} /> // Added key prop with unique id
                ))
                : [1,2,3,4,5,6].map((item,index)=>(
                    <div key= {index} className= 'h-[220px] w-full bg-slate-200 animate-pulse rounded-xl'> 
                    
                    </div>
                ))
                }

      </div>
    </div>
  )
}

export default  MyTrips
