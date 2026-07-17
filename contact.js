document.getElementById("contactForm").addEventListener("submit",async(e)=>{

e.preventDefault();

const data={

name:name.value,
email:email.value,
subject:subject.value,
message:message.value

};

const response=await fetch("http://localhost:3000/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(data)

});

const result=await response.json();

document.getElementById("success").innerHTML=result.message;

document.getElementById("contactForm").reset();

});