import scriptLoader from 'scriptjs';
let url = 'https://apis.google.com/js/platform.js?onload=onLoadCallback';


function renderButton(id, config){
  scriptLoader(url, () => {
    gapi.signin2.render(id, config);
  })
}

function getAuthInstance(){
  return gapi.auth2.getAuthInstance();
}

function isSignedIn(){
  return getAuthInstance().isSignedIn.get();
}

function getCurrentUser(){
  if (isSignedIn()){
    var profile = getAuthInstance().currentUser.get().getBasicProfile();
    return {
      id : profile.getId(),
      firstName: profile.getGivenName(),
      lastName: profile.getFamilyName(),
      imageURL: profile.getImageUrl(),
      email: profile.getEmail()
    }
  }
  else{
    return null;
  }
}

function signOut(){
  if (isSignedIn()){
    return new Promise((resolve, reject) => {
      getAuthInstance().signOut().then(() => {
        resolve();
      });
    })
  }
}

export default {renderButton, getCurrentUser, signOut};
