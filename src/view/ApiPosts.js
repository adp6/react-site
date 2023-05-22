import PostList from "../components/PostList"
import axios from 'axios';
import { useState,useEffect } from "react";
import Header from "../components/header";
import style from '../components/style/Api.module.css'

function ApiPosts(){
    const [data,setData] = useState([]);

    const [page, setPage] = useState(1);


    const [arrP, setArr] = useState([])

    const[loading,setLoad] = useState(true);

    
    async function getPosts(){
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?`,{
            params:{
                _limit:10,
                _page:page
            }
        })
        setArr(Array.from(new Array(response.headers["x-total-count"]/10).keys()))
        setData(response.data)
        setLoad(false)
    }
    
    useEffect(()=>{
        // // eslint-disable-next-line react-hooks/exhaustive-deps 
        getPosts()
    },[page])


    return (
        <div>
            {
                !loading
                ?<PostList data={data} create={true}></PostList>
                :<div>
                    <Header></Header>
                    <div className="mt-5 pt-5 text-center">
                        <div className="loading">
                            <div className="loader"></div>
                        </div>
                    </div>
                </div>
                
            }
            <div className={style.div}>
                {arrP.map(v=>
                    <button className={style.button} onClick={()=>{setPage(v+1)}} key={v+1}>{v+1}</button>
                )}
            </div>
        </div>
    )
}
export default ApiPosts