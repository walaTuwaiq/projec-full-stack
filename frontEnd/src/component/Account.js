import React,{useEffect, useState} from 'react'
import { useParams } from "react-router-dom";
import axios from 'axios';

export default function Account() {
    const [profileInfo, setProfileInfo] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const getProfileData = async()=>{
            const result = await axios.get(`http://localhost:5000/profile/${id}`);
            setProfileInfo(result.data)
        }

        getProfileData()
      }, []);

    return (
        <div>
            {
                profileInfo.map((elem,index)=>{
                    return <div key={index}>
                        <h3>{elem.account}</h3>
                        <p>{elem.description}</p>
                        <img src={elem.imageProfile} />
                        <div>
                            <p>{elem.favorite.map((elem,index)=>{
                                return <div key={index}>
                                    <p>{elem.text}</p>
                                </div>
                            })}</p>
                        </div>
                    </div>
                })
            }
        </div>
    )
}
