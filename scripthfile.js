let p1 = new Promise((resolve,reject)=>{
    setTimeout(() =>{
      resolve("value 1");
    },5000)
  })
  let p2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value 2")
      //reject(new Error("error"));
    },2000);
  });
  
  let p3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
      resolve("value 3")
    },3000);
  })
  
  
  //which promise is first executed will give this
  let promise_all = Promise.race([p1,p2,p3])
  promise_all.then((value)=>{
    console.log(value)
  })
  
  let promise_error = Promise.reject(new Error("hey"))
  promise_error.then((value)=>{
    console.log(value)
  })

  console.log("hi there")