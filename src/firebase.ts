import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

import dotenv from "dotenv";
dotenv.config();

const firebaseConfig = {
  // place config here
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

export default { app, db };
