var request = require('request')
const chalk = require('chalk')


// url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${cityName}.json?access_token=pk.eyJ1IjoicmFiaWFqYW1pbCIsImEiOiJjanVnc2ZnZncwc2I4NDVwZ3ZtemQxemlmIn0.MxZpNYGdK50nfZhBMZMUtw`

// const callback = ( error, response ) => {
//     resp = JSON.parse(response.body)
//     //console.log("response",resp)
//     console.log("Country Name",response &&  resp.features[0].context[1].text)
//     console.log("Region",response && resp.features[0].context[0].text)
//     console.log("error", error)
// }

// // features[
// //     {},{}
// // ]

// request(url, callback)

// newsapi.v2.topHeadlines({
//     category: 'business',
//     language: 'en',
//     country: 'pk'
// }).then(response => {
//   console.log(response);
//   console.log("Title : ", response.articles[0].title)
//   console.log("Description : ",response.articles[0].description)
//   console.log("Content : ",response.articles[0].content)
//   console.log("Author : ",response.articles[0].author)
  
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// })
// .catch((error) => {
//     console.log(error)
// })

// response[
//     {key: ""},
//     {}
//]
// url = `http://dataservice.accuweather.com/forecasts/v1/daily/1day/261158?apikey=%09ISeEFRSXFSbFcOwGyzJQ3inNMKR2eIAk`
// callback = (error, response) => {
//     resp = JSON.parse(response.body)
//     const minTempInF = resp.DailyForecasts[0].Temperature.Minimum.Value
//     const maxTempInF = resp.DailyForecasts[0].Temperature.Maximum.Value
//     (32°F − 32) × 5/9
//     const minTempInC = Math.trunc( ( minTempInF - 32) * (5 / 9))
//     const maxTempInC = Math.trunc(( maxTempInF - 32) * (5 / 9))
//     console.log("minTempInF", minTempInF)
//     console.log("maxTempInF", maxTempInF)
//     console.log("minTempInC", minTempInC)
//     console.log("maxTempInC", maxTempInC)
//      console.log("response code", response && response.statusCode)
//      console.log("error", error)
// }
// request(url, callback)

// const NewsAPI = require('newsapi');
// const newsapi = new NewsAPI('f83805862db1429daae61d9b71df5b34');

// var c = 'us'

// newsapi.v2.topHeadlines({
//     q: 'trump',
//     language: 'en',
//     country: 'us'
// }).then(response => {
//   //console.log(response);
//   //var res = JSON.parse(response.body)
//   if(response.articles.length){
//     console.log("") 
//     console.log(chalk.bold.green("                                                  'TOP NEWS OF '"))
//     console.log("")
//     console.log("")
//     for(let i=0; i<(response.totalResults); i++){
//       console.log(chalk.white(i + 1)+". " +chalk.bold.bgWhite.black.bold.underline(" Title "), chalk.bold.bgRed.white(response.articles[i].title))
//       console.log("")
//       console.log(chalk.bold.bgWhite.black.bold.underline(" Description "),chalk.yellow.bold(response.articles[i].description))
//       console.log("")
//       console.log(chalk.bold.bgWhite.black.bold.underline(" Content "),chalk.yellow.bold(response.articles[i].content))
//       console.log("")
//       console.log("")
//       if( i === 4)
//           break;
//     }
//   }
//   /*
//     {
//       status: "ok",
//       articles: [...]
//     }
//   */
// })
// .catch((error) => {
//     console.log(error)
// })

// var url = 'https://newsapi.org/v2/top-headlines?' +
//           'country=us&' +
//           'apiKey=480b4275411f40899bdb3448ce729591';
// callback = (error, response) => {
//     console.log("response",JSON.parse(response.body));
//     console.log("error", error)
// }
// request(url, callback)

//const ipAddress = '192.168.8.101' ;
// const apiKey = '08bd1e813ef546e48a6a7154bf2857eb';

// url = `https://api.ipgeolocation.io/ipgeo?apiKey=08bd1e813ef546e48a6a7154bf2857eb`

// callback = (error, response) => {
//     const res = JSON.parse(response.body)
//     console.log("country", res.country_name)
//     console.log("region", res.continent_name)
//     console.log("city", res.city)
//     console.log("error", error)
// }

//request(url, callback)
//u = `https://newsapi.org/v2/top-headlines?country=us&apiKey=f83805862db1429daae61d9b71df5b34`
url = `https://newsapi.org/v2/top-headlines?source=bbc-news&q=India&apiKey=f83805862db1429daae61d9b71df5b34`
 callback = (error, response) => {
        console.log("response",JSON.parse(response.body));
        console.log("error", error)
          //console.log(response);
  var res = JSON.parse(response.body)
          if(res.articles.length){
    console.log("") 
    console.log(chalk.bold.green("                                                  'TOP NEWS OF '"))
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
    request(url, callback)