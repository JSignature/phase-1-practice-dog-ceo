document.addEventListener('DOMContentLoaded', () =>{
    console.log("test")
    const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
    const breedUrl = 'https://dog.ceo/api/breeds/list/all'
    const images = document.querySelector("#dog-image-container")
    const dogList = document.querySelector("#dog-breeds")
    const filterLetter = document.querySelector("#breed-dropdown")
    

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
        const array = Object.keys(object.message)
        for (element of array) {
            const dogInfo = document.createElement("li")
            dogInfo.textContent = element
            dogInfo.addEventListener("click", (e) => {
                e.target.style.color = "orange"
                })
            dogList.appendChild(dogInfo)  
         }
    })


    filterLetter.onchange = function () {
        console.log("onchange")
        dogList.innerHTML = " "
        fetch(breedUrl)
        .then(resp => resp.json())
        .then(object => {
            // console.log(object.message)
             const array = Object.keys(object.message)
            // console.log(array)

            for (element of array) {
          
                if (element.charAt(0) === filterLetter.value){
           
                     const dogInfo = document.createElement("li")
                    dogInfo.textContent = element
                         dogInfo.addEventListener("click", (e) => {
                         e.target.style.color = "orange"
                         })
                    dogList.appendChild(dogInfo)  
                  }
             }
         })


    }

   


})
