function warteAuf(ms:number): Promise<string>{
      
     return new Promise ((resolve , reject)  => {
      if(ms < 0){
        reject ("error : negative Zahl");
       }
       setTimeout(() => {
           resolve("Fertig nach " + ms + "ms");
       }, ms);
     });
}
warteAuf(300).then(message =>{console.log(message)})
              .catch(error =>{console.log(error)})

function zufaelligerErflog(): Promise<number>{
      let randomNumber = Math.floor(Math.random() * 100)
  return new Promise((resolve , reject) => {
       if(randomNumber % 2 === 0){
       resolve(randomNumber);
       }else{
        reject(new Error("Error"));
       }
  });
}

for(let i = 0 ; i< 5 ; i++){
  zufaelligerErflog().then(msg =>{console.log(msg)})
                   .catch((error:Error)  =>{console.log(error.message)});
}


const promise1 = new Promise((resolve) =>{
  setTimeout( () => {
     resolve("Promise 1");
  } , 300);
});

const promise2 = new Promise((resolve) =>{
  setTimeout( () => {
     resolve("Promise 2");
  } , 600);
});

const promise3 = new Promise((resolve) =>{
  setTimeout( () => {
     resolve("Promise 3");
  } , 900);
});

Promise.all([promise1, promise2 , promise3]).then(msg => {
                                            console.log(msg);
                                            }).catch(error =>{
                                             console.log(error);
                                            });
                                            