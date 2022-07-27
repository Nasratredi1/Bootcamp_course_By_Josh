const posts = [
    {title: 'Post One', body: 'This is Post One'},
    {title: 'Post Two', body: 'This is Post Two'}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title} </li>`;
        });

        document.body.innerHTML = output;
    }, 1000);
}

function createPost(post, callback) {
    return new Promise((resolve, reject) => {  // retrun callback
       setTimeout(() => {
            posts.push(post);

            //const error = false;
            const error = true;

            if (!error) {
                resolve();
            } else {
                reject ('Error: Something went wrong'); 
            }
           },2000);
    
    }); 
}

// createPost({ title: 'post Three', body: 'this is post three'})
// . then(getPosts)
// .catch(err => console.log(err));

// promise.all  if there is multiple promises.

const promise1 = Promise.resolve('Hello World');
const promise2 = 10;
const promise3 = new Promise((resolve, reject)=> 
    setTimeout(resolve,2000,'Goodbye'));

    promise.all([promise1,promise2,promise3]).then((values) =>
    console.log(Values));

// promises

/*
so basically when you want to resolve a promise successfully you call
resolve when something goes wrong if you have some kind of error you want to call reject.


after seeing the output:  so basically it's waiting it's gonna it
s setting the timeout and then as soon as it's done it's gonna resolve once 
it's resolve it'll call get posts.

 if we wanna to error message.

 then we used .then and .catch keyword.




*/