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
        sendEmail(e) {
            this.errors = [];

            if (!this.email || !this.validEmail(this.email)) {
                this.errors.push('Email valide requis.');
                this.valid = false;
            } else {

                try {
                    emailjs.sendForm('service_yk00zem', 'template_i8imi9p', e.target,
                        'user_9QPd6cAymGUHuxXUoaA86', {
                            reply_to: this.email,
                            from_name: "arnaudouttier-github",
                            from_email: this.email,
                        })

                } catch (error) {
                    console.log({ error })
                }
                // Reset form field
                this.email = ''

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
        }

    }

})