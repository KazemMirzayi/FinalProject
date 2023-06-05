document.getElementById("addForm").addEventListener("click", function(addMore){
  var formsContainer = document.getElementById("forms-container");
  var newFormContainer = document.createElement("div");
  newFormContainer.className = "forms-container";
  newFormContainer.innerHTML = `
  <div class="form-container">
  <h2>Add more Education</h2>
  <label for="uni">University:</label>
  <input type="text" id="uni" name="uni" required>

  <label for="graduationDate">Graduation Date:</label>
  <input type="date" id="date" name="date" required>

  <label for="subject">Subject:</label>
  <input type="text" id="subject" name="subject" required>
  </div>`;
  formsContainer.appendChild(newFormContainer);
  addMore.preventDefault();
});




document.getElementById("printButton").addEventListener("click", function(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var Address = document.getElementById("Address").value;

  var uniName = document.getElementById("uni").value;
  var date = document.getElementById("date").value;
  var subject = document.getElementById("subject").value;
  
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<div><h2>Personal Information<hr></h2><p><strong>Name:</strong>" + name + "</p><p><strong>Email:</strong>"+email+"</p><p><strong>Address:</strong>" + Address +"</div><div><h2>Education<hr></h2><p><strong>University Name:</strong>" + uniName + "</p><p><strong>Date of Graduation:</strong>" + date + "</p><p><strong>Field of Study:</strong>" + subject +"</p></div>"
  print();
  
})