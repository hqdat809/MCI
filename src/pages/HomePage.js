import React from "react";
import "./HomePage.scss";
import Navbar from "../components/Navbar/Navbar";
import Gallery from "../components/Gallery/Gallery";
import TrainingProgram from "../components/TrainingProgram/TrainingProgram";
import Footer from "../components/Footer/Footer";
import Slide from "../components/Slide/Slide";
import BlogType from "../components/BlogType/BlogType";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const numberBlogArr = [1, 2, 3, 4, 5];
  const navigate = useNavigate();

  const handleNavigateBlog = () => {
    navigate("/blog");
  };
  return (
    <div className="HomePage">
      <div className="HomePage__slide"></div>
      <div className="HomePage__slide-mobile"></div>
      <div className="HomePage__events">
        <div className="HomePage__events-left">
          <div className="HomePage__events-title">Sự kiện của MCI</div>
          <div className="HomePage__events-slides">
            <Slide />
          </div>
        </div>
        <div className="HomePage__events-right">
          <BlogType />
          <div className="HomePage__events-blogs">
            {numberBlogArr.map((item) => (
              <div
                className="HomePage__events-blog"
                onClick={handleNavigateBlog}
              >
                <div className="HomePage__events-blog-img"></div>
                <div className="HomePage__events-blog-info">
                  <div className="HomePage__events-blog-title">
                    Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã
                    vượt qua nó như nào
                  </div>
                  <div className="HomePage__events-blog-content">
                    Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần
                    mềm rất thú vị về những logic Toán học và các ngôn ngữ lập
                    trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào các
                    ngành công nghệ thông tin trong các trường trên Hà Nội, tuy
                    nhiên em lại không đủ điểm tiêu chí để được vào ngành công
                    nghệ thông tin như mong muốn mà chỉ
                  </div>
                  <div className="HomePage__events-blog-more">Xem thêm</div>
                </div>
              </div>
            ))}
          </div>
          <div className="HomePage__events-blogs-slide">
            <div
              id="carouselExampleIndicators"
              className="carousel slide"
              data-bs-ride="true"
            >
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div
                    className="HomePage__events-blog"
                    onClick={handleNavigateBlog}
                  >
                    <div className="HomePage__events-blog-img"></div>
                    <div className="HomePage__events-blog-info">
                      <div className="HomePage__events-blog-title">
                        Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình
                        đã vượt qua nó như nào
                      </div>
                      <div className="HomePage__events-blog-content">
                        Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                        phần mềm rất thú vị về những logic Toán học và các ngôn
                        ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào các ngành công nghệ thông tin trong các trường
                        trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                        được vào ngành công nghệ thông tin như mong muốn mà chỉ
                      </div>
                      <div className="HomePage__events-blog-more">Xem thêm</div>
                    </div>
                  </div>
                </div>
                <div className="carousel-item">
                  <div
                    className="HomePage__events-blog"
                    onClick={handleNavigateBlog}
                  >
                    <div className="HomePage__events-blog-img"></div>
                    <div className="HomePage__events-blog-info">
                      <div className="HomePage__events-blog-title">
                        Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình
                        đã vượt qua nó như nào
                      </div>
                      <div className="HomePage__events-blog-content">
                        Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                        phần mềm rất thú vị về những logic Toán học và các ngôn
                        ngữ lập trình. Sau đó, em có đăng ký nguyện vọng thi đại
                        học vào các ngành công nghệ thông tin trong các trường
                        trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu chí để
                        được vào ngành công nghệ thông tin như mong muốn mà chỉ
                      </div>
                      <div className="HomePage__events-blog-more">Xem thêm</div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                className="carousel-control-prev slide-control-prev"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="prev"
              >
                <span className="carousel-control-prev-icon" aria-hidden="true">
                  <ArrowBackIosNewRoundedIcon />
                </span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button
                className="carousel-control-next slide-control-next"
                type="button"
                data-bs-target="#carouselExampleIndicators"
                data-bs-slide="next"
              >
                <span className="carousel-control-next-icon" aria-hidden="true">
                  <ArrowForwardIosRoundedIcon />
                </span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="HomePage__gallery">
        <Gallery />
      </div>
      <div className="HomePage__trainingProgram">
        <TrainingProgram />
      </div>
      <div className="HomePage__footer">
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
