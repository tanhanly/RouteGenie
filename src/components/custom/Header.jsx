import React, { useEffect, useState } from 'react'
import { Button } from '../ui/button'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { FcGoogle } from "react-icons/fc";
import axios from 'axios';


function Header() {
  const user = JSON.parse(localStorage.getItem('user'));
   const [openDailog, setOpenDailog]= useState(false);

  useEffect(() => {
    console.log(user);
  }, []);

   const login = useGoogleLogin({
  onSuccess: (codeResp) => GetUserProfile(codeResp),
  onError: (error) => console.log(error),
});

 const GetUserProfile = (tokenInfo) => {
    axios.get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${tokenInfo?.access_token}`, {
        headers: {
            Authorization: `Bearer ${tokenInfo?.access_token}`,
            Accept: 'Application/json',
        },
    }).then((resp) => {
        console.log(resp);
        localStorage.setItem('user', JSON.stringify(resp.data));
        setOpenDailog(false);
        window.location.reload();
    })
};
  const handleLogout = () => {
     googleLogout();
  localStorage.clear();
  window.location.href = '/';// Redirect to homepage after logout
  };

  return (
    <div className='p-2 shadow-sm flex justify-between items-center px-5'>
      <img src='/RouteGenie.jpg' alt='Logo' className='h-[220px] w-[200px]'/>
      <div>
        {user ? (
          <div className='flex items-center gap-3'>
          <a href= '/create-trip'>
            <Button variant="outline" className="rounded-full"> ➕ Create Trip </Button>
            </a>
            <a href= '/my-trips'>
            <Button variant="outline" className="rounded-full"> My Trips </Button>
            </a>
            <Popover>
           <PopoverTrigger>
            <img src={user?.picture} className='h-[35px] w-[35px] rounded-full' alt='User' />
           </PopoverTrigger>
            <PopoverContent>
            <h2 className='cursor-pointer' onClick={handleLogout}>
                  Logout
                </h2>
            </PopoverContent>
           </Popover>

          </div>
        ) : 
          <Button onClick={()=> setOpenDailog(true)}>Sign In</Button>
        }
      </div>
      <Dialog open={openDailog}>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Sign In</DialogTitle> {/* Add this line */}
      <DialogDescription>
        <div className="flex items-center justify-center">
        <img src="/RouteGenie.jpg" className="h-[100px] w-[100px]" alt="RouteGenie" />
         </div>

        <h2 className='font-bold text-lg mt-7'>Sign In with Google</h2>
        <p> Sign in to the App with Google authentication</p>
        <Button onClick={login} className="w-full mt-5 flex gap-4 items-center">
        <FcGoogle className="h-7 w-7"/> 
        Sign In with Google
        </Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>

    </div>
  );
}

export default Header;

