const mongoose = require('mongoose');
const validator = require('validator');
const { toJSON, paginate } = require('./plugins');


const studentSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true,
      lowercase: true,
      validate(value) {
        if (!validator.isEmail(value)) {
          throw new Error('Invalid email');
        }
      },
    }
  },
  {
    timestamps: true,
  }
);


studentSchema.plugin(toJSON);
studentSchema.plugin(paginate);

studentSchema.statics.isEmailTaken = async function (email, studentId) {
  const user = await this.findOne({ email, _id: { $ne: studentId } });
  return !!user;
};


const Student = mongoose.model('Student', studentSchema);

module.exports = Student;
