var $form = document.querySelector("#downloadform");
var $download = document.querySelector("#btn_download");
var $URLinput = document.querySelector("#q");
var $inputError = document.querySelector(".input-error");

$form.addEventListener(
	"submit",
	function (e) {
		e.preventDefault();

		// remove error if exist
		if ($inputError.classList.contains("show")) $inputError.classList.remove("show");

		var id = matchYoutubeUrl($URLinput.value);
		if (id) {
			window.location = "/download?url=" + id;
		} else {
			$inputError.classList.add("show");
		}

		// var xhttp = new XMLHttpRequest();
		// xhttp.onreadystatechange = function() {
		// 	if (this.readyState == 4 && this.status == 200) {
		// 		// Typical action to be performed when the document is ready:
		// 		// document.getElementById("demo").innerHTML = xhttp.responseText;
		// 		console.log(xhttp.responseText);
		// 	}
		// };
		// xhttp.open("GET", "/download?url=" + $URLinput.value, true);
		// xhttp.send();

		// reset the url field
		$URLinput.value = "";
	},
	true
);

function matchYoutubeUrl(url) {
	var p = /^(?:https?:\/\/)?(?:m\.|www\.)?(?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
	if (url.match(p)) {
		return url.match(p)[1];
	}
	return false;
}

// $download.addEventListener("click", () => {
// 	console.log(`URL: ${$URLinput.value}`);
// 	// sendURL(URLinput.value);
// });

// var xhttp = new XMLHttpRequest();
// xhttp.onreadystatechange = function() {
// 	if (this.readyState == 4 && this.status == 200) {
// 		// Typical action to be performed when the document is ready:
// 		document.getElementById("demo").innerHTML = xhttp.responseText;
// 	}
// };
// xhttp.open("GET", "filename", true);
// xhttp.send();

// element.addEventListener(
// 	"submit",
// 	function(evt) {
// 		evt.preventDefault();
// 		window.history.back();
// 	},
// 	true
// );
