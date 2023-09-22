'use client'
import { useRouter } from "next/navigation"
import axios, { AxiosError } from "axios"


export function Signout() {
      const {push} = useRouter()
      const handleLogout = async () => {
            try {
              const response = await axios.post('/api/auth/logout');
               
        
              if (response.status === 200) {
                // The user is successfully logged out; 
                console.log('Logged out');
                push("/")
              } else {
                // Handle the case where logout was not successful, e.g., display an error message.
                console.error('Logout failed');
              }
            } catch (error) {
              console.error('An error occurred during logout:', error);
            }
          };

          return (
                <button onClick={handleLogout} className="bg-indigo-500 px-10 py-4 text-white rounded-2xl">Logout</button>
          )

}