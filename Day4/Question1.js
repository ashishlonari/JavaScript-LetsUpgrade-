console.log('Ashish ')
for (let i=0;i<100;i+=3){
    if(i%3==0){
        console.log(`${i}fizz`)
    }
    if(i%5==0){
        console.log(`${i}buzz`)
    }
    if(i%3==0 && i%5==0){
        console.log(`${i}fizzbuzz`)
    }
}