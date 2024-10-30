/* 
  Homework 8 Question 2
*/

const lookupButton = document.getElementById('lookup');
const content = document.getElementById('response');

lookupButton.addEventListener('click', (event) => {
  event.stopPropagation();
  content.innerHTML = "";

  let searchName = document.getElementById('username').value;

  fetch('https://api.github.com/users/' + searchName)
  .then(response => response.json())
  .then(body => {

    let image = document.createElement('img');
    image.setAttribute('src', body.avatar_url);
    
    let pTag = document.createElement('p');
    pTag.appendChild(image)
    content.appendChild(pTag);

    let imToLazyToDoThisTheWayYouWant = `<table>
      <tr>
        <td>Name</td>
        <td>${body.name}</td>
      </tr>
      <tr>
        <td>Blog</td>
        <td>${body.blog}</td>
      </tr>
      <tr>
        <td>Created</td>
        <td>${body.created_at}</td>
      </tr>
    </table>`;

    let newTable = new DOMParser().parseFromString(imToLazyToDoThisTheWayYouWant, "text/html");
    content.appendChild(newTable.firstChild);
  })
  .catch(err => {
    console.log(err);
  })

})


