function InsertTaskIntoTheDb(task,name,id){
        console.log(task);
        console.log("I am in the Class Of A Insert Task Into DB....");
       
       fetch('http://localhost:8080/InsertTask',{
            method:"POST",
            headers:{
                "Content-Type":"application/json",
                "Accept":"application/json"
            },
            body:JSON.stringify(task)
       }).then(x=>{
             return x.json();
       }).then(x=>{
        console.log(x);
        alert("Your Data Inserted Successfully...")
        document.location=`/createtask/${name}/${id}`;
       }).catch(x=>{
             console.log(x);
            alert("please Try Again")
       })
}


function UpdateAmolGarje(task,name,id,tid){
      console.log(task);
      console.log("I am in the Class Of A Insert Task Into DB....");
     
     fetch(`http://localhost:8080/updatedata/${id}/${tid}`,{
          method:"PUT",
          headers:{
              "Content-Type":"application/json",
              "Accept":"application/json"
          },
          body:JSON.stringify(task)
     }).then(x=>{
           return x.json();
     }).then(x=>{
      console.log(x);
      alert("Your Data Inserted Successfully...")
      document.location=`/viewtask/${name}/${id}`;
     }).catch(x=>{
           console.log(x);
          alert("please Try Again")
     })
}

export { InsertTaskIntoTheDb,UpdateAmolGarje};