import toasted from 'vue-toasted'
import Vue from 'vue'

Vue.use(toasted);

export default function notify(message) {
  Vue.toasted.show(message, {
    theme: "primary",
    position: "bottom-right",
    duration: 4000,
    type: "success"
  });
}
