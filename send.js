function sendMail(params){

  var tempParams={
   from_name:document.getElementById("fromName").value,
   message:document.getElementById("message").value,
  };
  var status = document.getElementById("my-form-status");
  emailjs.send("service_iijfnod","template_evj5s1d",tempParams)
   .then(function(res){
    status.innerHTML = "Polygon kordinatları tarfımıza gonderildi en kısa zmanda bilgilendirleceksiniz!";
   })
}