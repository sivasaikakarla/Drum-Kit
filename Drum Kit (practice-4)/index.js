// document.querySelector("button").addEventListener("click",handleClick()); here we calling function when event listener is created


for(var i=0;i<document.querySelectorAll(".drum").length;i++)
{
	document.querySelectorAll("button")[i].addEventListener("click",function handleClick()
{
	var exp = this.innerHTML;

	switchcase(exp);

	animations(exp);


});
}


function switchcase(exp)
{
	switch(exp)
	{
		case "w":
				audio1=new Audio('sounds/crash.mp3');
				audio1.play();
			break;
		case "a":
			audio2=new Audio('sounds/kick-bass.mp3');
			audio2.play();
		break;
		case "s":
			audio3=new Audio('sounds/snare.mp3');
			audio3.play();
		break;
		case "d":
			audio4=new Audio('sounds/tom-1.mp3');
			audio4.play();
		break;
		case "j":
			audio5=new Audio('sounds/tom-2.mp3');
			audio5.play();
		break;
		case "k":
			audio6=new Audio('sounds/tom-3.mp3');
			audio6.play();
		break;
		case "l":
			audio7=new Audio('sounds/tom-4.mp3');
			audio7.play();
		break;
	default:
		console.log(exp);
	}
}

// document.querySelectorAll("button")[0].addEventListener("click",handleClick);
// document.querySelectorAll("button")[1].addEventListener("click",handleClick);
// document.querySelectorAll("button")[2].addEventListener("click",handleClick);
// document.querySelectorAll("button")[3].addEventListener("click",handleClick);
// document.querySelectorAll("button")[4].addEventListener("click",handleClick);
// document.querySelectorAll("button")[5].addEventListener("click",handleClick);
// document.querySelectorAll("button")[6].addEventListener("click",handleClick);

// USING KEYBORAD PRESSES

document.addEventListener("keypress",function(){
	switchcase(event.key);

	animations(event.key);
})


// event by keyboard

// document.addEventListener("keypress",function(event){
// 	//here above event parameter represing the callback event (when event is occured then fucntion is called)
// 	console.log(event);
// });

//Adding Animation to the wesite

function animations(eve)
{
	var activeButton = document.querySelector("."+ eve);
	//queryselectorall different from queryselector

	//adding class in js

	activeButton.classList.add("pressed");

	setTimeout(function(){
		activeButton.classList.remove("pressed");
	},100)

}