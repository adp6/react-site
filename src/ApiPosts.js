import PostList from "./components/PostList"
import axios from 'axios';
import { useState,useEffect } from "react";
import Header from "./components/header";
function ApiPosts(){
    const [data,setData] = useState([]);

    const[loading,setLoad] = useState(true);
    function getPosts(){
        const response = axios.get('https://jsonplaceholder.typicode.com/posts')
        response.then((res)=>{
            setData(res.data)
            setLoad(false)
        })
    }
    
    useEffect(()=>{
        getPosts()
    },[])


    return (
        <div>
            {
                !loading
                ?<PostList data={data} create={false}></PostList>
                :<div>
                    <Header></Header>
                    <div className="mt-5 pt-5 text-center">
                        <div className="loading">
                            <div className="loader"></div>
                        </div>
                    </div>
                </div>
                
            }
        </div>
    )
}
export default ApiPosts