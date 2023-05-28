document.getElementById("printBtn").addEventListener("click", function() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var Address = document.getElementById("Address").value;

  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<p><h2>Personal Information</h2></p><p><strong>Name:</strong> " + name + "</p>" + "<p><strong>Email:</strong> " + email + "</p>" + "<p><strong>Address</strong> " + Address + "</p>";

  window.print();
});
