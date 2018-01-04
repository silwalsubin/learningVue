import axios from 'axios';

function post(url, data){
  return new Promise((resolve, reject) => {
    axios.post(url, data)
         .then((response) => {
           resolve(response);
         })
         .catch((error) => {
           console.log(error);
         });
  })
}

export default {post};
