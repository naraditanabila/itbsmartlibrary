const addBuku = async() => {
	const data = await JSON.stringify({
        id_buku:document.getElementById("m_id_buku").value,
		judul:document.getElementById("m_judul").value,
        author:document.getElementById("m_author").value,	
        lokasi:document.getElementById("m_lokasi").value,
        jml_total:document.getElementById("m_jml_total").value,
	})
	console.log(data);
	const response = await fetch('https://api-itbsmartlibrary.herokuapp.com/buku/add',{
		method:'POST',
		headers:{ 
			'Content-Type':'application/json'
		},
		body: data
	})
	const json = await response.json();
	console.log(json);
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
