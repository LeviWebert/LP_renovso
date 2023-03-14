// Init of the variable
let currentTab = 1;
let serverName = window.location.host;
console.log(serverName);
// Show the current tab
showTab(currentTab);



document.querySelectorAll('.alert').forEach(function (el) {
    el.style.display = 'none';
});

// Handle click events for "next" buttons
document.querySelectorAll(".next").forEach(function (el) {
    el.addEventListener('click', function () {
        if (validateForm()) {
            currentTab++;
            showTab(currentTab);
            document.querySelectorAll('.alert').forEach(function (el) {
                el.style.display = 'none';
            });
        }
        else {
            document.querySelectorAll('.alert').forEach(function (el) {
                el.style.display = 'block';
            });
        }
    });
});

// Handle click events for "prev" buttons
document.querySelectorAll(".prev").forEach(function (el) {
    el.addEventListener('click', function () {
        if (currentTab !== 1) {
            currentTab--;
        }
        showTab(currentTab);
    });
});

// Handle form submission
document.querySelector("form").addEventListener('submit', function (event) {
    event.preventDefault();
    if (validateForm()) {
        document.querySelector('#submit').firstElementChild.classList.remove("hidden");
        document.querySelector('#submit').firstElementChild.classList.add("ml-4");
        document.querySelector('#submit').lastElementChild.classList.add("hidden");
        console.log([document.querySelector('#choixConstruction').value, document.querySelector('#name').value, document.querySelector('#postal_code').value, document.querySelector('#email').value, document.querySelector('#phone').value]);
        const p1 = document.querySelector('#choixConstruction').value;
        const p2 = document.querySelector('#name').value;
        const p3 = document.querySelector('#postal_code').value;
        const p4 = document.querySelector('#email').value;
        const p5 = document.querySelector('#phone').value;
        const token = document.querySelector('#token').value;
        window.location.href = "/merci?p1="+encodeURIComponent(p1)+"&p2="+encodeURIComponent(p2)+"&p3="+encodeURIComponent(p3)+"&p4="+encodeURIComponent(p4)+"&p5="+encodeURIComponent(p5)+"&token="+token;

    }
    else {
        document.querySelectorAll('.alert').forEach(function (el) {
            el.style.display = 'block';
        });
    }
});

// Show the specified tab
function showTab(tabIndex) {
    document.querySelectorAll(".tab-content").forEach(function (el) {
        el.style.display = 'none';
    });
    document.querySelector("#tab-" + tabIndex).style.display = 'block';
    updateButtons(tabIndex);
}

// Update the "prev" and "next" buttons based on the current tab
function updateButtons(tabIndex) {
    if (tabIndex === 1) {
        document.querySelectorAll(".prev").forEach(function (el) {
            el.style.display = 'none';
        });
    } else {
        document.querySelectorAll(".prev").forEach(function (el) {
            el.style.display = 'block';
        });
    }
    if (tabIndex === document.querySelectorAll(".tab-content").length) {
        document.querySelectorAll(".next").forEach(function (el) {
            el.style.display = 'none';
        });
        document.querySelector(".submit").style.display = 'block';
    } else {
        document.querySelectorAll(".next").forEach(function (el) {
            el.style.display = 'block';
        });
        document.querySelector(".submit").style.display = 'none';
    }
}

// Validate the current tab
function validateForm() {
    if (currentTab === 1)
    {
        currentTab++;
    }
    let tabContent = document.querySelector("#tab-" + currentTab);
    let inputs = tabContent.querySelectorAll("input");
    let isValid = true;
    for (let i = 0; i < inputs.length; i++) {
        if (!inputs[i].checkValidity()) {
            isValid = false;
        }
    }
    return isValid;
}

// Applies multiple tailwind css class
document.querySelectorAll("input").forEach(function (element) {
    element.classList.add("caret-pink-500","border-t-0","border-b-2","border-l-0","border-r-0","focus:bg-gray-100","focus:border-black","w-2/3","lg:w-full");
});

document.querySelectorAll("label").forEach(function (element) {
    element.classList.add("float-left","font-light","lg:py-4","mx-2");
});
