document.getElementById("btn1").addEventListener("click",dataSave);
document.getElementById("btn2").addEventListener("click",dataDisplay);


function dataSave(){
    let rollno=document.getElementById("rno").value;
    let name=document.getElementById("nm").value;
    let city=document.getElementById("ct").value;
    let fees=document.getElementById("fs").value;

    let api="http://localhost:3000/students";
    fetch (api, {
        method:'POST',
        headers:{
            'Content-Type':'application/json'

        },
        body:JSON.stringify({
            "rollno":rollno,
            "name":name,
            "city":city,
            "fees":fees
        })
    }).then((res)=>{
        alert("Data Save!!")});

}

async function dataDisplay(){
    let MyData="";
    let api="http://localhost:3000/students";

    const myObj=await fetch(api);
    const Data=await myObj.json();

    Data.map((key)=>{
        MyData+=`<h1>Rollno: ${key.rollno} </h1>
        <h2> Student Name: ${key.name}</h2>
        <h2> ADDRESS: ${key.city}</h2>
        <h2>FEES: ${key.fees}</h2>`
    })
    document.getElementById("demo").innerHTML=MyData;
}
    
