//ContactController.js

const responses = [];

function validateInput({ name, email, message }) {
    const errors = [];
    if (!name || name.trim().length < 2) {
        errors.push('Name is required and must be at least 2 characters.');
        alert('Name is required and must be at least 2 characters.');
    } else if (/^\d+$/.test(name.trim())) {
        errors.push('Name cannot be only numbers.');
        alert('Name cannot be only numbers.');
    }
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errors.push('A valid email is required.');
        alert('A valid email is required.');
    }
    if (!message || message.trim().length < 5) {
        errors.push('Message must be at least 5 characters.');
        alert("Message must be at least 5 characters.");
    }
    return errors;
}

exports.handleContact = (req, res) => {
    const { name, email, message } = req.body;
    const errors = validateInput({ name, email, message });

    if (errors.length > 0) {
        return res.status(400).render('pages/contact', {
            title: 'Contact',
            errors,
            old: { name, email, message },
            generalError: 'Please fill in valid details.'
        });
    }

    responses.push({ name, email, message, date: new Date() });
    res.render('pages/thankyou', { name, title: 'Thank You' });
    console.log(`Submmited: ${name}, ${email}, ${message}`)
};

exports.responses = responses;