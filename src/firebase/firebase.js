import * as firebase from 'firebase';
const config = {
  apiKey: "AIzaSyAUiZKlYonHlPJp6BF6zMgafHOgB7Vxo84",
  authDomain: "vocab-18.firebaseapp.com",
  databaseURL: "https://vocab-18.firebaseio.com",
  projectId: "vocab-18",
  storageBucket: "vocab-18.appspot.com",
  messagingSenderId: "67551096587"
};
firebase.initializeApp(config);

export function addWord(word) {
  firebase.database().ref('spideycode').orderByChild('id').limitToLast(1).on('value', function(data) {
    data;
    const key = Object.keys(data.val());
    debugger;
    const id = data.val()[key[0]].id;
    debugger;
    firebase.database().ref('spideycode/'+word).set({
      id: id + 1,
      status: 'new'
    });
  });
}
