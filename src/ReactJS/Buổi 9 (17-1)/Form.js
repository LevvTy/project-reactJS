import React, { useState } from "react";

const ROLES = ["Học sinh/sinh viên", "Nhân viên văn phòng", "Bác sĩ"];

const INVITE_OPTION = ["Có", "Không", "Có thể"];

const DATA = {
  name: "",
  eamail: "",
  age: 0,
  currentJob: "",
  isInvite: "",
  progLang: [],
  question: "",
};

const Form = () => {
  const [form, setForm] = useState(DATA);

  const onInput = (name, value) => {
    setForm((prevForm) => ({ ...prevForm, [name]: value }));
  };

  const renderOption = () => {
    return ROLES.map((item, index) => {
      return (
        <option key={index} value={item}>
          {item}
        </option>
      );
    });
  };

  const inviteOption = () => {
    return INVITE_OPTION.map((item, index) => {
      return (
        <div key={index}>
          <input name="invite" type="radio" value={item} />
          {item}
        </div>
      );
    });
  };

  return (
    <div style={{ marginLeft: "20px", padding: "10px" }}>
      <div>
        <p>Họ Tên</p>
        <input />
        <p>Email</p>
        <input />
        <p>Tuổi</p>
        <input type="number" />
        <p>Hiện bạn đang là?</p>
        <select>{renderOption()}</select>
        <p>Bạn sẽ giới thiệu ITviec với bạn bè chứ?</p>
        {inviteOption()}
        <div>
          <p>Ngôn ngữ lập trình và Framework mà bạn đã biết?</p>
          <input type="checkbox" /> C
          <br />
          <input type="checkbox" /> C++
          <br />
          <input type="checkbox" /> C#
        </div>
        <div>
          <p>Bạn có câu hỏi gì cho ITviec không?</p>
          <textarea></textarea>
        </div>
        <button>Submit</button>
      </div>
    </div>
  );
};

export default Form;
