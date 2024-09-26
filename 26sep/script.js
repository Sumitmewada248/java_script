document.getElementById("setbtn").addEventListener("click",dataSet);
document.getElementById("getbtn").addEventListener("click",dataGet);
document.getElementById("clr").addEventListener("click",clearData);


function dataSet()
{
    let firstnm=document.getElementById("fnm").value;
    let lastnm=document.getElementById("lnm").value;
    window.localStorage.setItem("firstName",firstnm);
    window.localStorage.setItem("LastName",lastnm);
    alert("your data set in local storage");
}

function dataGet()
{
    let myfnm=window.localStorage.getItem("firstName");
    let mylnm=window.localStorage.getItem("LastName");
    document.getElementById("ans").innerHTML="Hi i am "+myfnm+" "+mylnm+" from bhopal";
    
}

function clearData(){
    window.localStorage.clear();
    alert("Local Storage Clear !");
}