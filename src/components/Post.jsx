

function Post({post, remove}){
    return(
        <div className="post mb-5">
            <div className="border-bottom border-primary border-4  p-4">
                <h1 className="text-warning text-break">{post.title}</h1>
            </div>
            <p className="text-break">{post.body}</p>
            <div className="mt-4 mb-5">
                <button className="p-2" onClick={()=>{remove(post)}}>delete post</button>
            </div>
        </div>
    )
}
export default Post
