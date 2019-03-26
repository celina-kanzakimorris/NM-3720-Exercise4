window.onload = init;

function init(){
		var xhr = new XMLHttpRequest();

		xhr.open("GET", "https://picsum.photos/list", true);

		xhr.send(null);

		xhr.onload = function(){

			if (xhr.status == 200){
				var picsum = JSON.parse(xhr.responseText);
				console.log(picsum);

				for (var x = 10; x < 12; x++){
					document.getElementById("gallery").innerHTML += "<img src='https://picsum.photos/200?image=" + picsum[x].id +"'><a href='" + picsum[x].author_url + "'><p>" + picsum[x].author + "</p></a><a href='" + picsum[x].post_url + "'><p>Original Post</p></a>"

				}
				for (var x = 13; x < 17; x++){
					document.getElementById("gallery_col2").innerHTML += "<img src='https://picsum.photos/g/200?image=" + picsum[x].id +"'><a href='" + picsum[x].author_url + "'><p>" + picsum[x].author + "</p></a><a href='" + picsum[x].post_url + "'><p>Original Post</p></a>"

				}
				for (var x = 18; x < 20; x++){
					document.getElementById("gallery_col3").innerHTML += "<img src='https://picsum.photos/200?image=" + picsum[x].id +"'><a href='" + picsum[x].author_url + "'><p>" + picsum[x].author + "</p></a><a href='" + picsum[x].post_url + "'><p>Original Post</p></a>"
				}
				for (var x = 22; x < 26; x++){
					document.getElementById("gallery-col4").innerHTML += "<img src='https://picsum.photos/g/200?image=" + picsum[x].id +"'><a href='" + picsum[x].author_url + "'><p>" + picsum[x].author + "</p></a><a href='" + picsum[x].post_url + "'><p>Original Post</p></a>"
				}
			}
		}
}