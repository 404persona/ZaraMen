const mongoose = require("mongoose");

  mongoose
  .connect(
    // "mongodb+srv://talhabinay:talha126@cluster0.qsi266u.mongodb.net/Zara"
    // "mongodb+srv://ansahmad:attherate%40@cluster0.76bhwxs.mongodb.net/Zara"
    process.env.MONGO_URI
    
  )
  .then(() => console.log("Connection Successfull"))
  .catch((err) => console.log("Connection Error" + err));