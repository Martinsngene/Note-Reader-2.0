// LOAD A BOOK FROM DISK

function loadBook(filename, displayName){
	let currentBook = "";
	let url = "books/" + filename;

	// RESET OUR UI
	document.getElementById("fileName").innerHTML = displayName;

	document.getElementById("searchstat").innerHTML = "";

	document.getElementById("keyword").value = "";

	// CREATE A SERVER REQUEST TO LOAD OUR BOOK

	var xhr = new XMLHttpRequest();
	xhr.open("GET", url, true);
	xhr.send();


	xhr.onreadystatechange = function(){
		if (xhr.readyState == 4 && xhr.status == 200) {
			currentBook = xhr.responseText;

			document.getElementById("fileContent").innerHTML = currentBook;

			// Remove line breaks and carriage returns and replace with a <br>
			currentBook = currentBook.replace(/(?:\r\n|\r|\n)/g, '<br>');

			var elmnt = document.getElementById("fileContent");
			elmnt.scrollTop = 0;
		}
	};

}