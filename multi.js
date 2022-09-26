var ar = document.getElementById("ar");
var en = document.getElementById("en");
var contact = document.getElementById("contact");

var txt1 = document.getElementById("txt1");
var txt2 = document.getElementById("txt2");
var txt3 = document.getElementById("txt3");
var txt4 = document.getElementById("txt4");


ar.onclick = ()=>{
    setLan("arabic");
    localStorage.setItem("lan","arabic");
};

en.onclick = ()=>{
    setLan("english");
    localStorage.setItem("lan","english");
};

onload = ()=>{
    setLan(localStorage.getItem("lan"));
};
function setLan(getLan){
if(getLan === "arabic"){
    txt1.innerHTML = "كريم محمد";
    txt2.innerHTML = "مرحبا بكم"
    txt3.innerHTML = "حولنا";
    txt4.innerHTML = " مهندس برمجيات";
    contact.innerHTML = "اتصل بنا";
}else if(getLan ==="english"){
    txt1.innerHTML = "mohamed karim";
    txt2.innerHTML = "Welcome ";
    txt3.innerHTML = "  About US";
    txt4.innerHTML = "Software Developer";
    contact.innerHTML = "Contact us";

}


}