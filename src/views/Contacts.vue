<template>
<section class="main">
        <div class="message">
            <div class="get">
                <h2>
                    Get in touch with us
                </h2>
                <p>Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum, nec sagittis sem nibh id elit. Duis sed odio sit amet nibh vulputate cursus a sit amet mauris. Morbi accumsan ipsum velit. Nam nec tellus a odio tincidunt auctor a ornare odio.</p>
            </div>
            <div class="send">
                <h2>Send us a message</h2>
                <div class="form">
  <form action="handler.php" method="post" name="comment" class="formClass" id="comment">
  <fieldset>
<input class="comment" type="text" name="Name" placeholder="Full Name" id="Name" value=""  required/>
<input class="comment" type="text" name="email" placeholder="Mail" id="email" value=""  required/>
<input class="comment" type="text" placeholder="website" name="website" id="website" value="" />
   </fieldset>
   <fieldset>
<textarea class="mess" id="message" name="message" placeholder="Message"  required></textarea>

<input class="comment" name="submit" type="submit" id="submit" value="Send now!" />
      </fieldset>
</form>
                </div>
            </div>
        </div>
        <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A9e3a18ad649d3a6bbcf628ac89cf19dde92f2169c14275004ea03b70194c29a7&amp;source=constructor" width="1000%" height="100%" frameborder="0"></iframe>
</section>
</template>
<style scoped>
.message {
     background: #ffffff;
     width: 782px;
     height: 467px;
     margin-top: 25px;
     margin-left: 25px;
     padding: 30px;
     position: fixed;
 }
 .get {
   margin-bottom: -40px;
 }
 .message h2 {
     color: #000000;
     font-size: 24px;
     font-weight: 300;
     line-height: 26px;
     padding-bottom: 10px;
 }
 .message p {
     color: #a3a3a3;
     font-size: 18px;
     font-weight: 300;
     line-height: 30px;
 }

 .formClass {
     display: flex;
     align-items: center;
     flex-direction: row;
     align-content: space-between;
     justify-content: center;
 }

 fieldset {
     border: none;
 }

 .send {
     padding-top: 30px;
 }
iframe {
  width: 1000%
}
 .formClass .comment {
     width: 347px;
     height: 59px;
     border: 1px solid #eaeaea;
     background-color: #ffffff;
     margin: 5px;
     padding-left: 80px
 }

 .mess {
     width: 365px;
     height: 128px;
     border: 1px solid #eaeaea;
     background-color: #ffffff;
     padding-left: 0px;
     color: #848484;
     font-size: 14px;
     font-weight: 300;
     line-height: 30px;
     padding: 20px;

     box-sizing: border-box;
 }

 #submit {
     margin-top: 10px;
     width: 365px;
     height: 59px;
     background-color: #1ab5b3;
     padding-left: 0px;
     color: #ffffff;
     font-size: 14px;
     font-weight: 300;
     line-height: 30px;
     text-transform: uppercase;
 }

 #Name {
     background: url('../assets/cont6.png') no-repeat -1px -1px;
     background-size: auto 108%;
 }

 #email {
     background: url('../assets/cont4.png') no-repeat -1px -1px;
     background-size: auto 108%;
 }

 #website {
     background: url('../assets/cont5.png') no-repeat -1px -3px;
     background-size: auto 108%;
 }
</style>
