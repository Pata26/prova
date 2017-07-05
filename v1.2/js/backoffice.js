
firebase.auth().onAuthStateChanged(function(user) {
	
	"use strict";
	
	var user = firebase.auth().currentUser;
    var uid;
	
  if (user) {
	  
    // User is signed in.
	uid = user.uid;
	if(uid == "gVNIcf2GI5PhnLSEElUdfhYb6jE3"){
		
		$("#editBtn").hide();
		
	}
  } 
});

//function initializeDb(){
//	
//	"use strict";
//		
//	var ref = firebase.database().ref('opere/001/titolo');
//	var titolo = document.getElementById('modalHeadTitolo');
//	
//	ref.on('value', function(datasnapshot){
//	
//		titolo.innerText = datasnapshot.val();
//		
//	});
//	
//}

$(document).ready(function(){
	
	var ref = firebase.database().ref("opere");
	
	ref.on("child_added", snap => {
		
		var autore = snap.child("autore").val();
		var descrizione = snap.child("descrizione").val();
		var periodo = snap.child("periodo").val();
		var titolo = snap.child("titolo").val();
		
		$("#prova").append("")
		
	});
	
});


