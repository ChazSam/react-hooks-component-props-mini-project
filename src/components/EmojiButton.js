import React from "react";
const coffee ="☕️"
const bento = "🍱"

function getCoffee(minutes){
   let i = (Math.ceil(minutes / 5))
   return Array(i).fill(coffee)
}

function getBento(minutes){
   // let j = (Math.ceil(minutes / 10))
   // return Array(j).fill(bento)
}


function EmojiButton({minutes}) {
 return(
     <a>{minutes <= 30 ? getCoffee(minutes) : getBento(minutes)}</a>
 )
}

export default EmojiButton

 