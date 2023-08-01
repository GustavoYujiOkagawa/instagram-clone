import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAPVwF19MWKBgSTgfeHQbpBVL8_oFMke54",
  authDomain: "instagram-clone-305b2.firebaseapp.com",
  projectId: "instagram-clone-305b2",
  storageBucket: "instagram-clone-305b2.appspot.com",
  messagingSenderId: "219877020892",
  appId: "1:219877020892:web:c7c6b771207ea0dd7c1019",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth();
