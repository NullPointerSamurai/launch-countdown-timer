let currentPage = 0;
const data = {};
const page = document.getElementsByClassName('page');
const errorText = document.querySelector('.error');
const inputs = page[currentPage].getElementsByTagName('input');
const arcadePrice = document.getElementById('arcade-price');
const advancedPrice = document.getElementById('advanced-price');
const proPrice = document.getElementById('pro-price');
const freeText = document.querySelectorAll('.free-text');
const monthly = document.getElementById('monthly');
const yearly = document.getElementById('yearly');
const arcadeInput = document.getElementById('arcade');
const advancedInput = document.getElementById('advanced');
const proInput = document.getElementById('pro');
const planRadios = document.querySelectorAll('.radio-plan');
const planLabels = document.querySelectorAll('.plan-label');

//clear form inputs on load
const clearForm = () => {
  const allInputs = document.querySelectorAll('input');
  allInputs.forEach((input) => {
    input.value = null;
  });
};
clearForm();

//assign initial input values
arcadeInput.value = 9;
advancedInput.value = 12;
proInput.value = 15;
monthly.value = true;
yearly.value = false;
arcadeInput.checked = true;
arcadeLabel.classList.add('highlight');

//Add event listeners in radios
planRadios.forEach((radio) => {
  radio.addEventListener('click', () => {
    radio.checked;
    updateData();
  });
});

//plan labels highlight toggle
planLabels.forEach((label) => {
  label.addEventListener('click', () => {
    removeHighlight();
    addHighlight(label);
  });
});
const removeHighlight = (target) => {
  planLabels.forEach((label) => {
    if (label == target) {
      label.classList.add('highlight');
    } else {
      label.classList.remove('highlight');
    }
  });
};

function addHighlight(label) {
  label.classList.add('highlight');
}
//Update inserted data
const updateData = () => {
  const textInputs = document.querySelectorAll('.text-input');
  textInputs.forEach((textInput) => {
    data[textInput.id] = textInput.value;
  });
  planRadios.forEach((radio) => {
    if (radio.checked) {
      data.dataPrice = radio.value;
    }
  });
  //Save data to local storage
  localStorage.setItem('data', JSON.stringify(data));

  // Retrieve the object from storage
  const retrievedObject = localStorage.getItem('data');

  console.log('retrievedObject: ', JSON.parse(retrievedObject));
};

//set Subscription duration
const deselectPlan = () => {
  planLabels.forEach((label) => {
    label.classList.remove('highlight');
  });
  planRadios.forEach((radio) => {
    radio.checked = false;
  });
};

const setMonthly = () => {
  deselectPlan();
  arcadePrice.innerText = '$9/mo';
  advancedPrice.innerText = '$12/mo';
  proPrice.innerText = '$15/mo';
  arcadeInput.value = 9;
  advancedInput.value = 12;
  proInput.value = 15;
  monthly.checked = 'true';
  freeText.forEach((text) => {
    text.style.visibility = 'hidden';
  });
};
setMonthly();
const setYearly = () => {
  deselectPlan();
  arcadePrice.innerText = '$90/yr';
  advancedPrice.innerText = '$120/yr';
  proPrice.innerText = '$150/yr';
  arcadeInput.value = 90;
  advancedInput.value = 120;
  proInput.value = 150;
  yearly.checked = 'true';
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
    //when form reaches last step
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
};

showTab(currentPage);
