async function displayBlogs() {
    try {
        // Retrieve blogsData from localStorage
        const blogsDataLS = JSON.parse(localStorage.getItem("Blogs") || "");

        // Fetch fresh data from the server
        const response = await fetch("http://localhost:5501/api/blogs");
        const blogsData = (await response.json()).blogs;

        // Update local storage with fresh data
        localStorage.setItem("Blogs", JSON.stringify(blogsData));

        const blogsContainer = document.getElementById("blogs-container");

        // Clear the existing content
        blogsContainer.innerHTML = "";

        // Iterate through each blog and create elements
        blogsDataLS.forEach(blog => {
            const blogElement = document.createElement("div");
            blogElement.classList.add("card");

            const titleElement = document.createElement("h3");
            titleElement.textContent = blog.title;

            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = blog.description;

            const emailElement = document.createElement("strong");
            emailElement.textContent = `Author: ${blog.email}`;

            // Append individual elements to the blog container
            blogElement.appendChild(titleElement);
            blogElement.appendChild(descriptionElement);
            blogElement.appendChild(emailElement);

            // Append the blog container to the blogsContainer
            blogsContainer.appendChild(blogElement);
        });
    } catch (error) {
        console.log(error);
    }
}

window.addEventListener("DOMContentLoaded", displayBlogs);



function migrateToNew(){
    window.location.href = "http://127.0.0.1:5501";
}
