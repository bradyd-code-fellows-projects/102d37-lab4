function userInputs() {
    let result = confirm("Have you heard of Powerlifting before? Click OK for 'Yes', click Cancel for 'No'");
    if (result === true) {
        document.write("Awesome! You're probably familiar with this information!")
    } else {
        document.write("Well you have reached a great resource to learn what it is!")
    }
}

function squat() {
    let squatWeight = prompt("How much can you squat? If you don't know, just type 'I'm not sure'");
    if (squatWeight >= 0 && squatWeight <= 9999999999999) {
        document.write("<li>You said that you can squat " + squatWeight + ", impressive!!</li>")
    } else {
        document.write("When asked about your squat, you answered: " + squatWeight + ". If you don't know yet, but now you want to know, it's not hard to get started!")
    }
}

function bench() {
    let benchWeight = prompt("How much can you squat? If you don't know, just type 'I'm not sure'");
    if (benchWeight >= 0 && benchWeight <= 9999999999999) {
        document.write("<li>You said that you can bench " + benchWeight + ", nice!!</li>")
    } else {
        document.write("When asked about your bench, you answered: " + benchWeight + ". If you don't know yet, but now you want to know, it's not hard to get started!")
    }
}

function deadlift() {
    let deadliftWeight = prompt("How much can you deadlift? If you don't know, just type 'I'm not sure'");
    if (deadliftWeight >= 0 && deadliftWeight <= 9999999999999) {
        document.write("<li>You said that you can squat " + deadliftWeight + ", yeah buddy!!</li>")
    } else {
        document.write("When asked about your squat, you answered: " + deadliftWeight + ". If you don't know yet, but now you want to know, it's not hard to get started!")
    }
}