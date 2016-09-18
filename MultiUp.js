
function beep() {
    var snd = new Audio("data:audio/wav;base64,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qJrx4KOQjahZxWbcZgztj2c49nKmkId44S71j0c8eV9yDK6uPRzx5X18eDvjvQ6yKo9ZSS6l//8elePK/Lf//IInrOF/FvDoADYAGBMGb7FtErm5MXMlmPAJQVgWta7Zx2go+8xJ0UiCb8LHHdftWyLJE0QIAIsI+UbXu67dZMjmgDGCGl1H+vpF4NSDckSIkk7Vd+sxEhBQMRU8j/12UIRhzSaUdQ+rQU5kGeFxm+hb1oh6pWWmv3uvmReDl0UnvtapVaIzo1jZbf/pD6ElLqSX+rUmOQNpJFa/r+sa4e/pBlAABoAAAAA3CUgShLdGIxsY7AUABPRrgCABdDuQ5GC7DqPQCgbbJUAoRSUj+NIEig0YfyWUho1VBBBA//uQZB4ABZx5zfMakeAAAAmwAAAAF5F3P0w9GtAAACfAAAAAwLhMDmAYWMgVEG1U0FIGCBgXBXAtfMH10000EEEEEECUBYln03TTTdNBDZopopYvrTTdNa325mImNg3TTPV9q3pmY0xoO6bv3r00y+IDGid/9aaaZTGMuj9mpu9Mpio1dXrr5HERTZSmqU36A3CumzN/9Robv/Xx4v9ijkSRSNLQhAWumap82WRSBUqXStV/YcS+XVLnSS+WLDroqArFkMEsAS+eWmrUzrO0oEmE40RlMZ5+ODIkAyKAGUwZ3mVKmcamcJnMW26MRPgUw6j+LkhyHGVGYjSUUKNpuJUQoOIAyDvEyG8S5yfK6dhZc0Tx1KI/gviKL6qvvFs1+bWtaz58uUNnryq6kt5RzOCkPWlVqVX2a/EEBUdU1KrXLf40GoiiFXK///qpoiDXrOgqDR38JB0bw7SoL+ZB9o1RCkQjQ2CBYZKd/+VJxZRRZlqSkKiws0WFxUyCwsKiMy7hUVFhIaCrNQsKkTIsLivwKKigsj8XYlwt/WKi2N4d//uQRCSAAjURNIHpMZBGYiaQPSYyAAABLAAAAAAAACWAAAAApUF/Mg+0aohSIRobBAsMlO//Kk4soosy1JSFRYWaLC4qZBYWFRGZdwqKiwkNBVmoWFSJkWFxX4FFRQWR+LsS4W/rFRb/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAU291bmRib3kuZGUAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAwNGh0dHA6Ly93d3cuc291bmRib3kuZGUAAAAAAAAAACU=");  
    snd.play();
}

	
function create_instance(file,rand_key){
					
 
							     var rand_key;
	
									//if(file.type.match('image')){
											var picReader = new FileReader();
											picReader.addEventListener('load',function(event){
														var picFile = event.target;	
												    var img = new Image();
														img.src=picFile.result;
                            // CREATE A CANVAS ELEMENT AND ASSIGN THE IMAGES TO IT.
                            var canvas = document.createElement("canvas");

//                             var value = 'ImageBitmap';

//                             // RESIZE THE IMAGES ONE BY ONE.
//                             img.width = (img.width * value) / 100
//                             img.height = (img.height * value) / 100
                            img.width = 150;
                            img.height = 150;
                            var ctx = canvas.getContext("2d");
                            ctx.clearRect(0, 0, canvas.width, canvas.height);
                            canvas.width = img.width;
                            canvas.height = img.height;
                            ctx.drawImage(img, 0, 0, img.width, img.height);
												
											
										var j = Math.floor((Math.random()*100000)+3);
											
											
	             
											var download_table_body= document.getElementById("download_table_body");
											//	var file_item='<img  />';
											var file_item='<tr id="tr_id_'+j+'"><th class="bordernone" scope="row">'+
// 											'<progress id="progressBar_'+j+'" value="0" max="100" style="width:300px;"></progress>'+
                      '<div id="per_id_'+j+'" class="c100 small dark orange progress_round"><img src="'+canvas.toDataURL("image/png")+'" width="50"><span id="progress_per_'+j+'">60%</span><div class="slice"><div class="bar"></div><div class="fill"></div></div></div>'+
											'</th><td class="bordernone">'+file.name+'</td><td class="red bordernone">(60.5 KB)</td><td class="bordernone">−52%</td><td class="green bordernone">30.5 KB</td><td class="bordernone">Download</td></tr>';

											download_table_body.innerHTML = download_table_body.innerHTML +file_item;
								
											
											upload(file,j,rand_key);
							
											
											}); // picreader close
											picReader.readAsDataURL(file);		
										
									
								//	}  // if check whether image is 
					
		
									

								

								//	} //if upload closing
						
					
}

