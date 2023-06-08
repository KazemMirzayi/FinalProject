document.getElementById("addForm").addEventListener("click", function(addMore){
  var formsContainer = document.getElementById("forms-container");
  var newFormContainer = document.createElement("div");
  newFormContainer.className = "form-container";
  newFormContainer.innerHTML = `
  <div class="form-container">
  <h2>Add more Education</h2>
  <label for="uni">University:</label>
  <input type="text" class="uniNameInput" name="uni" required>
  
  <label for="graduationDate">Graduation Date:</label>
  <input type="date" class="startingDate" name="date" required>
  <label for="graduationDate">Graduation Date:</label>
  <input type="date" class="endingDate" name="date" required>

  <label for="subject">Subject:</label>
  <input type="text" id="subject" class="uniFieldeOfStudy" name="subject" required>
  </div>`;
  formsContainer.appendChild(newFormContainer);
  
  addMore.preventDefault();
});

document.getElementById("printButton").addEventListener("click", function(){
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var Address = document.getElementById("Address").value;
  var uniName = document.getElementById("uni").value;
  var startingDate = document.getElementById("startingDate").value;
  var endingDate = document.getElementById("endingDate").value;
  var subject = document.getElementById("subject").value;
  var newUni01 = document.querySelector(".uniNameInput").value;
  var newStD01 = document.querySelector(".startingDate").value;
  var newEnD01 = document.querySelector(".endingDate").value;
  var newField01 = document.querySelector(".uniFieldeOfStudy").value;
  
  
  var resultDiv = document.getElementById("result");
  resultDiv.innerHTML = "<div><h2>Personal Information<hr></h2><p><strong>Name:</strong>" + name + "</p><p><strong>Email:</strong>"+email+"</p><p><strong>Address:</strong>" + Address +"</div><div><h2>Education Background<hr></h2><p><strong>" + uniName + " University</strong></p><p>"+ startingDate + " | "+ endingDate +"</p><p>" + subject +"</p></div><hr><div><p><strong>" + newUni01 + " University</strong></p><p>"+ newStD01 + " | "+ newEnD01 +"</p><p>" + newField01 +"</p></div><hr>"
  
  print();  
});