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
