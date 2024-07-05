// assets/covid-tracker.js

document.addEventListener("DOMContentLoaded", function() {
  // URL of the API
  const apiURL = 'https://api.rootnet.in/covid19-in/stats/latest';

  // Function to fetch and display the COVID-19 data
  function fetchCovidData() {
    fetch(apiURL)
      .then(response => response.json())
      .then(data => {
        if (data.success) {
          // Extract necessary data
          const regions = data.data.regional;
          let tableRows = '';

          regions.forEach(location => {
            tableRows += `
              <tr>
                <td>${location.loc}</td>
                <td>${location.confirmedCasesIndian}</td>
                <td>${location.confirmedCasesForeign}</td>
                <td>${location.discharged}</td>
                <td>${location.deaths}</td>
                <td>${location.totalConfirmed}</td>
              </tr>
            `;
          });

          // Update the content of the table
          document.querySelector('#covid19-table tbody').innerHTML = tableRows;
        }
      })
      .catch(error => {
        console.error('Error fetching the COVID-19 data:', error);
      });
  }

  // Fetch the data when the page loads
  fetchCovidData();
});
