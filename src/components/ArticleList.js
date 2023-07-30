import React from "react";
import Article from "./Article";

function ArticleList({posts}){

    return(
    <main>
       {posts.map(item => <Article key={item.id} title={item.title} date={item.date} minutes={item.minutes} preview={item.preview}/> )}  
    </main>
    )
}
export default ArticleList