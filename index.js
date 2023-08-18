const notificationUnreadDots = document.querySelectorAll(".notification-unread-dot");
const markAllAsReadBtn = document.querySelector(".mark-as-read");
const notificationCount = document.querySelector(".notification-count");

markAllAsReadBtn.addEventListener("click", ()=> {
    notificationUnreadDots.forEach(dot => {
        dot.classList.add("hidden");
    });
    notificationCount.innerHTML = "0";
})