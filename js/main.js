'use strict'

var gQuests;

var gCurrQuestIdx;


function initGame() {
    gCurrQuestIdx = 0;
    var elButtonPlay = document.querySelector('.start');
    elButtonPlay.innerText = 'Start Playing';
    gQuests = createQuests();
    renderQuest(gCurrQuestIdx);
}

function createQuests() {
    var quests = [{ id: 1, opts: ['Tong-Tong', 'Lemoor', 'Aye-Aye'], correctOptIndex: 2 },        
    { id: 2, opts: ['The Fossa', 'Karakal', 'Surikata'], correctOptIndex: 0 },                  
    { id: 3, opts: ['Furry Crab', 'Yeti Crab', 'Coated Crab'], correctOptIndex: 1 },                   
    { id: 4, opts: ['Mongo', 'Dwarf-Sloth', 'Sunda Colygo'], correctOptIndex: 2 }];                

    return quests;
}

function renderQuest(idx) {
    var quest = gQuests[idx];

    var strHtml = ` 
    <img src="img/${idx + 1}.jpg" class="picture" /> 
    <div class="answers"> 
         <button onclick="checkAnswer(0)" class="answer1">${quest.opts[0]}</button> 
         <button onclick="checkAnswer(1)" class="answer2">${quest.opts[1]}</button>
         <button onclick="checkAnswer(2)" class="answer3">${quest.opts[2]}</button> 
    </div>`;

    var elMain = document.querySelector('.main');

    elMain.innerHTML = strHtml;
}

function checkAnswer(optIdx) {
    var quest = gQuests[gCurrQuestIdx];

    if ((gCurrQuestIdx < 3) && (optIdx === quest.correctOptIndex)) {
        alert('Correct!');
        gCurrQuestIdx++;
        renderQuest(gCurrQuestIdx);
    } else if ((gCurrQuestIdx === 3) && (optIdx === quest.correctOptIndex)) {
        alert('Correct again! You won! bye bye!');
        var elButtonPlay = document.querySelector('.start');
        elButtonPlay.innerText = 'Replay';
        return false;
    } else {
        alert('Try again');
        return false;
    }
}
