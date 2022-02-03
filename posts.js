const posts = [
    {name: "post 1", author: "author 1"},
    {name: "post 2", author: "author 2"},
    {name: "post 3", author: "author 3"}
]

const addPost = (newPost) => {
    return new Promise((resolve, reject) => {
        console.log("postlar listeleniyor...");
        if(newPost) {
            posts.push(newPost)
            resolve("Yeni post eklendi.") 
        }
        else{
            reject("BIR HATA OLUSTU")
        }
    })
}

const listPosts = async () => {
    posts.map((post) => {
        console.log(post.name)
    })
}

const showPost = async () => {
    try{
        await addPost({name: "post 4", author: "author 4"})
        listPosts();
    }
    catch(err){
        console.log(err);
    }
}

showPost()