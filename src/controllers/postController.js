import views from '../views/post.html'

const getPost = async() => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    return await response.json();
}

export default async() => {
const divElement = document.createElement('div');
divElement.innerHTML = views;

const postsElement = divElement.querySelector('#post');

const post = await getPost();

const totalPost = divElement.querySelector('#totalPost');
totalPost.innerHTML = post.length;

post.forEach(post => {
    postsElement.innerHTML += `
    <li class="list-group-item border-primary bg-dark text-white">
        <h5>${post.title}</h5>
        <p>
        ${post.body}
        </p>
    </li>
    `
})

return divElement;
}