$('.animated').waypoint({
    handler(direction) {
      if (direction === 'down') {
        $(this.element).addClass('fadeInUp');
        $(this.element).removeClass('fadeOutUp');
      }else if (direction === 'up') {
        $(this.element).addClass('fadeOutUp');
        $(this.element).removeClass('fadeInUp');
      }
    },
    offset: '50%',
  });