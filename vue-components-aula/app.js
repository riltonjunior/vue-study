
import WeatherToday from "./components/WeatherToday.js"
// import WeatherToday2 from "./components/WeatherToday-2v.js"
import CurrencyToday from "./components/CurrencyToday.js"

// Vue.component("weather-today", WeatherToday)

const vm = new Vue({
  el: "#app",
  components: {
    CurrencyToday
  }
})

/*
  Crie uma tela com 3 diferentes Componentes.

  1 - Mostre o tempo do dia usando a API:
  https://www.metaweather.com/api/location/455825/ (Código do Rio de Janeiro)

  2 - Mostre a relação dolar/real
  https://api.exchangeratesapi.io/latest?base=USD

  3 - Mostre o valor de mercado da Apple (marketCap)
  https://api.iextrading.com/1.0/stock/aapl/quote

  Crie os componentes em arquivos separados e utilize import/export
  O componente 1 deve ser registrado globalmente
  O componente 2 deve ser registrado localmente dentro do componente 3.
  O componente 3 deve ser registrado localmente da instância Vue.js
*/
