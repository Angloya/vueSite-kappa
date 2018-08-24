<template>
<div id="app">
<section class="widget" id="widget">
  <div class="sidebar">
    <div class="widget-title">
        <h2>kappe</h2>
        <div>
            <img src="./assets/for_creatives.png" alt="">
        </div>
    </div>
    <nav id="widget-list">
      <router-link to="/"> Home</router-link>
      <router-link to="/about"> About </router-link>
      <router-link to="/work"> Work </router-link>
      <router-link to="/blog"> Blog </router-link>
      <router-link to="/services"> Services </router-link>
      <router-link to="/Contact"> Contact </router-link>
    </nav>
    <div id="widget-filter">
                <h3>
                    Filter <img src="./assets/filter.png" alt="">
                </h3>
                <ul id="filter">
                    <li> <a href="#">All Works</a></li>
                    <li><a href="#">web design</a></li>
                    <li><a href="#">illustration</a></li>
                    <li><a href="#">photography</a></li>
                    <li><a href="#">wallpapers</a></li>
                    <li><a href="#">brochures</a></li>
                </ul>
            </div>
            <div id="widget-bottom">
                <a href="#"><img src="./assets/webicon-behance.png" alt=""></a>
                <a href="#"><img src="./assets/webicon-dribbble.png" alt=""></a>
                <a href="#"><img src="./assets/webicon-facebook.png" alt=""></a>
                <a href="#"><img src="./assets/webicon-flickr.png" alt=""></a>
                <a href="#"><img src="./assets/webicon-googleplus.png" alt=""></a>
                <a href="#"><img src="./assets/webicon-pinterest.png" alt=""></a>
                <a href="#"><img src="./assets/webicon-twitter.png" alt=""></a>
            </div>
            <div id="widget-copyright">
                <p>© 2014 Kappe, All Rights Reserved</p>
            </div>
        </div>
    </section>
    <router-view/>
  </div>
</template>

<style>
@import url('https://fonts.googleapis.com/css?family=Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900');
#app {
    width: 100%;
    font-family: 'Roboto', sans-serif;
    background: #e8e8e8;
    display: flex;
    justify-content: flex-start;
    flex-direction: row;
    padding: 0;
    margin: -8px;
}
li{
  list-style-type: none;
}
body::-webkit-scrollbar {
    width: 4px;
    background: #000000;
}
body::-webkit-scrollbar-thumb:vertical {
    width: 4px;
    background: #ffffff;
}
body::-webkit-scrollbar-thumb:horizontal  {
   display: none;
    background: #ffffff;
}
body::-webkit-scrollbar:horizontal {
    width: 0px;
    display: none;
    background: #000000;
}
.sidebar::-webkit-scrollbar {
    width: 4px;
    background: #000000;
}
.sidebar::-webkit-scrollbar-thumb:vertical {
    width: 4px;
    background: #ffffff;
}
.sidebar::-webkit-scrollbar-thumb:horizontal  {
   display: none;
    background: #ffffff;
}
.sidebar::-webkit-scrollbar:horizontal {
    width: 0px;
    display: none;
    background: #000000;
}
.sidebar {
    text-align: right;
    min-width: 300px;
    width: 19%;
    position:sticky;
    top: 0px;
    bottom: 0;
    height: 100vh;
    background: #242b2e;
    box-sizing: border-box;
    overflow-y: scroll;
}
.widget-title {
    background: #ffffff;
    height: 125px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
}

.widget-title h2 {
    font-size: 48px;
    font-weight: 300;
    letter-spacing: -1, 16px;
}

.widget-title img {
    width: 76px;
    height: 16px;
    padding-left: 30px;
    margin-top: -40px;;
    padding-bottom: 40px;
}

nav a{
  display: flex;
    margin-bottom: 1px;
    background: #2f373b;
    height: 62px;
    min-width: 300px;
    padding-top: 18px;
    box-sizing: border-box;
    list-style-type: none;
    cursor: pointer;
    justify-content: flex-end;
}

nav  a:hover {

    background: #1ab5b3;
}

a.router-link-exact-active {
    background: #1ab5b3;
}

 a {
  text-decoration: none;
}
 nav a {
    text-decoration: none;
    color: #ffffff;
    font-size: 18px;
    font-weight: 300;
    line-height: 32px;
    padding-right: 25px;
}

#widget-filter h3 {
    color: #1ab5b3;
    font-weight: 400;
    line-height: 32px;
    font-size: 19px;
    padding-right: 25px;
    padding-top: 20px;
}
#widget-filter li a{
    text-decoration: none;
    color: #ffffff;
    font-size: 13px;
    font-weight: 300;
    line-height: 24px;
    padding-right: 25px;
    opacity: 0.2;
}

#widget-filter a li:hover {
    opacity: 1;
}

#widget-bottom {
    display: flex;
    justify-content: space-between;
    padding-right: 25px;
    padding-left: 51px;
    padding-top: 40px;
}

#widget-copyright {
    font-weight: 400;
    font-size: 12px;
    line-height: 25px;
    color: #6b7072;
    padding-right: 25px;

}
</style>
