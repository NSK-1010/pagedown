function getParam(name, url) {
  if (!url) url = window.location.href;
  name = name.replace(/[\[\]]/g, "\\$&");
  var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
  if (!results) return null;
  if (!results[2]) return '';
  return decodeURIComponent(results[2].replace(/\+/g, " "));
}

var src = getParam('src');

if (src) {
  var url = "docs/" + src + ".md";
} else {
  var url = "docs/index.md";
}

function error404_2 (){
  var error4040_2 = new XMLHttpRequest();
  error4040_2.open("GET", "docs/404.md", false);
  error4040_2.setRequestHeader('Pragma', 'no-cache');
  error4040_2.setRequestHeader('Cache-Control', 'no-cache');
  error4040_2.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
  error4040_2.onreadystatechange = function (){
    if(error4040_2.readyState === 4){
      if (error4040_2.status === 200) {
        document.write(marked(error4040_2.responseText));
      } else {
        document.write(marked("# Error&nbsp;" + error4040_2.status));
      }
    }
  }
  error4040_2.send(null);
}

function error404_1 (){
  var url1 = "docs/" + src + "/index.md";
  var error404_1 = new XMLHttpRequest();
  error404_1.open("GET", url1, false);
  error404_1.setRequestHeader('Pragma', 'no-cache');
  error404_1.setRequestHeader('Cache-Control', 'no-cache');
  error404_1.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
  error404_1.onreadystatechange = function (){
    if(error404_1.readyState === 4){
      if (error404_1.status === 200) {
        var yaml2 = yamlFront.loadFront(error404_1.responseText);
        var yaml2 = yamlFront.loadFront(error404_1.responseText);
        if (yaml2.date) {
          var entry_date1 = yaml2.date;
        } else{
          var entry_date1 = "No Date";
        }
        if (yaml2.title){
          var entry_title1 = yaml2.title;
        } else {
          var entry_title1 = "No Title";
        }
        if (yaml2.__content) {
          var entry_content1 = yaml2.__content;
        } else {
          var entry_content1 = "No Content";
        }
        var html = '<div id="entry_header"><p class="entry_content_date">' + entry_date1 + '</p><h1 class="entry_title">' + entry_title1 + '</h1></div><div id="entry_content">' + marked(entry_content1) + '</div>';
        document.write(html);
      } else if (xhr.status === 404) {
        error404_2();
      } else {
        document.write(marked("# Error&nbsp;" + xhr.status));
      }
    }
  }
  error404_1.send();
}

var xhr = new XMLHttpRequest();
xhr.open("GET", url, false);
xhr.setRequestHeader('Pragma', 'no-cache');
xhr.setRequestHeader('Cache-Control', 'no-cache');
xhr.setRequestHeader('If-Modified-Since', 'Thu, 01 Jun 1970 00:00:00 GMT');
xhr.onreadystatechange = function (){
  if(xhr.readyState === 4){
    if (xhr.status === 200) {
      var yaml1 = yamlFront.loadFront(xhr.responseText);
      if (yaml1.date) {
        var entry_date = yaml1.date;
      } else{
        var entry_date = "No Date";
      }
      if (yaml1.title){
        var entry_title = yaml1.title;
      } else {
        var entry_title = "No Title";
      }
      if (yaml1.__content) {
        var entry_content = yaml1.__content;
      } else {
        var entry_content = "No Content";
      }
      var html = '<div id="entry_header"><p class="entry_content_date">' + entry_date + '</p><h1 class="entry_title">' + entry_title + '</h1></div><div id="entry_content">' + marked(entry_content) + '</div>';
      document.write(html);
    } else if (xhr.status === 404) {
      error404_1();
    } else {
      document.write(marked("# Error&nbsp;" + xhr.status));
    }
  }
}
xhr.send();