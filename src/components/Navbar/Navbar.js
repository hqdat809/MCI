import React, { useEffect, useState } from "react";
import "./Navbar.scss";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";
import CalendarTodayIcon from "@mui/icons-material/CalendarToday";
import LightbulbIcon from "@mui/icons-material/Lightbulb";
import PersonIcon from "@mui/icons-material/Person";
import PeopleIcon from "@mui/icons-material/People";
import SchoolIcon from "@mui/icons-material/School";
import TelegramIcon from "@mui/icons-material/Telegram";
import CelebrationIcon from "@mui/icons-material/Celebration";

const Navbar = () => {
  const [menuMobile, setMenuMobile] = useState(false);
  const [isSearching, setIsSearching] = useState(false);

  const handleClickMenu = (e) => {
    e.stopPropagation();
    setMenuMobile(true);
  };

  const handleClickSearch = (e) => {
    e.stopPropagation();
    setIsSearching(!isSearching);
  };

  useEffect(() => {
    const menu = document.querySelector(".Navbar__left-items");
    console.log(menu);
    document.addEventListener("click", (evt) => {
      const flyoutEl = document.querySelector(".Navbar__left-items");
      let targetEl = evt.target;
      do {
        if (targetEl == flyoutEl) {
          return;
        }
        // Go up the DOM
        targetEl = targetEl.parentNode;
      } while (targetEl);
      // This is a click outside.
      setMenuMobile(false);
    });
  }, []);

  return (
    <div className="Navbar">
      <div className="Navbar__left">
        <div className="Navbar__left-logo">
          <a href="/">
            <img
              src="https://mcivietnam.com/media/home/Logo2-03.png"
              alt="logo-mci"
              width="120"
              height="auto"
            />
          </a>
        </div>

        <div className={`Navbar__left-items ${menuMobile ? "active" : ""}`}>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-title">
              <div className="Navbar__left-item-text">Khóa học</div>
              <ArrowDropDownRoundedIcon />
            </div>

            <div className="Navbar__left-item-list">
              <div className="List__title List__item">Phân tích dữ liệu</div>
              <div className="List__item">
                Pythong Foundation in Data Analytis
              </div>
              <div className="List__item">
                SQL for Newbies: Data Analysis for Beginners
              </div>
              <div className="List__item">
                Database and SQL for Data Science
              </div>
              <div className="List__title List__item">
                Kỹ sư dữ liệu dữ liệu
              </div>
              <div className="List__item">
                Combo Data Engineering Foundations Specialization
              </div>
              <div className="List__item">Big Data with Hadoop and Spark</div>
              <div className="List__item">
                Combo Data Engineering Professional
              </div>
              <div className="List__title List__item">Xem tất cả</div>
            </div>
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-title">
              <div className="Navbar__left-item-text">Lịch đào tạo</div>
              <ArrowDropDownRoundedIcon />
            </div>

            <div className="Navbar__left-item-list">
              <div className="List__item">
                <CalendarTodayIcon /> Lịch đào tạo
              </div>
              <div className="List__item">
                <SchoolIcon /> Giảng viên
              </div>
              <div className="List__item">
                <PersonIcon />
                Học viên
              </div>
            </div>
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-title">
              <div className="Navbar__left-item-text">Doanh nghiệp</div>
              <ArrowDropDownRoundedIcon />
            </div>

            <div className="Navbar__left-item-list">
              <div className="List__item">
                <PeopleIcon /> Mạng lưới đối tác
              </div>
              <div className="List__item">
                <LightbulbIcon /> Đào tạo doanh nghiệp
              </div>
              <div className="List__item">
                <TelegramIcon />
                Liên hệ
              </div>
            </div>
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-text">Blog</div>
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-title">
              <div className="Navbar__left-item-text">Về Chúng tôi</div>
              <ArrowDropDownRoundedIcon />
            </div>

            <div className="Navbar__left-item-list">
              <div className="List__item">
                <PeopleIcon /> Học viện Công nghệ MCI
              </div>
              <div className="List__item">
                <LightbulbIcon /> Cơ hội nghề nghiệp
              </div>
              <div className="List__item">
                <CelebrationIcon />
                Sự Kiện
              </div>
              <div className="List__item">
                <TelegramIcon />
                Liên hệ
              </div>
            </div>
          </div>
        </div>
        <div className="Navbar__left-bar" onClick={(e) => handleClickMenu(e)}>
          <MenuRoundedIcon sx={{ width: "50px", height: "50px" }} />
        </div>
      </div>
      <div className="Navbar__right">
        {isSearching ? (
          <div
            className="Navbar__right-searching"
            onClick={(e) => handleClickSearch(e)}
          >
            <input placeholder="Tìm kiếm Blog, Sách, Khóa học..." autoFocus />
            <SearchRoundedIcon
              sx={{ width: "40px", height: "40px" }}
              onClick={(e) => handleClickSearch(e)}
            />
          </div>
        ) : (
          <div
            className="Navbar__right-search"
            onClick={(e) => handleClickSearch(e)}
          >
            <SearchRoundedIcon sx={{ width: "40px", height: "40px" }} />
          </div>
        )}

        <div className="Navbar__right-login">
          <button className="Navbar__right-login-btn">Đăng nhập</button>
        </div>

        <div className="Navbar__right-login-icon">
          <LoginRoundedIcon sx={{ width: "50px", height: "50px" }} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
