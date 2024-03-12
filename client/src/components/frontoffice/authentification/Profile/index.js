import { useState, useEffect } from "react";
import axios from "axios";
import { useParams,Link } from 'react-router-dom';

import { Form,Button } from 'react-bootstrap';
import avatar from '../../profile.png';
import styles from "./styles.module.css";





const Profile = () => {
  const [user, setUser]= useState([{
    firstName : "",
    lastName : "",
    email:"",
    phone:"",
  }]);
  const {id} = useParams();
  const url = "http://localhost:5000/api/users/getById";
  //const { data: res } = await axios.get(`${url}/${id}`);
  const getUser = async()=>{
    const result = await axios.get(`${url}/${id}`)
    //console.log(result)
    setUser(result.data);
  }

  useEffect(() => {
    getUser();

    },[]);

  
console.log("AaAaAa")
console.log(user)

    return (
        <main>
        <div className={styles.signup_container}>
                    <div className="slider-area2">
                <div className="slider-height2 d-flex align-items-center">
                  <div className="container">
                    <div className="row">
                      <div className="col-xl-12">
                        <div className="hero-cap hero-cap2 pt-70">
                          <h2>Your Profile</h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
                    {/* <HeaderFront/> */}
                    <div className={styles.signup_form_container}>
                        <div className={styles.left}>
                            <h1>Profile <br/>details ! </h1>
                            <h1></h1>
                           <button type="button" className={styles.white_btn}>
                           < Link to={`/update/${user._id}`} > Update </Link></button>
                            <h1></h1><h1></h1><h1></h1>
                            <Link to="/signedin">
                            
                            <button type="button" className={styles.white_btn}>
                                back
                            </button>
                            </Link>
                           
                        
                        </div>
                        <div className={styles.right}>
                        
                        <br></br><br></br>
                         <img src={avatar} className={styles.profile_img} alt="avatar"  /> 
                         <h1>firstName</h1>
                         <strong>{user.firstName}</strong>
                         <br></br><br></br>
                         <h1>lastName</h1>
                         <strong>{user.lastName}</strong>
                         <br></br><br></br>
                         <h1>Email</h1>
                         <strong>{user.email}</strong>
                         <br></br><br></br>
                         <h1>Phone</h1>
                         <strong>{user.phone}</strong>
                         <br></br><br></br>
                        </div>
                    </div>
                </div>
            </main>
            
  
        
    );
    
};

export default Profile;
