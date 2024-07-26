document.addEventListener("DOMContentLoaded", function() {
    // Array of blog posts
    const blogPosts = [
        { title: "Exploring the Alps", date: "2024-06-01", content: "A thrilling adventure in the Alps..." },
        { title: "Beaches of Thailand", date: "2024-05-15", content: "Relaxing on the pristine beaches..." },
        { title: "Safari in Kenya", date: "2024-04-20", content: "An unforgettable safari experience..." }
    ];
  
    // Populate latest posts on the home page
    const latestPostsDiv = document.getElementById("posts");
    blogPosts.slice(0, 2).forEach(post => {
        const postDiv = document.createElement("div");
        postDiv.classList.add("post");
        postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.date}</p><p>${post.content}</p>`;
        latestPostsDiv.appendChild(postDiv);
    });
  
    // Populate all posts on the blog page
    const allPostsDiv = document.getElementById("posts-list");
    if (allPostsDiv) {
        blogPosts.forEach(post => {
            const postDiv = document.createElement("div");
            postDiv.classList.add("post");
            postDiv.innerHTML = `<h3>${post.title}</h3><p>${post.date}</p><p>${post.content}</p>`;
            allPostsDiv.appendChild(postDiv);
        });
    }
  
    // Contact form submission counter using localStorage
    const contactForm = document.getElementById("contactForm");
    if (contactForm) {
        contactForm.addEventListener("submit", function() {
            let submissionCount = localStorage.getItem("submissionCount") || 0;
            submissionCount++;
            localStorage.setItem("submissionCount", submissionCount);
        });
    }
  });
  
