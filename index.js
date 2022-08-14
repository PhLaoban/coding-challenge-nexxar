const onClick = (target) => {
  const allDetails = document.querySelectorAll('details');
  allDetails.forEach((i) => {
    if (i != target) {
      i.removeAttribute('open');
    }
  });
};

const expandAll = () => {
  const allDetails = document.querySelectorAll('details');
  allDetails.forEach((i) => {
    i.setAttribute('open', '');

    // if (i.getAttribute('open') !== 'false') {
    //   i.removeAttribute('open');
    // }
  });
};

function menuOnClick() {
  document.getElementById('menu-bar').classList.toggle('change');
  document.getElementById('nav').classList.toggle('change');
  document.getElementById('menu-bg').classList.toggle('change-bg');
}
