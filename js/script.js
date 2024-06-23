const formbox = document.getElementById('formbox');

formbox.addEventListener('submit', (e) => {
  e.preventDefault();

  let cityname = document.getElementById('cityName');

  city = cityname.value.trim();

  // let city = 'london';

  let key = '5ff9701c161994b778cfa0332e12fd9c';

  async function wheatherAPI(city, key) {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`;

    try {
      let response = await fetch(url);

      let data = await response.json();

      console.log(data);
    } catch (error) {
      console.log('error');
    }
  }
  wheatherAPI(city, key);

  city = cityname.value = '';
});
