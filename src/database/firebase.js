import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyArlMVAVM4hpfRd60Ahl0U2qPxiWDOSBkQ",
  authDomain: "proy4-ae7db.firebaseapp.com",
  projectId: "proy4-ae7db",
  storageBucket: "proy4-ae7db.appspot.com",
  messagingSenderId: "131038024293",
  appId: "1:131038024293:web:2a18c14808181ea341ac8c"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

// initializeApp({
//   apiKey: "AIzaSyArlMVAVM4hpfRd60Ahl0U2qPxiWDOSBkQ",
//   authDomain: "proy4-ae7db.firebaseapp.com",
//   projectId: "proy4-ae7db",
//   storageBucket: "proy4-ae7db.appspot.com",
//   messagingSenderId: "131038024293",
//   appId: "1:131038024293:web:2a18c14808181ea341ac8c"
// });

// export const db = getFirestore();