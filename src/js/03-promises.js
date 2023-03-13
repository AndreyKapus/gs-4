const formEl = document.querySelector('.form');
const inputDelayEl = document.querySelector('input[name=delay]');
const inputStepEl = document.querySelector('input[name=step]');
const inputAmountEl = document.querySelector('input[name=amount]');
const submitBtnEl = document.querySelector('button')
console.log(inputDelayEl)


function createPromise(position, delay) {
  const promise = new Promise;
  const shouldResolve = Math.random() > 0.3;
  if (shouldResolve) {
    return promise;
  } else {
    return console.log('error')
  }
}

// createPromise(2, 1500)
//   .then(({ position, delay }) => {
//     console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
//   })
//   .catch(({ position, delay }) => {
//     console.log(`❌ Rejected promise ${position} in ${delay}ms`);
//   });


function onFormSubmit(e) {
  e.preventDefault();

}

formEl.addEventListener('submit', onFormSubmit)