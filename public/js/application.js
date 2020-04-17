const search = document.querySelector('div.search');
const cardContainer = document.querySelector('.card-container');

search.addEventListener('input', filterFunction);

function filterFunction(e) {
  let filter = e.target.value.toUpperCase();

  let divs = cardContainer.getElementsByTagName('div');

  for(let i = 0; i < divs.length; i++) {
    let p = divs[i].querySelector('p');

    if(p) {
      if(p.innerText.toUpperCase().indexOf(filter) > -1) {
        divs[i].style.display = '';
      } else {
        divs[i].style.display = 'none';
      }
    }
  }
}
