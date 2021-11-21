# zen-assignment-webTask-UserAuth
<br>
heroku URL : https://whispering-garden-30057.herokuapp.com/
<br><br>

<ul>


<li>  
  
  
  <h5>To check server is alive </h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user</strong><br>
  method: GET<br>
  
  
</li>


<li>  
  
  
  <h5>To Register user</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/register</strong><br>
  method: POST<br>
  Body : {name,email,password}<br>
  
  
</li>


<li>  
  
  
  <h5>To Login user</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/login</strong><br>
  method: POST<br>
  Body : {email,password}<br>
  
  
</li>


<li>  
  
  
  <h5>If user, Forgot password</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/forgot-password</strong><br>
  method: POST<br>
  Body : {email} (check email for resetCode_Url)<br>
  
  
</li>


<li>  
  
  
  <h5>To reset password</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/resetPassword</strong><br>
  method: POST<br>
  Body : {email,id,resetCode,password} (resetcode & jwt code are received from email,email and id are parsed from jwt token, password is the newPassword..)<br>
  Headers: Authorization (send jwt token received from email,format-> BEARER "jwttoken")<br>
  
  
</li>


</ul>
