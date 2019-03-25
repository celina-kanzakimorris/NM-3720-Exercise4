window.onload = init;

function init(){
		var xhr = new XMLHttpRequest();

		xhr.open("GET", "https://picsum.photos/list", true);

		xhr.send(null);

		xhr.onload = function(){

			if (xhr.status == 200){
				var picsum = JSON.parse(xhr.responseText);
				console.log(picsum);

				for (var x = 500; x < 550; x++){
					document.getElementById("gallery").innerHTML += "<img src='https://picsum.photos/200/300?image=" + picsum[x].id +"'><p>" + picsum[x].author +"</p>"

				}
			}
		}
}