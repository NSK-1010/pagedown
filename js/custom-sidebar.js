var customsidebar = new XMLHttpRequest();
customsidebar.open("GET", "custom/sidebar.html", false);
customsidebar.setRequestHeader('Pragma', 'no-cache');
customsidebar.setRequestHeader('Cache-Control', 'no-cache');
customsidebar.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
customsidebar.onreadystatechange = function (){
  if(customsidebar.readyState === 4){
    if (customsidebar.status === 200) {
      document.write(customsidebar.responseText);
    }
  }
}
customsidebar.send(null);