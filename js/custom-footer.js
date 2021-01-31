var customfooter = new XMLHttpRequest();
customfooter.open("GET", "custom/footer.html", false);
customfooter.setRequestHeader('Pragma', 'no-cache');
customfooter.setRequestHeader('Cache-Control', 'no-cache');
customfooter.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
customfooter.onreadystatechange = function (){
  if(customfooter.readyState === 4){
    if (customfooter.status === 200) {
      document.write(customfooter.responseText);
    }
  }
}
customfooter.send(null);