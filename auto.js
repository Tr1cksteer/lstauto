function cm() {
	document.querySelector(".btn_sm.green.mining_location_btn").click();
	console.log('started,wait 1h')
	setTimeout(()=> console.log('waited 1 hour'),3600000);
	document.querySelector(".btn_sm.yellow").click();
	document.querySelector("#claim_location_btn").click();

	
}
setInterval(cm,3615000);

