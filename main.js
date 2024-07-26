let API_URL = "https://api.josephcolindev.xyz";

const getPost = async () => {
    const response = await fetch(`${API_URL}/posts`, {
      method: "GET",
    });

    const json = await response.json();

    return json.data.posts;
    console.log(json.data.posts);
  };

  const separateClassNames = (classNamesString) => classNamesString.split(" ");

  const createBlogCard = (posts) => {
    const { profilePic, name } = posts.user;
    const { createdAt, title, image } = posts;

    // Contenedor principal de la tarjeta
    let cardcontainer = document.createElement("div");
    cardcontainer.classList.add("card", "blog-card", "mb-1");

    // Subcontenedor dentro de la tarjeta (cuerpo)
    let cardcontainersub = document.createElement("div");
    cardcontainersub.classList.add("card-body");

    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", image);
    cardImage.classList.add("blog-card__card-img");
    cardcontainersub.append(cardImage)

    // Contenedor para el autor y la fecha
    let cardAutorBody = document.createElement("div");
    cardAutorBody.classList.add(...separateClassNames("d-flex align-items-center justify-content-between mb"));

    // Contenedor para la imagen y el nombre/fecha del autor
    let autorPic = document.createElement("div");
    autorPic.classList.add("ap");

    // Imagen del autor
    let imgAutor = document.createElement("img");
    imgAutor.setAttribute("src", profilePic);
    imgAutor.classList.add("author-container__avatar");
    autorPic.append(imgAutor); // Agregamos la imagen al contenedor del autor

    // Elemento para el nombre del autor
    let autorName = document.createElement("span");
    autorName.textContent = name;
    let autorDate = document.createElement("span");
    autorDate.textContent = new Date(createdAt)
      .toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
      })
      .replace(" de ", " ");

    // Contenedor para nombre y fecha del autor
    let containerAutorDate = document.createElement("div");
    containerAutorDate.classList.add("aps")
    containerAutorDate.append(autorName);
    containerAutorDate.append(autorDate);

    // Agregamos la imagen y el nombre/fecha al cuerpo principal del autor
    cardAutorBody.appendChild(autorPic);
    cardAutorBody.appendChild(containerAutorDate);

    // Cuerpo del post (título)
    let postBody = document.createElement("div");
    postBody.classList.add("box");

    // Título del post
    let postTitle = document.createElement("h2");
    postTitle.classList.add(...separateClassNames("pt"));
    postTitle.textContent = title;

    // Agregamos el título al cuerpo del post
    postBody.appendChild(postTitle);

    // Añadir el cuerpo del autor y el post al subcontenedor
    cardcontainersub.appendChild(cardAutorBody);
    cardcontainersub.appendChild(postBody);

    // Finalmente, añadimos todo al contenedor principal
    cardcontainer.appendChild(cardcontainersub);

    let containerTags = document.createElement("div")
    containerTags.classList.add(...separateClassNames("d-flex flex-wrap ct"))
    containerTags.textContent = "#Javascript #discuss #jokes"

    const imgSrcs = [
        "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
        "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
        "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
        "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
        "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
    ];
    
    let react = document.createElement("span");
    react.classList.add("react");
    imgSrcs.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("fsi")
        react.append(img);
    });
    
    let containerReact = document.createElement("span");
    containerReact.classList.add(...separateClassNames("d-flex align-items-center flex-row fs-6"));
    containerReact.append(react);
    
    let containerNumberReact = document.createElement("span");
    containerNumberReact.className = "ms-1";
    let numberReact = document.createElement("span");
    numberReact.classList.add("fss")
    numberReact.textContent = `${Math.floor(Math.random() * 100)} Reactions`;
    containerNumberReact.append(numberReact);
    containerReact.append(containerNumberReact)
    
    let containercomment = document.createElement("div");
    containercomment.classList.add(...separateClassNames("d-flex align-items-center ps-2"));
    let svgContainer = document.createElement("div");
    svgContainer.innerHTML = `
    <svg class="fsi" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50">
        <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
    </svg>
    `;
    containercomment.append(svgContainer);
    
    let numberComment = document.createElement("span");
    numberComment.classList.add("fss")
    numberComment.textContent = `${Math.floor(Math.random() * 100)} comments`;
    containercomment.append(numberComment);

    let containerReadtime = document.createElement("div")
    containerReadtime.classList.add(...separateClassNames("d-flex align-items-center ms-4"))
    let readTime = document.createElement("span")
    readTime.classList.add(...separateClassNames("fss ms"))
    readTime.textContent = `${Math.floor(Math.random() * 100)} min read`;
    containerReadtime.append(readTime)
    containerReact.append(containercomment, containerReadtime)
    
    cardcontainersub.append(cardAutorBody, postBody, containerTags, containerReact);
    cardcontainer.append(cardcontainersub);

    return cardcontainer;
  }
  
  const printBlogCards = (blogData, wrapperId) => {
    let wrapper = document.getElementById(wrapperId);
    if (blogData.length > 0) {
      let blogCard = createBlogCard(blogData[0]); // Accede al primer elemento del array
      wrapper.append(blogCard);
      }
  };
  
  const printAllPost = async () => {
    let postArray = await getPost();
    printBlogCards(postArray, "mainPost");
  };

  printAllPost()


  const createBlogCardsecondary = (posts) => {
    const { profilePic, name } = posts.user;
    const { createdAt, title, image } = posts;

    // Contenedor principal de la tarjeta
    let cardcontainer = document.createElement("div");
    cardcontainer.classList.add("card", "blog-card", "mb-1");

    // Subcontenedor dentro de la tarjeta (cuerpo)
    let cardcontainersub = document.createElement("div");
    cardcontainersub.classList.add("card-body");

    // Contenedor para el autor y la fecha
    let cardAutorBody = document.createElement("div");
    cardAutorBody.classList.add(
      ...separateClassNames(
        "d-flex align-items-center justify-content-between mb"
      )
    );

    // Contenedor para la imagen y el nombre/fecha del autor
    let autorPic = document.createElement("div");
    autorPic.classList.add("ap");

    // Imagen del autor
    let imgAutor = document.createElement("img");
    imgAutor.setAttribute("src", profilePic);
    imgAutor.classList.add("author-container__avatar");
    autorPic.append(imgAutor); // Agregamos la imagen al contenedor del autor

    // Elemento para el nombre del autor
    let autorName = document.createElement("span");
    autorName.textContent = name;
    let autorDate = document.createElement("span");
    autorDate.textContent = new Date(createdAt)
      .toLocaleDateString("es-ES", {
        day: "numeric",
        month: "short",
      })
      .replace(" de ", " ");

    // Contenedor para nombre y fecha del autor
    let containerAutorDate = document.createElement("div");
    containerAutorDate.classList.add("aps");
    containerAutorDate.append(autorName);
    containerAutorDate.append(autorDate);

    // Agregamos la imagen y el nombre/fecha al cuerpo principal del autor
    cardAutorBody.appendChild(autorPic);
    cardAutorBody.appendChild(containerAutorDate);

    // Cuerpo del post (título)
    let postBody = document.createElement("div");
    postBody.classList.add("box");

    // Título del post
    let postTitle = document.createElement("h2");
    postTitle.classList.add(...separateClassNames("pt"));
    postTitle.textContent = title;

    // Agregamos el título al cuerpo del post
    postBody.appendChild(postTitle);

    // Añadir el cuerpo del autor y el post al subcontenedor
    cardcontainersub.appendChild(cardAutorBody);
    cardcontainersub.appendChild(postBody);

    // Finalmente, añadimos todo al contenedor principal
    cardcontainer.appendChild(cardcontainersub);

    let containerTags = document.createElement("div");
    containerTags.classList.add(...separateClassNames("d-flex flex-wrap ct"));
    containerTags.textContent = "#Javascript #discuss #jokes";

    const imgSrcs = [
      "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
      "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
      "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
      "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
      "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg",
    ];

    let react = document.createElement("span");
    react.classList.add("react");
    imgSrcs.forEach((src) => {
      let img = document.createElement("img");
      img.src = src;
      img.classList.add("fsi");
      react.append(img);
    });

    let subcontenedorreact = document.createElement("div");

    let containerReact = document.createElement("span");
    containerReact.classList.add(
      ...separateClassNames("d-flex align-items-center flex-row fs-6")
    );
    containerReact.append(react);

    let containerNumberReact = document.createElement("span");
    containerNumberReact.className = "ms-1";
    let numberReact = document.createElement("span");
    numberReact.classList.add("fss");
    numberReact.textContent = `${Math.floor(Math.random() * 100)} Reactions`;

     // Asegurarse de que left y top funcionen

    containerNumberReact.append(numberReact);
    containerReact.append(containerNumberReact);

    let containercomment = document.createElement("div");
    containercomment.classList.add(
      ...separateClassNames("d-flex align-items-center ps-2")
    );
    let svgContainer = document.createElement("div");
    svgContainer.innerHTML = `
    <svg class="fsi" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 50 50">
        <path d="M 25 4.0625 C 12.414063 4.0625 2.0625 12.925781 2.0625 24 C 2.0625 30.425781 5.625 36.09375 11 39.71875 C 10.992188 39.933594 11 40.265625 10.71875 41.3125 C 10.371094 42.605469 9.683594 44.4375 8.25 46.46875 L 7.21875 47.90625 L 9 47.9375 C 15.175781 47.964844 18.753906 43.90625 19.3125 43.25 C 21.136719 43.65625 23.035156 43.9375 25 43.9375 C 37.582031 43.9375 47.9375 35.074219 47.9375 24 C 47.9375 12.925781 37.582031 4.0625 25 4.0625 Z M 25 5.9375 C 36.714844 5.9375 46.0625 14.089844 46.0625 24 C 46.0625 33.910156 36.714844 42.0625 25 42.0625 C 22.996094 42.0625 21.050781 41.820313 19.21875 41.375 L 18.65625 41.25 L 18.28125 41.71875 C 18.28125 41.71875 15.390625 44.976563 10.78125 45.75 C 11.613281 44.257813 12.246094 42.871094 12.53125 41.8125 C 12.929688 40.332031 12.9375 39.3125 12.9375 39.3125 L 12.9375 38.8125 L 12.5 38.53125 C 7.273438 35.21875 3.9375 29.941406 3.9375 24 C 3.9375 14.089844 13.28125 5.9375 25 5.9375 Z"></path>
    </svg>
    `;
    containercomment.append(svgContainer);

    let numberComment = document.createElement("span");
    numberComment.classList.add("fss");
    numberComment.textContent = `${Math.floor(Math.random() * 100)} Comments`;
    containercomment.append(numberComment);

    subcontenedorreact.append(containerReact, containercomment);

    let containerReadtime = document.createElement("div");
    containerReadtime.classList.add(
      ...separateClassNames("d-flex align-items-center ms-4")
    );
    let readTime = document.createElement("span");
    readTime.classList.add(...separateClassNames("fss ms"));
    readTime.textContent = `${Math.floor(Math.random() * 100)} min read`;
    containerReadtime.append(readTime);
    containerReact.append(containercomment, containerReadtime);

    cardcontainersub.append(
      cardAutorBody,
      postBody,
      containerTags,
      containerReact
    );
    cardcontainer.append(cardcontainersub);

    return cardcontainer;
  }

    const printBlogCardssecondary = (posts, wrapperId) => {
      let wrapper = document.getElementById(wrapperId);
      // Usar slice(1) para obtener un nuevo array que comience desde el segundo elemento
      const remainingPosts = posts.slice(1);
  
      // Iterar sobre remainingPosts en lugar de blogData para excluir el primer registro
      remainingPosts.forEach((entry) => {
          let blogCard = createBlogCardsecondary(entry);
          wrapper.append(blogCard);
      });
  };
  
    const printAllPostSecundary = async () => {
      let postArray = await getPost();
      printBlogCardssecondary(postArray, "sub-container");
    };
  
    printAllPostSecundary()

    