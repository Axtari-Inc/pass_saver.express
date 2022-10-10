import * as express from "express";
import firestore from "./services/firestore.service";
// Initialize Firebase


const PORT = 3001
const app = express()


app.listen(PORT,async () => {
    await firestore.addData();
    console.log(`Server started on port ${PORT}`);
})



