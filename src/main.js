import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import VueResource from 'vue-resource'
import * as firebase from 'firebase'

Vue.config.productionTip = false
Vue.use(VueResource)
Vue.use(firebase)

new Vue({
  router,
  store,
  render: h => h(App),
  created () {
    firebase.initializeApp({
      apiKey: 'AIzaSyDKvjn0kvMNVNoCA1ppQfz1OoIqAxBUY3E',
      authDomain: 'kappa-28ee7.firebaseapp.com',
      databaseURL: 'https://kappa-28ee7.firebaseio.com',
      projectId: 'kappa-28ee7',
      storageBucket: 'kappa-28ee7.appspot.com',
      messagingSenderId: '510524615605'
    })
    const db = firebase.firestore()
    db.settings({timestampsInSnapshots: true})
  }
}).$mount('#app')

Vue.filter('toUppercase', value => {
  if (value !== undefined) {
    return value.toUpperCase()
  } else {
    return value
  }
})
