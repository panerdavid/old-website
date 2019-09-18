$(document).ready(function() {

  $('#wrapper').fullpage({
    anchors: ["site"],
    loopHorizontal: false,
    controlArrows: false,


  });

  $('#contactIcons').click(function() {
    $('#contactIcons').attr('style', 'display: block !important');
    $('#contactIcons').css('display', 'block');
});


  $('#me').typeIt({
    strings: ["Student", "Musician", "Programmer", "Educator", "Dog lover"],
    speed: 175,
    breakLines: false,
    loop: true,
    startDelay: 150,
    deleteDelay: 1000,
    loopDelay: 900

  });
});
