for (  var i = 0;  i < posts.length;  i++  ) {
    var url = "docs/" + posts[ i ] + ".md";
    var listxhr = new XMLHttpRequest();
    listxhr.open("GET", url, false);
    listxhr.setRequestHeader('Pragma', 'no-cache');
    listxhr.setRequestHeader('Cache-Control', 'no-cache');
    listxhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
    listxhr.onreadystatechange = function (){
      if(listxhr.readyState === 4){
        if (listxhr.status === 200) {
          var yaml3 = yamlFront.loadFront(listxhr.responseText);
          if (yaml3.date) {
            var entry_date3 = yaml3.date;
          } else{
            var entry_date3 = "No Date";
          }
          if (yaml3.title){
            var entry_title3 = yaml3.title;
          } else {
            var entry_title3 = "No Title";
          }
          var list = '<section id="posts"><a href="./?src=/' + posts[ i ] + '"><div id="entry"><p class="entry_content_date">' + entry_date3 +'</p><h1 class="entry_title">' + entry_title3 + '</h1></div></a></section>';
          document.write(list);
        }
      }
    }
    listxhr.send();
}