<template>
   <div class="main">
       <h1 v-if='loading'>Loading...</h1>
        <div class="show-blogs" v-if='!loading'>
        <addBlog class="add-blog"/>
      <div v-for="blog in blogs" :key="blog.id" class="single-blog">
            <div class="Image">
          <img :src='blog.image' class="blogImage">
        </div>
        <div class="text">
        <h2 @click="blogRouter(blog.id)">{{blog.title | to-uppercase}}</h2>
        <article @click="blogRouter(blog.id)">{{blog.content}}</article>
          <div class="category">
            <ul v-for="(category, index) in blog.categories" :key="index">
              <li @click="categoryRouter(category)">{{category}}</li>
            </ul>
          </div>
          <p class="blog_author">{{blog.author | to-uppercase}}</p>
      </div>
      </div>
  </div>
   </div>
</template>

<script>
import addBlog from '@/components/addBlog.vue'
export default {
  components: {
    addBlog
  },
  data () {
    return {
      blogs: [],
      loading: false
    }
  },
  created () {
    this.showBlogs()
  },
  methods: {
    showBlogs () {
      this.loading = true
      this.$http.get('https://blogvuejs-ed9af.firebaseio.com/posts.json').then(data => {
        return data.json()
      }).then(function (data) {
        var blogsArray = []
        for (let key in data) {
          data[key].id = key
          blogsArray.push(data[key])
        }
        this.blogs = blogsArray
      })
      this.loading = false
    }
  }
}
</script>

<style scoped>
.main {
    width: 80%;
    display: flex;
    height: 95%;
}
.show-blogs {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    width: 90%;
    height: 100%;
    padding: 20px
}
.add-blog {
    max-width: 20%;
    max-height: 400px;
    overflow: scroll;
    padding: 20px;
    border: 1px solid black;
     margin: 20px;
     color: #9c9c9c;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 22px;
}
.single-blog {
    max-width: 30%;
    height: 100%;
    overflow: scroll;
    text-align: justify;
    color: #9c9c9c;
    font-family: 'Roboto', sans-serif;
    font-size: 13px;
    font-weight: 300;
    line-height: 22px;
    margin: 20px;
    background: #ffffff
}
.text {
    padding: 30px
}
.single-blog::-webkit-scrollbar {
    width: 4px;
    background: #000000;
}
.single-blog::-webkit-scrollbar-thumb:vertical {
    width: 4px;
    background: #928e8e;
}
.single-blog::-webkit-scrollbar-thumb:horizontal  {
   display: none;
    background: #928e8e;
}
.single-blog::-webkit-scrollbar:horizontal {
    width: 0px;
    display: none;
    background: #000000;
}
.single-blog img {
    max-width: 110%;
    max-height: 100%
}
</style>
