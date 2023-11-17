const {Schema,model,models} = require("mongoose");

const Blog = new Schema({
    title: {type: String, required: true},
    description: {type: String, required: true},
    email: {type: String, required: true},
})

const BlogSchema = (models.Blog) || model("Blog Schema",Blog);

module.exports = BlogSchema;