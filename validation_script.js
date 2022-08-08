$(function() {
    $("form[name='staff_data_form']").validate({
        // Define validation rules
        rules: {
            full_name: "required",
            email: "required",
            phone: "required",
            full_name: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            phone: {
                required: true,
                minlength: 10,
                maxlength: 10,
                number: true
            },
            occupation: {
                required: true
            }
        },
        // Specify validation error messages
        messages: {
            full_name: "The full name field is required.",
            email: {
                required: "The email field is required.",
                minlength: "Please enter a valid email address"
            },
            phone: {
                required: "The phone field is required.",
                minlength: "Mobile number must be min 10 characters long",
                maxlength: "Mobile number must not be more than 10 characters long"
            },
            occupation: {
                required: "The occupation field is required."
            }
        },
        // Needed to shift validation errors to next line!
        errorPlacement: function (error, element) {
            error.insertAfter(element.closest('div'));
        }
    });
});