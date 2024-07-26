function createArticle() {
    // Contenedor principal del artículo
    const article = document.createElement('article');
    article.id = "article-1829146";
    article.classList.add("crayons-story", "cursor-pointer");
    article.dataset.feedContentId = "1829146";
    article.dataset.contentUserId = "950976";
    article.dataset.feedPosition = "3";

    // Link oculto de navegación
    const navigationLink = document.createElement('a');
    navigationLink.href = "/copilotkit/30-ai-libraries-you-can-use-for-your-next-project-ideas-5ded";
    navigationLink.setAttribute('aria-labelledby', "article-link-1829146");
    navigationLink.classList.add("crayons-story__hidden-navigation-link");
    navigationLink.textContent = "30+ AI projects you can build today";
    article.appendChild(navigationLink);

    // Div de presentación
    const presentationDiv = document.createElement('div');
    presentationDiv.setAttribute('role', "presentation");

    // Cuerpo de la historia
    const storyBody = document.createElement('div');
    storyBody.classList.add("crayons-story__body");

    // Parte superior de la historia
    const storyTop = document.createElement('div');
    storyTop.classList.add("crayons-story__top");

    // Meta información de la historia
    const storyMeta = document.createElement('div');
    storyMeta.classList.add("crayons-story__meta");

    // Imagen del autor
    const authorPic = document.createElement('div');
    authorPic.classList.add("crayons-story__author-pic");

    const authorLink = document.createElement('a');
    authorLink.href = "/copilotkit";
    authorLink.classList.add("crayons-logo", "crayons-logo--l");

    const authorImg = document.createElement('img');
    authorImg.src = "https://media.dev.to/cdn-cgi/image/width=90,height=90,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Forganization%2Fprofile_image%2F7820%2F596b761b-7301-45c4-b0c0-e7136d9f850f.png";
    authorImg.alt = "CopilotKit logo";
    authorImg.loading = "lazy";
    authorImg.classList.add("crayons-logo__image");
    authorLink.appendChild(authorImg);
    authorPic.appendChild(authorLink);

    storyMeta.appendChild(authorPic);

    const authorName = document.createElement('div');
    const nameLink = document.createElement('a');
    nameLink.href = "/anmolbaranwal";
    nameLink.classList.add("crayons-story__secondary", "fw-medium", "m:hidden");
    nameLink.textContent = "Anmol Baranwal";
    authorName.appendChild(nameLink);

    const timeDiv = document.createElement('div');
    const timeLink = document.createElement('a');
    timeLink.href = "/copilotkit/30-ai-libraries-you-can-use-for-your-next-project-ideas-5ded";
    timeLink.classList.add("crayons-story__tertiary", "fs-xs");
    const time = document.createElement('time');
    time.setAttribute('datetime', "2024-05-07T07:07:56Z");
    time.title = "martes, 7 de mayo de 2024, 01:07:56";
    time.textContent = "May 7 (1 day ago)";
    timeLink.appendChild(time);
    timeDiv.appendChild(timeLink);

    storyMeta.appendChild(authorName);
    storyMeta.appendChild(timeDiv);

    storyTop.appendChild(storyMeta);
    storyBody.appendChild(storyTop);
    presentationDiv.appendChild(storyBody);
    article.appendChild(presentationDiv);

    return article;
}

// Añadir el artículo al body o cualquier otro contenedor deseado
const articleElement = createArticle();
document.getElementById("main-posts");
