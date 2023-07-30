import React from "react";
import EmojiButton from "./EmojiButton";

function Article({title, date, preview, minutes}){
    const formattedDate = date ? date : "January 1, 1970";
    return(
        <article>
            <h3>{title}</h3>
            <small>{`${formattedDate} ~ `}{<EmojiButton minutes = {minutes} />}{` ${minutes} min read`}</small> 
            <p>{preview}</p>
        </article>
    )
}

export default Article