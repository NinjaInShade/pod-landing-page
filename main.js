function validateForm(event) {
  event.preventDefault();

  const form = document.getElementById('subscribe-form');
  const emailField = document.getElementById('subscribe-form-email');
  const errorText = document.getElementById('subscribe-form-error');

  //   Reset form and treat as valid to start with
  form.classList.remove('subscribe-form-invalid');

  const email_re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  if (!emailField.value || !email_re.test(String(emailField.value).toLowerCase())) {
    form.classList.add('subscribe-form-invalid');

    errorText.innerHTML = 'Oops! Please check your email';

    return;
  }
}
