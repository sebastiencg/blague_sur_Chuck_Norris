let changer = document.querySelector('button')
function suivant(){
    fetch('https://api.chucknorris.io/jokes/random')
        .then((data)=>(data.json()))
        .then((blague)=>{
            let h1 = document.querySelector('h1')
            h1.innerHTML= blague.value
        })
}
suivant()
changer.addEventListener('click',()=>{
    suivant()
})

