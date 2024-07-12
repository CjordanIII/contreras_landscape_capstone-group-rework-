"use strict"

window.onload = () => {

    console.log("haha im inside your contactUS.html >:)")

    const phoneInputs = document.querySelectorAll('input[type="tel"]');
    const inputMaxLengths = [3, 3, 4];

    phoneInputs.forEach((input, index) => {
        input.addEventListener('input', function () {
            // Replace non-numeric characters with an empty string
            this.value = this.value.replace(/[^0-9]/g, '');

            // Check if the current input length is greater than or equal to the max length for that input
            if (this.value.length >= inputMaxLengths[index]) {
                // Slice the value to ensure it doesn't exceed the max length
                this.value = this.value.slice(0, inputMaxLengths[index]);

                // Focus the next input field, if it exists
                const nextInput = phoneInputs[index + 1];
                if (nextInput) {
                    nextInput.focus();
                }
            }
        });
    });

}