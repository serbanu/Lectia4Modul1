$(document).ready(function() {
	
	function empty() {
		$("#coloana1").remove();
		$("#coloana2").remove();
	};

	function schelet(){
		var tbody = '';
        var theader = '<div style="position:relative; left:70%; top:30%" id="tabelstatic" ><table border="1" id="table" width = 13%  >\n';
                      tbody += '<tr class = "linia1">';
                    tbody += '<td id = "coloana1"';

            tbody += '</tr>\n';
            tbody += '<tr class = "linia2">';
                    tbody += '<td id="coloana2"';
                    
            tbody += '</tr>\n';
            var tfooter = '</table></div>';
            document.getElementById('tabelEcran').innerHTML = theader + tbody + tfooter;

	};
	
	function inmultireaPuterilor() {
		empty();
		$(".linia1").append("<td id=’coloana 1’> <div style'font-size: 10; color: red; background-color: yellow;'>a<sup style='color: green;'>m</sup> * a<sup style='color: green;'>n</sup> = a<sup style='color: green;'>m+n</sup></div></td> ");
		$(".linia2").append("<td id=’coloana 2’> <div>13<sup><input type='text' id='box1' class='sizeBox' value='' maxlength='1' size='1'></sup> * 13<sup><input type='text' id='box2' class='sizeBox' value='' maxlength='1' size='1'></sup> = 13<sup><input type='text' id='box3' class='sizeBox' value='' maxlength='1' size='1'></sup></div></td>");
		//var val1 = $(.)
	};
	inmultireaPuterilor();
});
