import StockToday from "./StockToday.js"

export default {
    name: "currency-today",
    components: {
      StockToday,
    },
    data() {
      return {
        currency: {},
      };
    },
    methods: {
      fetchCurrency() {
        fetch("https://api.exchangeratesapi.io/latest?base=AUD")
        .then(r => r.json())
        .then(r => {
            this.currency = r.rates.BRL.toFixed(2);
        })
      },
  },
  beforeMount() {
    this.fetchCurrency();
  },
    template: `<div>AUD to BRL: {{currency}}<br><stock-today></stock-today></div>`
  }