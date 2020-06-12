console.log('Script file loaded.');

$(document).ready(function(){

  console.log('HTML file loaded and parsed.');
  addMyEventListeners();
  textOfTheDay(); 
  startSlider(0);
});

//Events
function addMyEventListeners() {

}

// function to generate random tagline text
function textOfTheDay() {
  // tagline text stored in an array
  var textArray = [
    'Contact Us Today on 888 555 1212 for a free consultation! don\'t miss out',
    'Call us today on 888 555 1212 for our best quote guaranteed',
    'Call Us Today and Talk to One of our Qualified Sales Team Representatives. We Gaurentee Quality',
    'We Can Always Guarantee a Quality Service. Call Us Today 888 555 1212 !',
    'Call today to Find out about our Special Offer of the day!'
  ];

  // random number 0-1 multiplied by length of array
  // return whole number to find random index
  // replace text of the html element with randomly selected text
  $('.tagline').html(textArray[Math.floor(Math.random() * textArray.length)]);
}

// function to start Slider
function startSlider( i ) {
    //local variable declared
    var sliderImage = $('.slider-img');
    // iterate through each img
    sliderImage.each(function() {
      // hide image animate
      $(this).animate({'opacity':0}, 400);
    });

    // show image animate
    sliderImage.eq(i).animate({'opacity':1}, 400);
    i++;
    // if the current image index is showing
    if (i == sliderImage.length){i = 0};
    // Show image for 5sec
    setTimeout(startSlider, 5000, i);
}
    