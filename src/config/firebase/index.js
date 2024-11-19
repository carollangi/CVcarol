// Import Firebase SDK
import { initializeApp } from "firebase/app";

// Konfigurasi Firebase
const firebaseConfig = {
  apiKey: "AIzaSyCfw27HRdmJ3IELjVdnjSFflms6zoTDxaM",
  authDomain: "website-carol.firebaseapp.com",
  projectId: "website-carol",
  storageBucket: "website-carol.appspot.com",
  messagingSenderId: "363189764411",
  appId: "1:363189764411:web:513c508abcd64c20a8f71e"
};

// Inisialisasi Firebase
const app = initializeApp(firebaseConfig);

export default app;
