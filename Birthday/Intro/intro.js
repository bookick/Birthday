var tik = setInterval(() => {
  var lyf = document.getElementById('digit');

  // Thay đổi giá trị so sánh từ == 0 thành === '0'
  if (lyf.innerText === '0') {
    var container = document.getElementById('container');

    // Thay đổi classList.toggle thành classList.add để đảm bảo class 'containeroverlay' được thêm vào
    container.classList.add("containeroverlay");

    // Sử dụng window.location.href thay vì window.location để chuyển hướng trang web
    window.location.href = "./Birthday.html";

    clearInterval(tik);
  } else {
    // Giảm giá trị chỉ khi nó không phải là 0
    lyf.innerText = parseInt(lyf.innerText, 10) - 1;
  }

  // Thay đổi classList.toggle thành classList.add để đảm bảo class 'digit' được thêm vào
  lyf.classList.add("digit");
}, 1000);
