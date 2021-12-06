import axios from 'axios'
import React,{useState ,useEffect} from 'react'

export default function Home({token}) {
    const [tweets, setTweets] = useState([])
    // const [toggle, setToggle] = useState(false)
    const [favList, setFavList] = useState([])

    useEffect(() => {
        const getDate = async()=>{

            try {
                const response = await axios.get("http://localhost:5000/tweets",{
                })
            setTweets(response.data)


            if(token){
                const likes= await axios.get("http://localhost:5000/allFavorite",{
                    headers: { authorization: `Bearer ${token}`  }
                    })
                console.log(likes.data,"likes");
                setFavList(likes.data)
               }

            // const likes= await axios.get("http://localhost:5000/allFavorite",{
            //     headers: { authorization: `Bearer ${token}`  }
            //     })
            // console.log(likes.data,"likes");
            // setFavList(likes.data)
            
            } catch (error) {
            console.log("roooooooooooo");
            }
        
        // try {
        //     console.log(likes.data,"likes.data");
            
        // } catch (error) {
        //     console.log("iiiiiiiiiiiiiiiiii");
        // }
        
        }

        getDate()
    }, [token])

    
    const favTweet= async(tweetId)=>{
        const response = await axios.post("http://localhost:5000/favorite",{
            tweetId: tweetId
        },{
            headers: { authorization: `Bearer ${token}`  }
        })

        console.log(response.data.favorite);
        setFavList(response.data.favorite)
        
    }

    return (
        <div>
            {console.log("tweets",tweets)}
            {console.log("favList",favList)}

            {
                tweets.map((elem,index)=>{
                   for (let i = 0; i < favList.length; i++) {
                       if (elem._id == favList[i]._id){
                        return <div key={index}>
                        <p>{elem.text}</p>
                        {
                            elem.img? <img src={elem.img}/> : ""
                        }
                        <span onClick={()=>{favTweet(elem._id)}}>♥</span>
                    </div>
                       }
                   }
                    return <div key={index}>
                        <p>{elem.text}</p>
                        {
                            elem.img? <img src={elem.img}/> : ""
                        }
                        <span onClick={()=>{favTweet(elem._id)}}>♡</span>
                    </div>
                })
            }
        </div>
    )
}
