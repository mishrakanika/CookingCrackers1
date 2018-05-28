import Mongoose = require("mongoose");

interface IRecipeCatalogModel extends Mongoose.Document {
    name: String,
    listId: Number,
}
export {IRecipeCatalogModel};