      // 드래그 앤 드롭 이벤트 핸들러
      function allowDrop(event) {
        event.preventDefault();
      }

      function drop(event) {
        event.preventDefault();
        var 상품Id = event.dataTransfer.getData("상품Id");
        var 상품 = document.getElementById(상품Id);
        var 장바구니 = document.getElementById("장바구니");
        장바구니.appendChild(상품);
      }

      // 상품 드래그 가능하도록 설정
      var 상품들 = document.querySelectorAll(".상품");
      for (var i = 0; i < 상품들.length; i++) {
        상품들[i].addEventListener("dragstart", function (event) {
          event.dataTransfer.setData("상품Id", event.target.id);
        });
      }