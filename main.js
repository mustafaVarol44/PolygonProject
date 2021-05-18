const apiData = {
    url: 'http://api.agromonitoring.com/agro/1.0/', 
    type: 'image/search?start=1500336000&end=1508976000&polyid=6095aa44a5f2810007c30313&',
    appid: 'appid=ad2f7d3a464cf415c08589ca308d1b64',
}

const {url, type, appid} = apiData

const apiUrl = `${url}${type}${appid}`

fetch(apiUrl)
    .then( (data) => {
        if(data.ok){
            return data.json()
        }
        throw new Error('Response not ok.'); 
    })
    .then( a => generateHtml(a))
    .catch( error => console.error('Error:', error))


const generateHtml = (data) => {
    console.log(data)
    const html = `

        <img src=${data[0].image.ndvi}>
        <div class="details">
            <span>Height: ${data[0].type}</span>
            <span>Weight: ${data[1].type}</span>
        </div>
    `
    const pokemonDiv = document.querySelector('.pokemon')
    pokemonDiv.innerHTML = html
}