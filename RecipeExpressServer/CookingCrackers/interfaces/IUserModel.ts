import Mongoose = require("mongoose");

interface IUserModel extends Mongoose.Document {
  firstName: string;
                lastName: string;
                userId: number;
                password: string;
                username: string;
                isChef: boolean;
}
export default IUserModel;
