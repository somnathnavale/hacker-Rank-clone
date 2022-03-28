const menu=document.querySelector('.menu');
const close=document.querySelector('.close');
const navList=document.querySelector('.nav-list');

menu.addEventListener('click',(e)=>{
    menu.classList.add('hidden');
    close.classList.remove('hidden');
    navList.classList.remove('translate-x-[-120%]');
})
close.addEventListener('click',(e)=>{
    close.classList.add('hidden');
    menu.classList.remove('hidden');
    navList.classList.add('translate-x-[-120%]');
})
