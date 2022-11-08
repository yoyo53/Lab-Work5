function userForm() {
    let output = document.getElementById("output");
    if (document.getElementById("main_form").reportValidity()) {
        output.innerHTML = `
            Full Name: ${document.getElementById("first_name").value} ${document.getElementById("last_name").value}<br>
            Email: ${document.getElementById("email").value}<br>
            Address: ${document.getElementById("address").value}<br>
            &emsp;&emsp;&emsp;&emsp;${document.getElementById("city").value}, ${document.getElementById("province").value}<br>
            Membership: ${document.querySelector("input[type='radio'][name='membership']:checked").value}
        `;
    }
    else {
        output.innerHTML = "";
    }
}

function myExcelFuns() {
    let output = document.getElementById("output");
    if (document.getElementById("main_form").reportValidity()) {
        let numberArr = document.getElementById("numbers").value.trim().split(/ +/);
        numberArr = numberArr.map(number => +number).filter(number => !isNaN(number));
        if (numberArr.length != 0) {
            let result;
            if (document.getElementById("total").checked) {
                result = numberArr.reduce((a, b) => a + b);
            }
            else if (document.getElementById("average").checked) {
                result = numberArr.reduce((a, b) => a + b) / numberArr.length;
            }
            else if (document.getElementById("maximum").checked) {
                result = Math.max(...numberArr);
            }
            else {
                result = Math.min(...numberArr);
            }
            output.innerHTML = `Result: ${result.toFixed(2)}`;
        }
        else {
            alert("Invalid input! You didn't typed numbers separated by space as asked.");
            output.innerHTML = "";
        }
    }
    else {
        output.innerHTML = "";
    }
}