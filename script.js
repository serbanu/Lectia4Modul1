function createTable()
{
	var tbody = '';
        var theader = '<div style="position:relative; left:50%; top:30%" id="tabelstatic" ><table border="1" id="table" width = 13%  >\n';
              		tbody += '<tr class = "linia1">';
					tbody += '<td id = "coloana1"';
					tbody += '<ul><li>Inmultirea Puterilor</li></ul>';
			tbody += '</tr>\n';
			tbody += '<tr class = "linia2">';
					tbody += '<tr class = "linia2">';
					tbody += '<td id="coloana1"';
					tbody += '<ul><li>Puterea unui produs</li></ul>';
			tbody += '</tr>\n';
			tbody += '<tr class = "linia3">';
					tbody += '<tr class = "linia3">';
					tbody += '<td id="coloana1"';
					tbody += '<ul><li>Impartirea puterilor</li></ul>';
			tbody += '</tr>\n';
			tbody += '<tr class = "linia4">';
					tbody += '<tr class = "linia4">';
					tbody += '<td id="coloana1"';
					tbody += '<ul><li>Puterea unei puteri</li></ul>';
			tbody += '</tr>\n';
			var tfooter = '</table></div>';
    document.getElementById('tabelinitial').innerHTML = theader + tbody + tfooter;

}