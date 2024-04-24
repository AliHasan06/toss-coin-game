const p1 = document.querySelector('#p1');
const img = document.querySelector('img');
// const p2 = document.querySelector('#p2');


// let num;

function tosscoin(clickBtn){
//    console.log(clickbut)
const randomValue = Math.floor(Math.random()*2);
    if(randomValue == 0 && clickBtn === 'Head' || randomValue == 1 && clickBtn === 'Tail'  ){
// console.log('you won');
p1.innerHTML = `you won`

    }
    else{
// console.log('you lost');
p1.innerHTML = `you lost `
        
}

if(randomValue === 1){
img.src = './images/chand.jpeg'
}else{
    img.src = "./images/masjid.jpeg"
}













} 











// let h1 = document.querySelector('h1');
// let num = 1;
// function toss(clickBtn){
//     console.log("TOSS" , clickBtn);
//     // console.log(Math.ceil(Math.random(num)*2));
//     if(num == Math.ceil(Math.random(num)*2)){
//         h1.innerHTML += "TAIL <br />"
//     }else {
//         h1.innerHTML += 'Head <br />'
//     }
// }







