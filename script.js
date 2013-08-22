function createTable()
{
	var tbody = '';
        var theader = '<div style="position:relative; left:10%; top:30%; " id="tabelstatic" ><table border="1" id="table" width = 13% style="float:left; margin-right:10px;" >\n';
              		tbody += '<tr class = "linia1">';
					tbody += '<td id = "coloana1"';
					tbody += '<ul><li>Inmultirea Puterilor</li></ul>';
			tbody += '</tr>\n';
			tbody += '<tr class = "linia2">';
					
					tbody += '<td id="coloana1"';
					tbody += '<ul><li>Puterea unui produs</li></ul>';
			tbody += '</tr>\n';
			tbody += '<tr class = "linia3">';
					
					tbody += '<td id="coloana1"';
					tbody += '<ul><li>Impartirea puterilor</li></ul>';
			tbody += '</tr>\n';
			tbody += '<tr class = "linia4">';
					
					tbody += '<td id="coloana1"';
					tbody += '<ul><li>Puterea unei puteri</li></ul>';
			tbody += '</tr>\n';
			var tfooter = '</table></div>';
    document.getElementById('tabelinitial').innerHTML = theader + tbody + tfooter;
//
}
function schelet(){
var tbody = '';
        var theader = '<div style="position:relative; left:40%; " id="tabelstatic" ><table border="1" id="table" width = 13% height=100 >\n';
              		tbody += '<tr class = "linia1">';
					tbody += '<td id = "coloana1"';

			tbody += '</tr>\n';
			tbody += '<tr class = "linia2">';
					tbody += '<td id="coloana2"';
					
			tbody += '</tr>\n';
	var tfooter = '</table></div>';
    document.getElementById('tabelEcran').innerHTML = theader + tbody + tfooter;

}
