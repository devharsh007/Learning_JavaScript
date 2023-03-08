const menu = document.querySelector(".optn");
const close = document.querySelector(".close");
const sidebar = document.querySelector(".sidebar");

// HERE, I WILL USE THE BUTTONS  TO SHOW AND DISSAPPEAR THE SIDEBAR   

menu.addEventListener("click", function() {
    sidebar.style.display = 'grid';
    menu.style.display = 'none';
});

close.addEventListener('click', function() {
    sidebar.style.display = 'none';
    menu.style.display = 'flex';
    
});
