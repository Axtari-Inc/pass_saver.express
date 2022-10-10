import * as express from "express";
import * as path from 'path';

const PORT = 3001
const app = express()
app.listen(PORT,()=>{
    console.log(`Server started on port ${PORT}`);
})

