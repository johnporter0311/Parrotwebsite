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
        
    $('.carousel').carousel()
  });

  function validateForm () {
    var error="";
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
   if($('#fname').val().length ==0){
     error+="Please enter first name.\n";
    }
   if($('#lname').val().length ==0){
     error+="Please enter last name.\n";
    }
   if($('#InputEmail1').val().length ==0){
     error+="Please enter email address.\n";
    }
   else {
     if(!regex.test($('#InputEmail1').val())){
      error+="Please enter a valid email address.\n";
     }
    }
    if(error.length >0){
      alert (error);
    }
    else{
      alert('Thank you for the message ' +$('#fname').val());
    }
   return false;
  }

