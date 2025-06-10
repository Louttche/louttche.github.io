document.getElementById('contact-form').addEventListener('submit', async function(e) {
  e.preventDefault();
  const form = e.target;

  if (form.website && form.website.value) {
    window.location.href = '/contact_confirmation/';
    return;
  }

  const data = new FormData(form);
  const action = form.action;
  try {
    const response = await fetch(action, {
      method: 'POST',
      body: data,
      headers: { 'Accept': 'application/json' }
    });
    if (response.ok) {
      window.location.href = '/contact_confirmation/';
    } else {
      alert('There was a problem submitting your form.');
    }
  } catch (error) {
    alert('There was a problem submitting your form.');
  }
});