"use strict"
// let offset = 0;
// let oneSlide = document.querySelector('.oneSlide');
// const sliderLine = document.querySelector('.sliderLine');
// document.querySelector('.next').addEventListener('click', function (){
// offset+=1691;
// if(offset>=5073){
//     offset=0;
// }else if(offset==5073){
//     offset-=5073;
// }
// sliderLine.style.left = -offset + 'px';
// })

// document.querySelector('.previous').addEventListener('click', function (){
//     offset-=1691;
//     if(offset<0){
//         offset=3382;
//     }
//     sliderLine.style.left = -offset + 'px';
//     })
let next = 0;
let previous = 0;
let zIndexSlide = -1;
document.querySelector('.next').addEventListener('click', function (){
    let slide = document.querySelectorAll('.slidee');
        slide[next].style.zIndex = "-1";
        slide[next].style.opacity = '0';
        slide[next].style.transition = 'all ease 1.5s';
        next+=1;
        if(previous!==0){
            previous-=1;
        } else{
            previous+=1
        };
    })

document.querySelector('.previous').addEventListener('click', function (){
    let slide = document.querySelectorAll('.slidee');
    slide[previous].style.zIndex = "-1";
    slide[previous].style.opacity = '0';
    slide[previous].style.transition = 'all ease 1.5s';
    previous+=1;
    if(next!==0){
        next-=1;
    };;
    })
