// load function 
loadPhone = (search,dataLemet) =>{
    const url = `https://openapi.programming-hero.com/api/phones?search=${search}`
    fetch (url)
    .then(res => res.json())
    .then(data => displayPhone(data.data,dataLemet))
}
// display function 
displayPhone  = (phones,dataLemet) =>{
    const showMoreSbtn = document.getElementById('show-more-btn')
    if(dataLemet && phones.length > 10){
      phones= phones.slice(0 ,9)
    showMoreSbtn.classList.remove('d-none')
    }
    else{
         showMoreSbtn.classList.add('d-none')
    }

const divContainer = document.getElementById('div-container');
divContainer.innerText = '' ;

// start alart section 
const textAlart = document.getElementById('text-alart');
if(phones.length===0){
    textAlart.classList.remove('d-none')
}
else{
    textAlart.classList.add('d-none')
}
// end alart section 

phones.forEach(phone=>{
    const addDiv = document.createElement('div')
    addDiv.classList.add('col')
    addDiv.innerHTML = `
    <div class="card">
              <img class="p-4 img-fluid" src="${phone.image}" class="card-img-top" alt="...">
              <div class="card-body">
                <h5 class="card-title">${phone.phone_name}</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
              </div>
          </div>
    `
    divContainer.appendChild(addDiv) 
console.log(phone)
})
toggolSection(false)
}

// search function 

const sameFunction = (dataLemet) =>{
    toggolSection(true)
    const inputText = document.getElementById("input-text").value;
    loadPhone(inputText,dataLemet)
}

document.getElementById('search-btn').addEventListener('click',function(){
    sameFunction(10)
})

// lodding function 
const toggolSection = (isLood) =>{
    const lodding = document.getElementById('lodding');
    if(isLood){
        lodding.classList.remove('d-none')
    }
    else{
        lodding.classList.add('d-none')
    }
}
document.getElementById('show-more-btn').addEventListener('click',function(){
sameFunction()
})

// loadPhone()