function upload(file,instance_id,rand_key){
	           var rand_key;
						//File uploading 
								var multi_file_upload=[];
								multi_file_upload[instance_id] = new XMLHttpRequest();
							//	if (multi_file_upload.upload) {
										// start upload


										//multi_file_upload.upload.addEventListener("progress", progressHandler, true);
										// 									multi_file_upload.addEventListener("loadstart", function(e){
										// 										// generate unique id for progress bars. This is important because we'll use it on progress event for modifications
										// 										this.progressId = "progress_" + Math.floor((Math.random() * 100000)); 

										// 										// append progress elements to somewhere you want
										// 										$("body").append('<div id="' + this.progressId + '" class="myCustomProgressBar" ></div>');
										// 									});
	
	
									multi_file_upload[instance_id].onprogress=function(){
										
  												//	console.log(multi_file_upload.status);
									};
									multi_file_upload[instance_id].upload.addEventListener("progress", function(e){
												var percent=0;
												var total = e.total;
												var loaded = e.loaded;
												percent = (100 / total) * loaded; // Calculate percentage of loaded data
												//document.getElementById("progressBar_"+instance_id).value = Math.round(percent);
										    
                        document.getElementById("per_id_"+instance_id).className += " p"+Math.round(percent)+' ';
                        document.getElementById("progress_per_"+instance_id).innerHTML= Math.round(percent)+'%';
												
                    
                        if(percent=='100')
                         beep();
										
// 												console.log(instance_id);
// 												console.log(percent);
											
									},false);			
									multi_file_upload[instance_id].open("POST","file_uploader.php", true);
	
									multi_file_upload[instance_id].setRequestHeader("X_RAND_KEY",rand_key);
									
									multi_file_upload[instance_id].setRequestHeader("X_FILENAME", file.name);
									multi_file_upload[instance_id].send(file);	
	
	
}


// 	var i=0;
// function _(el){
//   return document.getElementById(el);
// }
// window.onload = function(){
//     //Check File API support
//     if(window.File && window.FileList && window.FileReader)
//     {	
			
// 			var filesInput = document.getElementById('image_input');
//         filesInput.addEventListener('change', function(event){
				
					
//             var files = event.target.files; //FileList object
						
// 						uploadFile(files);
//             for(var i = 0; i< files.length; i++)
//             {
								
								

//                 var file = files[i];
							
							
									
//                 //Only pics
//                 if(!file.type.match('image'))
//                     continue;
//                 var picReader = new FileReader();
//                 picReader.addEventListener('load',function(event){
//                     var picFile = event.target;
									
// 										uploadFile(file,i);
							
									


//                 });
//                 //Read the image
//                 picReader.readAsDataURL(file);
							
														
// 						_("progressBar").value = Math.round('0');
// 						_("status").innerHTML = "";	

//             }
					
					
		
					
//         });
// 	   }
//     else
//     {
//         console.log('Your browser does not support File API');
//     }
// } 
// // 	 function on_image_select(files) {
		 

		 
		 
// //         var reader = new FileReader();  

// //         function readFile(index) {
// //             if( index >= files.length ) return;

// //             var file = files[index];
// //             reader.onload = function(e) {  
// //                 // get file content  
// //                 var bin = e.target.result; 

// // 								alert(bin);
// // 							 var image_thumb= document.getElementById("image_thumb");
						
// // 								var image_blob = '<img src="'+e.target.result +'" />';
						
// // 								image_thumb.innerHTML= image_blob;
							

