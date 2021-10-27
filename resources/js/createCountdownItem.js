const createElement = (elementType, classes, id) => {
  const element = document.createElement(elementType);
  if (classes) {
    element.className = classes;
  } 
  if (id) {
    element.id = id;
  }

  return element;
};

const createCountdownInfo = (info, countdown) => {
  const divEl = createElement('div', `info-section ${info}`);
  const titleEl = createElement('p', 'title');
  titleEl.appendChild(document.createTextNode(info.toUpperCase()));
  const infoEl = createElement('p', 'info');
  infoEl.appendChild(document.createTextNode(countdown[info]));

  divEl.appendChild(titleEl);
  divEl.appendChild(infoEl);

  return divEl;
}

const createCountdownCard = (countdown) => {
  const countdownCard = createElement('div', 'item countdown', `countdown-${countdown.id}`);

  const nameEl = createCountdownInfo('name', countdown);
  const dateEl = createCountdownInfo('date', countdown);
  const timeEl = createCountdownInfo('time', countdown);

  countdownCard.appendChild(nameEl);
  countdownCard.appendChild(dateEl);
  countdownCard.appendChild(timeEl);

  return countdownCard;
}

const createAddNewCard = () => {
  const addNewCard = createElement('div', 'item add-new');
  
  const addNewText = createElement('p');
  addNewText.appendChild(document.createTextNode('ADD NEW'));
  
  addNewCard.appendChild(addNewText);
  
  return addNewCard;
}


const christmas = {
  name: 'Christmas',
  date: '25/12/2021',
  time: '00:00',
  id: 1
}

const myBirthday = {
  name: 'My Birthday',
  date: '28/03/2021',
  time: '00:00',
  id: 2
}

const list = document.getElementById('countdown-list');
list.appendChild(createCountdownCard(christmas))
list.appendChild(createCountdownCard(myBirthday))
list.appendChild(createAddNewCard())
