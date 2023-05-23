import React, { useEffect, useState } from "react";
import BlogType from "../components/BlogType/BlogType";
import "./BlogPage.scss";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import ArrowBackIosNewRoundedIcon from "@mui/icons-material/ArrowBackIosNewRounded";
import Footer from "../components/Footer/Footer";

const BlogPage = () => {
  const numberBlogArr = [1, 2, 3];
  const [isShow, setIsShow] = useState(false);

  useEffect(() => {
    const banner = document.querySelector(".BlogPage__content-banner");
    window.scroll(() => {});
    window.addEventListener("scroll", () => {
      console.log(window.scrollY);
      if (window.scrollY > 400 && window.scrollY < 1800) {
        console.log("fixed");
        banner.style.position = "fixed";
        banner.style.top = "0px";
      } else {
        banner.style.position = "absolute";
        banner.style.top = "50px";
      }
    });
    console.log(banner);
  }, []);

  return (
    <div className="BlogPage">
      <div className="BlogPage__blogType">
        <BlogType />
      </div>
      <div className="BlogPage__nav">
        <div className="BlogPage__nav-item">
          Trang chủ{" "}
          <ArrowForwardIosRoundedIcon sx={{ width: "16px", height: "16px" }} />
        </div>
        <div className="BlogPage__nav-item">
          Blog{" "}
          <ArrowForwardIosRoundedIcon sx={{ width: "16px", height: "16px" }} />
        </div>
        <div className="BlogPage__nav-item">
          Chia sẻ kinh nghiệm{" "}
          <ArrowForwardIosRoundedIcon sx={{ width: "16px", height: "16px" }} />
        </div>
        <div className="BlogPage__nav-item">
          Bạn Nguyễn Quang Hưng - Học Data là 1 quá trình và mình đã vượt qua nó
          như nào
        </div>
      </div>

      <div className="BlogPage__content-wrapper">
        <div className="BlogPage__content">
          <div className="BlogPage__content-img-slide"></div>
          <div className="BlogPage__title">
            Bạn Nguyễn Quang Hưng - Học Data là 1 quá trình và mình đã vượt qua
            nó như nào
          </div>
          <div className="BlogPage__title-space"></div>
          <div className="BlogPage__content-text">
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </div>
          <div className="BlogPage__content-blog">
            <div className="BlogPage__title BlogPage__content-title ">
              <MenuRoundedIcon sx={{ width: "30px", height: "30px" }} />
              Nội dung bài viết
            </div>
            <div className="BlogPage__contents">
              <div className="BlogPage__contents-item">
                1. Nội dung bài viết
              </div>
              <div className="BlogPage__contents-item">
                3. Nội dung bài viết
              </div>
              <div className="BlogPage__contents-item">
                2. Nội dung bài viết
              </div>
              <div className="BlogPage__contents-item">
                4. Nội dung bài viết
              </div>
              <div className="BlogPage__contents-item">
                5. Nội dung bài viết
              </div>
            </div>
          </div>
          <div className="BlogPage__content-text">
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </div>
          <div className="BlogPage__content-text">
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </div>
          <div className="BlogPage__content-text">
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </div>
          <div className="BlogPage__content-img"></div>
          <div className="BlogPage__content-text">
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </div>
          <div className="BlogPage__content-text">
            Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất
            thú vị về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em
            có đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...Với
            sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần mềm rất thú vị
            về những logic Toán học và các ngôn ngữ lập trình. Sau đó, em có
            đăng ký nguyện vọng thi đại học vào các ngành công nghệ thông tin
            trong các trường trên Hà Nội, tuy nhiên em lại không đủ điểm tiêu
            chí để được vào ngành công nghệ thông tin như mong muốn mà chỉ...
          </div>
          <div className="BlogPage__content-blogRelated">
            <div className="blogRelated__title">Các bài đăng liên quan</div>
            <div className="blogRelated">
              {numberBlogArr.map((item) => (
                <div className="blogRelated-blog">
                  <div className="blogRelated-blog-img"></div>
                  <div className="blogRelated-blog-info">
                    <div className="blogRelated-blog-title">
                      Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và mình đã
                      vượt qua nó như nào
                    </div>
                    <div className="blogRelated-blog-content">
                      Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về phần
                      mềm rất thú vị về những logic Toán học và các ngôn ngữ lập
                      trình. Sau đó, em có đăng ký nguyện vọng thi đại học vào
                      các ngành công nghệ thông tin trong các trường trên Hà
                      Nội, tuy nhiên em lại không đủ điểm tiêu chí để được vào
                      ngành công nghệ thông tin như mong muốn mà chỉ
                    </div>
                    <div className="blogRelated-blog-more">Xem thêm</div>
                  </div>
                </div>
              ))}
            </div>
            <div className="BlogRelated-blogs-slide">
              <div
                id="carouselExampleIndicators"
                className="carousel slide"
                data-bs-ride="true"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="BlogRelated-blog">
                      <div className="BlogRelated-blog-img"></div>
                      <div className="BlogRelated-blog-info">
                        <div className="BlogRelated-blog-title">
                          Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và
                          mình đã vượt qua nó như nào
                        </div>
                        <div className="BlogRelated-blog-content">
                          Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                          phần mềm rất thú vị về những logic Toán học và các
                          ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng
                          thi đại học vào các ngành công nghệ thông tin trong
                          các trường trên Hà Nội, tuy nhiên em lại không đủ điểm
                          tiêu chí để được vào ngành công nghệ thông tin như
                          mong muốn mà chỉ
                        </div>
                        <div className="BlogRelated-blog-more">Xem thêm</div>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="BlogRelated-blog">
                      <div className="BlogRelated-blog-img"></div>
                      <div className="BlogRelated-blog-info">
                        <div className="BlogRelated-blog-title">
                          Bạn Nguyễn Quang Hưng - Học DATA là 1 quá trình và
                          mình đã vượt qua nó như nào
                        </div>
                        <div className="BlogRelated-blog-content">
                          Với sự tìm hiểu từ cấp 3, em thấy ngành công nghệ về
                          phần mềm rất thú vị về những logic Toán học và các
                          ngôn ngữ lập trình. Sau đó, em có đăng ký nguyện vọng
                          thi đại học vào các ngành công nghệ thông tin trong
                          các trường trên Hà Nội, tuy nhiên em lại không đủ điểm
                          tiêu chí để được vào ngành công nghệ thông tin như
                          mong muốn mà chỉ
                        </div>
                        <div className="BlogRelated-blog-more">Xem thêm</div>
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
                  <span
                    className="carousel-control-prev-icon"
                    aria-hidden="true"
                  >
                    <ArrowBackIosNewRoundedIcon
                      sx={{ width: "26px", height: "26px" }}
                    />
                  </span>
                  <span className="visually-hidden">Previous</span>
                </button>
                <button
                  className="carousel-control-next slide-control-next"
                  type="button"
                  data-bs-target="#carouselExampleIndicators"
                  data-bs-slide="next"
                >
                  <span
                    className="carousel-control-next-icon"
                    aria-hidden="true"
                  >
                    <ArrowForwardIosRoundedIcon
                      sx={{ width: "30px", height: "26px" }}
                    />
                  </span>
                  <span className="visually-hidden">Next</span>
                </button>
              </div>
            </div>
          </div>
          <div className="Banner__form-mobile">
            <div className="Banner__form-title">Đăng ký tư vấn khóa học</div>
            <form className="">
              <div className="Banner__form-field">
                <div className="Banner__form-label">Họ và tên</div>
                <input className="Banner__form-input" />
              </div>
              <div className="Banner__form-field">
                <div className="Banner__form-label">Email</div>
                <input className="Banner__form-input" />
              </div>
              <div className="Banner__form-field">
                <div className="Banner__form-label">Số điện thoại</div>
                <input className="Banner__form-input" />
              </div>
              <div className="Banner__form-field">
                <div className="Banner__form-label">
                  Khóa học mà bạn muốn tư vấn
                </div>
                <select className="Banner__form-input"></select>
              </div>

              <button className="Banner__form-submit">Đăng ký tư vấn</button>
            </form>
          </div>
        </div>
        <div className="BlogPage__content-banner">
          <div className="Banner__img"></div>
          <div className="Banner__programs">
            <div
              className="Banner__programs-title"
              onClick={() => setIsShow(!isShow)}
            >
              {" "}
              Các khóa học
            </div>
            <div className="Banner__programs-space"></div>
            <div className={`Banner__programs-items ${isShow ? "active" : ""}`}>
              <div className="Banner__programs-item">Phân tích dữ liệu</div>
              <div className="Banner__programs-item">Kỹ sư dữ liệu</div>
              <div className="Banner__programs-item">Khoa học dữ liệu</div>
              <div className="Banner__programs-item">Lập trình ứng dụng</div>
            </div>
          </div>
          <div className="Banner__form">
            <div className="Banner__form-title">Đăng ký tư vấn khóa học</div>
            <form className="">
              <div className="Banner__form-field">
                <div className="Banner__form-label">Họ và tên</div>
                <input className="Banner__form-input" />
              </div>
              <div className="Banner__form-field">
                <div className="Banner__form-label">Email</div>
                <input className="Banner__form-input" />
              </div>
              <div className="Banner__form-field">
                <div className="Banner__form-label">Số điện thoại</div>
                <input className="Banner__form-input" />
              </div>
              <div className="Banner__form-field">
                <div className="Banner__form-label">
                  Khóa học mà bạn muốn tư vấn
                </div>
                <select className="Banner__form-input"></select>
              </div>

              <button className="Banner__form-submit">Đăng ký tư vấn</button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default BlogPage;
