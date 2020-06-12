console.log('Script file loaded.');

$(document).ready(function(){
  
  console.log('HTML file loaded and parsed.');
  addMyEventListeners();

});

// Events
function addMyEventListeners() {
  //local variable
  var lessMoreInfo = $('.more-info');
  // show more info click event
  lessMoreInfo.on('click',function() {
    // iterate through each '.more-info' html class
    $( this ).each(function( i ) {
      togglePara(this); // execute to show/hide current para
    });

  });

  // for each thumnail image
  $('.thumbnail').each(function(index) {
    // iterate through the index and store as target showcase img & text
    var targetShowcase = $('.showcase').eq(index);
    $(this).click(function() { // click event on current 
        hideShowcaseImages(); // hides all showcase images
        targetShowcase.fadeIn(1000); // shows target showcase img&text
    });
  });

}

// Toggle paragraph by sliding up and down
function togglePara(htmlEl){

  // if html element is shown
  if($(htmlEl).prev().css('display') == 'block') {
      $(htmlEl).prev().slideUp();  // hide paragraph
      $(htmlEl).html('Click here for More Information'); // change text of html element 
  
  // else if html element is hidden
  } else if ($(htmlEl).prev().css('display') == 'none') {
      $(htmlEl).prev().slideDown(); // Show paragraph
      $(htmlEl).html('Click here for Less Information'); // change text of html element
  }
}

// hide all images
function hideShowcaseImages(){
  $('.showcase').hide();
};
