/* 
  Homework 8 Question 4
*/

document.getElementById('myForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  console.log(formData.values());
  let rawHTML = `
  <table>
    <tr>
      <th>Key</th><th>Value</th>
    </tr>`;
  for(const entry of formData.entries()) {
    console.log(entry);

    rawHTML += `<tr>
      <td>${entry[0]}</td>
      <td>${entry[1]}</td>
    </tr>`;
  }
  rawHTML += '</table>';

  let parsedHtml = new DOMParser().parseFromString(rawHTML, "text/html");
  let newTable = parsedHtml.querySelector('table');

  let resultheading = document.createElement('b');
  resultheading.textContent = 'Form Data Entered';
  document.getElementById('results').appendChild(resultheading);
  document.getElementById('results').appendChild(newTable);
});



