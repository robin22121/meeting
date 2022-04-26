// 시험 영역

// 이미지 업로드

$(document).ready(function () {
  $("button[type='submit']").click(function () {
    var apply = {
      date: new Date(),
      gender: $("input[name='r_sex']:checked").val(),
      name: $(".name-input").val(),
      age: $(".age-input").val(),
      phone: $(".phone-input").val(),
      job: $("#r_job").find(":selected").text(),
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
