// By default img 2,3,4 should be disabled at start
document.getElementById("img-2").disabled = true;
document.getElementById("img-3").disabled = true;
document.getElementById("img-4").disabled = true;

// array to store input info like name, user name, and email
let formInfoArray = [];

// array to store the score of dice onclick function
let diceScore = [];

// global variables to keep record of attempts for image 3 on click function and dice click for dice image
let attempt = 2;
let RemainingDiceClick = 3;
let totalScore = 0;

// Image 1 Function : Open form
function registrationForm() {
    document.getElementById('form').classList.remove('hidden');
}

// Form submit Function : Take inputs from user and submit the form with storing the info in global array
function submitFormInfoFunction() {
    let name = document.getElementById('name').value;
    let userName = document.getElementById('userName').value;
    let email = document.getElementById('email').value;
    if (name && userName && email) {
        let obj = {
            Name: name,
            UserName: userName,
            Email: email,
        }

        formInfoArray.push(obj);
        document.getElementById("img-2").disabled = false;
        document.getElementById("img-1").disabled = true;
        alert('User Registered')
        document.getElementById('form').classList.add('hidden');
    } else {
        alert(`Form is empty.`)
    }
}

function displayFormInfoFunction() {
    document.getElementById('info').innerText = `Name: ${formInfoArray[0].Name}, User Name: ${formInfoArray[0].UserName}, Email: ${formInfoArray[0].Email}`
    document.getElementById('displayInfo').classList.remove('hidden');
    document.getElementById("img-3").disabled = false;
    document.getElementById("img-2").disabled = true;
}
function displayDiceWthScore() {
    document.getElementById('displayInfo').classList.add('hidden');
    attempt--;
    console.log(`attempt remaining= ${attempt}`);
    document.getElementById('attemptsLeft').innerText = attempt;
    document.getElementById('diceWthScore').classList.remove('hidden');
    document.getElementById("img-3").disabled = true;

}

function diceClick() {
    RemainingDiceClick--;
    document.getElementById('diceClicks').innerText = RemainingDiceClick;
    let randomNo = Math.floor(Math.random() * 6) + 1;
    totalScore += randomNo;
    document.getElementById('score').innerText = totalScore;
    if (RemainingDiceClick === 0) {
        document.getElementById("dice-Image").disabled = true;
        document.getElementById('score').innerText = totalScore;
        if (totalScore > 10) {
            alert(`Your total score is : ${totalScore}, Click 4th Image`);
            document.getElementById('diceWthScore').classList.add('hidden');
            document.getElementById("img-4").disabled = false;
        } else {
            if (attempt != 0) {
                // document.getElementById('score').innerText = totalScore;
                alert(`Sorry, Your score is : ${totalScore}.Try once again!!`);
                document.getElementById("img-3").disabled = false;
                RemainingDiceClick = 3;
                totalScore = 0;
                document.getElementById("dice-Image").disabled = false;
                document.getElementById('diceWthScore').classList.add('hidden');
                console.log(`RemainingDiceClick = ${RemainingDiceClick}`);
                console.log(`totalScore = ${totalScore}`);

            } else {
                document.getElementById('score').innerText = totalScore;
                alert(`Bad luck. Your score is : ${totalScore}. Start from beggining`);
                document.getElementById('diceWthScore').classList.add('hidden');
                document.getElementById('tryAgainImage').classList.remove('hidden');
            }
        }
    }
}

function generateCouponCodeFunction() {
    document.getElementById("img-4").disabled = true;
    let coupon = '';
    for (let i = 0; i < 12; i++) {
        coupon += Math.floor(Math.random() * 10);
    }
    document.getElementById('congratsImage').classList.remove('hidden');
    alert(`Congratulations. Your coupon code is ${coupon}`);
    document.getElementById('couponcode').innerText="Congrats, Your Coupon Code is:"+coupon;
}