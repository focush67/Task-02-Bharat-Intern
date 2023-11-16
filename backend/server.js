const cors = require("cors");
const express = require("express");
require("./lib/mongoose.js");
const BlogSchema = require("./lib/BlogSchema.js");

const app = express();
app.use(cors());
app.use(express.json());

const PORT = 5501;

app.listen(PORT,() => {
    console.log("Server online");
});

app.get("/api/blogs" , async(request,response) => {
    try{
        console.log("Inside fetching blogs");
        const allBlogs = await BlogSchema.find({email: "sparshv70@gmail.com"});
        console.log(allBlogs);
        return response.json({
            message: "Returning all Blogs",
            status: 201,
            blogs: allBlogs
        });
    }catch(error){
        console.log(error);
        return response.json({
            message: "Problem with Get request",
            status: 500,
        })
    }
});


app.post("/api/create" , async(request,response) => {
    try {
        const {title,description,email} = request.body;
        
        console.log("Data received at backend: ",{title,description,email});

        const newBlog = await BlogSchema.create({title,description,email});

        await newBlog.save();

        return response.json({
            message: "New Blog Created",
            status: 201,
        });
    } catch (error) {
        console.log(error);
        return response.json({
            message: "Error at backend",
            status: 500,
        })
    }
})

