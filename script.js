$(document).ready(function () {

    let magic8Ball = {};
    magic8Ball.listOfAnswers = ['It is certain', 'It is decidedly so.', 'Without a doubt', 'Yes definitely', 'You may rely on it', 'As I see it, yes.', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again.', 'Ask again later', 'Better not tell you now.', 'Cannot predict now.', 'Concentrate and ask again.', 'Don\'t count on it.', 'My reply is no.', 'My sources say no.', 'Outlook not so good.', 'Very doubtful.'];
    $("#answer").hide();

    magic8Ball.askQuestion = function (question) {
        $("#8ball").effect("shake");

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballAnswer.png");

        $("#answer").fadeIn(4000);
        let randomIndex = Math.floor(Math.random() * this.listOfAnswers.length) + 1;
        let answer = this.listOfAnswers[randomIndex];

        $("#answer").text(answer);

        console.log(question);
        console.log(answer);
    };

    let onClick = function () {

        $("#answer").hide();

        $("#8ball").attr("src", "https://s3.amazonaws.com/media.skillcrush.com/skillcrush/wp-content/uploads/2016/09/magic8ballQuestion.png");


        setTimeout(function () {
            let question = prompt("What question do you have for me today?");
            if (question === null) {
                alert('User hit cancel.')
                return;
            } else if (question === '') {
                alert('User pressed OK, but didn\'t ask a question!')
                return;
            }
            magic8Ball.askQuestion(question);
        }, 500);
    };

    $("#questionButton").click(onClick);

});