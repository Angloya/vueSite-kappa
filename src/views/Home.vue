<template>
<div class="home">
  <contact id="home"/>
  <div class="photo">
    <div v-for="img in images" :key="img.id">
    <img :src="img.url" alt="" @click="openImageWindow(img.url)">
    </div>
  </div>
</div>
</template>

<script>
// @ is an alias to /src
import contact from '@/components/contact.vue'

export default {
  name: 'home',
  components: {
    contact
  },
  data () {
    return {
      images: []
    }
  },
  created () {
    this.getPost()
  },
  methods: {
    getPost () {
      this.$http.get('https://jsonplaceholder.typicode.com/photos').then(response => {
        this.images = response.body.slice(0, 100)
      }, response => {
        // error callback
      })
    },
    openImageWindow (src) {
      var image = new Image()
      image.src = src
      var width = image.width
      var height = image.height
      window.open(src, 'Image', 'width=' + width + ',height=' + height)
    }
  }
}
</script>
<style scoped>
.photo {
  display: flex;
  flex-wrap: wrap;
  margin-right: -380px;
}
 img {
  min-height: 300px;
  min-width: 300px;
  height:300px;
  width: 410px;
  margin: -2px;
}
img:hover{
 -webkit-transform: scale(1.3);
 -moz-transform: scale(1.3);
 -o-transform: scale(1.3);
 border-radius: 10px;
}
#home{
  position: fixed
}
</style>
