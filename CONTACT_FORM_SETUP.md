# 📧 Contact Form Setup Guide

## Quick Setup with FormSpree (Recommended - FREE)

FormSpree is a free service that handles form submissions and sends them to your email. No backend code needed!

### Step-by-Step Setup:

#### 1. Sign Up for FormSpree
- Go to [https://formspree.io/](https://formspree.io/)
- Click "Get Started" (it's FREE for up to 50 submissions/month)
- Sign up with your email or GitHub account

#### 2. Create a New Form
- After logging in, click "+ New Form"
- Give your form a name (e.g., "TerraConnect Contact Form")
- Click "Create Form"

#### 3. Get Your Form URL
- FormSpree will show you a form endpoint that looks like:
  ```
  https://formspree.io/f/YOUR_FORM_ID
  ```
- Copy this URL

#### 4. Update Your Website
- Open `index.html
` in your editor
- Find this line (around line 901):
  ```html
  <form class="contact-form" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
  ```
- Replace `YOUR_FORM_ID` with the actual ID from FormSpree
  - Example: `https://formspree.io/f/xpwalabc`

#### 5. Configure Email Settings in FormSpree
- In FormSpree dashboard, click on your form
- Go to "Settings" → "Email Notifications"
- Add your email address (e.g., `contact@terraconnect.ai`)
- You can add multiple emails if needed
- Configure notification preferences

#### 6. Test Your Form
- Open your website
- Go to the Contact section
- Fill out the form and click "Send Message"
- Check your email inbox for the submission

### ✅ What You Get with FormSpree FREE Plan:
- ✅ 50 submissions per month
- ✅ Email notifications
- ✅ Spam filtering with reCAPTCHA
- ✅ No coding required
- ✅ Instant setup

### 💰 Upgrade Options:
- **Gold Plan ($10/month)**: 1,000 submissions/month
- **Platinum Plan ($40/month)**: 10,000 submissions/month
- Includes advanced features like webhooks, AJAX support, file uploads

---

## Alternative Options

### Option 2: Netlify Forms (If deploying on Netlify)

If you deploy your site on Netlify, they offer built-in form handling:

1. Add `netlify` attribute to your form:
   ```html
   <form class="contact-form" name="contact" method="POST" netlify>
   ```

2. Deploy to Netlify
3. Check "Forms" section in Netlify dashboard
4. Configure email notifications in Netlify settings

**FREE tier**: 100 submissions/month

### Option 3: Email.js (FREE - No Backend)

1. Sign up at [emailjs.com](https://www.emailjs.com/)
2. Connect your email service (Gmail, Outlook, etc.)
3. Get Service ID, Template ID, and Public Key
4. Add EmailJS SDK to your HTML
5. Update JavaScript to send via EmailJS

**FREE tier**: 200 emails/month

### Option 4: Custom Backend (Advanced)

Build your own API with:
- **Node.js + Nodemailer**
- **PHP mail() function**
- **Python Flask + SMTP**

This requires server setup and is more complex.

---

## 🔧 Current Form Features

Your contact form includes:

✅ **Required Fields**:
- Name
- Email (with validation)
- Subject (dropdown with categories)
- Message

✅ **Features**:
- Bilingual support (FR/EN)
- Form validation
- Professional styling
- Responsive design
- Spam protection (when using FormSpree)

✅ **Subject Categories**:
- General Inquiry
- Partnership
- Investment
- Demo Request
- Other

---

## 📝 Customization

### Change Form Fields

To add/remove fields, edit `index.html` around line 900-935:

```html
<div class="form-group">
    <label for="phone">Phone Number</label>
    <input type="tel" id="phone" name="phone">
</div>
```

### Change Email Addresses

Update these in `index.html`:
- Line ~879: General email
- Line ~885: Investment email

### Add Auto-Response Email

In FormSpree dashboard:
1. Go to "Settings" → "Autoresponders"
2. Enable "Send autoresponse"
3. Customize the message sent to users

---

## 🚀 Testing Checklist

Before going live:

- [ ] FormSpree form ID is correctly updated in HTML
- [ ] Test submission with your email
- [ ] Check if emails arrive in your inbox (check spam folder too)
- [ ] Test on mobile devices
- [ ] Test language toggle on form labels
- [ ] Verify all required fields work
- [ ] Check form validation (try submitting empty/invalid data)

---

## 🛟 Troubleshooting

### Emails not arriving?
1. Check FormSpree dashboard for submissions
2. Check your spam/junk folder
3. Verify email address in FormSpree settings
4. Make sure your email provider allows FormSpree emails

### Form not submitting?
1. Check browser console for errors (F12)
2. Verify the FormSpree URL is correct
3. Make sure you're using `method="POST"`
4. Check internet connection

### Getting spam?
1. Enable reCAPTCHA in FormSpree settings
2. Add honeypot fields
3. Consider upgrading to paid plan for better spam filtering

---

## 📊 Tracking Submissions

FormSpree dashboard shows:
- Number of submissions
- Submission details
- Date/time stamps
- Form data

You can export submissions to CSV for analysis.

---

## 🎯 Recommended Setup for TerraConnect

1. **Start with FormSpree FREE**
   - Easy setup (5 minutes)
   - No coding required
   - 50 submissions/month is enough to start

2. **Monitor your usage**
   - Check FormSpree dashboard monthly
   - If you exceed 50, upgrade to Gold ($10/mo)

3. **Set up filtering**
   - In FormSpree, create filters for different subjects
   - Route "investment" inquiries to invest@terraconnect.ai
   - Route general inquiries to contact@terraconnect.ai

4. **Enable notifications**
   - Get instant email when someone submits
   - Add Slack/Teams integration if needed

---

## 💡 Pro Tips

1. **Response Time**: Set up auto-responder so users know you received their message
2. **Monitoring**: Check FormSpree dashboard weekly
3. **Spam Protection**: Enable reCAPTCHA V3 in FormSpree settings
4. **Follow-up**: Create email templates for common inquiries
5. **Analytics**: Track which subjects get most submissions

---

## 🔗 Useful Links

- FormSpree: https://formspree.io/
- FormSpree Docs: https://help.formspree.io/
- Netlify Forms: https://docs.netlify.com/forms/setup/
- EmailJS: https://www.emailjs.com/

---

**Need help?** Contact FormSpree support or check their documentation!