// //                 readFile(index+1)
// //             }
// //             reader.readAsBinaryString(file);
// //         }
// //         readFile(0);
// //     }
// // function on_image_select(input) {
	
// //       if (input.files && input.files[0]) {
// //           var reader = new FileReader();
          
// //         function readFile(index) {
// //             if( index >= input.length ) return;

// //             var file = input[index];
// //             reader.onload = function(e) {  
// //                 // get file content  
// //                 var bin = e.target.result; 
							
							
// // 							 var image_thumb= document.getElementById("image_thumb");
						
// // 								var image_blob = '<img src="'+e.target.result +'" />';
						
// // 								image_thumb.innerHTML= image_blob;
// //                 // do sth with bin

// //                 readFile(index+1)
// //             }
// //             reader.readAsBinaryString(file);
// //         }
// //         readFile(0);					
					
		
				
// // //           reader.onload = function (e) {	
					
							
// // // 							 var image_thumb= document.getElementById("image_thumb");
						
// // // 								var image_blob = '<img src="'+e.target.result +'" />';
						
// // // 							//	image_thumb.innerHTML= image_blob;
// // //           }
// // //          			var infiyo= document.getElementById("infiyo");
				
// // // 					infiyo.innerHTML= input.files[0];
				
// //         //  reader.readAsDataURL(input.files[0]);
// //       }
	
// // 			uploadFile();
// // }

// 	function start_uploading(event){
		
			
//             var files = event.target.files; //FileList object
// 						var i=0;
						
//             if(i!=files_details.length)
//             {
							
									

//                 var file = files[i];
								
//                 //Only pics
            
//                 var picReader = new FileReader();
//                 picReader.addEventListener('load',function(event){
//                     var picFile = event.target;

               
// 											uploadFile(picFile);
									
//                 });
//                 //Read the image
//                 picReader.readAsDataURL(file);
//             }	
		
	
		
// 	}
// 	function uploadFile(file) {
	
									
							
// 								var xhr = new XMLHttpRequest();
// 								if (xhr.upload) {
// 										// start upload
// 									xhr.open("POST","file_uploader.php", true);
// 									xhr.setRequestHeader("X_FILENAME", file.name);
// 									xhr.upload.addEventListener("progress", progressHandler, true);
// 									xhr.send(file);
									
		

// 								}





// }


	
// // function uploadFile(){
	

	
// //   var file = _("image_input").files[0];
// // 	alert(file.toSource());
// //   // alert(file.name+" | "+file.size+" | "+file.type);
// //   var formdata = new FormData();
// //   formdata.append("image", file);
// //   var ajax = new XMLHttpRequest();
// //   ajax.upload.addEventListener("progress", progressHandler, false);
// //   ajax.addEventListener("load", completeHandler, false);
// //   ajax.addEventListener("error", errorHandler, false);
// //   ajax.addEventListener("abort", abortHandler, false);
// //   ajax.open("POST", "file_uploader.php");
// //   ajax.send(formdata);
// // }

// function progressHandler(event){

// 	console.log(event);
// 	document.getElementById('image_thumb').className += ' move_image';
//   // var i=0;
//   // if(i<3000){
//   //   i+10;
//   //   var element = document.getElementById('image_thumb'),
//   //   style = window.getComputedStyle(element),
//   //   current_top = style.getPropertyValue('top');
//   //   document.getElementById('image_thumb').style.top = parseInt(current_top)+parseInt(i)+'px';
//   // }
	
//   _("loaded_n_total").innerHTML = "Uploaded "+event.loaded+" bytes of "+event.total;
//   var percent = (event.loaded / event.total) * 100;

//   if(percent==100){
//    document.getElementById('image_thumb').classList.remove("move_image");
//    document.getElementById('image_thumb').className += ' move_after_complete';


		
// 	beep();
//   }
// //or whatever 

//   _("progressBar").value = Math.round(percent);
  
// }
// function completeHandler(event){
//   _("status").innerHTML = '<a href="'+'http://weeimage.co.infiyo.com/'+event.target.responseText+'" download>Download</a>';
//   // _("status").innerHTML = event.target.responseText;

//   _("progressBar").value = 0;
// }
// function errorHandler(event){
//   _("status").innerHTML = "Upload Failed";
// }
// function abortHandler(event){
//   _("status").innerHTML = "Upload Aborted";
// }	 