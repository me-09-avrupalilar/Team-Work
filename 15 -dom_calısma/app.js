const input =document.querySelector(".diller")
const ekleBtn =document.querySelector("#ekle")
const silBtn =document.querySelector("#sil")
const section =document.querySelector("#dil-section")
const ul = document.createElement("ul")
section.appendChild(ul);

// console.log(section.children[0]);
// console.log(section.parentNode.parentNode);

// const h1 = section.closest(".container").firstElementChild;
// const button = section.closest(".container").querySelectorAll(".btn");
// console.log(button);
// console.log(h1);
// h1.style.color="red"
// h1.style.backgroundColor="purple"
// h1.style.fontSize= "3rem"


ekleBtn.onclick = function (){
    if(!input.value){
        alert("lütfen bir dil giriniz")
    }else{
        ul.innerHTML += `<li>${input.value}</li> `
        control()
        input.value=""
        input.focus()
    }
}

silBtn.onclick = function (){
    // ul.childElementCount > 0
    // ?  ul.removeChild(ul.lastElementChild)
    // :  alert("silinecek elman kalmadı") 

    if(ul.childElementCount > 0){
        ul.removeChild(ul.lastElementChild) 
        
    }else{
        alert("silinecek elman kalmadı")
    }
}
input.addEventListener("keydown",(e)=>{
    
    if(e.keyCode===13){
        // e.code==="Enter"
        ekleBtn.onclick()
    }
    if(e.code==="Delete"){
        silBtn.onclick()
    }

})

// const control = ()=>{
//    const result= document.querySelectorAll("ul li").map((a)=>a.toLowerCase())
//     return result;
//    }