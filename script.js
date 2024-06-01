// Exercise 1
document.addEventListener('DOMContentLoaded', (event) => {
    const button = document.getElementById('myButton');
    const div = document.getElementById('myDiv');

    button.addEventListener('click', () => {
        div.style.display = 'none';
    });
});

// Exercise 2
document.addEventListener('DOMContentLoaded', (event) => {
    const cardDiv = document.createElement('div');
    cardDiv.id = 'card';

    const h2Element = document.createElement('h2');
    h2Element.textContent = 'Gandalf';

    const aElement = document.createElement('a');
    aElement.href = '#';
    aElement.textContent = 'Go to profile';

    cardDiv.appendChild(h2Element);
    cardDiv.appendChild(aElement);

    const container = document.getElementById('container');
    container.appendChild(cardDiv);
});

// Exercise 3
document.addEventListener('DOMContentLoaded', (event) => {
    const questions = document.querySelectorAll('.question');

    questions.forEach((question, qIndex) => {
        const correctIndex = parseInt(question.getAttribute('data-correct'), 10);
        const answers = question.querySelectorAll('.answer');

        answers.forEach((answer, aIndex) => {
            answer.addEventListener('click', () => {
                if (aIndex === correctIndex) {
                    answer.classList.add('correct');
                } else {
                    answer.classList.add('wrong');
                }

                answers.forEach((ans, ansIndex) => {
                    ans.style.pointerEvents = 'none';
                    if (ansIndex === correctIndex) {
                        ans.classList.add('correct');
                    }
                });
            });
        });
    });
});
