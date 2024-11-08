
import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';

const loadFormData = () => {
  const savedData = localStorage.getItem(STORAGE_KEY);
  if (savedData) {
    const { email, message } = JSON.parse(savedData);
    form.email.value = email || ''; 
    form.message.value = message || ''; 
  }
};

const saveFormData = throttle(() => {
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}, 500);

form.addEventListener('input', saveFormData);

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  const formData = {
    email: form.email.value,
    message: form.message.value,
  };

  console.log('Submitted data:', formData);

  localStorage.removeItem(STORAGE_KEY);
  form.reset();
});

loadFormData();
