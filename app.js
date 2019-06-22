var request = require('request')
const chalk = require('chalk')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('f83805862db1429daae61d9b71df5b34');
const requestIp = require('request-ip');


//console.log(process.argv[2])
 
if(process.argv[2] === undefined){
    url = `https://api.ipgeolocation.io/ipgeo?apiKey=08bd1e813ef546e48a6a7154bf2857eb`  
    callback = (error, response) => { 
        var res = JSON.parse(response.body)
        var cityName = res.city
       // console.log("error", error)
        getData(cityName)
    }
    request(url, callback)

}else{
  var cityName = process.argv[2]
  getData(cityName)
}

function getData(cityName){
  const url1 = `http://dataservice.accuweather.com/locations/v1/cities/search?apikey=PPFtjzBEIRGPy8Y7M3wPLKUTmxCbJxcu&q=${cityName}`
callback1 = (error, response) => {
  //console.log("Status code : ", response && response.statusCode)
    if((response && (response.statusCode === 200)) && ( JSON.parse(response.body).length )){
      const resp =  JSON.parse(response.body) 
      const cityCode = resp[0].Key 
      var countryName = resp[0].Country.LocalizedName 
      const region = resp[0].Region.EnglishName 
      //console.log("response", cityCode)
      console.log("")
      console.log(chalk.bold.white.bgCyanBright(" Country "), chalk.bgYellow.black("",countryName,""))
      console.log("")
      console.log(chalk.bold.white.bgCyanBright(" Region "), chalk.bgYellow.black("",region,""))
      console.log("")
      const url2 = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/${cityCode}?apikey=PPFtjzBEIRGPy8Y7M3wPLKUTmxCbJxcu`
      callback2 = (error, response) => {
        if(response && (response.statusCode === 200)){
          const resp = JSON.parse(response.body)
          const minTempInF = resp.DailyForecasts[0].Temperature.Minimum.Value
          const maxTempInF = resp.DailyForecasts[0].Temperature.Maximum.Value
         // (32°F − 32) × 5/9
          const minTempInC = Math.trunc( ( minTempInF - 32) * (5 / 9))
          const maxTempInC = Math.trunc(( maxTempInF - 32) * (5 / 9))
          // console.log("minTempInF", minTempInF)
          // console.log("maxTempInF", maxTempInF)
          console.log("")
          console.log(chalk.blue.bgWhite.bold(" Minimum Temperature "), chalk.white.bgBlue.bold("",minTempInC, " °C "))
          console.log("")
          console.log(chalk.blue.bgWhite.bold(" Maximum Temperature "), chalk.white.bgBlue.bold("",maxTempInC, " °C "))
          console.log("")

                url3 = `https://newsapi.org/v2/top-headlines?source=bbc-news&q=${countryName}&apiKey=f83805862db1429daae61d9b71df5b34`
      callback3 = (error, response) => {
             // console.log("response",JSON.parse(response.body));
            //  console.log("error", error)
                //console.log(response);
        var res = JSON.parse(response.body)
                if(res.articles.length){
          console.log("") 
          console.log(chalk.bold.green(`                                                  'TOP NEWS OF ${countryName}'`))
          console.log("")
          console.log("")
          for(let i=0; i<(res.totalResults); i++){                                                                      
            console.log(chalk.white(i + 1)+". " +chalk.bold.bgWhite.black.bold.underline(" Title "), chalk.bold.bgRed.white(res.articles[i].title))
            console.log("")
            console.log(chalk.bold.bgWhite.black.bold.underline(" Description "),chalk.yellow.bold(res.articles[i].description))
            console.log("")
            console.log(chalk.bold.bgWhite.black.bold.underline(" Source "),chalk.yellow.bold( res.articles[i].source.name))
            console.log("")
            console.log("")
            if( i === 4)
                break;
          }
        }
          }
          request(url3, callback3)
         
        }
        else if(response && (response.statusCode !== 200)){
          console.log("error", response.statusText)
        }
        else{
          console.log("error", error)
        }
      }
      request(url2, callback2)
    }
    else if(response && (response.statusCode !== 200)){
      console.log("error", response.statusText)
    }
    else{
      console.log(chalk.red.bold("No matching location found!"))
    }
}
 request(url1, callback1)
}





