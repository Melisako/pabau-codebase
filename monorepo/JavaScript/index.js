document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('shuffleBtn').addEventListener('click', shuffleValues);
    document.getElementById('changeBtn').addEventListener('click', changeValues);
    document.getElementById('showSelectedBtn').addEventListener('click', showSelectedValues);
  });
  


  

  function shuffleValues() {
    const checkboxes = Array.from(document.querySelectorAll('input[type="checkbox"]'));
    const values = checkboxes.map(checkbox => checkbox.nextElementSibling.textContent.trim());
  
    values.sort(() => Math.random() - 0.5);
  
    checkboxes.forEach((checkbox, index) => {
      checkbox.nextElementSibling.textContent = values[index];
    });
  }
  


  
function changeValues() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]');
  const newValues = ['Melisa1', 'Melisa2', 'Melisa3', 'Melisa4'];

  checkboxes.forEach((checkbox, index) => {
    checkbox.value = newValues[index];
    checkbox.nextElementSibling.textContent = newValues[index]; 
  });

  console.log('Values changed to Melisa1, Melisa2, Melisa3, Melisa4');
}

const changeBtn = document.getElementById('changeBtn');
changeBtn.addEventListener('click', changeValues);

  
  
  function showSelectedValues() {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
    const selectedValues = Array.from(checkboxes).map(checkbox => checkbox.value);
  
    const selectedValuesDiv = document.getElementById('selectedValues');
    selectedValuesDiv.textContent = `Selected Values: ${selectedValues.join(', ')}`;
  }
  