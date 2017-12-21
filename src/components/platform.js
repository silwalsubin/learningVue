

// gapi.auth2.init({
//   client_id: `817728938926-ctui6aa8ri3ge1tjltd396h8qtars40s.apps.googleusercontent.com`
// })

function gapiLoadedPromise() {
  return new Promise((resolve, reject) => {
    console.log(`Gapi type:  ${typeof gapi}`);
    if (typeof gapi === 'object') {
      resolve();
    }
    reject();
  });
}

export default {gapiLoadedPromise}
