import { createStore } from "vuex";

import kazanImage from "../../img/kazanTshirt.png";
import KrisisImage from "../../img/KrisisTshirt.png";
import csgoImage from "../../img/csgoTshirt.png";

const store = createStore({
  state() {
    return {
      products: [
        { id: 1, name: "kazan Tshirt", price: "322.000", src: kazanImage },
        { id: 2, name: "Krisis Tshirt", price: "510.000", src: KrisisImage },
        { id: 3, name: "csgo Tshirt", price: "951.000", src: csgoImage },
      ],
      todos: [],
    };
  },
  getters: {
    getProductId: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
  },

  mutations: {
    addToTodo(state, data) {
        state.todos.push(data)
    },
    removeTodo(state, data){
        state.todos.splice(data,1)
    }
  },
});

export default store;
