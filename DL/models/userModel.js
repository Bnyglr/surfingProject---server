const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    select: false,
    required: true,
  },
  createDate: {
    type: Date,
    default: Date.now,
  },
  isActive: {
    type: Boolean,
    default: true,
  },
  articles: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "article"
}],
});

const userModel = mongoose.model("user", userSchema);

module.exports = { userModel };
