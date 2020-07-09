$(document).ready(function(){
  $('#bitePicture').popover(
    {
        html: true,
        trigger: 'click',
        placement: 'bottom',
        content: function () { return '<img src="' + $(this).data('img') + '" />'; }
      });  

    $('#destructivePicture').popover(
      {
          html: true,
          trigger: 'click',
          placement: 'bottom',
          content: function () { return '<img src="' + $(this).data('img') + '" />'; }
        });  

    $('#pluckingbirdPicture').popover(
      {
          html: true,
          trigger: 'click',
          placement: 'bottom',
          content: function () { return '<img src="' + $(this).data('img') + '" />'; }
        });  

    $('#sizeofparrotsPicture').popover(
          {
          html: true,
          trigger: 'click',
          placement: 'bottom',
          content: function () { return '<img src="' + $(this).data('img') + '" />'; }
        });  

    $('#cockatoodustPicture').popover(
          {
          html: true,
          trigger: 'click',
          placement: 'bottom',
          content: function () { return '<img src="' + $(this).data('img') + '" />'; }
        }); 

    $('#parrotlifechartPicture').popover(
          {
          html: true,
          trigger: 'click',
          placement: 'bottom',
          content: function () { return '<img src="' + $(this).data('img') + '" />'; }
        });  

    $('#95angerPicture').popover(
          {
          html: true,
          trigger: 'click',
          placement: 'bottom',
          content: function () { return '<img src="' + $(this).data('img') + '" />'; }
        });      
  });