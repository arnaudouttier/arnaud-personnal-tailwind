var app = new Vue({
    el: '#app ',
    data: {
        sent: false,
        form: {
            email: ""
        },
        valid: ' ',
        formMessage: '',
        validInput: '',
        errorInput: 'errorInput',
        formErrorMessage: 'form-error-message ',
        formValidMessage: 'form-valid-message'
    },
    methods: {
        validEmail() {
            if (!/^([A-Za-z0-9_\-.])+@([A-Za-z0-9_\-.])+\.([A-Za-z]{2,4})$/.test(this.form.email)) {
                this.valid = false;
                return this.formMessage = ' Please provide a valid email '
            } else {
                this.valid = true;
                this.formMessage = ' Email added '
            }
        },
        onSubmit(e) {
            e.preventDefault();
            this.$axios
                .post(
                    "https://arnaudouttier.github.io/ao/mail.php",
                    querystring.stringify(this.form)
                )
                .then(res => {
                    this.sent = true;
                });
        }
    }
})