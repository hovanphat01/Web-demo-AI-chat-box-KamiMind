import { useState } from "react";
import { Sidebar } from "./component/Sidebar";
import "./index.css"; // Import file CSS đã sửa ở bước 1

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const KAMIMIND_CHAT_URL =
    "https://kamimind.ai/integrate/chZaPk1pHxBji5mGiRx7Bjyt604q4yOn/2c74a2d2-2940-410d-acce-b70b2eaa7494?allowCopy=true&allowMicro=true";

  return (
    <div className="app-wrapper">
      {/* RENDER SIDEBAR COMPONENT */}
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* CHAT MAIN AREA */}
      <main className="chat-area">
        {/* Header */}
        <header className="chat-header">
          <div className="chat-header-left">
            <button className="btn-menu" onClick={() => setIsSidebarOpen(true)}>
              {/* SVG Icon Menu */}
            </button>
            <div>
              <div className="header-title">KamiMind Chatbot</div>
              <div className="header-sub">
                Hỗ trợ thông tin học phần thực tập
              </div>
            </div>
          </div>

          <div className="status-indicator">
            <div className="status-dot"></div>
            Trực tuyến
          </div>
        </header>

        {/* Bọc Iframe Tràn Viền Nền Trắng Không Tì Vết */}
        <div className="iframe-container">
          <iframe
            src={KAMIMIND_CHAT_URL}
            title="Trợ lý hỏi đáp về học phần thực tập"
            loading="lazy"
            allowFullScreen
            allow="
              clipboard-read;
              clipboard-write;
              autoplay;
              encrypted-media;
              fullscreen;
              display-capture;
              microphone
            "
          />
        </div>
      </main>
    </div>
  );
}

export default App;
