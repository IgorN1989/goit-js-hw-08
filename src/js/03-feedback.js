import throttle from 'lodash.throttle';

const formRef = document.querySelector('.feedback-form');
const emailRef = formRef.querySelector('[name = "email"]');
const messageRef = formRef.querySelector('[name = "message"]');
const DATA_OBJECT_KEY = 'feedback-form-state';

inputDefaultValue();

formRef.addEventListener('input', throttle(onInput, 500));
formRef.addEventListener('submit', onSubmit);

function onInput() {
  const email = emailRef.value;
  const message = messageRef.value;
  const savedData = {
    email,
    message,
  };
  const stringifiedSavedData = JSON.stringify(savedData);
  localStorage.setItem(DATA_OBJECT_KEY, stringifiedSavedData);
}

function onSubmit(evt) {
  evt.preventDefault();

  if (emailRef.value.length < 1 || messageRef.value.length < 1) {
    alert('Всі поля повинні бути заповнені!');
    return;
  } else {
    let savedData = localStorage.getItem(DATA_OBJECT_KEY);
    const parsedSavedData = JSON.parse(savedData);
    console.log(parsedSavedData);
    formRef.reset();
    localStorage.clear();
  }
}

function inputDefaultValue() {
  const defaultValue = localStorage.getItem(DATA_OBJECT_KEY);
  const parsedDefaultValue = JSON.parse(defaultValue);

  if (parsedDefaultValue) {
    emailRef.value = parsedDefaultValue.email;
    messageRef.value = parsedDefaultValue.message;
  }
}
