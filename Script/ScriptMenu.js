function createNavbar() {
    const navbarHTML = `
<div id="navbar-container" class="navbar-expand-lg" style="z-index: 999 !important;height: 90px;">
  <nav class="navbar navbar-expand-lg bg-body" style="z-index: 999; background-color: rgba(255, 255, 255, 0.53) !important;height: 90px;">
    <div class="container-fluid">
    <a class="navbar-brand" href="./index.html"><img src="Source/IMG_24855.png" ;"="" style="border-radius: 150px;" width="110" height="70"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon">MENU</span>
</button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <a class="nav-link" href="#about">เกี่ยวกับเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#services">บริการเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#clients">ลูกค้าเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#contact">ติดต่อเรา</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
    </div>
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
<footer class="footer">
    <div class="footer-column-1">
      <img src="Source/IMG_24855.png" alt="">
      <br>
      <div class="top_column">
        <a href="https://www.google.com/maps/place/%E0%B8%A3%E0%B8%B1%E0%B8%9A%E0%B8%97%E0%B8%B3%E0%B8%9A%E0%B8%B1%E0%B8%8D%E0%B8%8A%E0%B8%B5+%E0%B8%9A%E0%B8%A3%E0%B8%B4%E0%B8%A9%E0%B8%B1%E0%B8%97+%E0%B8%9A%E0%B8%B5%E0%B8%9E%E0%B8%B5+%E0%B9%81%E0%B8%AD%E0%B8%84%E0%B9%80%E0%B8%84%E0%B8%B2%E0%B8%97%E0%B9%8C+%E0%B9%80%E0%B8%8B%E0%B8%AD%E0%B8%A3%E0%B9%8C%E0%B8%A7%E0%B8%B4%E0%B8%AA+%E0%B8%81%E0%B8%A3%E0%B8%B8%E0%B9%8A%E0%B8%9B+%E0%B8%88%E0%B8%B3%E0%B8%81%E0%B8%B1%E0%B8%94/@13.7254335,100.564187,18.13z/data=!4m6!3m5!1s0x30e29f04dcae6647:0xd6457b99abb0b89b!8m2!3d13.7256004!4d100.5649261!16s%2Fg%2F11fzmwd7jj?hl=th&entry=ttu&g_ep=EgoyMDI1MDIyNi4xIKXMDSoASAFQAw%3D%3D"><div class="column">
          <div class="item"><img src="Source/MAp.png" alt=""></div>
          <div class="item"><h1>Google Map</h1><h1>ตำเเหน่งที่ตั้ง บริษัท</h1></div></div>
    </div></a>
  </div>

       <div class="footer-column-4">
            <h1>LOCATION</h1>
            <p>บริษัท บี พี แอคเคาท์ เซอร์วิส  กรุ๊ป จำกัดเลขที่ 148/1 สุขุมวิท 22 แขวงคลองเตย เขตคลองเตย กทม.10110 Tax ID 0105566166520</p>
            <p>B P Account  Service  Group Co., Ltd148/1 Sukhumvit 22, Klongtoie ,Klongtoie District ,Bangkok 10110</p>
            <br>
          </div>
    <div class="footer-column-2">
      <h1>MENU</h1>
      <div class="top_a">
      <a href="#about"><p>เกี่ยวกับเรา</p></a>
      <a href="#services"><p>บริการเรา</p></a>
      <a href="#clients"><p>ลูกค้าเรา</p></a>
      <a href="#contact" class="contact" ><p style="color: #35A8CB;">ติดต่อเรา</p></a>
    </div>
    <br>
     </div>
</footer>
  `;
  document.getElementById("footerHTML1").innerHTML = footerHTML;

  // Initialize Bootstrap JavaScript (สำคัญมาก)
  const footer = document.querySelector('.FooterHTML'); // เลือก element navbar
  new bootstrap.Collapse(footer, { // สร้าง instance ของ Bootstrap Collapse
    toggle: false // หรือ true ถ้าต้องการให้เมนูเปิดตอนโหลดหน้าเว็บ
  });
}