import { useEffect, useState } from "react";
import Header from "../../components/Header/Header";
import Posts from "../../components/Header/Posts/Posts";


export default function Home() {
    const [post, setPost] = useState([]);


    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(data => setPost(data)
        )
    });
  return (
    <div>
        <Header/>

        {
            post.map( posts => <Posts postdata = {posts}/>)
        }
    </div>
  )
}
