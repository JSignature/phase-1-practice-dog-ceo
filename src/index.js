document.addEventListener('DOMContentLoaded', () =>{
    console.log("test")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const images = document.querySelector("#dog-image-container")
    const dogList = document.querySelector("#dog-breeds")
    const filterLetter = document.querySelector("#breed-dropdown").value
    console.log(filterLetter.value)
    console.log(typeof filterLetter.value)

    fetch(imgUrl)
    .then(resp => resp.json())
    .then(object => {
        //console.log(object.message)
        // get individual dog image from array
        for (element of object.message){
            //console.log(element) 

        //build element 
        const dogImg = document.createElement("img")
       
        //add image to element
        dogImg.setAttribute("src", element)
        dogImg.setAttribute("alt", "picture of a dog")
        //console.log(dogImg)  

        //add element to page
            images.appendChild(dogImg)
    }

    })

    fetch(breedUrl)
    .then(resp => resp.json())
    .then(object => {
        console.log(object.message)
        const array = Object.keys(object.message)
        console.log(array)

        for (element of array) {
            console.log(filterLetter)
            if (element.charAt(0) === filterLetter){
            console.log(element)

            //build element 
        const dogInfo = document.createElement("li")
       
        //add dog breed to li
        dogInfo.textContent = element
          
        //add event listener
            dogInfo.addEventListener("click", (e) => {
                //change color of text
                console.log("Click from listener")
                    e.target.style.color = "orange"


            })

        //add element to page
            dogList.appendChild(dogInfo)

        }
    }
    })




})
