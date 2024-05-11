import React, { useEffect, useState } from 'react'
import "./homepage.css"
import axios from "axios"
import { useNavigate } from 'react-router-dom';
const Homepage = () => {
    const [userdata, setUserdata] = useState({});
    
    

        const navigate = useNavigate();
      
        const newUser = async () => {
          try {
              const response = await axios.get("https://google-back.vercel.app/login/sucess", { withCredentials: true });
      
              console.log("response",response)
          } catch (error) {
            navigate("/")
          }
      }
      
      
      useEffect(() => {
        newUser()
      }, [])

    
    console.log("response", userdata)

    const getUser = async () => {
        try {
            const response = await axios.get("https://google-back.vercel.app/login/sucess", { withCredentials: true });

            setUserdata(response.data.user)
        } catch (error) {
            console.log("error", error)
        }
    }

    // logoout
    const logout = ()=>{
        window.open("https://google-back.vercel.app/logout","_self")
    }

    useEffect(() => {
        getUser()
    }, [])
    return (
        <div className='bg-gradient'>
        <div  className='profile-container' >
            <nav className='navbar'>
                <p>Profile Page</p>

                <div className="navigation">

                    <a className="button" >
                        <img src={userdata.image} alt='404' />

                        <div onClick={logout} className="logout">LOGOUT</div>

                    </a>

                </div>

            </nav>
            <div className='user-description'>
                <h1>Welcome, {userdata.displayName} </h1>
                <br/>
                <p>Logged in with {userdata.email}</p>
                <div className="email">
                    
                </div>

            </div>
        </div>
        </div>
    )
}

export default Homepage