let plus  = document.getElementById("plus");
let minus = document.getElementById("minus");

let saman = document.getElementById("content");


minus.addEventListener("click",()=>{
    let value = parseInt(saman.textContent);
    value-=1
    saman.textContent=value;
    
})


plus.addEventListener("click",()=>{
    let value = parseInt(saman.textContent);
    value+=1;
    saman.textContent = value;
})