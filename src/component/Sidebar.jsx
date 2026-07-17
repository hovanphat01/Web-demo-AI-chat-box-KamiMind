// src/components/Sidebar.jsx
import { useState } from 'react';

// Dữ liệu câu hỏi cố định từ ảnh thiết kế của bạn
const SIDEBAR_SUGGESTIONS = {
  TRUOC: {
    label: "TRƯỚC THỰC TẬP",
    icon: "📋",
    color: "#3b82f6",
    questions: [
      "Điều kiện để tham gia thực tập?",
      "Cần chuẩn bị hồ sơ gì?",
      "Thời gian thực tập bao lâu?",
      "Tự tìm nơi hay khoa sắp xếp?",
      "GVHD được phân công như thế nào?",
      "Có được nhận lương không?"
    ]
  },
  TRONG: {
    label: "TRONG THỰC TẬP",
    icon: "⚙️",
    color: "#10b981",
    questions: [
      "Cách điền nhật ký thực tập?",
      "Muốn nghỉ phép thì làm gì?",
      "Gặp GVHD bao nhiêu lần?",
      "Được phép chuyển nơi thực tập không?",
      "Khi gặp khó khăn phải làm gì?",
      "Quy định trang phục khi thực tập?"
    ]
  },
  SAU: {
    label: "SAU THỰC TẬP",
    icon: "📝",
    color: "#8b5cf6",
    questions: [
      "Báo cáo thực tập gồm những gì?",
      "Hạn nộp báo cáo là khi nào?",
      "Điểm thực tập được tính thế nào?",
      "Quy trình bảo vệ báo cáo?",
      "Không đạt thì phải làm gì?",
      "Xin giấy xác nhận từ đơn vị?"
    ]
  }
};

export function Sidebar({ isOpen, onClose }) {
  // Trạng thái đóng mở các phân mục (Mặc định mở hết như thiết kế)
  const [collapsedSections, setCollapsedSections] = useState({
    TRUOC: false,
    TRONG: false,
    SAU: false
  });

  const toggleSection = (key) => {
    setCollapsedSections(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  return (
    <>
      {/* Lớp phủ shadow khi responsive trên mobile */}
      <div 
        className={`sidebar-overlay ${isOpen ? 'active' : ''}`} 
        onClick={onClose}
      />
      
      <aside className={`sidebar ${isOpen ? 'open' : ''}`}>
        {/* Brand Header */}
        <div className="sidebar-brand">
          <div className="brand-logo">
            <div className="brand-icon">
              {/* Icon Brain Gradient theo thương hiệu KamiMind */}
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.58 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6z" fill="url(#kami-grad)"/>
                <defs>
                  <linearGradient id="kami-grad" x1="3" y1="3" x2="21" y2="20" gradientUnits="userSpaceOnUse">
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#3b82f6" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div>
              <div className="brand-name">KamiMind</div>
              <div className="brand-tagline">AI Hỏi Đáp Học Phần Thực Tập</div>
            </div>
          </div>
        </div>

        {/* Nút reset/refresh lại trang/tải lại iframe cuộc trò chuyện mới */}
        <button className="btn-new-chat" onClick={() => window.location.reload()}>
          <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4"/>
          </svg>
          Cuộc trò chuyện mới
        </button>

        {/* Danh sách câu hỏi tĩnh */}
        <div className="sidebar-body">
          {Object.entries(SIDEBAR_SUGGESTIONS).map(([key, cat]) => {
            const isCollapsed = collapsedSections[key];
            return (
              <div key={key} className={`category-section ${isCollapsed ? 'collapsed' : ''}`}>
                <div className="category-header" onClick={() => toggleSection(key)} style={{ cursor: 'pointer' }}>
                  <span className="cat-dot" style={{ backgroundColor: cat.color }}></span>
                  <span className="cat-icon" style={{ marginRight: '8px' }}>{cat.icon}</span>
                  <span className="cat-text-label">{cat.label}</span>
                  <span className="cat-chevron" style={{ transform: isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)', transition: 'transform 0.2s' }}>
                    ▼
                  </span>
                </div>
                
                {!isCollapsed && (
                  <ul className="question-list-static">
                    {cat.questions.map((q, idx) => (
                      <li key={idx} className="question-item-static">
                        <span className="bullet-dot">•</span>
                        <span className="question-txt">{q}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            );
          })}
        </div>

        {/* Footer ghi chú */}
        <div className="sidebar-footer">
          <p className="footer-note">🔒 Dữ liệu chỉ lưu trên thiết bị của bạn</p>
        </div>
      </aside>
    </>
  );
}