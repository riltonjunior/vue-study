  export default {
      name: "stock-today",
      data() {
        return {
          precoAcao: {},
        };
      },
      methods: {
        fetchAcao() {
            fetch("https://cloud.iexapis.com/stable/stock/aapl/quote?token=sk_a266a088874248aba4d354e7bd903142")
            .then(r => r.json())
            .then(r => {
                this.precoAcao = r.marketCap;
            })
        },
    },
    beforeMount() {
        this.fetchAcao();
    },
    template: `<div>Valor de Mercado: {{precoAcao}}</div>`
}