<template>
  <div class=main>
              <div class="left">
            <div class="leftPhoto">
                <img src="../assets/Layer_72.png" alt="">
            </div>
            <div class="leftText">
                <h2>
                    Heavy Sand - Creative Photography
                </h2>
                <p>
                    Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio. Sed non mauris vitae erat consequat auctor eu in elit. Class aptent taciti sociosqu ad litora This is Photoshop's version of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet. </p>
                <p>Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.
                </p>
            </div>
            <div class="leftPlus">
                <h2>
                    Projects
                </h2>
                <div class="leftPlusPhoto">
                    <img src="../assets/Layer_85.png" alt="" @click="getStaff(1)">
                    <img src="../assets/Layer_86.png" alt="" @click="getStaff(2)">
                    <img src="../assets/Layer_85.png" alt="" @click="getStaff(1)">
                    <img src="../assets/Layer_86.png" alt="" @click="getStaff(2)">
                </div>
            </div>
        </div>
<div class="right" id="preview" v-if="!showInfo">
    <h1>Select a project to see details</h1>
</div>
<div class="right" id="project" v-if="showInfo">
            <h2>Project Info</h2>
            <div class="infoProject">
            <p><img src="../assets/work.1.png">Name: {{ staff.name }}</p>
            <p><img src="../assets/work.2.png">Likes: {{staff.likes}}</p>
            <p @click="showComments = !showComments"><img src="../assets/work4.png">comments: {{this.comments}}</p>
                      <ul class="comments" v-if="showComments">
                <li v-for="(comment, index) in staff.comments" :key="index">
                    {{comment}}
                </li>
            </ul>
            </div>
            <h2>
                Tags
            </h2>
            <ul class="tags">
                <li v-for="(type, index) in staff.tags" :key="index">
                    {{type}}
                </li>
            </ul>
            <h2>Gallery image</h2>
             <ul class="img">
                <li v-for="(img, index) in staff.img" :key="index">
                    <img :src="img" alt=''>
                </li>
            </ul>
            <h2>Progect Features</h2>
            <ul>
                <li>Responsive Layout</li>
                 <li>Font Awesome Icons</li>
                  <li>Clean & Commented Code</li>
                   <li>Highly Customizable</li>
            </ul>
        </div>
    </div>
</template>
<script>
import * as firebase from 'firebase'
export default {
  data () {
    return {
      staff: {},
      comments: '',
      showInfo: false,
      showComments: false
    }
  },
  methods: {
    getStaff (num) {
      const db = firebase.firestore()
      db.settings({timestampsInSnapshots: true})
      db.collection('staff').doc(String(num)).get().then((doc) => {
        this.staff = doc.data()
        this.comments = doc.data().comments.length
      })
      this.showInfo = true
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
    width: 100%;
    display: flex;
    height: 95%;
}
.main h2{
   font-size: 24px;
    line-height: 26px;
    font-weight:300;
    color:#000000;
     padding-bottom: 10px;
}
.right img {
    max-width: 300px;
    max-height: 300px;
}
.main p{
color: #a3a3a3;
font-size: 18px;
font-weight: 300;
line-height: 30px;
}
#preview h1{
  padding-top: 30%;
  font-weight: 200;
  font-size: 40px;
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
.leftPhoto img{
    width: 100%;
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
.right ul {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row
}
.right li {
    padding: 10px;
    margin: 15px;
    border: 1px solid black
}
ul.comments{
    display: flex;
    flex-direction: column;
    max-width: 300px;
    max-height: 300px
}
.infoProject p{
  border-bottom: 1px solid rgba(53, 53, 53, 0.3);
  padding: 5px;
  max-width: 80%;
}
.infoProject {
    padding-top: 20px;
    padding-bottom: 40px
}
.infoProject img {
    padding-right: 10px;
}
</style>
