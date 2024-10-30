/* 
  Homework 8 Question 1
*/

fetch('https://raw.githubusercontent.com/bpesquet/thejsway/master/resources/paintings.json')
  .then(response => response.json())
  .then(body => {
    const paintings = document.getElementById('paintings');
    body.forEach(element => {
      console.log(element);
      let nextRow = document.createElement('tr');
    
      let nameCell = document.createElement('td');
      nameCell.textContent = element.name;    
      nextRow.appendChild(nameCell);

      let yearCell = document.createElement('td');
      yearCell.textContent = element.year;
      nextRow.appendChild(yearCell);

      let artistCell = document.createElement('td');
      artistCell.textContent = element.artist;
      nextRow.appendChild(artistCell);
  
      paintings.appendChild(nextRow);
    
    });
  })
  .catch(err => {
    console.log(err);
  })
