const serviceID = "service_b1mj6dh";
const templateID = "template_1qggozm";

function sendMail() {
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
