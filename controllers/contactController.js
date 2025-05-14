const responses = [];

function validateInput({ name, email, message }) {
    const errors = [];
    if (!name || name.trim().length < 2) {
        errors.push('Name is required and must be at least 2 characters.');
    } else if (/^\d+$/.test(name.trim())) {
        errors.push('Name cannot be only numbers.');
    }
    if (!email || !/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
        errors.push('A valid email is required.');
    }
    if (!message || message.trim().length < 5) {
        errors.push('Message must be at least 5 characters.');
    }
    return errors;
}

exports.handleContact = (req, res) => {
    const { name, email, message } = req.body;
    const errors = validateInput({ name, email, message });

    if (errors.length > 0) {
        return res.status(400).render('contact', {
            title: 'Contact',
            errors,
            old: { name, email, message }
        });
    }

    responses.push({ name, email, message, date: new Date() });
    res.render('/thankyou', { name, title: 'Thank You' });
    console.log(`Submmited: ${name}, ${email}, ${message}`)
};

exports.responses = responses;