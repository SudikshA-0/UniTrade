// Example for form validation or dynamic content

document.querySelector('form').addEventListener('submit', function(e) {
    let title = document.querySelector('#item-title').value;
    if (title.length < 3) {
        alert('Title must be at least 3 characters long.');
        e.preventDefault();
    }
});
