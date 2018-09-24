<template>
  <div id="add-blog" class="add-blog">
    <h1 class="previewh1">Add a New Blog Post</h1>
    <form v-if="!send">
      <label for="blogTitle">Blog Title:</label>
      <input
        type="text"
        v-model.lazy="blog.title"
        id="blogTitle"
        required/>
      <div class="hello">
        <picture-input
          ref="pictureInput"
          width="500"
          height="500"
          margin="16"
          accept="image/jpeg,image/png"
          :removable="true"
          size="10"
          button-class="btn"
          :custom-strings="{
            upload: '<h1>upload!</h1>',
            drag: 'Drag a image'
          }"
          @remove="onRemoved"
          @change="onChange">
        </picture-input>
      </div>
      <label for="blogContent">Blog Content:</label>
      <textarea
        v-model.lazy="blog.content"
        id="blogContent">
      </textarea>
      <div id="checkboxes" v-for="(category, index) in blog.categories" :key="index">
        <label>{{category}}</label>
        <input type="checkbox"
          :value='category'
          v-model="blog.categories"/>
      </div>
      <button v-if='!addCat' @click="addCat = !addCat">add categoties</button>
      <input v-if='addCat'
        type="text"
        required
        v-model="newCategory">
      <button v-if='addCat' @click="addCategoties">save</button>
      <button v-if='addCat' @click="addCat = !addCat">close</button>
       <label for="blogTitle">Author:</label>
      <input
        type="text"
        v-model.lazy="blog.author"
        id="blogTitle"
        required/>
    </form>
    <button v-if="!send" @click="newPost">Send</button>
    <h1 v-if="send">Post send</h1>
    <button @click="send = !send" v-if="send">add new post</button>
  </div>
</template>

<script>
import PictureInput from 'vue-picture-input'
export default {
  data () {
    return {
      blog: {
        title: '',
        content: '',
        categories: [],
        image: '',
        author: ''
      },
      newCategory: '',
      addCat: false,
      send: false
    }
  },
  components: {
    PictureInput
  },
  methods: {
    newPost () {
      debugger
      this.$http.post('https://blogvuejs-ed9af.firebaseio.com/posts.json', this.blog
      ).then(() => {
        this.send = true
      })
    },
    onChange (image) {
      console.log('New picture selected!')
      if (image) {
        console.log('Picture loaded.')
        this.blog.image = image
      } else {
        console.log('FileReader API not supported: use the <form>, Luke!')
      }
    },
    onRemoved () {
      this.blog.image = ''
    },
    addCategoties () {
      debugger
      this.blog.categories.push(this.newCategory.toLowerCase())
      this.addCat = false
      this.newCategory = ''
    }
  }
}
</script>

<style scoped>
#add-blog * {
  box-sizing: border-box;
}
.add-blog button {
  padding: 10px;
  outline: none;
  font-size: 15px;
  background-color: rgba(255, 255, 255, 0.4);
  margin-right: 10px;
}
.add-blog button:hover {
  transition: .5s linear;
  background-color: rgba(194, 191, 190, 0.8)
}
label {
  display: block;
  margin: 20px 0 10px;
  font-size: 16px;
}
textarea {
  min-height: 150px;;
}
input[type="text"], textarea {
  display: block;
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  font-size: 16px;
  background-color: rgba(199, 197, 197, 0.4)
}
textarea::-webkit-scrollbar {
  width: 3px;
  background: #000000;
}
textarea::-webkit-scrollbar-thumb:vertical {
  width: 3px;
  background: #ffffff;
}
textarea::-webkit-scrollbar-thumb:horizontal  {
  display: none;
  background: #ffffff;
}
textarea::-webkit-scrollbar:horizontal {
  width: 0px;
  display: none;
  background: #000000;
}
#checkboxes input{
  display: inline-block;
  margin-right: 0px;
}
#checkboxes label{
  display: inline-block;
}

</style>
