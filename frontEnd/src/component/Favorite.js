import axios from 'axios'
import React, {useEffect,useState} from 'react'

export default function Favorite({token}) {

    const [favList, setFavList] = useState([])

    useEffect(() => {
        const getFav = async()=>{
            const response = await axios.get("http://localhost:5000/allFavorite",{
                headers: {
                    authorization: `Bearer ${token}`,
                  }  
            })
            setFavList(response.data)
        }

        getFav()
    }, [])
    
    return (
        <div>
            {
                favList.map((elem,index)=>{
                    return <div>
                        {elem.text}
                    </div>
                })
            }
        </div>
    )
}
