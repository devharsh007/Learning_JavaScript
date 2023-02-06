const fib=()=>{
    let a=0,b=1;
    let Arr=[a,b];
    for (let i=0; i<20; i++ ){
        Arr.push(Arr[i]+ Arr[i+1])
    }
    console.log(Arr);
}
fib();