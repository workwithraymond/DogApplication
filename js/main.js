const BREEDS_URL = 'https://dog.ceo/api/breeds/list/all'

const select = document.querySelector('.breeds')

//fetch the data
//using promise
fetch(BREEDS_URL)
  .then(res => {
    return res.json();
  })
  .then(data => {
    const breedsObject = data.message;//Turn the message into an object
    const breedsArray = Object.keys(breedsObject) //Turn the object into an array
     //we need to loop over our array to return each option and create element for html 
     for(let i=0; i < breedsArray.length; i++) {
    const option = document.createElement('option') //this is creating <option></option>
    option.value = breedsArray[i] //setting the value for <option value = 'breed'>
    option.innerText = breedsArray[i] //<option value ='breed'>breed</option(we are adding the breed inside the tag)
    select.appendChild(option)//adds current <option> tag to the select box list of options
   }

  })

  select.addEventListener('change', event => {
    console.log(event)
    let url = `https://dog.ceo/api/breed/${event.target.value}/images/random`
  })







