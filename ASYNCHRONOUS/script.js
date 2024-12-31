// METHOD 1

function getDataByThen(){
    fetch('https://restcountries.com/v3.1/name/deutschland', { method: 'GET',})
    .then(response => response.json())
    .then((data)=>{
        const [border] = data[0].borders;
        return fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    })
    .then((response) => response.json())
    .then((data2) => {
        console.log(data2);
    })
}

// getDataByThen();

// METHOD 2

async function getDataByAsync(){
    const response = await fetch('https://restcountries.com/v3.1/name/deutschland')
    const data = await response.json();
    // console.log(data);
    const [border] = data[0].borders;
    const response2 = await fetch(`https://restcountries.com/v3.1/alpha/${border}`)
    const data2 = await response2.json();
    console.log(data2);

}

getDataByAsync();