$(document).ready(function(){
  $('#bitePicture').popover(
    {
        html: true,
        trigger: 'click',
        placement: 'bottom',
        content: function () { return '<img src="' + $(this).data('img') + '" />'; }
      });  
});