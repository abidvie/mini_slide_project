var slide_show_elements=document.querySelectorAll(".slide-show-element");
console.log(slide_show_elements);
let c=1;

setInterval(()=>{
c++;
    let curr_element=document.querySelector(".current");
    curr_element.classList.remove("current");

    if(c>slide_show_elements.length)
    {
        slide_show_elements[0].classList.add("current");
        c=1;
    }
    else{
        curr_element.nextElementSibling.classList.add("current");
    }
    

},2000);


// var x=document.querySelectorAll(".slide-show-element");
// console.log(x);


// const promise=new Promise((resolve,reject)=>{
//     let complete_promise=true;

//     if(complete_promise==true)
//     {
//         resolve("ok");
//     }
//     else
//     {
//         reject("bal tor");
//     }
// });


// console.log(promise);


// promise
// .catch((err)=>{
//     console.log(err);
// })

// .then(function(res){
//     console.log(res);

// });



// fetch('https://jsonplaceholder.typicode.com/todos/50')
// .then((res)=>{
//    return res.json();
// })
// .then((res)=>{
//     console.log(res);
// })


// async function response(){
//   const res= await fetch('https://jsonplaceholder.typicode.com/todos/10')
//    if(!res.ok)
//    {
//    const message='Error :${res.status}'
//     throw new Error(message);
//    }
//    const data=await res.json();


//    return data;

// }


// function getdata(){
//     response()
//     .then((res)=>{
//         console.log(res);
//     })
//     .catch((err)=>{
//         console.log(err);
//     })
// }

// getdata();




// async function response() {
//     try {
//         const res = await fetch('https://jsonplaceholder.typicode.com/todos');

//         // if (!res.ok) {
//         //      const message = `Error: ${res.status}`;
            
//         //     throw new Error(message);
//         // }

//         const data = await res.json();
//         return data;
//     } catch (err) {
//         throw err; // Re-throw error to be caught in `getdata`
//     }
// }

// function getdata() {
//     response()
//         .then((res) => {
//             console.log(res);
//         })
//         .catch((err) => {
//             console.error(err.message); // Proper error logging
//         });
// }

// getdata();


// axios
// .get('https://jsonplaceholder.typicode.com/todos')
// .then((res)=>{
//     console.log(res);
// })






