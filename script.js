document.getElementById("printBtn").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var Address = document.getElementById("Address").value;
  var uniName = document.getElementById("uni").value;
  var graduationDate = document.getElementById("date").value;
  var subject = document.getElementById("subject").value;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p><h2>Personal Information<hr></h2></p><p><strong>Name:</strong> " + name + "</p>" + "<p><strong>Email:</strong> " + email + "</p>" + "<p><strong>Address</strong> " + Address + "</p><br>" + "<p><h2>Education<hr></h2></p><p><strong>University Name:</strong>" + uniName + "</p>" + "<p><strong>Graduation Date:</strong> " + graduationDate + "</p>" + "<p><strong>Subject</strong> " + subject + "</p>"

  window.print();
});
