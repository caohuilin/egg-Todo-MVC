module.exports = app => {
  const mongoose = app.mongoose;
  const toduSchema = new mongoose.Schema({
    content: { type: String, required: true },
    finished: { type: Boolean, default: false },
    createTime: { type: Date, default: Date.now },
    updateTime: { type: Date, default: null },
    deleted: { type: Boolean, default: false }
  });

  return mongoose.model('Todo', toduSchema);
};
