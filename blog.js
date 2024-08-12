// Blog functionality
const blogPosts = [
    {
        title: "La Historia del Xoloitzcuintle",
        content: "El Xoloitzcuintle, también conocido como perro pelón mexicano, tiene una historia que se remonta a más de 3,000 años...",
        date: "2024-08-01"
    },
    {
        title: "Cuidados Especiales para tu Xolo",
        content: "Aunque los Xoloitzcuintles son perros relativamente fáciles de cuidar, tienen algunas necesidades específicas...",
        date: "2024-08-05"
    }
];

const blogPostsContainer = document.getElementById('blog-posts');
const addPostBtn = document.getElementById('add-post-btn');
const addPostModal = document.getElementById('add-post-modal');
const closeBtn = addPostModal.querySelector('.close');
const submitPostBtn = document.getElementById('submit-post');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');

function displayBlogPosts() {
    blogPostsContainer.innerHTML = '';
    blogPosts.forEach(post => {
        const postElement = document.createElement('div');
        postElement.className = 'blog-post';
        postElement.innerHTML = `
            <h3>${post.title}</h3>
            <p class="date">${post.date}</p>
            <p>${post.content}</p>
        `;
        blogPostsContainer.appendChild(postElement);
    });
}

function addNewPost(title, content) {
    const newPost = {
        title: title,
        content: content,
        date: new Date().toISOString().split('T')[0]
    };
    blogPosts.unshift(newPost);
    displayBlogPosts();
}

addPostBtn.onclick = () => addPostModal.style.display = "block";
closeBtn.onclick = () => addPostModal.style.display = "none";

submitPostBtn.onclick = () => {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();
    if (title && content) {
        addNewPost(title, content);
        addPostModal.style.display = "none";
        postTitleInput.value = '';
        postContentInput.value = '';
    }
};

// Initial display of blog posts
displayBlogPosts();
