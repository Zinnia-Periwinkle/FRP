document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);

    // Add a click event on each of them
    $navbarBurgers.forEach(el => {
        el.addEventListener('click', () => {

            // Get the target from the "data-target" attribute
            const target = el.dataset.target;
            const $target = document.getElementById(target);

            // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
            el.classList.toggle('is-active');
            $target.classList.toggle('is-active');

        });
    });

});

Sass.compile(document.querySelector("style[type=scss]").innerHTML, function (res) {
    var s = document.createElement("style");
    s.innerHTML = res.text;
    res.formatted && console.error(res.formatted); //if error console.error it.
    res.text && document.head.appendChild(s);// append style element only if no error.
});



