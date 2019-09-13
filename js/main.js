// Sliding mobile menu

let toggleStatus = 0;

function toggleMenu() {
    if (toggleStatus == 0) {
        document.getElementById('menu').style.right = '0px';
        toggleStatus = 1;
    } else if (toggleStatus == 1) {
        document.getElementById('menu').style.right = '-100vw';
        toggleStatus = 0;
    }
}

// Form Validation