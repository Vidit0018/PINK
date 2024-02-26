var amount;
var reach;

var x = window.innerWidth - 400;

document.querySelectorAll('.donate form').forEach(function(form) {
    form.addEventListener("click", function() {
        amount = document.querySelector('input[name=amount]:checked', '#donAmount').value;
        reach = amount * 22;
        document.querySelector('#confirm .amount').textContent = "$" + amount;
        document.querySelector('#check span').textContent = "$" + amount;
        document.querySelector('#confirm strong').textContent = reach + " voters";
    });
});

document.querySelectorAll(".donate button").forEach(function(button) {
    button.addEventListener("click", function() {
        document.querySelector(".donate").classList.toggle("active");
        if (document.querySelector(".donate").classList.contains("active")) {
            document.querySelector("form").style.display = "block";
        } else {
            document.querySelector("form").style.display = "none";
        }
    });
});

document.querySelectorAll('.donate label').forEach(function(label) {
    label.addEventListener("click", function() {
        setTimeout(function() {
            if (amount == "other") {
                document.querySelector("#custom").style.marginLeft = x/2 + "px";
                document.querySelector("#custom").style.marginRight = x/2 + "px";
                document.body.classList.add('custom');
                document.querySelector(".donate").style.display = "none";
                document.querySelector("#custom").style.display = "block";
            } else {
                document.body.classList.remove('custom');
                document.querySelector(".donate").style.display = "none";
                document.querySelector("#details").style.display = "block";
            }
        }, 150);
    });
});

document.querySelector('#custom .next').addEventListener("click", function() {
    amount = document.querySelector('input[name=custom-amount]', '#customDonation').value;
    reach = amount * 22;
    document.querySelector('#confirm .amount').textContent = "$" + amount;
    document.querySelector('#check span').textContent = "$" + amount;
    document.querySelector('#confirm strong').textContent = reach + " voters";
    document.querySelector("#custom").style.display = "none";
    document.querySelector("#details").style.display = "block";
});

document.querySelector('#custom .back').addEventListener("click", function() {
    document.querySelector("#custom").style.display = "none";
    document.querySelector(".donate").style.display = "block";
});

document.querySelector('#details .next').addEventListener("click", function() {
    console.log(amount);
    document.querySelector("#details").style.display = "none";
    document.querySelector("#card").style.display = "block";
});

document.querySelector('#details .back').addEventListener("click", function() {
    if (document.body.classList.contains('custom')) {
        document.querySelector("#details").style.display = "none";
        document.querySelector("#custom").style.display = "block";
    } else {
        document.querySelector("#details").style.display = "none";
        document.querySelector(".donate").style.display = "block";
    }
});

document.querySelector('#card .back').addEventListener("click", function() {
    document.querySelector("#card").style.display = "none";
    document.querySelector(".details").style.display = "block";
});

document.querySelector('#card .next').addEventListener("click", function() {
    document.querySelector("#card").style.display = "none";
    document.querySelector("#check").style.display = "block";
});

// document.getElementById('check').addEventListener("click", function() {
//     document.querySelector("#check").style.display = "none";
//     document.querySelector("#card").style.display = "block";
// });
// document.getElementsByClassName('back').addEventListener("click", function() {
//     document.querySelector("#check").style.display = "none";
//     document.querySelector("#card").style.display = "block";
// });

document.querySelector("#check .next").addEventListener('click', function() {
    document.querySelector("#check").style.display = "none";
    document.querySelector(".processing").style.display = "block";
    setTimeout(function() {
        document.querySelector('.processing .message').style.display = "none";
        document.querySelector('.outer').style.display = "none";
        document.querySelector("#confirm").classList.add('animated', 'fadeInUp');
    },1250);
});
// document.getElementById('confirm-btn').addEventListener('click', function() {
//     // Display processing message
//     document.getElementById('confirm').style.display = 'none';
//     document.getElementById('processing').style.display = 'block';
    
//     // Simulate processing delay
//     setTimeout(function() {
//         // Hide processing message and show confirmation message
//         document.getElementById('processing').style.display = 'none';
//         document.getElementById('confirmation').style.display = 'block';
//     }, 3000); // Adjust the delay time as needed
// });
