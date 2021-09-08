function disp(val) {
        document.getElementById("ans").value += val;
      }

      function sol() {
        var x = document.getElementById("ans").value;
        var z;

        if (x.indexOf("Sin") > -1) {
          var ret = x.replace("Sin", "");

          let temp = Math.sin(ret);
          document.getElementById("ans").value = temp;
        } else if (x.indexOf("Cos") > -1) {
          z = x.substr(3);
          let temp = Math.cos(z);

          document.getElementById("ans").value = temp;
        } else if (x.indexOf("Tan") > -1) {
          z = x.substr(3);
          let temp = Math.tan(z);

          document.getElementById("ans").value = temp;
        } else if (x.indexOf("Sq") > -1) {
          z = x.substr(2);
          var temp = z * z;

          document.getElementById("ans").value = temp;
        } else if (x.indexOf("root") > -1) {
          
          z = x.substr(4);
          
          var temp = Math.sqrt(z);
          
          document.getElementById("ans").value = temp;
        } else {
          var y = eval(x);

          document.getElementById("ans").value = y;
        }
      }
      function cl() {
        document.getElementById("ans").value = "";
      }
      function rm() {
        var x = document.getElementById("ans").value;

        var y = x.slice(0, -1);

        document.getElementById("ans").value = y;
	  }