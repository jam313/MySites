var createTime, clickTime, reactTime;

			var posX, posY, colorCode, boxColor;
			
			function object() {
			
				colorCode = Math.random()*5;
				
				colorCode = Math.floor(colorCode);
				
				posX = (Math.random() * (window.innerWidth - 200));
				posY = (Math.random() * (window.innerHeight - 200));
				
				document.getElementById("box").style.left = posX+"px";
				document.getElementById("box").style.top = posY+"px";
				
				
				switch (Math.floor(Math.random()*10)) {
					case 0:
					case 1:
					case 2:
					case 3:
					case 4:
					case 5:
					case 6:
					case 7:
						document.getElementById("box").style.borderRadius = "0px";
						break;
					case 8:
					case 9:
						document.getElementById("box").style.border = "1px solid white";
						document.getElementById("box").style.borderRadius = "100px";
						break;
				
				
				} 
				
				switch (colorCode) {
					case 0:
						boxColor = "red";
						break;
					case 1:
						boxColor = "green";
						break;
					case 2:
						boxColor = "blue";
						break;
					case 3:
						boxColor = "purple";
						break;
					case 4:
						boxColor = "pink";
						break;
					
				}
				
				document.getElementById("box").style.backgroundColor = boxColor;
				
				
			
			}
  	
  			function makeBox() {

	  			var time = Math.random() * 5000;

	  			setTimeout(function() {

	  				object();

	  				createTime = Date.now();

	  				document.getElementById("box").style.visibility = "visible";

	  			}, time)
	  		}

	  		makeBox();

	  		document.getElementById("box").onclick = function() {

	  			clickTime = Date.now();

	  			reactTime = (clickTime - createTime) / 1000;

	  			document.getElementById("results").innerHTML = "Results: "+reactTime+"sec";

  				this.style.visibility = "hidden";

  				makeBox();
  			}