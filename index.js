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

getPost()

export {getPost, dataPost}