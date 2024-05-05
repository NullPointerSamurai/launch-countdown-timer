const planArray = document.querySelectorAll('.plan');

const togglePlan = (event) => {
  planArray.forEach((item) => {
    if (item == event.target) {
      item.classList.add('plan-selected');
    } else {
      item.classList.remove('plan-selected');
    }
  });
};
