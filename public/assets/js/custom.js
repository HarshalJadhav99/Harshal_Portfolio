// const buttons = document.querySelectorAll('.animated-button');
// buttons.forEach(btn => {
//   btn.addEventListener('mouseenter', function(e){
    
//     let x = e.clientX -e.target.offsetLeft;
//     let y = e.clientY -e.target.offsetTop;
    
//     let ripples = document.createElement('span');
//     ripples.style.left = x +'px';
//     ripples.style.top = y +'px';
//     this.appendChild(ripples);
    
//     setTimeout(() =>{
//       ripples.remove()
//     }, 1000);
//   })
// })

$(function() {  
    $('.btn-6')
      .on('mouseenter', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
              $(this).find('span').css({top:relY, left:relX})
      })
      .on('mouseout', function(e) {
              var parentOffset = $(this).offset(),
                relX = e.pageX - parentOffset.left,
                relY = e.pageY - parentOffset.top;
          $(this).find('span').css({top:relY, left:relX})
      });
  });
  