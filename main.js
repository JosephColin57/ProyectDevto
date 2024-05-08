let urlData = 'https://proyectonew-3bc5c-default-rtdb.firebaseio.com/posts'

const getPost = async () => {
    let response = await fetch(
      `${urlData}/.json`)
    let posts = await response.json();
    console.log(posts)
  
    let keys = Object.keys(posts);
    console.log(keys)
  
    let postArray = keys.map((key) => {
      return { ...posts[key], key }
    })
    console.log(postArray)
    return postArray
  };

  const separateClassNames = (classNamesString) => classNamesString.split(" ");

  const createBlogCard = (entryObject) => {
    let { autor, avatar, imagen, titulo, contenido, fecha, tags } = entryObject;

    let card = document.createElement("div");
    card.classList.add("card");
  
    let cardImage = document.createElement("img");
    cardImage.setAttribute("src", imagen);
    cardImage.classList.add("blog-card__card-img");
  
    let cardBody = document.createElement("div");
    cardBody.classList.add("card-body");
  
    let cardTitle = document.createElement("h3");
    cardTitle.classList.add("card-title");
    let cardTitleText = document.createTextNode(titulo);
    cardTitle.append(cardTitleText);
  
    let cardText = document.createElement("p");
    cardText.classList.add("card-text");
    let cardTextContent = document.createTextNode(contenido);
    cardText.append(cardTextContent);
  
    let cardAuthor =  document.createElement("div");
    cardAuthor.classList.add(
      ...separateClassNames(
        "author-container d-flex align-items-start gap-2 p-2 mb-1 fs"
      )
    );
  
    let avatarImage = document.createElement("img");
    avatarImage.classList.add(
      ...separateClassNames("author-container__avatar rounded-circle")
    );
    avatarImage.setAttribute("src", avatar);

    let containerAutor = document.createElement("div")
    containerAutor.classList.add("d-flex")
  
    let authorHeading = document.createElement("span");
    authorHeading.classList.add(...separateClassNames("m-0 fs"));
    let authorName = document.createTextNode(autor);
    authorHeading.append(authorName);

    let datePost = document.createElement("span")
    datePost.classList.add("fss")
    let printDate = document.createTextNode(fecha)
    datePost.append(printDate)

    containerAutor.append(authorHeading,datePost)

    let cardTags = document.createElement('div')
    cardTags.classList.add(...separateClassNames("d-flex flex-wrap fs-6"))
    let tagsName = document.createTextNode(tags)
    cardTags.append(tagsName)

    const imgSrcs = [
        "https://dev.to/assets/fire-f60e7a582391810302117f987b22a8ef04a2fe0df7e3258a5f49332df1cec71e.svg",
        "https://dev.to/assets/raised-hands-74b2099fd66a39f2d7eed9305ee0f4553df0eb7b4f11b01b6b1b499973048fe5.svg",
        "https://dev.to/assets/exploding-head-daceb38d627e6ae9b730f36a1e390fca556a4289d5a41abb2c35068ad3e2c4b5.svg",
        "https://dev.to/assets/multi-unicorn-b44d6f8c23cdd00964192bedc38af3e82463978aa611b4365bd33a0f1f4f3e97.svg",
        "https://dev.to/assets/sparkle-heart-5f9bee3767e18deb1bb725290cb151c25234768a0e9a2bd39370c382d02920cf.svg"
    ];
    
    let react = document.createElement("span");
    react.classList.add(...separateClassNames("react"));
    imgSrcs.forEach(src => {
        let img = document.createElement("img");
        img.src = src;
        img.classList.add("fsi")
        react.append(img);
    });
    
    let containerReact = document.createElement("span");
    containerReact.classList.add(...separateClassNames("d-flex align-items-center flex-row"));
    containerReact.append(react);
    
    let containerNumberReact = document.createElement("span");
    containerNumberReact.className = "ms-1";
    let numberReact = document.createElement("span");
    numberReact.classList.add("fss")
    numberReact.textContent = "15 Reactions";
    containerNumberReact.append(numberReact);
    
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
    numberComment.textContent = "4 Comments";
    containercomment.append(numberComment);

    let containerReadtime = document.createElement("div")
    containerReadtime.classList.add(...separateClassNames("d-flex align-items-center ms-4"))
    let readTime = document.createElement("span")
    readTime.classList.add(...separateClassNames("fss ms"))
    readTime.textContent = "20 min read"
    containerReadtime.append(readTime)
    
    let bodyCardReact = document.createElement("div");
    bodyCardReact.classList.add(...separateClassNames("d-flex align-items-center"));
    bodyCardReact.append(containerReact, containerNumberReact, containercomment, containerReadtime);
    
    let cardReact = document.createElement("div");
    cardReact.classList.add(...separateClassNames("d-flex ms-1"));
    cardReact.append(bodyCardReact);
    
    let bodyReactions = document.createElement("div");
    bodyReactions.classList.add(...separateClassNames("d-flex justify-content-between align-items-center body_react"));
    bodyReactions.append(cardReact);


    cardAuthor.append(avatarImage, containerAutor);
  
    cardBody.append(cardAuthor, cardTitle, cardText, cardTags, bodyReactions);
    card.append(cardImage, cardBody);
  
    return card;
  };
  
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


  const createBlogCardsecondary = (entryObject) => {
    let { autor, titulo, fecha, tags } = entryObject;

    // Contenedor principal de la tarjeta
    let cardcontainer = document.createElement("div");
    cardcontainer.classList.add("card", "blog-card", "mb-1");

    // Subcontenedor dentro de la tarjeta (cuerpo)
    let cardcontainersub = document.createElement("div");
    cardcontainersub.classList.add("card-body");

    // Contenedor para el autor y la fecha
    let cardAutorBody = document.createElement("div");
    cardAutorBody.classList.add(...separateClassNames("d-flex align-items-center justify-content-between mb"));

    // Contenedor para la imagen y el nombre/fecha del autor
    let autorPic = document.createElement("div");
    autorPic.classList.add("ap");

    // Imagen del autor
    let imgAutor = document.createElement("img");
    imgAutor.setAttribute("src", "https://randomuser.me/api/portraits/women/2.jpg");
    imgAutor.classList.add("author-container__avatar");
    autorPic.append(imgAutor); // Agregamos la imagen al contenedor del autor

    // Elemento para el nombre del autor
    let autorName = document.createElement("span");
    autorName.textContent = autor;
    let autorDate = document.createElement("span");
    autorDate.textContent = fecha;

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
    postTitle.textContent = titulo;

    // Agregamos el título al cuerpo del post
    postBody.appendChild(postTitle);

    // Añadir el cuerpo del autor y el post al subcontenedor
    cardcontainersub.appendChild(cardAutorBody);
    cardcontainersub.appendChild(postBody);

    // Finalmente, añadimos todo al contenedor principal
    cardcontainer.appendChild(cardcontainersub);

    let containerTags = document.createElement("div")
    containerTags.classList.add(...separateClassNames("d-flex flex-wrap ct"))
    containerTags.textContent = tags

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
    numberReact.textContent = "75 Reactions";
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
    numberComment.textContent = "4 Comments";
    containercomment.append(numberComment);

    let containerReadtime = document.createElement("div")
    containerReadtime.classList.add(...separateClassNames("d-flex align-items-center ms-4"))
    let readTime = document.createElement("span")
    readTime.classList.add(...separateClassNames("fss ms"))
    readTime.textContent = "20 min read"
    containerReadtime.append(readTime)
    containerReact.append(containercomment, containerReadtime)
    
    cardcontainersub.append(cardAutorBody, postBody, containerTags, containerReact);
    cardcontainer.append(cardcontainersub);

    return cardcontainer;

    }

    const printBlogCardssecondary = (blogData, wrapperId) => {
      let wrapper = document.getElementById(wrapperId);
      // Usar slice(1) para obtener un nuevo array que comience desde el segundo elemento
      const remainingPosts = blogData.slice(1);
  
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

    