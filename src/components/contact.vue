<template>
  <div class="hello">
    <div class="contacts">
        <p>
            <img src="../assets/cont1.png"> 9930 1234 5679
        </p>
        <p>
            <img src="../assets/cont2.png"> contact@domain.com
        </p>
        <p>
            <img src="../assets/cont3.png"> street address example
        </p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'conact'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.contacts {
    width: 283px;
    height: 130px;
    color: #ffffff;
    background: #000000;
    opacity: 0.6;
    display: block;
    position: fixed;
    right: 0px;
    top:50px

}

.contacts p {
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    text-align: left;
    padding-left: 15px;
}

.contacts img {
    padding-left: 15px;
}
</style>
