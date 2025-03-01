document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-link");
    const navbarToggler = document.querySelector(".navbar-toggler");
    const navbarCollapse = document.querySelector(".navbar-collapse");

    function highlightNav() {
        let scrollY = window.scrollY + 150; // ปรับ Offset ให้ไฮไลต์ตรงกับจุดที่มองเห็น

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;

            if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove("active");
                    if (link.getAttribute("href").substring(1) === section.id) {
                        link.classList.add("active");
                    }
                });
            }
        });
    }

    // Event Scroll
    window.addEventListener("scroll", highlightNav);

    // Event Click บนเมนู (ไฮไลต์ + ปิด Navbar ใน Mobile)
    navLinks.forEach(link => {
        link.addEventListener("click", function () {
            navLinks.forEach(nav => nav.classList.remove("active"));
            this.classList.add("active");

            // ตรวจสอบว่าหน้าจอเล็กหรือไม่ (Navbar แบบ Toggle เปิดอยู่หรือเปล่า)
            if (window.innerWidth < 992 && navbarCollapse.classList.contains("show")) {
                navbarToggler.click(); // ปิด Navbar อัตโนมัติ
            }
        });
    });

    highlightNav(); // ทำงานทันทีตอนโหลด
});
