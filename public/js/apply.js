// 신청버튼을 누루면 참가신청
$(document).ready(function () {
  $(".apply-btn").click(function () {
    var apply = {
      date: new Date(),
      gender: $("input[name='r_sex']:checked").val(),
      name: $(".name-input").val(),
      age: $(".age-input").val(),
      phone: $(".phone-input").val(),
      // job: $("#r_job").find(":selected").text(),
    };

    db.collection("register")
      .add(apply)
      .then((result) => {
        console.log("저장 성공");
        console.log(result);
      })
      .catch((error) => {});
  });
});

var qs = new URLSearchParams(window.location.search);
console.log(qs.get("id"));
db.collection("eventday")
  .doc(qs.get("id"))
  .get()
  .then((result) => {
    console.log(result.data());
    let age = result.data().나이;
    let meetingdate = result.data().일자;
    let template = ` <i class="fa fa-heart"></i> ${age} 미팅 ${meetingdate}<i class="fa fa-heart"></i>
    `;
    $(".card-title").append(template);
    let template2 = `            <p class="card-text mb-4" id ="pay">
    <h6>☆ 누가 신청할 수 있나요?</h6>
    <div class="mt-2 font-small text-muted"> ${age} </div>
      <div class="mt-2 font-small text-muted" >남녀간 나이차를 최대 7세 이하가 되도록 미팅일정을 짰으니 원하시는 날짜로 신청하세요~~~!</div>
      <div class="mt-2 font-small text-muted" >직장인 및 전문직을 위한 소개팅입니다.  </div>
    </p>   
    <h6>☆ 언제, 어디서 열리나요??</h6>
    <div class="mt-2 font-small text-muted"> 모임 일시 : ${meetingdate} 오후 3시 <br> (중요) 10분 전 도착 </div>
      <div class="mt-2 font-small text-muted" > 모임 장소 : 강남 카페에서(미팅이 열리는 주의 월요일 오전에 개별 안내) </div>
  
    </p>   
   <p class="card-text mb-4">
    <h6>☆ 진행방식을 알려주세요</h6>
    <div class="mt-2 font-small text-muted">1:1 미팅 : 3시~5시까지 15~20분간 최대 8명의 이성과 1:1로테이션 미팅을 진행합니다.  미팅 종료후 1차 커플 매칭을 진행합니다.  마음에 드는 이성 2명을 단톡방 운영자에게  개인톡으로 알려주시면 커플 매칭 후 개별 안내해 드립니다. <br>(매칭결과는 호프미팅 종료 후 개별안내) </div>
      <div class="mt-2 font-small text-muted" >호프미팅 (선택사항)  : 장소를 이동하여 90분간 자유로운 분위기에서 뒤풀이 겸 호프미팅을 진행합니다.맥주 1잔 기본제공, 안주와 술값은 1/n으로 계산합니다.   </div>
      <div class="mt-2 font-small text-muted">   </div>
    </p>   
    <p class="card-text mb-4" >
      <h6 >☆ 참가비가 얼마인가요??</h6>
      <div class="mt-2 font-small text-muted"> 참가비 : 남 45,000원 / 여 : 25,000원  </div>
      <div class="mt-2 font-small text-muted"> 입금하실 곳<br>농협 351-1192-6906-23, 예금주: (주)호미  </div>
        <div class="mt-2 font-small text-muted" > 미팅 신청후 참가비를 입금하시면 모임이 열리는 주의 월요일 오전에 참가 확정 안내와 함께 카카오 단톡방으로 초대문자를 보내드립니다. 신청순으로 참가번호를 부여해드리니 단톡방 입장시 아이디를 참가번호로 하시면 됩니다.<br>     </div>
        <div class="mt-2 font-small text-muted">    참가비에는 장소 대관료, 커피 1잔과 맥주 1잔 제공료가 포함됩니다. </div>
      </p>   
    <p class="card-text mb-4">
      <h6>☆ 어떤 복장을 입고 나가면 되죠??</h6>
      <div class="mt-2 font-small text-muted"> 첫인상이 중요한가라는 물음에 93%가 첫인상이 중요하다고 응답했으며 첫인상을 결정짓는 요소중 55% 이상이 시각이 가장 중요하다고 연구 결과가 있습니다. 슬리퍼, 반바지 등은 첫인상에서 안좋은 인상을 줄 수 있으므로 신뢰나 호감을 살 수 있는 깔끔한 복장을 입으셨으면 합니다.   </div></p>
    <p class="card-text mb-4">
      <h6>☆ 상대방에게 좋은 인상을 주려면?</h6>
      <div class="mt-2 font-small text-muted"> 외모 못지않게 첫인상을 결정짓는 요인은 표정입니다. 자신감있는 표정과 미소는 첫 만남에서 상대방으로부터 긍정적인 호감을 이끌어 낼 수 있으므로 거울을 보며 자연스럽고 호감있는 미소를 띄는 연습을 하고 오세요~~~  
       <br> <small  style ="text-align :center">하루 3분 표정 연습 </small> <br>
         <small class ="mt-1" style ="text-align: center">1)호빵맨 볼 만들기 2)초승달 눈 만들기 3) 윗니만 드러나게 미소짓기 </small> </div> </p>
      <p class="card-text mb-4">
        <h6>☆ 마음에 안드는 사람이 다시 나오면 어떻게 하죠??</h6>
        <div class="mt-2 font-small text-muted"> 이전 미팅에서 만난 분과 동일한 날짜에 미팅을 신청하시는 경우 사전에 공지해드리니 안심하셔도 됩니다. </div>
     </p>       `;
    $(".qna").append(template2);
  });
