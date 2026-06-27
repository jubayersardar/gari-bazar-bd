/* ============================================================
   GARI BAZAR BD — Service Booking Form Logic
   Form Validation, WhatsApp Integration, Success State
   ============================================================ */

document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('bookingForm');
  if (!form) return;

  form.addEventListener('submit', handleBookingSubmit);

  // Real-time validation
  const inputs = form.querySelectorAll('.form-control');
  inputs.forEach(input => {
    input.addEventListener('blur', () => validateField(input));
    input.addEventListener('input', () => {
      if (input.classList.contains('error')) {
        validateField(input);
      }
    });
  });
});

function validateField(field) {
  const value = field.value.trim();
  let isValid = true;

  // Remove previous error styling
  field.classList.remove('error');
  const existingError = field.parentNode.querySelector('.field-error');
  if (existingError) existingError.remove();

  // Required validation
  if (field.hasAttribute('required') && !value) {
    showFieldError(field, 'এই ফিল্ডটি পূরণ করা আবশ্যক');
    isValid = false;
  }

  // Phone validation
  if (field.type === 'tel' && value) {
    const phoneRegex = /^(\+?880|0)?1[3-9]\d{8}$/;
    if (!phoneRegex.test(value.replace(/[\s-]/g, ''))) {
      showFieldError(field, 'সঠিক ফোন নম্বর দিন (যেমন: 01711577843)');
      isValid = false;
    }
  }

  // Email validation
  if (field.type === 'email' && value) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
      showFieldError(field, 'সঠিক ইমেইল ঠিকানা দিন');
      isValid = false;
    }
  }

  // Name validation
  if (field.name === 'name' && value && value.length < 3) {
    showFieldError(field, 'নাম কমপক্ষে ৩ অক্ষরের হতে হবে');
    isValid = false;
  }

  return isValid;
}

function showFieldError(field, message) {
  field.classList.add('error');
  field.style.borderColor = 'var(--red)';
  field.style.boxShadow = '0 0 0 3px rgba(255, 68, 68, 0.1)';

  const errorEl = document.createElement('div');
  errorEl.className = 'field-error';
  errorEl.style.cssText = 'color: var(--red); font-size: 0.8rem; margin-top: 4px; animation: fadeInUp 0.3s ease;';
  errorEl.textContent = message;
  field.parentNode.appendChild(errorEl);

  // Remove error styling on focus
  field.addEventListener('focus', function handler() {
    field.style.borderColor = '';
    field.style.boxShadow = '';
    field.classList.remove('error');
    const err = field.parentNode.querySelector('.field-error');
    if (err) err.remove();
    field.removeEventListener('focus', handler);
  });
}

function handleBookingSubmit(e) {
  e.preventDefault();

  const form = e.target;
  const fields = form.querySelectorAll('.form-control[required]');
  let allValid = true;

  fields.forEach(field => {
    if (!validateField(field)) {
      allValid = false;
    }
  });

  if (!allValid) {
    // Scroll to first error
    const firstError = form.querySelector('.error');
    if (firstError) {
      firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
      firstError.focus();
    }
    return;
  }

  // Collect form data
  const formData = {
    name: form.querySelector('[name="name"]').value.trim(),
    phone: form.querySelector('[name="phone"]').value.trim(),
    email: form.querySelector('[name="email"]')?.value.trim() || '',
    carModel: form.querySelector('[name="carModel"]')?.value.trim() || '',
    serviceType: form.querySelector('[name="serviceType"]')?.value || '',
    branch: form.querySelector('[name="branch"]')?.value || '',
    date: form.querySelector('[name="date"]')?.value || '',
    message: form.querySelector('[name="message"]')?.value.trim() || ''
  };

  // Build WhatsApp message
  const whatsappMessage = buildWhatsAppMessage(formData);

  // Show success state
  showBookingSuccess(form);

  // Open WhatsApp after a short delay
  setTimeout(() => {
    const whatsappUrl = `https://wa.me/8801711577843?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, '_blank');
  }, 1500);
}

function buildWhatsAppMessage(data) {
  let msg = `🚗 *Gari Bazar BD — সার্ভিস বুকিং*\n`;
  msg += `━━━━━━━━━━━━━━━━━━\n\n`;

  msg += `👤 *নাম:* ${data.name}\n`;
  msg += `📱 *ফোন:* ${data.phone}\n`;

  if (data.email) msg += `📧 *ইমেইল:* ${data.email}\n`;
  if (data.carModel) msg += `🚘 *গাড়ির মডেল:* ${data.carModel}\n`;
  if (data.serviceType) msg += `🔧 *সার্ভিসের ধরন:* ${data.serviceType}\n`;
  if (data.branch) msg += `📍 *পছন্দের শাখা:* ${data.branch}\n`;
  if (data.date) msg += `📅 *পছন্দের তারিখ:* ${data.date}\n`;

  msg += `\n`;
  if (data.message) msg += `💬 *মেসেজ:* ${data.message}\n\n`;

  msg += `━━━━━━━━━━━━━━━━━━\n`;
  msg += `📌 _garibazaarbd.com থেকে প্রেরিত_`;

  return msg;
}

function showBookingSuccess(form) {
  const formWrapper = form.closest('.booking-form-wrapper');
  const successEl = formWrapper.querySelector('.form-success');
  const submitBtn = form.querySelector('.form-submit');

  // Disable button
  submitBtn.disabled = true;
  submitBtn.textContent = 'প্রক্রিয়াকরণ হচ্ছে...';

  setTimeout(() => {
    form.style.display = 'none';
    if (successEl) successEl.classList.add('show');

    // Reset after 10 seconds
    setTimeout(() => {
      form.reset();
      form.style.display = '';
      if (successEl) successEl.classList.remove('show');
      submitBtn.disabled = false;
      submitBtn.textContent = 'বুকিং কনফার্ম করুন';
    }, 10000);
  }, 800);
}
