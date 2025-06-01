fetch('https://api.site.com/data')
  .then(response => {
    // Vérifie dustatus status 200-299
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    for (let i = 0; i < data.length; i++) {
      document.getElementById('products').innerHTML += `<li>${data[i].name}</li>`;
    }
  })
  .catch(error => {
    // Gestion simple des erreurs réseau ou HTTP
    console.error('Fetch error:', error);
  });
