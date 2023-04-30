import PostList from "./components/PostList"

function UsersPost(){
    const Posts= [
        {
            id:1,
            title:'JavaScript',
            body:'JavaScript is the name of a dynamic language which is based on classless object-oriented (prototype-based) programming. Netscape created JavaScript in 1994, although at first, they called it LiveScript. The script was used in Netscape’s browser, because they needed a language that both professionals and amateurs would take to.'
        },
        {
            id:2,
            title:'React',
            body:'React (also known as React.js or ReactJS) is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta (formerly Facebook) and a community of individual developers and companies.'
        },
        {
            id:3,
            title:'aaa',
            body:'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Enim saepe perferendis est officiis mollitia voluptas ex eligendi repellendus, debitis eum, odit, dolore hic doloremque similique rem odio esse impedit laboriosam.'
        }
    ]

    return(
        <div>
            <PostList data={Posts} create={true}/>
            
        </div>
        
        
    )
}
export default UsersPost