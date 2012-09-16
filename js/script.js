$(function(){
  // .name-input
  // .name-button
  // .name-output
  var nameDisplay = $('.name-display'),
      nameInput   = $('.name-input');
  
  // TODO: finish this validation function.
  var validateName = function(value){
    if(!value) return;
    var firstChar = value[0];
    if(firstChar !== firstChar.toUpperCase())
      alert('Not implemented.'); // TODO: show .alert-error
  };

  nameInput.on('change keyup', function(e){
    validateName($(this).val());
    nameDisplay.text($(this).val());
  });

  $('.name-button').click(function(){
    var name = ''; // ask the user for his/her name using prompt.
    nameInput.val(naem);
    nameInput.trigger('change'); // the change event only triggers on user input.
  });

  $(window).on('error', function(e){
    // Well that's not nice. Let's console.log it instead.
    // But before we use console.log, make sure to check it's available.
    // Also; don't to this in your own projects.
    alert('A scripting error occured!');
  });

});
