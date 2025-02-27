function createNavbar() {
    const navbarHTML = `
  <nav class="navbar navbar-expand-lg bg-body-tertiary"style="z-index: 999;">
    <div class="container-fluid">
      <a class="navbar-brand" href="#"> <img src="Source/IMG_2485.JPG" width="130" height="94"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav " >
          <li class="nav-item">
            <a class="nav-link b" href="./Our_about.html">เกี่ยวกับเรา</a>
          </li>
                    <li class="nav-item">
            <a class="nav-link c" href="./Our_about.html">บริการเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link d" href="./our_work.html">ลูกค้าเรา</a>
          </li>
          <li class="nav-item">
            <a class="nav-link e" href="./contact_us.html" >ติดต่อเรา</a>
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
<footer style="border-top: 11px doublergba(255, 255, 255, 0.58);" class = "FooterHTML">
    <div class="footer-container">
      <div class="footer-left">
        <div class="footer-left-1"><img src="Source/IMG_2485.JPG" alt="NRP Logo" class="logo"></div>
        <div class="footer-left-1"><p class="company-name">บริษัท บี พี แอคเคาท์ เซอร์วิส  กรุ๊ป จำกัด</p>
        <p class="address">
           เลขที่ 148/1 สุขุมวิท 22 แขวงคลองเตย เขตคลองเตย กทม.10110 
          Tax ID 0105566166520
          B P Account  Service  Group Co., Ltd
         148/1 Sukhumvit 22, Klongtoie ,Klongtoie District ,Bangkok 10110

         E-mail : boonpong3140@gmail.com  
         Tel. 091-1629156

        </p></div>
      </div>
      <div class="footer-right">
        <div class="s-1">
        <div class="divider"></div>
        <div class="services">
          <ul>
            <a href="#" class=""><li>สำนักงานบัญชีทรัปเพิ้ลเอิร์น</li></a>
            <a href="#" class=""><li>เป็นที่ปรึกษาการด้านบัญชี</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายเดือน</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายปี</li></a>
            <a href="#" class=""><li>ระบบงบการเงิน</li></a>
          </ul>
        </div></div>
                <div class="services">
          <ul>
            <a href="#" class=""><li>สำนักงานบัญชีทรัปเพิ้ลเอิร์น</li></a>
            <a href="#" class=""><li>เป็นที่ปรึกษาการด้านบัญชี</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายเดือน</li></a>
            <a href="#" class=""><li>รับทำบัญชีรายปี</li></a>
            <a href="#" class=""><li>ระบบงบการเงิน</li></a>
            <div class="footer-left-1"><img src="Source/IMG_2483.JPG" alt="NRP Logo" class="logo"></div>
          </ul>
        </div>
        
      </div>
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