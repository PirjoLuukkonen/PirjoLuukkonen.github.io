// Haetaan kurssit Frankfurter API:sta
fetch('https://api.frankfurter.app/latest?from=EUR')
  .then(response => response.json())
  .then(data => {
    const valuutat = ['USD', 'GBP', 'JPY', 'SEK', 'NOK'];
    const taulukko = document.getElementById('kurssitaulukko');
    taulukko.innerHTML = '';
    valuutat.forEach(val => {
      const rivi = document.createElement('tr');
      rivi.innerHTML = `<td>${val}</td><td>${data.rates[val]}</td>`;
      taulukko.appendChild(rivi);
    });
  })
  .catch(error => {
    document.getElementById('kurssitaulukko').innerHTML = '<tr><td colspan="2">Virhe valuuttatiedoissa</td></tr>';
    console.error('Virhe haettaessa valuuttoja:', error);
  });
