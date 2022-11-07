export function send(e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open('POST', './php/join.php', true);
    xhr.onload = function() {
        if (this.status === 200) {
            console.log('success');
            console.log(this.responseText);
        }
    }
    xhr.send(new FormData(e.target));
}