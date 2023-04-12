function card(){
    
    document.querySelectorAll("img").forEach(function(card){  
        card.style.order=Math.round(Math.random()*100)
        //puts cards in a order from 0 to 100, and places the ards around depending on what random number they got.
    })

}
card()
var clicks = 0 
var firstcard;
var secondcard;
var score = 0
var tries = 0

document.querySelectorAll("img").forEach(function(drag){
    drag.setAttribute("draggable", false)
})

document.querySelector("div").addEventListener("click",function(e){
   // if(e.target.src == "http://127.0.0.1:5501/images/pokeball.png"){
    if(e.target.src.endsWith ("/images/pokeball.png")){
    
        e.target.src = e.target.attributes["datasrc"].value
        clicks = clicks + 1
        //remember the card you clicked
        console.log(clicks)
       
        
        if(clicks == 1){
           firstcard = e.target
           console.log(firstcard.src)
           console.log("firstcard", firstcard)
        }
       
        if(clicks == 2 ){
           secondcard = e.target
           console.log(secondcard.src)
           console.log("secondcard", secondcard)
            clicks = 0
            tries = tries + 1
            console.log("Your amount of tries are " + tries)
            document.querySelector("#goes").textContent = tries

    
            if(firstcard.src == secondcard.src){
                console.log("match")
                var scott = new Audio()
                scott.src = "/sounds/" +
                 firstcard.src.slice(secondcard.src.lastIndexOf("/")+1,-4) + ".mp3"
                scott.play()
                score = score + 1
                console.log("Your score is " + score)
                document.querySelector("#points").textContent = score
            }
         else{
                var flipone = firstcard
                var fliptwo = secondcard
                 setTimeout(function () {
                     flipone.src = "/images/pokeball.png"
                     fliptwo.src = "/images/pokeball.png"
                    },550)
             }

           
              if(score == 14){
                console.log("YOU WIN!")
                document.querySelector("h1").textContent = "YOU WIN!!!"
                var josh = new Audio()
                josh.src = "/sounds/" + "caught.mp3"
                josh.play()


             }
    
        }

    }
    //if clicks is two change back to zero
    
    //console.log(e.target.attributes["data-src"])
    //console.log(e.target.attributes.src)
    //console.log(e)
    //flips the card
   
})


