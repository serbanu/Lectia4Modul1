$(document).ready(function() {
	
	function empty() {
		$(".linia1").empty();
		$(".linia2").empty();
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
		$(".linia1").append("<td id=’coloana 1’ style = 'background-color: yellow;'> <div style='font-size: 10; color: red; '>a<sup style='color: green;'>m</sup> * a<sup style='color: green;'>n</sup> = a<sup style='color: green;'>m+n</sup></div></td> ");
		$(".linia2").append("<td id=’coloana 2’> <div>13<sup><input type='text' id='box1' class='sizeBox' value='' maxlength='1' size='1'></sup> * 13<sup><input type='text' id='box2' class='sizeBox' value='' maxlength='1' size='1'></sup> = 13<sup><input type='text' id='box3' class='sizeBox' value='' maxlength='2' size='2'></sup></div></td>");
		//var val1 = $(.)
		function calcul(a,b)
		{
		return a+b;
		}
		
	};
	function putereaUnuiProdus() {
		empty();
		$(".linia1").append("<td id=’coloana 1’ style = 'background-color: yellow;'> <div style='font-size: 10; color: red; '>(a*b)<sup style='color: green;'>n</sup> = a<sup style='color: green;'>n</sup>*b<sup style='color: green;'>n</sup></div></td> ");
		$(".linia2").append("<td id=’coloana 2’> <div>(9*10)<sup><input type='text' id='box1' class='sizeBox' value='' maxlength='1' size='1'></sup> = 9<sup><input type='text' id='box3' class='sizeBox' value='' maxlength='2' size='2'></sup>*10<sup><input type='text' id='box3' class='sizeBox' value='' maxlength='2' size='2'></sup></div></td>");
		//var val1 = $(.)
	};
	function impartireaPuterilor() {
		empty();
		$(".linia1").append("<td id=’coloana 1’ style = 'background-color: yellow;'> <div style='font-size: 10; color: red; '>a<sup style='color: green;'>m</sup> : a<sup style='color: green;'>n</sup> = a<sup style='color: green;'>m-n</sup></div></td> ");
		$(".linia2").append("<td id=’coloana 2’> <div>8<sup><input type='text' id='box1' class='sizeBox' value='' maxlength='1' size='1'></sup> : 8<sup><input type='text' id='box2' class='sizeBox' value='' maxlength='1' size='1'></sup> = 8<sup><input type='text' id='box3' class='sizeBox' value='' maxlength='2' size='2'></sup></div></td>");
		//var val1 = $(.)
	};
	function putereaUneiPuteri() {
		empty();
		$(".linia1").append("<td id=’coloana 1’ style = 'background-color: yellow;'> <div style='font-size: 10; color: red; '>(a<sup style='color: green;'>m</sup>)<sup style='color: green;'>n</sup> = a<sup style='color: green;'>m*n</sup></div></td> ");
		$(".linia2").append("<td id=’coloana 2’> <div>(5<sup><input type='text' id='box1' class='sizeBox' value='' maxlength='1' size='1'></sup>)<sup><input type='text' id='box1' class='sizeBox' value='' maxlength='1' size='1'></sup>= 5<sup><input type='text' id='box3' class='sizeBox' value='' maxlength='2' size='2'></sup></div></td>");
		//var val1 = $(.)
	};
	$( ".liniaa1" ).click(function() {
	empty();
	inmultireaPuterilor();
								});
	$( ".liniaa2" ).click(function() {
	empty();
	putereaUnuiProdus();
								});
	$( ".liniaa3" ).click(function() {
	empty();
	impartireaPuterilor();
								});
	$( ".liniaa4" ).click(function() {
	empty();
	putereaUneiPuteri();
								});
	// Butonul de reset Curata Ecranul (tabelul dreapta)
	$(".reset").click(function() {
	empty();
});
	//$("img").hide();
});
