let share = document.getElementById("share");
let card = document.getElementById("card")
let x = document.getElementById("x");
let followBtn = document.getElementById("follow");
let followed = document.getElementById("followed")



followBtn.addEventListener("click",()=>{
    
    let flag=0
    if(flag==0){
        followBtn.innerHTML="followed"
        followBtn.classList="fa-solid fa-check text-green-600 border-2 border-green"
        flag++
    }
    if(flag==1){
        followBtn.textContent="Follow"
        flag--
    }
    
})



x.addEventListener("click",()=>{
    if(card.style.display="block"){
        card.style.display="none"
    }
})

// followBtn.addEventListener("click",()=>{
//     followBtn.classList="hidden"
//     followed.style.display="block"

// })

followed.addEventListener("click",()=>{
    // if(followed.style.display="block"){
    // }
    // followBtn.style.display="block"
    // followed.style.display="none"
    followed.textContent="Follow me"
})



share.addEventListener("click",()=>{
    card.style.display="block"
    
})