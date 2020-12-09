/*   Michael Whalen
Michael_Whalen@student.uml.edu
Michael Whalen Computer Science Student in 91.61 GUI Programming I Umass Lowell
12/5/20
Last Updated on 12/9/20
Javascript for scrabble program
*/

//Added image property to obtain actual image of the tile whenever one of these tiles were selected.
var ScrabbleTiles = [] ;
ScrabbleTiles["A"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "tiles/Scrabble_Tile_A.jpg", "rand-number": 0   } ;
ScrabbleTiles["B"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_B.jpg",  "rand-number": 1   } ;
ScrabbleTiles["C"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_C.jpg", "rand-number": 2   } ;
ScrabbleTiles["D"] = { "value" : 2,  "original-distribution" : 4,  "number-remaining" : 4, "image": "tiles/Scrabble_Tile_D.jpg", "rand-number": 3   } ;
ScrabbleTiles["E"] = { "value" : 1,  "original-distribution" : 12, "number-remaining" : 12,"image": "tiles/Scrabble_Tile_E.jpg", "rand-number": 4   } ;
ScrabbleTiles["F"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_F.jpg", "rand-number": 5   } ;
ScrabbleTiles["G"] = { "value" : 2,  "original-distribution" : 3,  "number-remaining" : 3, "image": "tiles/Scrabble_Tile_G.jpg", "rand-number": 6   } ;
ScrabbleTiles["H"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_H.jpg", "rand-number": 7   } ;
ScrabbleTiles["I"] = { "value" : 1,  "original-distribution" : 9,  "number-remaining" : 9, "image": "tiles/Scrabble_Tile_I.jpg", "rand-number": 8   } ;
ScrabbleTiles["J"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "tiles/Scrabble_Tile_J.jpg", "rand-number": 9   } ;
ScrabbleTiles["K"] = { "value" : 5,  "original-distribution" : 1,  "number-remaining" : 1, "image": "tiles/Scrabble_Tile_K.jpg", "rand-number": 10   } ;
ScrabbleTiles["L"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "tiles/Scrabble_Tile_L.jpg", "rand-number": 11   } ;
ScrabbleTiles["M"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_M.jpg", "rand-number": 12   } ;
ScrabbleTiles["N"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "tiles/Scrabble_Tile_N.jpg", "rand-number": 13   } ;
ScrabbleTiles["O"] = { "value" : 1,  "original-distribution" : 8,  "number-remaining" : 8, "image": "tiles/Scrabble_Tile_O.jpg", "rand-number": 14   } ;
ScrabbleTiles["P"] = { "value" : 3,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_P.jpg", "rand-number": 15   } ;
ScrabbleTiles["Q"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "tiles/Scrabble_Tile_Q.jpg", "rand-number": 16   } ;
ScrabbleTiles["R"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "tiles/Scrabble_Tile_R.jpg", "rand-number": 17   } ;
ScrabbleTiles["S"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "tiles/Scrabble_Tile_S.jpg", "rand-number": 18   } ;
ScrabbleTiles["T"] = { "value" : 1,  "original-distribution" : 6,  "number-remaining" : 6, "image": "tiles/Scrabble_Tile_T.jpg", "rand-number": 19   } ;
ScrabbleTiles["U"] = { "value" : 1,  "original-distribution" : 4,  "number-remaining" : 4, "image": "tiles/Scrabble_Tile_U.jpg", "rand-number": 20   } ;
ScrabbleTiles["V"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_V.jpg", "rand-number": 21   } ;
ScrabbleTiles["W"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_W.jpg", "rand-number": 22   } ;
ScrabbleTiles["X"] = { "value" : 8,  "original-distribution" : 1,  "number-remaining" : 1, "image": "tiles/Scrabble_Tile_X.jpg", "rand-number": 23   } ;
ScrabbleTiles["Y"] = { "value" : 4,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_Y.jpg", "rand-number": 24   } ;
ScrabbleTiles["Z"] = { "value" : 10, "original-distribution" : 1,  "number-remaining" : 1, "image": "tiles/Scrabble_Tile_Z.jpg", "rand-number": 25   } ;
ScrabbleTiles["_"] = { "value" : 0,  "original-distribution" : 2,  "number-remaining" : 2, "image": "tiles/Scrabble_Tile_Blank.jpg", "rand-number": 26   } ;

//Global Variables

//Global variable to assign tile IDS
var tileidCounter=0;
//Total amount of tiles is 100
var totaltiles=100;

//Current word score
var current_score=0;

//Overall word score until they end the game.
var total_score=0;

//Individual Spot Scores
var spot1value=0;
var spot2value=0;
var spot3value=0;
var spot4value=0;
var spot5value=0;
var spot6value=0;
var spot7value=0;

//https://jqueryui.com/ Jqueryui was very helpful for a lot of my code here and I wanted to source it at the beginning.
  $( function() {
//I'm commenting for this one spot and these comments apply to spots 1-7. VERY IMPORTANT
    $("#spot1").droppable({
     drop: function(event, ui){
     spot1value = parseInt(ui.draggable.attr("data-value")) //Gets the value of the tile and assigns spot1 for scoring
     current_score+=spot1value //updates current score
     current_word_score() // updates current score
     $(ui.draggable).addClass("board_tile") //Adds class that says tile is now on board.
     $(ui.draggable).draggable("disable"); //Disable draggable once dropped on spot
     $(this).droppable("disable"); //disables droppable spot once draggable is on spot
     left_to_right_enable("#spot2"); //Enables next spot to be dropped on to.
     },
     /* All these outs will be commented out because as i made the final product I realized out had no more use, but I wanted to show what I did.
     /*out: function(event, ui){
       current_score-=spot1value //if tile is removed from board spot then remove value from current score
       spot1value = 0 //reset spot value
       current_word_score() //update current score
        $(ui.draggable).removeClass("board_tile") //if removed from board remove the board_tile class
     },*/
     tolerance:"fit" //makes sure tile is contained in droppable spot
   });

   $("#spot2").droppable({
    drop: function(event, ui){
    spot2value = parseInt(ui.draggable.attr("data-value"))
    current_score+=spot2value
    current_word_score()
    $(ui.draggable).addClass("board_tile")
    $(ui.draggable).draggable("disable");
    $(this).droppable("disable");
    left_to_right_enable("#spot3");
    },
    /*out: function(event, ui){
      current_score-=spot2value
      spot2value = 0
      current_word_score()
      $(ui.draggable).removeClass("board_tile")
    },*/
    tolerance:"fit"
  });

  $("#spot3").droppable({
   drop: function(event, ui){
   spot3value = parseInt(ui.draggable.attr("data-value")) * 2 //double letter score
   current_score+=spot3value
   current_word_score()
   $(ui.draggable).addClass("board_tile")
   $(ui.draggable).draggable("disable");
   $(this).droppable("disable");
   left_to_right_enable("#spot4");
   },
   /*out: function(event, ui){
     current_score-=spot3value
     spot3value = 0
     current_word_score()
     $(ui.draggable).removeClass("board_tile")
   },*/
   tolerance:"fit"
 });

 $("#spot4").droppable({
  drop: function(event, ui){
  spot4value = parseInt(ui.draggable.attr("data-value"))
  current_score+=spot4value
  current_word_score()
  $(ui.draggable).addClass("board_tile")
  $(ui.draggable).draggable("disable");
  $(this).droppable("disable");
  left_to_right_enable("#spot5");
  },
  /*out: function(event, ui){
    current_score-=spot4value
    spot4value = 0
    current_word_score()
    $(ui.draggable).removeClass("board_tile")
  },*/
  tolerance:"fit"
});

$("#spot5").droppable({
 drop: function(event, ui){
 spot5value = parseInt(ui.draggable.attr("data-value")) * 2 //double letter score
 current_score+=spot5value
 current_word_score()
 $(ui.draggable).addClass("board_tile")
 $(ui.draggable).draggable("disable");
 $(this).droppable("disable");
 left_to_right_enable("#spot6");
 },
 /*out: function(event, ui){
   current_score-=spot5value
   spot5value = 0
   current_word_score()
   $(ui.draggable).removeClass("board_tile")
 },*/
 tolerance:"fit"
});

$("#spot6").droppable({
 drop: function(event, ui){
 spot6value = parseInt(ui.draggable.attr("data-value"))
 current_score+=spot6value
 current_word_score()
 $(ui.draggable).addClass("board_tile")
 $(ui.draggable).draggable("disable");
 $(this).droppable("disable");
 left_to_right_enable("#spot7");
 },
 /*out: function(event, ui){
   current_score-=spot6value
   spot6value = 0
   current_word_score()
   $(ui.draggable).removeClass("board_tile")
 },*/
 tolerance:"fit"
});

$("#spot7").droppable({
 drop: function(event, ui){
 spot7value = parseInt(ui.draggable.attr("data-value"))
 current_score+=spot7value
 current_word_score()
 $(ui.draggable).addClass("board_tile")
 $(ui.draggable).draggable("disable");
 $(this).droppable("disable");
 },
 /*out: function(event, ui){
   current_score-=spot7value
   spot7value = 0
   current_word_score()
   $(ui.draggable).removeClass("board_tile")
 },*/
 tolerance:"fit"
});

$( "#droppable_rack" ).droppable({
 drop: function(event, ui){
  $(ui.draggable).addClass("on_tilerack") //If tile is on rack add on_tilerack class
      }
 }); //droppable rack end

});// function end

//Enable spots left_to_right whenever something is dropped in each spot.
function left_to_right_enable(id_of_next){
  $(id_of_next).droppable("enable");
}

//keeps track of current word score
function current_word_score(){
document.getElementById("current_score_header").innerHTML= "Word Score: " + current_score; //Update current score
}

//keeps track of total score
function Submit_Word(){
  total_score+=current_score; //set total score to current
  //console.log("total score " + total_score +" current:  " + current_score);
  document.getElementById("total_score_header").innerHTML= "Total Score: " + total_score; //Print out final score, game is over.
}

//Delete tiles function. Selects all tiles on board and deletes them.
function deleteall(){
while(document.querySelector(".board_tile")){
    var remove = document.querySelector(".board_tile");
    remove.parentNode.removeChild(remove);
  }
}

//Function for resetting hand
function reset_hand(){
$("#spot1").droppable("enable"); //Enables first spot

for(var x=2; x<8; x++){
  $("#spot" + x ).droppable("disable"); // disables all other spots
}
deleteall(); //delete all tiles on board
var sparetiles=0; //count spare tiles left on rack
sparetiles=parseInt($("div.on_tilerack").length); //Set spare tiles equal to tiles left on rack
var remaining_tiles_needed= 7 - sparetiles; //calculate remaining tiles needing to be created after using tiles on board

Submit_Word();//update values
//reset all spot values
spot1value=0;
spot2value=0;
spot3value=0;
spot4value=0;
spot5value=0;
spot6value=0;
spot7value=0;
current_score=0; //reset current_score
current_word_score(); //update the current_score
  //Generate 7 tiles
  for(i=0;i<remaining_tiles_needed;i++){
    random_tile_selector();
  }
}

//Randomly select a number
function random_number_generator(){
  return Math.floor(Math.random() * (26 - 0 + 1) ) + 0; // https://www.w3schools.com/js/js_random.asp
}

// Generate tiles
function random_tile_selector(){
  if(totaltiles < 1){
    alert("You have ran out of tiles! Click restart game to start a new game."); // Alert that tells player to click restart game since they ran out of tiles.
    return;
  }
  else{
      totaltiles--; //Otherwise just subtract one from tiles and move on
  }
  var tile_number=0; // Number associated with each tile
  var charcode=65; //Charcode value (A-Z)
  var array_index; //Current array index working with (A-Z) or _
  tile_number=random_number_generator();
  //console.log(tile_number);

//Gets index of each array
  if(tile_number <26){
  charcode = charcode + tile_number;
  array_index = String.fromCharCode(charcode); //Gets letter value of each array
  //console.log(array_index);
}
//Handle case of underscore
  else{
    array_index="_";
  //console.log(array_index);
  }

  //Checks if number remaining is empty
  while(ScrabbleTiles[array_index]['number-remaining'] < 1){
    tile_number = random_number_generator(); //if its empty find a new tile value

    //repeat of above code.
    if (tile_number <26){
      charcode = 65;
      charcode = charcode + tile_number;
      array_index = String.fromCharCode(charcode);
    }
    else{
      array_index = "_";
    }
  }

//This will generate tiles and adjust number-remaining
if(ScrabbleTiles[array_index]['number-remaining'] > 0){
//Generate tiles
var body = document.getElementsByTagName("body")[0]; //sets equal to body of page
var newTileDiv= document.createElement("div"); // create new div for tile

newTileDiv.setAttribute("id", "drag"+ tileidCounter); //create id for tile
newTileDiv.setAttribute("class", "generated_tiles"); // Create a class for tile
newTileDiv.setAttribute("data-value", ScrabbleTiles[array_index]['value']) //Set a value for each tile

var tile_image= document.createElement("img"); //Create img element

tile_image.setAttribute("src", ScrabbleTiles[array_index]['image']); //set src of img element to picture of tile
tile_image.setAttribute("height", 100); // set height
tile_image.setAttribute("width", 100); //set width

body.appendChild(newTileDiv); //append tile to body
newTileDiv.appendChild(tile_image); //append image to tile

//give draggable revert property so they can only be placed in droppables
$("#drag" + tileidCounter).draggable({
  revert:"invalid",
});

 //give draggable on_tilerack class because they generate on the rack by default
  $("#drag"+ tileidCounter).addClass("on_tilerack");

//Update 'number-remaining' string to be subtracted by one once a tile is chosen.
var updatedremain = ScrabbleTiles[array_index]['number-remaining'];
updatedremain--;
//console.log(updatedremain);

//Index's number-remaining value is updated
ScrabbleTiles[array_index]['number-remaining'] = updatedremain;
tileidCounter++;//Update tile id counter
} //end of if statement

} // end of random_tile_selector

//restarts game and sets everything back to normal
function restart_game(){
  //reset all values
  totaltiles=100;
  tileidCounter=0;
  current_score=0;
  total_score=0;
  spot1value=0;
  spot2value=0;
  spot3value=0;
  spot4value=0;
  spot5value=0;
  spot6value=0;
  spot7value=0;

  //More specific delete function to delete all tiles
  while(document.querySelector(".generated_tiles")){
        var tempDiv = document.querySelector(".generated_tiles");
        tempDiv.parentNode.removeChild(tempDiv);
      }

//Reset to original distribution.
  var charCode=65;
  for (var i = 0; i<26;i++){
  var array_index = String.fromCharCode(charCode);
  ScrabbleTiles[array_index]['number-remaining'] = ScrabbleTiles[array_index]['original-distribution'];
}
  ScrabbleTiles["_"]['number-remaining'] = ScrabbleTiles["_"]['original-distribution'];


//Call reset hand to fill hand again
  reset_hand();
}

//Calls reset hand once at the beginning once everything is ready.
$().ready(function(){
reset_hand();
});
