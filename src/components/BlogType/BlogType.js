import React from "react";
import "./BlogType.scss";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const BlogType = () => {
  return (
    <div className="BlogType">
      <div className="BlogType-search">
        <SearchRoundedIcon />
        <input placeholder="Tìm kiếm bài viết" />
      </div>
      <div className="BlogType-typeBlogs">
        <div className="BlogType-typeBlog">Chia sẻ kinh nghiệm</div>
        <div className="BlogType-typeBlog">Kiến thức chuyên môn</div>
        <div className="BlogType-typeBlog">MCI Careers</div>
        <div className="BlogType-typeBlog">Kinh nghiệm thực chiến</div>
        <div className="BlogType-typeBlog">Lịch khai giảng</div>
      </div>
    </div>
  );
};

export default BlogType;
