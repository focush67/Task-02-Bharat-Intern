async function submitBlog(){
    var title = document.getElementById("title").value;
    var description = document.getElementById("description").value;
    var email = document.getElementById("email").value;

    console.log("Form: ",{title,description,email});

    const data = {title,description,email};

    try {
        const response = await fetch("http://localhost:5501/api/create" , {
            method: "POST",
            body: JSON.stringify(data),
            headers:{
                'Content-Type': "application/json",
            }
        })

        const responseData = await response.json();
        if(responseData){
            alert("Response received at backend");
        }
        console.log(responseData);
    } catch (error) {
        console.log(error);
    }

}


function seeAllBlogs(){
    window.location.href = "http://127.0.0.1:5501/backend/"
}

