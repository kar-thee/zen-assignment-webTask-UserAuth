# zen-assignment-webTask-UserAuth
<br>
heroku URL : https://whispering-garden-30057.herokuapp.com/
<br><br>

<ul>


<li>  
  
  
  <h5>To check server is alive </h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user</strong>
  method: GET
  
  
</li>


<li>  
  
  
  <h5>To Register user</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/register</strong>
  method: POST
  Body : {name,email,password}
  
  
</li>


<li>  
  
  
  <h5>To Login user</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/login</strong>
  method: POST
  Body : {email,password}
  
  
</li>


<li>  
  
  
  <h5>If user, Forgot password</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/forgot-password</strong>
  method: POST
  Body : {email} (check email for resetCode_Url)
  
  
</li>


<li>  
  
  
  <h5>To reset password</h5>
  <strong>url : https://whispering-garden-30057.herokuapp.com/user/resetPassword</strong>
  method: POST
  Body : {email,id,resetCode,password} (resetcode & jwt code are received from email,email and id are parsed from jwt token, password is the newPassword..)
  Headers: Authorization (send jwt token received from email,format-> BEARER "jwttoken")
  
  
</li>


</ul>
