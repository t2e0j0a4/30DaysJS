let searchInput = document.querySelector("#searchInput");
let searchListData = document.querySelector(".searchListData");

let api = "https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json";

let cities = [];

const fetchData = async () => {
    let response = await fetch(api);
    let data = await response.json();
    cities = [...data];
}

const filterSearch = (wordToSearch, cities) => {
    let regex = new RegExp(wordToSearch, 'ig');
    let filteredArray = cities.filter((city)=>{
        return city.city.match(regex) || city.state.match(wordToSearch);
    })
    return filteredArray;
}

function showResults() {
    
    let responseData = filterSearch(this.value, cities);
    if (responseData.length === 0){
        console.log('Empty!');
        searchListData.innerHTML = `<li class="searchListResultsEmpty"><span>Empty!</span></li>`
        return 0;
    }

    let parseHTML = responseData.map((data)=>{
        let population = Number.parseInt(data.population).toLocaleString('en-US');
        return `
            <li>
                <span>${data.city}, ${data.state}</span>
                <span>${population}</span>
            </li>
        `
    }).join('');

    searchListData.innerHTML = parseHTML;
}

window.addEventListener('load', fetchData);
searchInput.addEventListener('change', showResults);
searchInput.addEventListener('keyup', showResults);