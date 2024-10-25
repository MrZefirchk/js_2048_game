class t{static STATUS_IDLE="idle";static STATUS_PLAYING="playing";static STATUS_WIN="win";static STATUS_LOSE="lose";static WINNING_TILE=2048;constructor(e=[[0,0,0,0],[0,0,0,0],[0,0,0,0],[0,0,0,0]]){this.initialState=e.map(t=>[...t]),this.state=this.initialState.map(t=>[...t]),this.score=0,this.status=t.STATUS_IDLE}moveLeft(){if(this.status!==t.STATUS_PLAYING)return;let e=!1;for(let t=0;t<4;t++){let s=this.slideAndMerge(this.state[t]);s.toString()!==this.state[t].toString()&&(e=!0),this.state[t]=s}e&&this.spawnTile(),this.checkLose(),this.checkWin()}moveRight(){this.state=this.state.map(t=>t.reverse()),this.moveLeft(),this.state=this.state.map(t=>t.reverse())}moveUp(){this.transpose(),this.moveLeft(),this.transpose()}moveDown(){this.transpose(),this.moveRight(),this.transpose()}getScore(){return this.score}getState(){return this.state.map(t=>[...t])}getStatus(){return this.status}start(){this.status=t.STATUS_PLAYING,this.spawnTile(),this.spawnTile(),this.checkWin(),this.checkLose()}restart(){this.state=this.initialState.map(t=>[...t]),this.score=0,this.status=t.STATUS_IDLE}spawnTile(){let t=[];for(let e=0;e<4;e++)for(let s=0;s<4;s++)0===this.state[e][s]&&t.push({row:e,column:s});if(t.length>0){let{row:e,column:s}=t[Math.floor(Math.random()*t.length)];this.state[e][s]=.9>Math.random()?2:4}}transpose(){let t=this.initialState.map(t=>[...t]);for(let e=0;e<4;e++)for(let s=0;s<4;s++)t[s][e]=this.state[e][s];this.state=t}slideAndMerge(t){let e=t.filter(t=>0!==t);for(let t=0;t<e.length-1;t++)e[t]===e[t+1]&&(e[t]*=2,this.score+=e[t],e[t+1]=0);for(e=e.filter(t=>0!==t);4!==e.length;)e.push(0);return e}checkWin(){for(let e=0;e<4;e++)for(let s=0;s<4;s++)this.state[e][s]===t.WINNING_TILE&&(this.status=t.STATUS_WIN)}checkLose(){for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(0===this.state[t][e])return;for(let t=0;t<4;t++)for(let e=0;e<4;e++)if(t<3&&this.state[t][e]===this.state[t+1][e]||e<3&&this.state[t][e]===this.state[t][e+1])return;this.status=t.STATUS_LOSE}}const e=new t,s=document.querySelector(".start");let a=!1;function i(t,e,a){s.classList.replace(e,a),s.textContent=t}function r(t=null){let s;document.querySelectorAll(".message").forEach(t=>{t.classList.toggle("hidden",!0)}),(s=t?document.querySelector(`.message-${t}`):document.querySelector(`.message-${e.getStatus()}`))&&s.classList.toggle("hidden",!1)}function l(t){let s=document.querySelectorAll(".field-row");document.querySelector(".game-score").textContent=e.getScore();for(let e=0;e<4;e++)for(let a=0;a<4;a++){let i=s[e].children[a];0!==t[e][a]?(i.textContent=t[e][a],i.className=i.className.replace(/field-cell--\d+/g,""),i.classList.add(`field-cell--${t[e][a]}`)):(i.textContent="",i.className=i.className.replace(/field-cell--\d+/g,""),i.className="field-cell")}}s.addEventListener("click",t=>{t.target&&((a=!a)?(i("Retart","start","restart"),r(),e.start()):(i("Start","restart","start"),r("start"),e.restart()),l(e.getState()))}),document.addEventListener("keydown",t=>{if(a){switch(t.preventDefault(),t.key){case"ArrowUp":e.moveUp();break;case"ArrowDown":e.moveDown();break;case"ArrowRight":e.moveRight();break;case"ArrowLeft":e.moveLeft()}r(),l(e.getState())}});
//# sourceMappingURL=index.0e959c6d.js.map
