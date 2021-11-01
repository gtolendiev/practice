<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title>Practise</title>
  </head>
  <body bgcolor="#A6C5F5">
      <div id="div"
      align="center">
        <p align="center">Students</p>
        <input id="go" type="button" value="Go!">
      </div>
  </body>
  <script>
      let students=["Gala","Anelya","Sonya","Kais","Ilyas","Seka","Aiza","Dancho","Aseke"]
      go.onclick = function() {
        
var countStudents = students.length;
        var ul = document.createElement('ul');
        document.write('<div className="students"><ul className="ul">');
for (var i = 0; i < countStudents; i++) {
  var name = students[i];
  document.write('<li className="name"><h4>' + name + '</h4></li>');
  };
};
  </script> 
