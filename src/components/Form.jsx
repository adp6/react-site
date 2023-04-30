import { useState } from "react"

function Form({create}){
    const [post, set] = useState({title:'',body:''})
    let submit = false
    if(post.title!=='' && post.body!=='')submit=true
    else submit=false




    function createPost(e){
        e.preventDefault()
        const newPost = {
            id:Date.now(),
            title:post.title,
            body:post.body
        }
        create(newPost)
        set({title:'',body:''})
    }

    return(
        <div>
            <h1>Create Post</h1>
            <form>
                <div>
                    <input
                        value={post.title} 
                        type="text"
                        placeholder="Title"
                        onChange={event=>set({ ...post,title:event.target.value})}
                    />
                </div>
                <div className="mt-3">
                    <textarea onChange={event=>set({...post,body:event.target.value})} value={post.body}>
                    </textarea>
                </div>
                <button disabled={!submit} onClick={createPost}>Submit</button>
            </form>
        </div>
    )
}
export default Form