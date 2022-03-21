let modalBtn2 = document.getElementById("popup2-btn");
                          let modal2 = document.querySelector(".popup2");
                          let closeBtn2 = document.querySelector(".close-btn2");
                          // Hiển thị popup khi nhấp chuột vào button
                          modalBtn2.onclick = function(){
                          modal2.style.display = "block"
                          }
                          // Đóng popup khi ấn vào nút đóng
                          closeBtn2.onclick = function(){
                          modal2.style.display = "none"
                          }
                          // Đóng khi nhấp chuột vào bất cứ khu vực nào trên màn hình
                          window.onclick = function(e){
                          if(e.target == modal2){
                          modal2.style.display = "none"
                          }
                          }