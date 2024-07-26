document.addEventListener('DOMContentLoaded', () => {
  const select = document.getElementById('selectOption');
  const inputList = document.getElementById('inputList');
  const displayOptions = document.getElementById('displayOptions');

  select.addEventListener('change', () => {
    if (displayOptions.children.length < 4) {
      const optionText = select.options[select.selectedIndex].text;
      const optionDiv = document.createElement('div');
      optionDiv.textContent = optionText;
      optionDiv.className = 'badge bg-secondary';

      const deleteButton = document.createElement('button');
      deleteButton.textContent = 'X';
      deleteButton.className = 'btn btn-danger btn-sm ms-2';
      
      // Usar addEventListener en lugar de onclick
      deleteButton.addEventListener('click', () => {
        optionDiv.remove();
        updateInput();
      });

      optionDiv.appendChild(deleteButton);
      displayOptions.appendChild(optionDiv);
      updateInput();
    } else {
      alert('Solo puedes seleccionar un máximo de 4 opciones.');
    }
    select.selectedIndex = 0;
  });

  const updateInput = () => {
    const allOptions = Array.from(displayOptions.children).map(opt => opt.firstChild.textContent);
    inputList.value = allOptions.join(', ');
  };
});

/* Url base de datos */
let urlData = 'https://proyectonew-3bc5c-default-rtdb.firebaseio.com/posts'

/* Guardar post y subirlo a la base de datos */

let savePost = document.getElementById('save-post')

savePost.addEventListener("click", async () => {
  let inputs = document.querySelectorAll('#create-post input')

  let postObject = {}

  inputs.forEach(({name, value}) => {
    postObject[name] = value
  })
  console.log(postObject)
  await dataPost(postObject)
})

const dataPost = async (postObject) => {
  let response = await fetch(
    `${urlData}/.json`,
    {
      method: "POST",
      body: JSON.stringify(postObject),
    }
  )
  let data = await response.json();
  console.log(data)
  return data
};

/* Traer informacion de base de datos */

const getPost = async () => {
 const response = await fetch(`${urlData}/posts`, {
   method: "GET",
 });

 const json = await response.json();

 return json.data.posts;
 console.log(json.data.posts);
};

const editPostById = async (koderKey, newData) => {
  let response = await fetch(
    `${urlData}/${koderKey}/.json`,
    {
      method: "PUT",
      body: JSON.stringify(newData),
    }
  );

  let data = await response.json();
  console.log(data);
  return data
};

const deletePostById = async (koderKey) => {
  let response = await fetch(
    `${urlData}/${koderKey}/.json`,
    {
      method: "DELETE",
    }
  );
  let data = await response.json();
  console.log(data);
  return data
};


getPost()

export {getPost, dataPost}

let cardImage = document.createElement("img");
    cardImage.setAttribute("src", imagen);
    cardImage.classList.add("blog-card__card-img");