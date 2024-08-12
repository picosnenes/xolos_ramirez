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

// Create modal for adding new posts
const modal = document.createElement('div');
modal.className = 'modal';
modal.innerHTML = `
    <div class="modal-content">
        <span class="close">&times;</span>
        <h2>Añadir Nuevo Artículo</h2>
        <input type="text" id="post-title" placeholder="Título del artículo" required>
        <textarea id="post-content" placeholder="Contenido del artículo" required></textarea>
        <button id="submit-post" class="cta-button">Publicar</button>
    </div>
`;
document.body.appendChild(modal);

const closeBtn = modal.querySelector('.close');
const submitPostBtn = document.getElementById('submit-post');
const postTitleInput = document.getElementById('post-title');
const postContentInput = document.getElementById('post-content');

addPostBtn.onclick = () => modal.style.display = "block";
closeBtn.onclick = () => modal.style.display = "none";

submitPostBtn.onclick = () => {
    const title = postTitleInput.value.trim();
    const content = postContentInput.value.trim();
    if (title && content) {
        addNewPost(title, content);
        modal.style.display = "none";
        postTitleInput.value = '';
        postContentInput.value = '';
    }
};

// Initial display of blog posts
displayBlogPosts();
