
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  phone: document.getElementById("phone").value,
	  location: document.getElementById("location").value,
	};
  
	  emailjs.send("service_fo4gk5a", "template_ehs6mh3", params).then(alert("تم الارسال بنجاح"))
	
  }