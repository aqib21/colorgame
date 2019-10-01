var numberOfSquares = 6;
        var colors = [];
        var pickedColor;
        var squares = document.querySelectorAll(".square");
        var colorDisplay = document.querySelector("#colorDisplay");
        var messageDisplay = document.querySelector("#message");
        var h1 = document.querySelector("h1");
        var resetButton = document.querySelector("#reset");
        var modeButtons = document.querySelectorAll(".mode");

        init();

        function init(){
            setupModeButtons();
            setupSquares();

            reset();
        }

        function setupSquares(){
            for(var i = 0; i < squares.length; i++){
                squares[i].addEventListener("click", function(){
                    var clickedColor = this.style.backgroundColor;
                    if(clickedColor === pickedColor){
                        messageDisplay.textContent = "Correct!";
                        resetButton.textContent = "Play Again?";
                        changeColors(clickedColor);
                        h1.style.backgroundColor = clickedColor;
                    }else{
                        this.style.backgroundColor = "#232323";
                        messageDisplay.textContent = "Try Again";
                    }
                })
            }
        }

        function setupModeButtons(){
            for(var i = 0; i < modeButtons.length; i++){
                modeButtons[i].addEventListener("click", function(){
                    modeButtons[0].classList.remove("selected");
                    modeButtons[1].classList.remove("selected");
                    modeButtons[2].classList.remove("selected");
                    this.classList.add("selected");
                    numberOfSquares = this.textContent === "Easy" ? 3 : this.textContent === "Medium" ? 6 : 9;
                    reset();
                })
            }
        }

        function reset(){
            colors = generateColors(numberOfSquares);
            pickedColor = pickColor();
            colorDisplay.textContent = pickedColor;
            for(var i = 0; i < squares.length; i++){
                if(colors[i]){
                    squares[i].style.backgroundColor = colors[i];
                    squares[i].style.display = "block";
                }else{
                    squares[i].style.display = "none";
                }
            }
            h1.style.backgroundColor = "MidnightBlue";
            resetButton.textContent = "New Colors";
            messageDisplay.textContent = "";
        }

        resetButton.addEventListener("click", reset);

        function changeColors(color){
            for(var i = 0; i < squares.length; i++){
                squares[i].style.backgroundColor = color;
            }
        }

        function pickColor(){
            var random = Math.floor(Math.random() * colors.length);
            return colors[random];
        }

        function generateColors(number){
            var colorArray = []
            for(var i = 0; i < number; i++){
                colorArray.push(randomColor());
            }
            return colorArray;
        }

        function randomColor(){
            var r = Math.floor(Math.random() * 256);
            var g = Math.floor(Math.random() * 256);
            var b = Math.floor(Math.random() * 256);

            var rgb = "rgb(" + r + ", " + g + ", " + b + ")";
            return rgb;
        }