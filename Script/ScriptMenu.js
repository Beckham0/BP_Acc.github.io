function createNavbar() {
    const navbarHTML = `
  <nav class="navbar navbar-expand-lg bg-body"style="z-index: 999; background-color: rgb(255, 255, 255) !important;">
    <div class="container-fluid">
    <a class="navbar-brand" href="./index.html"><img src="Source/IMG_2485.JPG" width="150" height="100&quot;" style="border-radius: 50px;"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav " >
          <li class="nav-item">
            <a class="nav-link a" href="./index.html#1">เกี่ยวกับเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link b" href="#2">บริการเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link c" href="#3">ลูกค้าเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d" href="#4" >ติดต่อเรา</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    `;
    document.getElementById("navbar-container").innerHTML = navbarHTML;
  
    // Initialize Bootstrap JavaScript (สำคัญมาก)
    const navbar = document.querySelector('.navbar'); // เลือก element navbar
    new bootstrap.Collapse(navbar, { // สร้าง instance ของ Bootstrap Collapse
      toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
    });
  }

 
function createfooter() {
  const footerHTML = `

  `;
  document.getElementById("footerHTML1").innerHTML = footerHTML;

  // Initialize Bootstrap JavaScript (สำคัญมาก)
  const footer = document.querySelector('.FooterHTML'); // เลือก element navbar
  new bootstrap.Collapse(footer, { // สร้าง instance ของ Bootstrap Collapse
    toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
  });
}