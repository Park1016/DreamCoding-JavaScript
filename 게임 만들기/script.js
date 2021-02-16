const playBtn = document.querySelector(".fa-play");
const pauseBtn = document.querySelector(".fa-square");
const playBtnBox = document.querySelector(".playBtn");
const timer = document.querySelector(".timer");
const img = document.querySelector(".img");
// const bugImg = document.querySelector(".bugImgBox");
// const carrotImg = document.querySelector(".carrotImgBox");
const section2 = document.querySelector(".section2");
const result = document.querySelector(".resultBox");
const resultBox = document.querySelector(".resultBox");
const replayBtn = document.querySelector(".replayBtn");


timer.innerHTML = `00:10`;

class countTime {
    onTime(){
        playBtn.style.display = "none";
        pauseBtn.style.color = "black";
        let num = 10;
        let time = setInterval(() =>{
            num = num - 1;
            timer.innerHTML = `00:0${num}`;
        }, 1000);
        setTimeout(()=>{clearInterval(time)}, 10000);
    }
}

const count = new countTime();

function onPlay(){
    // playBtn.style.display = "none";
    // pauseBtn.style.color = "black";
    // let num = 10;
    // let time = setInterval(() =>{
    //     num = num - 1;
    //     timer.innerHTML = `00:0${num}`;
    // }, 1000);
    // setTimeout(()=>{clearInterval(time)}, 10000);
    count.onTime();
    for(i=0; i<10; i++){
        setButImg()*i;
        setCarrotImg()*i;
    }
    
    let num = 10;
    console.log(count.onTime.time);

    pauseBtn.addEventListener("click", ()=>{
        playBtnBox.style.visibility = "hidden";
        result.style.display = "block";
        pauseBtn.style.color = "transParent";
        playBtn.style.display = "block";
        clearInterval(count.onTime.time);
        //location = location.pathname;
    });
}

// 랜덤으로 화면에 이미지 뿌리기
function getRandomPosition() {
    const bugImg = document.createElement('img');
	bugImg.setAttribute("style", "position:absolute;");
	bugImg.setAttribute("src", "img/bug.png");
	let x = section2.clientHeight*0.8-bugImg.height;
	let y = section2.clientWidth*0.9-bugImg.width;

	let randomX = Math.floor(Math.random()*x+section2.offsetHeight*1.2);
	let randomY = Math.floor(Math.random()*y);
	return [randomX,randomY];
}

function setButImg() {
	const bugImg = document.createElement('img');
	bugImg.setAttribute("src", "img/bug.png");
    bugImg.classList.add("bugImg");
    const bugImgBox = document.createElement("div");
    bugImgBox.classList.add("bugImgBox");
	bugImgBox.setAttribute("style", "position:absolute;");
    bugImgBox.appendChild(bugImg);
	section2.appendChild(bugImgBox);
	let xy = getRandomPosition(bugImgBox);
    bugImg.style.width = "80px";
    bugImg.style.height = "80px";
	bugImgBox.style.top = xy[0]-80+'px';
	bugImgBox.style.left = xy[1]+80+'px';
    bugImgBox.style.transform = `translateX(25px)`;
}

function setCarrotImg() {
	const carrotImg = document.createElement('img');
	carrotImg.setAttribute("src", "img/carrot.png");
    carrotImg.classList.add("carrotImg");
    const carrotImgBox = document.createElement("div");
    carrotImgBox.classList.add("carrotImgBox");
	carrotImgBox.setAttribute("style", "position:absolute;");
    carrotImgBox.appendChild(carrotImg);
	section2.appendChild(carrotImgBox);
	let xy = getRandomPosition(carrotImgBox);
    carrotImg.style.width = "80px";
    carrotImg.style.height = "80px";
	carrotImgBox.style.top = xy[0]-80+'px';
	carrotImgBox.style.left = xy[1]+80+'px';
    carrotImgBox.style.transform = `translateX(25px)`;
}

function onBugClick(){
    result.style.display = "block";
    result.childNodes[1].childNodes[3].innerHTML="YOU LOST 💩"
}

// addEventListener
playBtn.addEventListener("click", onPlay);

document.addEventListener("click", (e)=>{
    if(e.target.classList.contains("replayBtn")){
        // result.style.display = "none";
        // playBtnBox.style.visibility = "visible";
        location = location.pathname;
    }else if(e.target.classList.contains("bugImg")){
        onBugClick();
    }else if(e.target.classList.contains("carrotImg")){
        console.log("carrot");
    }
})