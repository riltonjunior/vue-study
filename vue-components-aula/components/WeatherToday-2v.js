
export default {
    name: "weather-today",
    data() {
      return {
        maxTemp: {},
      };
    },
    methods: {
      fetchMaxTemp() {
        fetch("https://www.metaweather.com/api/location/455825/")
        .then(r => r.json())
        .then(r => {
            this.maxTemp = r.consolidated_weather[0].max_temp.toFixed(2);
        })
      },
  },
  beforeMount() {
    this.fetchMaxTemp();
  },
    template: `<div>Max Temp: {{maxTemp}}</div>`
  }
    
 
  