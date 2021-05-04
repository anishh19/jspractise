var toggle=false;

function s(toggle){
    if(toggle==true){
        document.getElementById('imag').src='on.jpg';
        }
        else
        {
            document.getElementById('imag').src='off.jpg';
        }
    }
document.getElementById("on").addEventListener("click", function() {s(true)});
document.getElementById("off").addEventListener("click", function() {s(false)});
