const ListaProdutos = {
  name: "ListaProdutos",
  props: ["classes"],
  template: `<ul>
  <li v-for="classe in classes">{{classe}}</li>
  </ul>`
}

const vm = new Vue({
  el: "#app",
  data: {
    tipos: ["Herói", "Monstro", "Humano", "Suporte"]
  },
  components: {
    ListaProdutos
  }
})
