function showModal() {
	document.getElementById('detailModal').style.display='block';
    }

	function hideModal() {
	document.getElementById('detailModal').style.display='none';
    }
	
	function showTabelSearch() {
    	var x = document.getElementById("tabelBuku");
		if ($("#sjudul").is(":checked")){
			$(document).ready(function(){
				$.ajax({
                    url: 'https://api-itbsmartlibrary.herokuapp.com/buku/search/title/'+encodeURIComponent(document.getElementById('searchBuku').value),
                    type:'GET',
                    dataType: 'json',
                    success: function(response) {
						console.log(response);
							content = '';
							var isitab = document.getElementById('tabbodyBuku')
							content+=
							    "<tr>" +
								    "<td>"+response.result[0].id_buku+"\n"+
									"<td>"+response.result[0].judul+"\n"+
                                    "<td>"+response.result[0].author+"\n"+
                                    "<td>"+response.result[0].lokasi+"\n"+
                                    "<td>"+response.result[0].jml_total+"\n"+
                                    "<td>"+response.result[0].jml_pinjam+"\n"+
                                    "<td>"+response.result[0].jml_avail+"\n"+
								"</td><tr/>";
								isitab.innerHTML = content;
				
				      }
				})
			 });
		}
        else {
			$(document).ready(function(){
				$.ajax({
                    url: 'https://api-itbsmartlibrary.herokuapp.com/buku/search/author/'+encodeURIComponent(document.getElementById('searchBuku').value),
                    type:'GET',
                    dataType: 'json',
                    success: function(response) {
						console.log(response);
							content = '';
							var isitab = document.getElementById('tabbodyBuku')
							content+=
								"<tr>" +
								 "<td>"+response.result[0].id_buku+"\n"+
									"<td>"+response.result[0].judul+"\n"+
                                    "<td>"+response.result[0].author+"\n"+
                                    "<td>"+response.result[0].lokasi+"\n"+
                                    "<td>"+response.result[0].jml_total+"\n"+
                                    "<td>"+response.result[0].jml_pinjam+"\n"+
                                    "<td>"+response.result[0].jml_avail+"\n"+
								"</td><tr/>";
							isitab.innerHTML = content;
							}
				});
				});
		   };
	}