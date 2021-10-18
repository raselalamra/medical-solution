import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";

const initialiAuthentication = () => {
    initializeApp(firebaseConfig);
}

export default initialiAuthentication;