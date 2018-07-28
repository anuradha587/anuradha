/*function loadjson(file,callback) {
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function () {
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
  xhr.send(null);
}
loadjson("data.json",function(text) {
  var data = JSON.parse(text);
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  skills(data.skills);
  achivements(data.achivements);
})*/
function loadjson(file) {
  return new Promise((resolve,reject)=>{
    return fetch(file).then(response=>{
      if(response.ok){
        resolve(response.json());
      }

      else{
        reject(new Error('Error'));
      }
    })
  })
}
var newfile = loadjson("data.json");
newfile.then(data=>{
  console.log(data);
  basics(data.details);
  careerinfo(data.career);
  education(data.education);
  skills(data.skills);
  achivements(data.achivements);
})
var child1=document.querySelector(".childone");
function basics(det){
  var image = document.createElement("img");
  image.src = det.image;
  child1.appendChild(image);

  var name = document.createElement("h4");
  name.textContent = det.name;
  child1.appendChild(name);

  var phoneno = document.createElement("h3");
  phoneno.textContent =det.phoneno;
  child1.appendChild(phoneno);

  var emailid = document.createElement("a");
  emailid.href = "narendraginjupalli51@gmail.com";
  emailid.textContent = det.emailid;
  child1.appendChild(emailid);

  var Address = document.createElement("h2");
  Address.textContent = "Address";
  child1.appendChild(Address);

  var hr = document.createElement("hr");
  child1.appendChild(hr);

  var p = document.createElement("p");
  p.textContent = det.Address;
  child1.appendChild(p)
}
var child2 = document.querySelector(".childtwo");
function careerinfo(info) {
  var heading = document.createElement("h2");
  heading.textContent = "career objective";
  child2.appendChild(heading);
  var hr = document.createElement("hr");
  child2.appendChild(hr);

  var c =document.createElement("p");
  c.textContent = info.info;
  child2.appendChild(c);
}
  function education(edu) {
     var hd = document.createElement("h2");
     hd.textContent = "educational qualification";
     child2.appendChild(hd);

     var hr = document.createElement("hr");
     child2.appendChild(hr);

     var table1 = document.createElement("table");
     table1.border = "1";
     child2.appendChild(table1);

     tabledata ="";
     for(i=0;i<edu.length;i++){
       tabledata+="<tr><td>"+edu[i].qualification+"</td><td>"+edu[i].inistitute+"</td><td>"+edu[i].year+"</td><td>"+edu[i].percentage+"</td></tr>";
 }
     table1.innerHTML=tabledata;
   }
   function skills(skillinfo) {
     var hd = document.createElement("h2");
     hd.textContent = "technical skills";
     child2.appendChild(hd);

     var hr = document.createElement("hr");
     child2.appendChild(hr);

     for(i=0;i<skillinfo.length;i++){
     var title = document.createElement("h4");
     title.textContent = skillinfo[i].title;
     child2.appendChild(title);

     var eduul = document.createElement("ul");
     var eduli = document.createElement("li");
     eduli.textContent=skillinfo[i].info;
     eduul.appendChild(eduli);
     child2.appendChild(eduul);
   }
}
function achivements(ach) {
  var hd = document.createElement("h4");
  hd.textContent = "achivements";
  child2.appendChild(hd);

   var hr = document.createElement("hr");
   child2.appendChild(hr);

   for(i=0;i<ach.length;i++){
   var title = document.createElement("h4");
   title.textContent = ach[i].title;
   child2.appendChild(title);

   var eduul = document.createElement("ul");
   var eduli = document.createElement("li");
   eduli.textContent=ach[i].info;
   eduul.appendChild(eduli);
   child2.appendChild(eduul);

}
}
function openpage() {
  window.open("resumeex.html","_self",true)  
}
