const request = require('request');

let result1 = async ()=>{
    return new Promise((resolve, reject) => {
        request('https://graph.microsoft.com/v1.0', function (error, response) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response.body, response.statusCode);
            resolve(response.body) })
    })
  }
let result2 = async ()=>{
    return new Promise((resolve, reject) => {
        request('https://gmail.googleapis.com/$discovery/rest?version=v1', function (error, response) {
            console.error('error:', error); // Print the error if one occurred
            console.log('statusCode:', response.body, response.statusCode);
            resolve(response.body) })
    })
  }
  
module.exports = {
    result1 : result1,
    result2 : result2

}