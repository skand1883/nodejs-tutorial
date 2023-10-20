let xp = 0;
let health = 100;
let gold = 50;
let currentWeapon = 0;
let fighting;
let monsterHealth;
let inventory = ["stick"]


const button1=document.querySelector("#button1");
const button2=document.querySelector("#button2");
const button3=document.querySelector("#button3");
const text=document.querySelector("#text");
const xpText=document.querySelector("#xpText");
const healthText = document.querySelector("#healthText");
const goldText = document.querySelector("#goldText");
const monsterNameText= document.querySelector("#monsterName");
const monsterHealthText = document.querySelector("#monsterHealth");

const weapons = 
[
      {
        name : "stick",
        power:5
      },
      {
        name : "dagger",
        power: 30 
      },
      {
        name : "claw hammer",
        power : 50
      },
      {
        name : "sword",
        power : 100
      }

]


const monsters=[
      {
        name: "slime",
        level: 2,
        health: 15
      },
      {
        name :"fanged beast",
        level : 8,
        health : 69
      },

      {
        name : "dragon",
        level : 20,
        health : 300

      }

]

const locations =
 [
    {
        name: "town square",
        "button text":["Go to store","Go to cave","Fight dragon"],
        "button functions":[goStore,goCave,fightDragon],
        text : "You are in town square , you see a sign of STORE."


    },
    {
      name: "store",
      "button text":["Buy health (10 gold)","Buy weapon (30 gold)", "Go to town square"],
      "button functions":[buyHealth,buyWeapon,goTown],
      text: "You have entered store"


    },

    {
     name : "cave",
     "button text":["Fight slime","Fight fanged beast","Go to town square"],
     "button functions":[fightSlime,fightBeast,goTown],
     text: "You enter the cave.You see the monsters"     


    },

    {
        name:"fight",
        "button text":["Attack","Dodge","Go to town square"],
        "button functions":[attack,dodge,goTown],
        text: "You are fighting a monster!"



    },

    {
        name:"kill monsters",
        "button text":["go to town square","go to town square","go to town square"],
        "button functions":[goTown,goTown,goTown],
        text: "Monster dies!"

      },

     { name:"loose",
        "button text":["Replay?","Replay?","Replay?"],
        "button functions":[restart,restart,restart],
        text: "You die"
    },

    {name:"win",
    "button text":["Replay?","Replay?","Replay?"],
    "button functions":[restart,restart,restart],
    text: "You won the game hurray!"
        
    }

]


function update(location)
{
   
    button1.innerText = location["button text"][0];
    button2.innerText = location["button text"][1];
    button3.innerText = location["button text"][2];

    button1.onlick = location["button functions"][0];
    button2.onclick = location["button functions"][1];
    button3.onlick = location["button functions"][2];

    text.innertext = location[text];



}

// Iniatilize buttons;

button1.onclick = goStore;
button2.onlcick= goCave;
button3.onclick = fightDragon;

function goTown()
{
   
   update(locations[0]);

}

function goStore()
{
    update(locations[1]);
      
}

function goCave()
{
       update(locations[2]);
}
     

function buyHealth()
{


    if(gold>=10)
    {
    gold-=10;
    health+=10;
    healthText.innerText=health;
    goldText.innerText=gold;
    }
    else
    {
        text.innerText= "You do not have enough gold to buy health";
    }

}

function buyWeapon()
{



       if(currentWeapon<3)

 {       if(gold>=30)
        {
        gold-=30;
        currentWeapon +=1;
        goldText.innerText =gold;
        let newWeapon=weapons[currentWeapon].name;
        text.innerText = "You now have a new weapon" + newWeapon + ".";
        inventory.push(newWeapon);
        text.innerText+= "In your inventory you have" +inventory;

        }

        else{
        text.innerText="Not enough gold";
        }
 }


else{
    text.innerText =" you already have the most powerful weapon";
    button2.innerText = "Sell weapon for 15 gold";
    button2.onclick= sellweapon;
    

}}




function sellweapon()
{
    if(inventory.length>1)
    {
        gold+=15;
        goldText.innerText=gold;
        let currentWeapon=inventory.shift();
        text.innerText= "you sold a" + currentWeapon + ".";
        text.innerText +=" In your inventory you have" + inventory;
        

    }
    else
    {
        text.innerText = "Not enough weapons to sell";
    }

}


function fightDragon(){
        fighting=2;
        goFight();

}


function fightSlime(){
    fighting=0;
    goFight();

}


function fightBeast(){
        fighting =0;
        goFight();
}


function goFight(){
    update(locations[3]);
    monsterHealth =monsters[fighting].health;
    monsterStats.style.display = "block";
    monsterNameText.innerText=monsters[fighting].name;
    monsterHealthText.innerText=monsterHealth;


}

function attack()
{

    text.innerText="The"+ monsters[fighting].name + "attacks.";
    text.innerText+= "You attack it with your"+ weapons[currentWeapon].name+".";
    health-=monsters[fighting].level;
    monsterhealth-=weapons[currentWeapon].power + Math.floor(Math.random() *xp)+1;
    healthText.innerText=health;
    monsterHealthText.innerText=monsterHealth;
    if(health<=0){
        lose();
    }
    else if(monsterHealth<=0){
        if(fighting==2){
            winGame();
        }
        else{
            defeatMonster();
        }
    }

}

function dodge()
{
   text.innerText= "You dodge the attack from the"+"."


}

function lose()
{
     update(locations[5]);
}


function defeatMonster()
{
    gold+=Math.floor(monsters[fighting].level)*6.7;
    xp+=monsters[fighting].level;
    goldText.innerText=gold;
    xpText.innerText=xp;

    update(locations[4]);

}

function restart()
{
     xp = 0;
     health = 100;
     gold = 50;
     currentWeapon = 0;
    inventory=["Stick"];
    goldText.innerText=gold;
    healthText.innerText=health;
    xpText.innerText=xp;
    goTown();
}

function winGame()
{
    update(locations[6]); 
}








