import { useState } from "react";
import "./App.css";

function App() {
  // 新增状态用于控制是否显示更多详细信息
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="business-card">
      <div className="profile-section">
        <h1 className="name">张三</h1>
        <p className="title">全栈开发工程师</p>
        {/* 新增简介段落 */}
        <p className="bio">
          拥有多年全栈开发经验，熟练掌握前端框架如 React、Vue，后端语言如
          Node.js、Python，擅长从需求分析到项目上线的全流程开发。
        </p>
        {/* 新增切换更多信息按钮 */}
        {showMore ? (
          <button className="toggle-button" onClick={() => setShowMore(false)}>
            隐藏更多信息
          </button>
        ) : (
          <button className="toggle-button" onClick={() => setShowMore(true)}>
            显示更多信息
          </button>
        )}
      </div>
      <div className="contact-section">
        <p className="contact-item">
          <i className="fa fa-envelope"></i>
          邮箱: zhangsan@example.com
        </p>
        <p className="contact-item">
          <i className="fa fa-phone"></i>
          电话: +86 1234567890
        </p>
        <p className="contact-item">
          <i className="fa fa-map-marker"></i>
          地址: 北京市朝阳区
        </p>
        {/* 新增社交媒体信息 */}
        {showMore && (
          <div className="social-media-section">
            <p className="contact-item">
              <i className="fa fa-github"></i>
              GitHub: https://github.com/zhangsan
            </p>
            <p className="contact-item">
              <i className="fa fa-linkedin"></i>
              LinkedIn: https://www.linkedin.com/in/zhangsan/
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
