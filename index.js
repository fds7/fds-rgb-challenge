function random255() {
  return Math.floor(Math.random() * 256);
}

function randomColor() {
  return `rgb(${random255()},${random255()},${random255()})`;
}

let stage;
let problem;
let correctAnswer;

function nextStage() {
  // 다음 단계에 대한 상태로 전환
  stage++;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

function draw() {
  // 화면 그리기
  document.querySelectorAll('.box').forEach((el, index) => {
    el.style.backgroundColor = problem[index];
  })
  document.querySelector('.rgb-text').textContent = problem[correctAnswer];
  document.querySelector('.score').textContent = stage;
}

function init() {
  stage = 0;
  problem = [randomColor(), randomColor(), randomColor()];
  correctAnswer = Math.floor(Math.random() * 3);
}

document.querySelectorAll('.box').forEach((el, index) => {
  el.addEventListener('click', e => {
    if (index === correctAnswer) {
      nextStage();
      draw();
    } else {
      init();
      draw();
    }
  });
})

init();
draw();
