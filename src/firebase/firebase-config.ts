import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyANcnOshAB5olJkggQcZ_qgVF_kPF57ZZo",
  authDomain: "project6-97fef.firebaseapp.com",
  projectId: "project6-97fef",
  storageBucket: "project6-97fef.appspot.com",
  messagingSenderId: "544870792208",
  appId: "1:544870792208:web:4afcb7198dd709043ade95",
  measurementId: "G-XZR8JTCPCJ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage();
