import { useState } from 'react';
import { Link } from 'react-router-dom';

const HelpScreen = () => {
  const [showChat, setShowChat] = useState(false);
  const [showSocial, setShowSocial] = useState(false);
  const [showContact, setShowContact] = useState(false);
  return (
    <div className="help-screen">
      <header className="header">
        <div className="logo">
          <Link to="/">
            <img src="/logo.png" />
          </Link>
        </div>
        <div className="open-requests">Open Requests</div>
        <div className="language-switch">
          <span>ENG</span>
          <span>DU</span>
        </div>
        <div className="profile-icon">&#128100;</div>
      </header>
      <main className="main-content">
        <h1 className="main-title">Hello, how can we help you?</h1>
        <p className="main-subtitle">Find Travel guide, FAQ, chat,</p>

        <div className="card-container">
          <div className="card">
            <div className="card-icon">❓</div>
            <div className="card-content">
              <h2>FAQ</h2>
              <p>Lorem ipsum dolor sit amet</p>
            </div>
            <div className="card-action">➔</div>
          </div>

          <div className="card">
            <div className="card-icon">📍</div>
            <div className="card-content">
              <h2>Travel Guide</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
            </div>
            <div className="card-action">➔</div>
          </div>
        </div>

        <div className="card ">
          <div className="card-icon">💬</div>
          <div className="card-content">
            <h2>Chat</h2>
            <p>Lorem ipsum dolor sit amet</p>
            {showChat && (
              <div className="chat-options">
                <button>Telegram</button>
                <button>WhatsApp</button>
                <button>Live chat</button>
              </div>
            )}
          </div>
          <div
            className="card-action"
            onClick={() => setShowChat((prev) => !prev)}
          >
            ⏷
          </div>
        </div>

        <div className="card social-card">
          <div className="card-icon">🔗</div>
          <div className="card-content">
            <h2>Social</h2>
            <p>Lorem ipsum dolor sit amet</p>
            {showSocial && (
              <div className="social-options">
                <button>Facebook</button>
                <button>Instagram</button>
                <button>Twitter</button>
                <button>LinkedIn</button>
              </div>
            )}
          </div>
          <div
            className="card-action"
            onClick={() => setShowSocial((prev) => !prev)}
          >
            ⏷
          </div>
        </div>

        <div className="card query-card">
          <div className="card-icon">📨</div>
          <div className="card-content">
            <h2>Send Query</h2>
            <p>Lorem ipsum dolor sit amet</p>
            {showContact && (
              <form className="query-form">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="Email" />
                <input type="text" placeholder="Subject" />
                <input type="text" placeholder="Order No." />
                <textarea placeholder="Your Query"></textarea>
                <button type="submit">Submit</button>
              </form>
            )}
          </div>
          <div
            className="card-action"
            onClick={() => setShowContact((prev) => !prev)}
          >
            ⏷
          </div>
        </div>
      </main>
    </div>
  );
};

export default HelpScreen;
