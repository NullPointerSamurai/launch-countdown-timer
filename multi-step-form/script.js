let currentPage = 0;
const data = {};
const page = document.getElementsByClassName('page');
const errorText = document.querySelector('.error');
const inputs = page[currentPage].getElementsByTagName('input');

//Update inserted data
const updateData = () => {
  const allInputs = document.querySelectorAll('.input');
  allInputs.forEach((input) => {
    data[input.id] = input.value;
    //!!!need to add functionality for checked radio buttons!!!
  });
  console.log(data);
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
  // ... and run a function that displays the correct step indicator:
  indicateStep(n);
};
showTab(currentPage);

console.log(data);
