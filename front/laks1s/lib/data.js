import { axios } from 'axios';

export function getSortedPostsData() {

  console.log("carregando");
let axios = require('axios');

let config = {
  method: 'get',
  url: 'http://localhost:8000/status',
  headers: { 
    'laksis-api-key': 'welcome'
  }
};



  axios(config)
  .then(function (response) {
    let res=JSON.stringify(response);
    console.log(res);
    return res;
  })
  .catch(function (error) {
    console.log(error);
    console.log(error);
    return error;
  });

}
