import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

const firebaseConfig = {
  apiKey: "AIzaSyDhAVd5_E0a91SvXh5JPVsV2ziSScgWDBY",
  authDomain: "newen-b32c8.firebaseapp.com",
  projectId: "newen-b32c8",
  storageBucket: "newen-b32c8.appspot.com",
  messagingSenderId: "1001460162352",
  appId: "1:1001460162352:web:f8400034490ded4bc4b2f5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
