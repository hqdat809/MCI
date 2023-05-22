import React from "react";
import "./TrainingProgram.scss";

const TrainingProgram = () => {
  const arrTraningPrograms = [
    "Phân tích dữ liệu",
    "Khoa học dữ liệu",
    "Kỹ sư dữ liệu",
    "Lập trình ứng dụng",
  ];
  return (
    <div className="TrainingProgram">
      <div className="TrainingProgram-title">
        <div className="TrainingProgram-title-text">
          Chương trình đào tạo của MCI
        </div>
      </div>
      <div className="TrainingProgram-items">
        {arrTraningPrograms.map((item) => (
          <div className="TrainingProgram-item">
            <div className="TrainingProgram-img"></div>
            <div className="TrainingProgram-info">
              <div className="TrainingProgram-title">{item}</div>
              <div className="TrainingProgram-content">
                Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm
                rất thú vị về những logic Toán học và các ngôn ngữ lập trình.
                Sau đó, em có đăng ký nguyện vọng thi đại học vào các ngành công
                nghệ thông tin trong các trường trên Hà Nội, tuy nhiên em lại
                không đủ điểm tiêu chí để được vào ngành công nghệ thông tin như
                mong muốn mà chỉ
              </div>
              <div className="TrainingProgram-more">Xem thêm</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrainingProgram;
