//create count in database
if (localStorage.getItem("count")==null){
	localStorage.setItem("count",0)
}

//update html to match count
function update() {
	document.getElementById("count").innerHTML = localStorage.getItem("count")
}

update()

// add one to count with big button
function plusOne() {
	localStorage.setItem("count",Number(localStorage.getItem("count"))+1)
	update()
}

// reset button
function reset() {
	if(confirm("Did you really miss a day, lazy?!")){
		localStorage.setItem("count",0)
		update()
	}
}