const feedbackForm = document.querySelector('.feedback-form');

const localStorageKey = 'feedback-form-state';

const formData = { email: '', message: '' };

feedbackForm.addEventListener('submit', onFormSubmit);
feedbackForm.addEventListener('input', onSaveEmail);

function onSaveEmail(event) {
  event.preventDefault();
  const formName = event.target.name;
  const formdValue = event.target.value.trim();
  formData[formName] = formdValue;
  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
    return;
  }
  console.log(formData);
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
}

const removeFormData = localStorage.getItem('feedback-form-state');
if (removeFormData) {
  const parsedFormData = JSON.parse(removeFormData);
  formData.email = parsedFormData.email;
  formData.message = parsedFormData.message;
  feedbackForm.elements.email.value = formData.email;
  feedbackForm.elements.message.value = formData.message;
}
