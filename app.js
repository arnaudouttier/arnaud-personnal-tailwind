var app = new Vue({
    el: '#app ',
    data: {
        errors: [],
        email: null,
        valid: true,
        validInput: '',
        errorInput: 'errorInput',
    },
    methods: {
        checkForm(e) {
            this.errors = [];

            if (!this.email) {
                this.errors.push('Email requis.');
                this.valid = false;
            } else if (!this.validEmail(this.email)) {
                this.errors.push('Email Valide requis.');
                this.valid = false;
            } else {
                this.errors.push('Email ajouté');
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
