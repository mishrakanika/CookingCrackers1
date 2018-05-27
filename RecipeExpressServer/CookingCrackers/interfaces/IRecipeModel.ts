import Mongoose = require("mongoose");

interface IRecipeModel extends Mongoose.Document {
    
        rname: String,
        rrecipeId: String,
        rmethod: String,
        rdescription: String,
        rtaskId: Number,
        rcuisinetype: String,
        rmealpreference: String,
        rmealtype: String,
        rduration: Number,
        ringredients: String,
        rchefid: String,
        rimage: String
   
}
export {IRecipeModel};
