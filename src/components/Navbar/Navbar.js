import React from "react";
import "./Navbar.scss";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";
import LoginRoundedIcon from "@mui/icons-material/LoginRounded";

const Navbar = () => {
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
        <div className="Navbar__left-items">
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-text">Khóa học</div>
            <ArrowDropDownRoundedIcon />
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-text">Lịch đào tạo</div>
            <ArrowDropDownRoundedIcon />
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-text">Doanh nghiệp</div>
            <ArrowDropDownRoundedIcon />
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-text">Blog</div>
          </div>
          <div className="Navbar__left-item">
            <div className="Navbar__left-item-text">Về Chúng tôi</div>
            <ArrowDropDownRoundedIcon />
          </div>
        </div>
        <div className="Navbar__left-bar">
          <MenuRoundedIcon sx={{ width: "50px", height: "50px" }} />
        </div>
      </div>
      <div className="Navbar__right">
        <div className="Navbar__right-search">
          <SearchRoundedIcon sx={{ width: "40px", height: "40px" }} />
        </div>
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
