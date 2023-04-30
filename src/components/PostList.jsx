import Post from "./Post"
import Header from "./header"
import { useState, useMemo } from "react"
import Form from "./Form"
import { CSSTransition, TransitionGroup } from 'react-transition-group';

function PostList({data,create}){
    const [Posts, setPosts] = useState(data)


    const [SortMethod, changeSort] = useState('title')

    function createPost(Post){
        setPosts([...Posts, Post])
    }

    function deletePost(post){
        setPosts(Posts.filter((p)=>p.id!==post.id))
    }

    console.log(data,create)
    const sortedPosts = useMemo(()=>{
        if(SortMethod){
           return [...Posts].sort((a,b)=>a[SortMethod].localeCompare(b[SortMethod]))
        }
        return Posts;
    }, [SortMethod, Posts])

    return(
        <div>
            <Header/>
            {
                create
                ?<div className="text-center mt-5 mb-5">
                    <Form create={createPost}/>
                </div>
                :null
            }
            
            
            {Posts.length===0
                ?<div className="text-center">
                    <h1>No Posts yet!</h1>
                    
                </div>
                :<div className="posts mt-5">
                    <div className="text-center mb-5">
                        <h1>Sort by</h1>
                        <select onChange={(e)=>{changeSort(e.target.value)}} value={SortMethod}>
                            <option value='title'>Title</option>
                            <option value='body'>Body</option>
                        </select>
                    </div>
                    <TransitionGroup>
                            {sortedPosts.map(v=>
                                <CSSTransition
                                    key={v.id}
                                    timeout={500}
                                    classNames="post-anim"
                                >
                                   <Post remove={deletePost} post={v}/>
                                </CSSTransition>
                            )}    
                             
                    </TransitionGroup>
                </div>
            }
            
        </div>
    )
    
}

export default PostList