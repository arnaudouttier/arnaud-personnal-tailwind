var app = new Vue({
    el: '#app ',
    data: {
        errors: [],
        valid: true,
        validInput: 'validInput',
        errorInput: 'errorInput',
        email: ''
    },
    methods: {
        checkForm(e) {
            this.errors = [];

            if (!this.email || !this.validEmail(this.email)) {
                this.errors.push('Email requis.');
                this.valid = false;
            } else {
                this.errors.push('Email ajouté');
                this.valid = true;
            }

            if (!this.errors.length) {
                return true;
            }

            e.preventDefault();

        },
        validEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        },
        sendEmail(e) {
            try {
                emailjs.sendForm('Yservice_yk00zem', 'template_i8imi9p', e.target,
                    'user_9QPd6cAymGUHuxXUoaA86', {
                        email: this.email
                    })

            } catch (error) {
                console.log({ error })
            }
            // Reset form field
            this.email = ''
        }

    }
})