var stringArray = ["dice1.png", "dice2.png", "dice3.png", "dice4.png", "dice5.png", "dice6.png"];
      
      function randomNumber(){
        var ranNum = Math.floor(Math.random() * 6);
        return ranNum;
      }

      function setDie(x, y) {
        document.querySelector(".img1").src = "images/" + stringArray[x];
        document.querySelector(".img2").src = "images/" + stringArray[y];
      }

      
     

      function calculateWinner(x, y){
        if(x > y){
          document.querySelector("h1").innerHTML = "🚩Player 1 Wins!";
        } else if (x < y){
          document.querySelector("h1").innerHTML = "Player 2 Wins!🚩";
        } else if (x == y) {
          document.querySelector("h1").innerHTML = "Draw!";
        }
      }

      
      function displayResults(){
        var player_1_value = randomNumber();
        var player_2_value = randomNumber();
        setDie(player_1_value, player_2_value);
        calculateWinner(player_1_value, player_2_value);
        
      }