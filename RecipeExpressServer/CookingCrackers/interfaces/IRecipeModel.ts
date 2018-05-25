import Mongoose = require("mongoose");

interface IRecipeModel extends Mongoose.Document {
    listId: number;
    recipes: [ {
        rname: String,
        rmethod: String,
        rdescription: String,
        rtaskId: Number,
        rcuisinetype: String,
        rmealpreference: String,
        rmealtype: String,
        rduration: Number,
        ringredients: String,
        rchefid: String
    }];
}
export {IRecipeModel};
