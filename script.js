
let button = document.getElementById("submit")
let output = document.getElementById("result")

button.addEventListener("click",function(e){
    e.preventDefault()
    async function getData(){
        let apiResponse = await fetch(`https://random.dog/woof.json`)
        let apiData = await apiResponse.json()
        console.log(apiData.url)
        console.log(output)
        output.innerHTML = `<img class="mt-4" src="${apiData.url}" alt="" id="img">`
    }
    getData()
})






