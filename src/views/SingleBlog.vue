<template>
<div class="main">
    <div class="left">
        <h1>{{isTitle}}</h1>
        <article>{{blog.content}}</article>
        </div>
        <div class="right">
            <img :src='blog.image' class="blogImage">
        <div class="category">
            <h1>category: </h1>
            <ul v-for="(category, index) in blog.categories" :key="index">
                <li @click="categoryRouter(category)">{{category}}</li>
            </ul>
        </div>
        <h1>author:</h1>
        <p> {{blog.author}}</p>
        </div>
</div>
</template>

<script>
export default {
  data () {
    return {
      id: this.$route.params.id,
      title: '',
      blog: {}
    }
  },
  computed: {
    isTitle () {
      if (this.blog.title !== undefined) {
        return this.blog.title.toUpperCase()
      } else {
        return this.blog.title
      }
    }
  },
  created () {
    this.showSingleBlog()
  },
  methods: {
    categoryRouter (category) {
      this.$router.push('/category/' + category)
    },
    showSingleBlog () {
      this.$http.get('https://blogvuejs-ed9af.firebaseio.com/posts/' + this.id + '.json').then(data => {
        this.blog = data.body
      })
    }
  }
}
</script>
<style scoped>
body{
    overflow-y: hidden;
}
body::-webkit-scrollbar {
    display: none;
}
.main {
background: #ffffff;
    margin: 20px;
    width:71%;
    display: flex;
    height: 95%;
    flex-direction: row;
}
.main h1{
   font-size: 24px;
    line-height: 26px;
    font-weight:300;
    color:#000000;
     padding-bottom: 10px;
}
.main article, p, li{
color: #a3a3a3;
font-size: 18px;
font-weight: 300;
line-height: 30px;
text-align: justify
}
.left {
    width: 50%;
    border-right: 1px solid #e8e8e8;
    padding: 25px;
    height: 100%;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    overflow-y: scroll;
}
.leftPhoto{
   margin-bottom: 20px;
}
li {
    list-style-type: circle
}
.leftText p{
    text-indent:25px;
    text-align: justify;
    padding-top: 5px;
    padding-bottom: 5px;
}
.leftText p:last-child
{
    border-bottom: 2px solid #e8e8e8;
}
.main div::-webkit-scrollbar {
    width: 2px;
    background: #e8e8e8;
}
.main div::-webkit-scrollbar-thumb:vertical {
    width: 2px;
    background: #6b7072;
    opacity: 0.8;
}
.leftPlus{
    padding-top: 20px;
}
.leftPlusPhoto
{
    padding-top: 10px;
    text-align: center;
}
.leftPlusPhoto img{
    width: 240px;
    height: 182px;
}
.right {
    width: 50%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 30px;
    box-sizing: border-box
}
.right h2, h1, p{
    padding-bottom: 0px;
    margin: 0
}
.right .category {
    padding-top: 20px;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
}
.right img{
    max-width: 90%;
    max-height: 30%
}
</style>
