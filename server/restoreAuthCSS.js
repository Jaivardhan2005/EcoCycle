const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../client/assets/css/style.css');
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const missingAuthCSS = `
/* --- AUTH PAGES STYLING (RESTORED) --- */

.auth-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  padding: 2rem;
  background: linear-gradient(135deg, #f0fdf4 0%, #ffffff 100%);
}

.auth-logo {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1.5rem;
  font-weight: 800;
  color: #188038;
  text-decoration: none;
  margin-bottom: 2rem;
}

.auth-card {
  background: white;
  padding: 3rem;
  border-radius: 24px;
  box-shadow: 0 20px 60px rgba(0, 0, 0, 0.05);
  width: 100%;
  max-width: 450px;
  border: 1px solid rgba(0, 0, 0, 0.05);
}

.auth-card h2 {
  font-size: 2rem;
  font-weight: 700;
  color: #111;
  text-align: center;
  margin-bottom: 0.5rem;
}

.auth-subtitle {
  text-align: center;
  color: #666;
  font-size: 0.95rem;
  margin-bottom: 2rem;
}

.role-toggle {
  display: flex;
  background: #f8f9fa;
  padding: 0.5rem;
  border-radius: 12px;
  margin-bottom: 2rem;
}

.role-btn {
  flex: 1;
  padding: 0.75rem;
  border: none;
  background: transparent;
  color: #666;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s;
}

.role-btn.active {
  background: #188038;
  color: white;
  box-shadow: 0 4px 12px rgba(24, 128, 56, 0.2);
}

.auth-form-group {
  margin-bottom: 1.5rem;
}

.auth-form-group label {
  display: flex;
  justify-content: space-between;
  font-size: 0.9rem;
  font-weight: 600;
  color: #333;
  margin-bottom: 0.5rem;
}

.forgot-link {
  color: #188038;
  text-decoration: none;
  font-weight: 500;
}

.input-icon-wrapper {
  position: relative;
  display: flex;
  align-items: center;
}

.icon-left {
  position: absolute;
  left: 1rem;
  color: #888;
}

.icon-right {
  position: absolute;
  right: 1rem;
  color: #888;
  cursor: pointer;
}

.input-icon-wrapper input {
  width: 100%;
  padding: 0.85rem 1rem 0.85rem 3rem;
  border: 1px solid #e0e0e0;
  border-radius: 12px;
  font-size: 1rem;
  color: #333;
  background: #fdfdfd;
  transition: all 0.3s;
}

.input-icon-wrapper input:focus {
  outline: none;
  border-color: #188038;
  background: white;
  box-shadow: 0 0 0 4px rgba(24, 128, 56, 0.1);
}

.auth-checkbox {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 0.9rem;
  color: #555;
  margin-bottom: 2rem;
  cursor: pointer;
}

.auth-submit-btn {
  width: 100%;
  padding: 1rem;
  background: #188038;
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s;
}

.auth-submit-btn:hover {
  background: #115927;
}

.auth-footer-link {
  text-align: center;
  margin-top: 1.5rem;
  font-size: 0.9rem;
  color: #555;
}

.auth-footer-link a {
  color: #188038;
  font-weight: 600;
  text-decoration: none;
}

.auth-page-footer-dark {
  background: #0f172a;
  color: white;
  padding: 2rem 4rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.auth-page-footer-dark .footer-left {
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

.auth-page-footer-dark .footer-logo {
  font-weight: 800;
  font-size: 1.25rem;
}

.auth-page-footer-dark .footer-links {
  display: flex;
  gap: 2rem;
}

.auth-page-footer-dark .footer-links a {
  color: #94a3b8;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.3s;
}

.auth-page-footer-dark .footer-links a:hover {
  color: white;
}
`;

if (!cssContent.includes('.auth-wrapper')) {
  fs.writeFileSync(cssPath, cssContent + missingAuthCSS);
  console.log('Restored missing Auth CSS.');
} else {
  console.log('Auth CSS already exists.');
}
