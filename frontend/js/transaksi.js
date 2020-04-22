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