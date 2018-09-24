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
.home {
  overflow: scroll;
   width: 75%
}
.home::-webkit-scrollbar {
    width: 4px;
    background: #000000;
}
.home::-webkit-scrollbar-thumb:vertical {
    width: 4px;
    background: #ffffff;
}
.home::-webkit-scrollbar-thumb:horizontal  {
   display: none;
    background: #ffffff;
}
.home::-webkit-scrollbar:horizontal {
    width: 0px;
    display: none;
    background: #000000;
}
.photo {
  display: flex;
  flex-wrap: wrap;
  max-width: 102%;
}
 img {
  max-height: 310px;
  max-width: 250px;
  margin: -2px;
}
img:hover{
 -webkit-transform: scale(1.2);
 -moz-transform: scale(1.2);
 -o-transform: scale(1.2);
 border-radius: 10px;
}
#home{
  position: fixed
}
</style>
