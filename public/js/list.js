// 신청버튼을 누루면 참가신청

db.collection("eventday")
  .orderBy("등록일")
  .get()
  .then((result) => {
    result.forEach((doc) => {
      var template = `<div class="card mb-3 " >
    
        <div class="card-title"> <i class="fa fa-heart"></i> ${
          doc.data().나이
        } ${doc.data().일자}<i class="fa fa-heart"></i> </div>
        <p class="card-text ">장소 : 강남 <br><small class="font-small text-muted"> - 참가 확정자에게 별도 공지</small> </p>
        <p class="card-text ">시간 : 3~6시 <br><small class="font-small text-muted"> - 2시간 1대1 로테이션 미팅 후 1시간+ 호프미팅 </small> </p>
        <a href="apply.html?id=${
          doc.id
        } "><button type="text" class="btn btn-primary border ">신청하기</button> </a>
        </div>
    </div>
 `;
      $(".container-card").append(template);
    });
  });
