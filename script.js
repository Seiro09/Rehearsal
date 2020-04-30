/* If you're feeling fancy you can add interactivity 
    to your site with Javascript */

// prints "hi" in the browser's dev tools console
console.log("hi");

function recherches(id_)
{
  for(var i=1; document.getElementById('recherches_'+i); i++) {
    document.getElementById("recherches_"+i).style.display = 
      (i == id_ && document.getElementById('recherches_'+i).style.display == 'none') ? 'block':'none';
  }
} 