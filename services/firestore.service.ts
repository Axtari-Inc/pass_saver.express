import {initializeApp} from "firebase/app";
import {collection, addDoc} from "firebase/firestore";
import { getFirestore } from "firebase/firestore";

interface firestoreServiceI{
    addData : ()=> any;
}



class firestoreService implements firestoreServiceI{
    firebaseConfig = {
        apiKey: "AIzaSyA5viqyb9CCQbc9ta9eZ3uPK2SaN3XXbZM",
        authDomain: "axtariinc.firebaseapp.com",
        projectId: "axtariinc",
        storageBucket: "axtariinc.appspot.com",
        messagingSenderId: "3924775845",
        appId: "1:3924775845:web:78a51d3a77ae1c223dce4c",
        measurementId: "G-X90XCDMY79"
    };

    DatabaseApp = initializeApp(this.firebaseConfig);

    db = getFirestore(this.DatabaseApp);


  public async addData() {
        try {
            const docRef = await addDoc(collection(this.db, "users"), {
                first: "Ada",
                last: "Lovelace",
                born: 1815
            });
            console.log("Document written with ID: ", docRef.id);
        } catch
            (e) {
            console.error("Error adding document: ", e);
        }
    }
}
const firestore = new firestoreService();
export default firestore;