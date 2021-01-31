var customheader = new XMLHttpRequest();
customheader.open("GET", "custom/header.html", false);
customheader.setRequestHeader('Pragma', 'no-cache');
customheader.setRequestHeader('Cache-Control', 'no-cache');
customheader.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
customheader.onreadystatechange = function (){
  if(customheader.readyState === 4){
    if (customheader.status === 200) {
      document.write(customheader.responseText);
    }
  }
}
customheader.send(null);