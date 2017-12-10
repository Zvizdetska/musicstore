
function getJSONObject(file_url)
{
	var myObj = null;
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = function() {
		if (this.readyState == 4 && this.status == 200) {
			myObj = JSON.parse(this.responseText);
		}
	};
	xhttp.open("GET", file_url, false);
	xhttp.send();
	return myObj;
};
function searchMusic(obj)
{
	var ira_json = getJSONObject("ira.json");
	var zoriana_json = getJSONObject("zoryana.json");
	var all_json = ira_json.concat(zoriana_json);
	document.body.innerHTML += '<pre>' + JSON.stringify(all_json) + '</pre>';
	return false;
};
