let random=Math.floor(Math.random()*100)
const check=document.querySelector('.check')
let userNumber= document.querySelector('.bar')
const p=document.createElement('p')
check.after(p)
console.log(p)
p.innerHTML='Merhaba'
p.style.fontSize='2rem'
p.style.color='red'
p.style.marginTop='1rem'
const minus=document.querySelector('.minus')


let counter=2




check.addEventListener('click',()=>{
console.log(userNumber.value)
console.log(random)

     console.log(counter)
    if (counter>0){
        console.log('Kaybettiniz...')

    p.innerHTML='Kaybettiniz...'

    if (random==userNumber.value){
        console.log('Tebrikler...');
        
        p.innerHTML='Tebrikler...'
    }
    
    else if(random<userNumber.value){
        console.log('Sayıyı Azaltın...')

        p.innerHTML='Sayıyı Azaltın...'
    }

    else if(random>userNumber.value){
        console.log('Sayıyı Yükseltin...')

        p.innerHTML='Sayı Yükseltin...'
    }
    counter--
    userNumber.focus()
    userNumber.value=''
    } 
    else{
        userNumber.value='Yeter Lanet olsun. Kaybettin...'
        p.innerHTML='Damn, Game Over Dude...'
    }

})

userNumber.addEventListener('keydown',(event) =>{
    if(event.key==='Enter'){check.click();

    }
})

