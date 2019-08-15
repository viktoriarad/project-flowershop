const opinionList = document.querySelectorAll('.reviews__container');
const opinionsNumber = opinionList.length; // getting numbers of opinions
const arrowUp = document.querySelector('.fa-sort-up');
const arrowDown = document.querySelector('.fa-sort-down');

const showOpinion = (opinionToShow, opinionToHide) => {

  // checking if the opinion is first or last
  if (opinionToShow < 0 || opinionToShow >= opinionsNumber) return;

  // show necessary opinion
  opinionList[opinionToShow].classList.add('reviews__container--visible');

  // hide previous opinion
  opinionList[opinionToHide].classList.remove('reviews__container--visible');

  // if first opinion then block arrow-up
  if (opinionToShow === 0) {
    arrowUp.classList.add('blocked-arrow')
  } else {
    arrowUp.classList.remove('blocked-arrow');
  }

  // if last opinion then block arrow-down
  if (opinionToShow === opinionsNumber - 1) {
    arrowDown.classList.add('blocked-arrow')
  } else {
    arrowDown.classList.remove('blocked-arrow');
  }

}

const arrowUpFunc = () => {
  // finding the index of actual visible opinion

  const index = Array.from(opinionList).findIndex(el => {
    return el.classList.contains('reviews__container--visible')
  });

  // calling of function showOpinion to show previous opinion and hide the actual
  showOpinion(index - 1, index);
}

const arrowDownFunc = () => {
  // finding the index of actual visible opinion
  const index = Array.from(opinionList).findIndex(el => {
    return el.classList.contains('reviews__container--visible')
  });

  // calling of function showOpinion to show next opinion and hide the actual
  showOpinion(index + 1, index);
}



arrowUp.addEventListener('click', arrowUpFunc);
arrowDown.addEventListener('click', arrowDownFunc);
