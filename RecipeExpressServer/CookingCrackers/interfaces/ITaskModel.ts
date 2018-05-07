import Mongoose = require("mongoose");

interface ITaskModel extends Mongoose.Document {
    listId: number;
    tasks: [ {
        rname: String,
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
export {ITaskModel};
