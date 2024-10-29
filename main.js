window.onload = () => {
        setTimeout(() => {
            document.body.classList.remove("not-loaded");
            document.getElementById('nextButton').classList.add('show');
        }, 1000); // 1 second for class removal
    };

    document.addEventListener("DOMContentLoaded", function() {
        // If you still want to show after 7 seconds regardless
        setTimeout(function() {
            document.getElementById('nextButton').classList.add('show');
        }, 7000);
    });
