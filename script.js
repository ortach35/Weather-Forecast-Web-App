const url='https://api.openweathermap.org/data/2.5/'
const key= '' // you should write your apı key from openweathermap.org
const setQuery=(event)=>{

    if(event.keyCode=='13'){
        getResult(searchBar.value)
    }
}

const getResult=(cityName)=>{
 let query= `${url}weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
 fetch(query)
 .then(weather=>{
    return weather.json()
 })
 .then(displayResult)
}

const displayResult=(result)=>{
  let city=document.querySelector('.city')
  city.innerText=`${result.name},${result.sys.country}`
  let temp=document.querySelector('.temp')
  temp.innerText=`${Math.round(result.main.temp)}°C`

  let desc=document.querySelector('.dscrptn')
  desc.innerText=result.weather[0].description

  let minmax=document.querySelector('.minmax')

  minmax.innerText=`${Math.round(result.main.temp_min)}°C /${Math.round(result.main.temp_max)}`
}


const searchBar= document.getElementById('searchBar')
searchBar.addEventListener('keypress', setQuery)
