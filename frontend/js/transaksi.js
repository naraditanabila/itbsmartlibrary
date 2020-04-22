const addTransaksi = async() => {
	const data = await JSON.stringify({
		id_anggota:document.getElementById("m_id_anggota").value,
		id_buku:document.getElementById("m_id_buku").value,	
	})
	console.log(data);
	const response = await fetch('https://api-itbsmartlibrary.herokuapp.com/peminjaman/add',{
		method:'POST',
		headers:{ 
			'Content-Type':'application/json'
		},
		body: data
	})
	const json = await response.json();
	console.log(json);
}

function searchDataTransaksi() {
	if ($("#sanggota").is(":checked")){
	$(document).ready(function(){
		$.ajax({
                  url: 'https://api-itbsmartlibrary.herokuapp.com/peminjaman/search/anggota/'+encodeURIComponent(document.getElementById('searchTransaksi').value),							   
		  type:'GET',
                  dataType: 'json',
                  success: function(response) {
			console.log(response);
			content = '';
			var isitab = document.getElementById('tabbodyTransaksi')
			$.each(response['result'], function(key, value) {
				content+=
					"<tr>" +
					"<td>"+value.id_transaksi+"\n"+
					"<td>"+value.id_anggota+"\n"+
					"<td>"+value.id_buku+"\n"+
                        	        "<td>"+value.tgl_mulai+"\n"+
                                	"<td>"+value.tgl_kembali+"\n"+
					"<td>"+value.tgl_selesai+"\n"+
                                        "<td>"+value.status_pinjam+"\n"+
					"<td>"+value.denda+"\n"+
					"</td><tr/>";
			})
			isitab.innerHTML = content;
                  },
                 error: function(response) {
                        console.log(response);
		 }
		})
	 });
	}
        else {
	  $(document).ready(function(){
		$.ajax({
                   url: 'https://api-itbsmartlibrary.herokuapp.com/peminjaman/search/buku/'+encodeURIComponent(document.getElementById('searchTransaksi').value),	
		   type:'GET',
                   dataType: 'json',
                   success: function(response) {
			console.log(response);
			content = '';
			var isitab = document.getElementById('tabbodyTransaksi')
			$.each(response['result'], function(key, value) {
				content+=
					"<tr>" +
					"<td>"+value.id_transaksi+"\n"+
					"<td>"+value.id_anggota+"\n"+
					"<td>"+value.id_buku+"\n"+
                                    	"<td>"+value.tgl_mulai+"\n"+
                                    	"<td>"+value.tgl_kembali+"\n"+
					"<td>"+value.tgl_selesai+"\n"+
                                    	"<td>"+value.status_pinjam+"\n"+
					"<td>"+value.denda+"\n"+
					"</td><tr/>";
			})
			isitab.innerHTML = content;
                    },
		});
	    });
	};
}
