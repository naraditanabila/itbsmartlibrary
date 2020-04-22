const addUmum = async() => {
	const data = await JSON.stringify({
        nama:document.getElementById("m_nama").value,	
        alamat:document.getElementById("m_alamat").value,
        no_hp:document.getElementById("m_no_hp").value,
        email:document.getElementById("m_email").value,
		pekerjaan:document.getElementById("m_job").value,
	})
	console.log(data);
	const response = await fetch('https://itbsmartlibrary.herokuapp.com/anggota/register',{
		method:'POST',
		headers:{ 
			'Content-Type':'application/json'
		},
		body: data
	})
	const json = await response.json();
	console.log(json);
}

function showDataSearch() {
		if ($("#smahasiswa").is(":checked")){
            document.getElementById('tabelUmum').style.display='none';
			$(document).ready(function(){
				$.ajax({
                    url: 'https://itbsmartlibrary.herokuapp.com/anggota/mahasiswa/'+encodeURIComponent(document.getElementById('searchData').value),
                    type:'GET',
                    dataType: 'json',
                    success: function(response) {
						console.log(response);
							content = '';
							var isitab = document.getElementById('tabbodyMahasiswa')
							content+=
							    "<tr>" +
								    "<td>"+response.result[0].nim+"\n"+
									"<td>"+response.result[0].nama+"\n"+
                                    "<td>"+response.result[0].fakultas+"\n"+
                                    "<td>"+response.result[0].prodi+"\n"+
                                    "<td>"+response.result[0].angkatan+"\n"+
                                    "<td>"+response.result[0].status_aktif+"\n"+
								"</td><tr/>";
								isitab.innerHTML = content;
				
				      }
				})
			 });
		}
        else {
            document.getElementById('tabelMahasiswa').style.display='none';
			$(document).ready(function(){
				$.ajax({
                    url: 'https://itbsmartlibrary.herokuapp.com/anggota/umum/'+encodeURIComponent(document.getElementById('searchData').value),
                    type:'GET',
                    dataType: 'json',
                    success: function(response) {
				console.log(response);
				content = '';
				var isitab = document.getElementById('tabbodyUmum')
					content+=
						"<tr>" +
						"<td>"+response.result[0].id_umum+"\n"+
						"<td>"+response.result[0].nama+"\n"+
                                   		"<td>"+response.result[0].alamat+"\n"+
                                    		"<td>"+response.result[0].no_hp+"\n"+
                                    		"<td>"+response.result[0].email+"\n"+
                                    		"<td>"+response.result[0].pekerjaan+"\n"+
						"</td><tr/>";
					isitab.innerHTML = content;
				}
			});
		});
	 };
	}
