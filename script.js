let btn = document.querySelector('#btn');
let rect = btn.getBoundingClientRect();
btn.addEventListener('mousemove', (e)=>{

    let mouseX = e.clientX - rect.left;
    let mouseY = e.clientY - rect.top;
    gsap.to(btn, {
        x: (mouseX - rect.width/2) * .5,
        y: (mouseY - rect.height/2) * .5,
    })
})
btn.addEventListener('mouseleave', (e)=>{
    gsap.to(btn, {
        x: 0,
        y: 0,
    })
})