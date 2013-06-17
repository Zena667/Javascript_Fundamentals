#inspect the logo on the google.com page
#copy the div id name
#go into console for the page

var gLogo = document.getElementById('hplogo');
gLogo.setAttribute('style', 'background:url(http://www.logostage.com/logos/yahoo.GIF) no-repeat; background-size:275px 95px;height:95px;width:275px');
var button = document.getElementById('gbqfsa');
button.innerHTML = 'yahoo search!';