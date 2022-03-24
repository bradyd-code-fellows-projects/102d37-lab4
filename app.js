function userInputs() {

    let inputYesOrNo;
    
    do {
        inputYesOrNo = prompt("Have you heard of Powerlifting before? (I can only read yes or no answers)");
    } while (inputYesOrNo !== 'yes' && inputYesOrNo !== 'no');

    if (inputYesOrNo == 'yes') {
        document.write("Awesome! You're probably familiar with this information!")
    }
    if (inputYesOrNo == 'no') {
        document.write("Well you have reached a great resource to learn what it is!")
    }
}

function squat() {
    let squatWeight = prompt("How much can you squat (in pounds)? If you don't know, just type 'I'm not sure'");
    if (Number.isFinite(parseInt(squatWeight)) === true) {
        document.write("<li>You said that you can squat " + squatWeight + " lbs, impressive!!</li>")
    } else {
        document.write("When asked about your squat, you answered: " + squatWeight + ". If you don't know yet, but now you want to know, it's not hard to get started!")
    }
}

function bench() {
    let benchWeight = prompt("How much can you squat? If you don't know, just type 'I'm not sure'");
    if (Number.isFinite(parseInt(benchWeight)) === true) {
        document.write("<li>You said that you can bench " + benchWeight + " lbs, nice!!</li>")
    } else {
        document.write("When asked about your bench, you answered: " + benchWeight + ". If you don't know yet, but now you want to know, it's not hard to get started!")
    }
}

function deadlift() {
    let deadliftWeight = prompt("How much can you deadlift? If you don't know, just type 'I'm not sure'");
    if (Number.isFinite(parseInt(deadliftWeight)) === true) {
        document.write("<li>You said that you can deadlift " + deadliftWeight + " lbs, yeah buddy!!</li>")
    } else {
        document.write("When asked about your squat, you answered: " + deadliftWeight + ". If you don't know yet, but now you want to know, it's not hard to get started!")
    }
}