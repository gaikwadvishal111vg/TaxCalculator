var options = {
    "key": "rzp_test_ptQRaXoHQAABjB", // Enter the Key ID generated from the Dashboard
    "amount": "500000", // Amount is in currency subunits. Default currency is INR. Hence, 50000 refers to 50000 paise
    "currency": "INR",
    "name": "Acme Corp", //your business name
    "description": "Test Transaction",
    "image": "https://example.com/your_logo",
    // "order_id": "order_9A33XWu170gUtm", //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
    "callback_url": "https://eneqd3r9zrjok.x.pipedream.net/",
    "prefill": { //We recommend using the prefill parameter to auto-fill customer's contact information especially their phone number
        "name": "Gaurav Kumar", //your customer's name
        "email": "gaurav.kumar@example.com",
        "contact": "9000090000" //Provide the customer's phone number for better conversion rates 
    },
    "notes": {
        "address": "Razorpay Corporate Office"
    },
    "theme": {
        "color": "#3399cc"
    }
};
var rzp1 = new Razorpay(options);
document.getElementById('rzp-button1').onclick = function(e){
    rzp1.open();
    e.preventDefault();
}


function calculateTax() {
    var userName = document.getElementById("name").value;
    var income = document.getElementById("income").value;

    if (income <= 300000) {
      var exemptTax = 0.0;
    } else if (income <= 600000) {
      var exemptTax = 5.0;
    } else if (income <= 900000) {
      var exemptTax = 10.0;
    } else if (income <= 1200000) {
      var exemptTax = 15.0;
    } else if (income <= 1500000) {
      var exemptTax = 20.0;
    } else if (income <= 2042000) {
      var exemptTax = 30.0;
    }
    let taxDeduction = (income * exemptTax) / 100;
    let basicIncome = income - taxDeduction;
    

// let rowCountClassListObject = 1;
    let userInformation = document.getElementById("user_info");
    let row = userInformation.insertRow();
    // let addSrCell = row.insertCell(0);
    let addNameCell = row.insertCell(0);
    let addSalaryCell = row.insertCell(1);
    let addTaxDedCell = row.insertCell(2);
    let addBalCell = row.insertCell(3);

    // const newRow = userInformation.insertRow(-1);
    //     newRow.classList.add("dynamicTableObject");
    //     const cell = newRow.insertCell(0);
    //     cell.innerHTML = rowCountClassListObject++;

      // addSrCell.innerHTML = srNumber;
    addNameCell.innerHTML = userName;
    addSalaryCell.innerHTML = income;
    addTaxDedCell.innerHTML = taxDeduction;
    addBalCell.innerHTML = basicIncome;
  }

  const printBtn = document.getElementById("printBtn");

  printBtn.addEventListener("click", function(){
    print();
  })

