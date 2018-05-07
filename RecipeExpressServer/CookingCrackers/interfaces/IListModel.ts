import Mongoose = require("mongoose");

interface IListModel extends Mongoose.Document {
    name: String,
    listId: Number,
}
export {IListModel};