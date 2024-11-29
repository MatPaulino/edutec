function verifytoken(){
    const token = localStorage.getItem("token")



if (!token)  {
    window.location.href = "./pages/login.login.html"
    return

  }



};

const response = await fetch("http://localhost:3000/verify", {
  headers: {
    "Authorization": token
  }
}).then(response => response.json())

verifytoken()