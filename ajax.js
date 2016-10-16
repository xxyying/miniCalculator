function ajax(){ 
      var a = document.forms["myForm"]["A"].value; 
      var b = document.forms["myForm"]["B"].value; 
      var formdata = "A="+a+"&B="+b; 
      
      xmlhttp = new XMLHttpRequest(); 
      xmlhttp.onreadystatechange=function(){ \
        if(xmlhttp.readyState==4 && xmlhttp.status==200){ 
          document.getElementById("result").innerHTML=xmlhttp.responseText; 
        }; 
      }; 
      xmlhttp.open("POST","",true); 
      xmlhttp.send(formdata); 
      return false; 
    } 