let currentPage = 0;
const data = {};
const page = document.getElementsByClassName('page');
const errorText = document.querySelector('.error');
const inputs = page[currentPage].getElementsByTagName('input');
const radioButtons = document.querySelectorAll('.radio-plan');
const arcadePrice = document.getElementById('arcade-price');
const advancedPrice = document.getElementById('advanced-price');
const proPrice = document.getElementById('pro-price');
const freeText = document.querySelectorAll('.free-text');
const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');

//clear form inputs on load
const clearForm = () => {
  const allInputs = document.querySelectorAll('input');
  allInputs.forEach((input) => {
    input.value = null;
    monthly.checked = true;
  });
};
clearForm();

//Update inserted data
const updateData = () => {
  const allInputs = document.querySelectorAll('.input');
  allInputs.forEach((input) => {
    data[input.id] = input.value;
    //!!!need to add functionality for checked radio buttons!!!
  });
  console.log(data);
};

//set Subscription duration
const setMonthly = () => {
  arcadePrice.innerText = '$9/mo';
  advancedPrice.innerText = '$12/mo';
  proPrice.innerText = '$15/mo';
  freeText.forEach((text) => {
    text.style.visibility = 'hidden';
  });
};

const setYearly = () => {
  arcadePrice.innerText = '$90/yr';
  advancedPrice.innerText = '$120/yr';
  proPrice.innerText = '$150/yr';
  freeText.forEach((text) => {
    text.style.visibility = 'visible';
  });
};

//form validation
const validateForm = () => {
  let i,
    valid = true;
  for (i = 0; i < inputs.length; i++) {
    if (inputs[i].value == '') {
      inputs[i].className += ' invalid';
      valid = false;
      errorText.style.visibility = 'visible';
    }
  }
  if (valid) {
    document.getElementsByClassName('step')[currentPage].className += ' finish';
    errorText.style.visibility = 'hidden';

    updateData();
  }
  return valid;
};

//page display -Prev/Next
const nextPrev = (n) => {
  if (n == 1 && !validateForm()) return false;
  page[currentPage].style.display = 'none';
  currentPage += n;
  if (currentPage >= page.length) {
    document.getElementById('regForm').submit();
    return false;
  }
  showTab(currentPage);
};

//highlight current step number
const indicateStep = (n) => {
  let i,
    step = document.getElementsByClassName('step-num');
  for (i = 0; i < step.length; i++) {
    step[i].className = step[i].className.replace(' active', '');
  }

  step[n].className += ' active';
};

//Show current Tab
const showTab = (n) => {
  page[n].style.display = 'flex';
  //Possible functionality for next steps

  // if (n == 0) {
  //   document.getElementById('prevBtn').style.display = 'none';
  // } else {
  //   document.getElementById('prevBtn').style.display = 'inline';
  // }
  // if (n == page.length - 1) {
  //   document.getElementById('nextBtn').innerHTML = 'Submit';
  // } else {
  //   document.getElementById('nextBtn').innerHTML = 'Next';
  // }
  indicateStep(n);
  console.log(monthly.value);
};

showTab(currentPage);
