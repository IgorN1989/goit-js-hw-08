const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('[name = "email"]');
const messageRef = formRef.querySelector('[name = "message"]');
const DATA_OBJECT_KEY = 'feedback-form-state';
let savedData = {};

inputDefaultValue();

formRef.addEventListener('input', onInput);
formRef.addEventListener('submit', onSubmit);

function onInput(evt) {
  savedData[evt.target.name] = evt.target.value;
  localStorage.setItem(DATA_OBJECT_KEY, JSON.stringify(savedData));
}

function inputDefaultValue() {
  const defaultValue = localStorage.getItem(DATA_OBJECT_KEY);
  const parsedDefaultValue = JSON.parse(defaultValue);
  if (parsedDefaultValue) {
    Object.entries(parsedDefaultValue).map(element => {
      emailRef.value = parsedDefaultValue.email;
      messageRef.value = parsedDefaultValue.message;
    });
  }

  console.log(defaultValue);
  console.log(Object.entries(parsedDefaultValue));
}

function onSubmit(evt) {
  console.log(evt);
}

// function startInputValue(email, message) {
//   parsedSavedData = JSON.parse(savedData);
//   email.value = localStorage.getItem(DATA_OBJECT_KEY);
//   console.log(email);
//   console.log(message);
// }

console.log('TEST');
