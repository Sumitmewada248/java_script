document.getElementById("btn1").addEventListener("click",display)

   async function display(){
     let table=`<table width="90%" border="1" bgcolor="yellow">
                <tr bgcolor="red">
                    <td>slug</td>
                    <td>URL</td>
                    <td>tittle</td>
                    <td>image</td>
                </tr>   
        `
       let api="https://jsonplaceholder.org/posts";
       let myobj= await fetch(api);
       let data =await myobj.json();

       data.map((key)=>{
       table+=`<tr>
        <td> ${key.slug} </td>
        <td> ${key.url} </td>
        <td> ${key.title} </td>
        <td><img src='${key.image}'"width="100" height="100"></td>
        </tr>`
       })
       table+="<table>";
        document.getElementById("demo").innerHTML=table;
    }
