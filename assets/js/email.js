
function sendMail() {
	var params = {
	  name: document.getElementById("name").value,
	  phone: document.getElementById("phone").value,
	  clinic: document.getElementById("clinic").value,
	  appointment: document.getElementById("appointment").value,
	};
  
	  emailjs.send("service_fo4gk5a", "template_ehs6mh3", params).then(alert("تم الارسال بنجاح"))
	
  }