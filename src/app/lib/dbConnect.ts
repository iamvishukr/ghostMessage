import mongoose from "mongoose";



type connectionObject = {
    isConnected?: number;
}

const connection: connectionObject = {}

async function dbConnect(): Promise<void>{
    if(connection.isConnected){
        console.log("dbConnect already connected");
        return
    }

    try{
       const db = await mongoose.connect(process.env.MONGODB_URI || "", {})
       connection.isConnected = db.connections[0].readyState
       console.log("dbConnect successful")
    }
    catch(err){
        console.log("dbConnect failed", err);
        process.exit(1)
    }
}

export default dbConnect;