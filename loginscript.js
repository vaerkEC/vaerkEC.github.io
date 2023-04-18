
function login() {
    const username = document.getElementById('username').value;
    if (username) {
      document.getElementById('user').textContent = username;
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('logout-form').style.display = 'block';
    }
  }
  

  
function logout() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    /*document.getElementById('login-form').style.display = 'block';*/
    /*document.getElementById('logout-form').style.display = 'none';*/
  }


  /*function login() {
    const username = document.getElementById('username').value;
    if (username) {
      document.getElementById('user').textContent = username;
      document.getElementById('login-form').style.display = 'none';
      document.getElementById('logout-form').style.display = 'block';
    }
  }
  

  
function logout() {
    document.getElementById('username').value = '';
    document.getElementById('password').value = '';
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('logout-form').style.display = 'none';
  }*/

type = "text/javascript" >  
  function preventBack() { window.history.forward(); }  
  setTimeout("preventBack()", 0);  
  window.onunload = function () { null };  
