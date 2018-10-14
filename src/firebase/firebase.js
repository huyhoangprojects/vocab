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
const db = firebase.database();
const user = 'spideycode';

export function addWord(word) {
  const words = db.ref(user).orderByChild('id').limitToLast(1).once('value');
  words.then(data => {
    const key = Object.keys(data.val());
    const id = data.val()[key[0]].id;
    db.ref(user + '/' + word).set({
      id: id + 1,
      status: 'new'
    });
  });
}

export function getWords() {
  return db.ref(user).once('value');
}

export function learnWord({id, word, part, pronoun, mean, example, image = ''}) {
  db.ref(user + '/' + word).set({
    id,
    status: 'learned',
    part,
    pronoun,
    mean,
    example,
    image
  });
}
