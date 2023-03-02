function parbaude(){
var x=document.getElementById("skaitlis").value;
if(x>0){
    console.log("Skaitlis "+x+" ir pozitīvs")
    document.getElementById("rezultāts").innerHTML="Skaitlis "+x+" ir pozitīvs";
}else if(x<0){
    console.log("Skaitlis "+x+" ir negatīvs")
    document.getElementById("rezultāts").innerHTML="Skaitlis "+x+" ir negatīvs";
}else {
    console.log("Skaitlis "+x+" nav ne pozitīvs ne negatīvs")
    document.getElementById("rezultāts").innerHTML="Skaitlis "+x+" nav ne pozitīvs ne negatīvs";
}
}