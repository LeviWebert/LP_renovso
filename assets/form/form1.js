function next(currentTabImg)
{
    let currentTab = this.id;
    if (currentTabImg === 1)
    {
        currentTab = currentTabImg;
    }
    else {
        currentTab = currentTab || 0;
    }
    let nextTab = parseInt(currentTab) + 1;
    document.getElementById("tab-" + currentTab).classList.remove("active");
    document.getElementById("tab-" + nextTab).classList.add("active");

}
document.addEventListener("DOMContentLoaded", function() {

    document.querySelectorAll(".next").forEach(function(element) {
        element.addEventListener("click",next);
    });

    document.querySelectorAll(".prev").forEach(function(element) {
        element.addEventListener("click", function() {
            let currentTab = this.id;
            let prevTab = parseInt(currentTab) - 1;
            document.getElementById("tab-" + currentTab).classList.remove("active");
            document.getElementById("tab-" + prevTab).classList.add("active");
        });
    });


});
// Update the "prev" and "next" buttons based on the current tab
function updateButtons(tabIndex) {
    if (tabIndex === 1) {
        document.querySelectorAll(".prev").forEach(function(element) {
            element.style.display = "none";
        });
    } else {
        document.querySelectorAll(".prev").forEach(function(element) {
            element.style.display = "block";
        });
    }
    if (tabIndex === document.querySelectorAll(".tab-content").length) {
        document.querySelectorAll(".next").forEach(function(element) {
            element.style.display = "none";
        });
        document.querySelector(".submit").style.display = "block";
    } else {
        document.querySelectorAll(".next").forEach(function(element) {
            element.style.display = "block";
        });
        document.querySelector(".submit").style.display = "none";
    }
}
// Show the specified tab
function showTab(tabIndex) {
    document.querySelectorAll(".tab-content").forEach(function(element) {
        element.style.display = "none";
    });
    document.getElementById("tab-" + tabIndex).style.display = "block";
    updateButtons(tabIndex);
}

function selectImageHS(type) {
    let currentTabImg = document.querySelector("." + type).parentNode.parentNode.parentNode.querySelector("button").id;
    setTimeout(function() {
        if (verif()) {
            currentTabImg++;
            showTab(currentTabImg);
            document.querySelector('#choixConstruction').value = type;
        }

    }, 600);
}

// Handle image selection
function selectImage(type) {
    selectImageHS(type);
    document.querySelectorAll(".image-container").forEach(function(element) {
        element.classList.remove("blink");
        element.classList.remove("selected");
    });
    document.querySelector("." + type).classList.add("selected");
    document.querySelector("." + type).classList.add("blink");
    let currentTabImg = document.querySelector("." + type).parentNode.parentNode.parentNode.querySelector("button").id;
    setTimeout(function() {
        next.call(document.getElementById(currentTabImg));
    }, 600);
}

function verif() {
    return true;
}

function focus(selector) {
    setChecked("box-letter",selector);
    document.querySelectorAll(".icon-check").forEach(item => {
        const selectorElement = parseInt(item.dataset.selector);
        item.classList.add("hidden");
        item.parentElement.classList.add("pt-6");
        if (selectorElement===selector)
        {
            item.classList.remove("hidden");
            item.parentElement.classList.remove("pt-6");

        }
    });
    setChecked("image-container",selector);
}

function setChecked(classe,selector) {
    document.querySelectorAll("."+classe).forEach(function (element) {
        const selectorElement = parseInt(element.dataset.selector);
        element.dataset.ui = "";
        if (selectorElement===selector)
        {
            element.dataset.ui = "checked";
        }
    });
}

const imageHouse = document.getElementById("house");
const imageBuilding = document.getElementById("building");
// association des évènements

imageHouse.addEventListener('click',() => selectImage('house'));
imageHouse.addEventListener('click',() => verif());
imageHouse.addEventListener('click',() => next(1));
imageHouse.addEventListener('click',() => focus(1));

imageBuilding.addEventListener('click',() => selectImage('building'));
imageBuilding.addEventListener('click',() => verif());
imageBuilding.addEventListener('click',() => next(1));
imageBuilding.addEventListener('click',() => focus(2));