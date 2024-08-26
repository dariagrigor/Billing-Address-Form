//function to copy data from billing to delivery
function copyData() {
        var billingFirstName = document.getElementById('billingFirstName').value;
        var billingLastName = document.getElementById('billingLastName').value;
        var billingStreet = document.getElementById('billingStreet').value;
        var billingCity = document.getElementById('billingCity').value;
        var billingProvinceIndex = document.getElementById('billingProvince').selectedIndex;
        var billingPostalCode = document.getElementById('billingPostalCode').value;
    
        document.getElementById('deliveryFirstName').value = billingFirstName;
        document.getElementById('deliveryLastName').value = billingLastName;
        document.getElementById('deliveryStreet').value = billingStreet;
        document.getElementById('deliveryCity').value = billingCity;
        document.getElementById('deliveryProvince').value = billingProvince;
        document.getElementById('deliveryPostalCode').value = billingPostalCode;

        document.getElementById('deliveryProvince').selectedIndex = billingProvinceIndex;
    }

//selectedIndex = -1
window.onload = function() {
    var selectElement = document.getElementById('billingProvince');
    selectElement.selectedIndex = -1;
};

window.onload = function() {
    var selectElement = document.getElementById('deliveryProvince');
    selectElement.selectedIndex = -1;
};

//browser-based validation feedback
window.onload = function() {
    var form = document.querySelector('form');

    form.addEventListener('submit', function(event) {
        var firstName = document.querySelector('#billingFirstName');
        var lastName = document.querySelector('#billingLastName');
        var street = document.querySelector('#billingStreet');
        var city = document.querySelector('#billingCity');
        var state = document.querySelector('#billingProvince');

        if (!firstName.checkValidity()) {
            firstName.setCustomValidity('Please enter your first name.');
        } else {
            firstName.setCustomValidity('');
        }

        if (!lastName.checkValidity()) {
            lastName.setCustomValidity('Please enter your last name.');
        } else {
            lastName.setCustomValidity('');
        }

        if (!street.checkValidity()) {
            street.setCustomValidity('Please enter your street address.');
        } else {
            street.setCustomValidity('');
        }

        if (!city.checkValidity()) {
            city.setCustomValidity('Please enter your city.');
        } else {
            city.setCustomValidity('');
        }

        if (!state.checkValidity()) {
            state.setCustomValidity('Please select your state.');
        } else {
            state.setCustomValidity('');
        }

        if (!form.checkValidity()) {
            event.preventDefault();
            event.stopPropagation();
        }

        form.classList.add('was-validated');
    }, false);
};