import { createElement } from "./modules/createElement.js";


// Each countdown card displays the name, date and time info. This function creates each individual info section
const createCountdownInfo = (info, countdown) => {
  const divEl = createElement('div', `info-section ${info}`);
  
  // The countdown name doesn't have a header
  if (info !== 'name') {
    const titleEl = createElement('p', 'title');
    titleEl.appendChild(document.createTextNode(info.toUpperCase()));
    divEl.appendChild(titleEl);
  }

  // add the information (i.e. name, date or time)
  const infoEl = createElement('p', 'info');
  infoEl.appendChild(document.createTextNode(countdown[info]));
  divEl.appendChild(infoEl);

  return divEl;
}

// create the countdown card and add the name, date and time info
const createCountdownCard = (countdown) => {
  // create overall card div element
  const countdownCard = createElement('div', 'item countdown', `countdown-${countdown.id}`);

  // create the name, date and time div elements and append to card
  const nameEl = createCountdownInfo('name', countdown);
  countdownCard.appendChild(nameEl);
  const dateEl = createCountdownInfo('date', countdown);
  countdownCard.appendChild(dateEl);
  const timeEl = createCountdownInfo('time', countdown);
  countdownCard.appendChild(timeEl);    
  
  return countdownCard;
}

// create the "Add New" card
const createAddNewCard = () => {
  const addNewCard = createElement('div', 'item add-new');
  
  const addNewText = createElement('p');
  addNewText.appendChild(document.createTextNode('ADD NEW'));
  
  addNewCard.appendChild(addNewText);
  
  return addNewCard;
}

// finally append the countdowns to the list in the DOM
const list = document.getElementById('countdown-list');

// test countdowns
const christmas = {
  name: 'Christmas',
  date: '25/12/2021',
  time: '00:00',
  id: 1
}
const myBirthdayParty = {
  name: 'My Birthday Party',
  date: '28/03/2021',
  time: '19:00',
  id: 2
}

list.appendChild(createCountdownCard(christmas))
list.appendChild(createCountdownCard(myBirthdayParty))
list.appendChild(createAddNewCard()) // always append the "Add New" at the end
