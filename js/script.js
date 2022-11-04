$("#formValidation").validate({
  rules: {
    username: {
      minlength: 3,
    },
    email: true,
    password: {
      minlength: 6,
    },
  },
  messages: {
    username: {
      required: "Please enter your username",
      minlength: "Password must be 3 char long",
    },
    email: {
      required: "Please enter your email",
      email: "Your email address must be in the format of name@domain.com",
    },
    password: {
      required: "Please enter your password",
      minlength: "Password must be 6 char long",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});
$("#formValid").validate({
  rules: {
    email: true,
    password: true,
  },
  messages: {
    email: {
      required: "Please enter your email",
      email: "Your email address must be in the format of name@domain.com",
    },
    password: {
      required: "Please enter your password",
    },
  },
  submitHandler: function (form) {
    form.submit();
  },
});
