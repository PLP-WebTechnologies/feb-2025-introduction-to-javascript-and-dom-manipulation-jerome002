function changeText() {
  document.getElementById('intro-text').textContent = 'The text has been changed!';
}

function changeStyle() {
  document.getElementById('main-title').style.color = 'blue';
  document.getElementById('main-title').style.fontSize = '2.5rem';
}

function addElement() {
  const container = document.getElementById('element-container');
  const newDiv = document.createElement('div');
  newDiv.id = 'dynamic-div';
  newDiv.textContent = 'I am a new element!';
  newDiv.style.background = '#eef';
  newDiv.style.padding = '10px';
  newDiv.style.marginTop = '10px';
  container.appendChild(newDiv);
}

function removeElement() {
  const element = document.getElementById('dynamic-div');
  if (element) {
    element.remove();
  }
}
