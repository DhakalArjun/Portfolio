function sendMail() {
  const serviceID = "service_z9ofojv";
  const templateID = "template_g98u72j";
  let parameters = {
    name: document.getElementById("senderName").value,
    email: document.getElementById("email").value,
    subject: document.getElementById("subject").value,
    message: document.getElementById("query").value,
  };

  emailjs.send(serviceID, templateID, parameters).then((res) => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("subject").value = "";
    document.getElementById("query").value = "";
    console.log(res);
    alert("your message send successfully");
  });
}
