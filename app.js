  /*code for custom mouse cursor
  get the element and store in variable
  */
  const cursorMouse = document.querySelector('.mouse-cursor');

  //arrow function which passes the event as the parameter then get x and y axis cursor position, storing them in variables

  const cursorMove = (e) => {
      const mouseY = e.clientY; //vertical
      const mouseX = e.clientX; //horizontal

      //use css style transform property to translate

      cursorMouse.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
     

  }
  window.addEventListener('mousemove', cursorMove);

 //code which makes animation on scroll effect


 /*get elememnts which intersection-animate class, this helps us select the 
 elemnts which will animate on scroll*/

 const animate = document.querySelectorAll('.animation');

 const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting){
      entry.target.classList.add('scroll-animate')
    }
      else {
        entry.target.classList.remove('scroll-animate')
      }
      })
      },
      {threhold: 0.5
      });
    
  
  for (let i=0 ; i < animate.length ; i++){
    const elements = animate[i];
    observer.observe(elements);
  }
 

