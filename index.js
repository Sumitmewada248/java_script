document.getElementById("btn1").addEventListener("click",MyFun);

function MyFun(){
    let phy= Number(document.getElementById("phy").value)
    let che=Number(document.getElementById("che").value)
    let mat=Number(document.getElementById("mat").value)
    let eng=Number(document.getElementById("eng").value)
    let hin=Number(document.getElementById("hin").value)

    let totalmarks=phy+che+mat+eng+hin;

    let percentage=totalmarks*100/500;

    document.getElementById('ans1').innerHTML="totalmarks :"+totalmarks;
    document.getElementById('ans2').innerHTML="percentage :"+percentage+"%";

}