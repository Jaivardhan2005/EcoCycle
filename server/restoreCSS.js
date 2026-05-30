const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../client/assets/css/style.css');
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const missingCSS = `
/* --- PUBLIC PAGES STYLING (RESTORED) --- */

.main-nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 4rem;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  position: sticky;
  top: 0;
  z-index: 1000;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

.main-nav .logo {
  font-size: 1.5rem;
  font-weight: 800;
  color: #188038;
  text-decoration: none;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.nav-center {
  display: flex;
  gap: 2rem;
}

.nav-link {
  text-decoration: none;
  color: #444;
  font-weight: 600;
  font-size: 0.95rem;
  transition: color 0.2s;
}

.nav-link:hover, .nav-link.active {
  color: #188038;
}

.nav-right {
  display: flex;
  align-items: center;
  gap: 1.5rem;
}

.login-link {
  text-decoration: none;
  color: #188038;
  font-weight: 600;
}

.btn-get-started {
  background: #188038;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: background 0.3s;
}

.btn-get-started:hover {
  background: #115927;
}

.hero-section {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 4rem 4rem 2rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
  gap: 4rem;
}

.hero-content {
  flex: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: rgba(24, 128, 56, 0.1);
  color: #188038;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  font-size: 0.85rem;
  margin-bottom: 1.5rem;
}

.hero-content h1 {
  font-size: 4rem;
  font-weight: 800;
  color: #111;
  line-height: 1.1;
  margin-bottom: 1.5rem;
  letter-spacing: -1px;
}

.text-green { color: #188038 !important; }
.text-blue { color: #0077b6 !important; }

.hero-content p {
  font-size: 1.25rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2.5rem;
  max-width: 500px;
}

.hero-actions {
  display: flex;
  gap: 1rem;
}

.btn-primary {
  background: #188038;
  color: white;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.btn-primary:hover {
  background: #115927;
  transform: translateY(-2px);
}

.btn-outline {
  background: transparent;
  color: #333;
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  border: 1px solid #ccc;
  transition: all 0.3s;
}

.btn-outline:hover {
  border-color: #188038;
  color: #188038;
}

.hero-image-wrapper {
  flex: 1;
  position: relative;
}

.hero-image {
  width: 100%;
  border-radius: 24px;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.stats-card {
  position: absolute;
  bottom: -20px;
  right: -20px;
  background: rgba(255, 255, 255, 0.8);
  backdrop-filter: blur(12px);
  -webkit-backdrop-filter: blur(12px);
  border: 1px solid rgba(255, 255, 255, 0.5);
  box-shadow: 0 10px 30px rgba(0,0,0,0.08);
  padding: 1.25rem;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.stats-icon {
  background: #188038;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.stats-info {
  display: flex;
  flex-direction: column;
}

.stats-label {
  font-size: 0.75rem;
  color: #555;
  font-weight: 600;
  text-transform: uppercase;
}

.stats-value {
  font-size: 1.5rem;
  font-weight: 800;
  color: #111;
}

.stats-unit {
  font-size: 0.9rem;
  font-weight: 500;
}

.features-section {
  padding: 6rem 4rem;
  max-width: 1400px;
  margin: 0 auto;
}

.section-header {
  text-align: center;
  margin-bottom: 4rem;
}

.section-header h2 {
  font-size: 2.5rem;
  font-weight: 800;
  color: #111;
  margin-bottom: 1rem;
}

.section-header p {
  color: #555;
  font-size: 1.1rem;
  max-width: 600px;
  margin: 0 auto;
}

.features-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 3rem;
}

.feature-card {
  background: white;
  padding: 3rem 2rem;
  border-radius: 24px;
  box-shadow: 0 10px 30px rgba(0,0,0,0.03);
  border: 1px solid #f1f3f5;
  transition: all 0.3s;
}

.feature-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 15px 40px rgba(0,0,0,0.08);
}

.icon-wrapper {
  background: #f8f9fa;
  width: 64px;
  height: 64px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.feature-card h3 {
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 1rem;
  color: #111;
}

.feature-card p {
  color: #555;
  line-height: 1.6;
  margin-bottom: 1.5rem;
}

.feature-link {
  font-weight: 600;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
}

.main-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2rem 4rem;
  background: #111;
  color: white;
  margin-top: 4rem;
}

.footer-left p {
  color: #888;
  font-size: 0.9rem;
  margin-top: 0.5rem;
}

.footer-right {
  display: flex;
  gap: 2rem;
}

.footer-right a {
  color: #888;
  text-decoration: none;
  font-size: 0.9rem;
  transition: color 0.2s;
}

.footer-right a:hover {
  color: white;
}
`;

if (!cssContent.includes('.main-nav')) {
  fs.writeFileSync(cssPath, cssContent + missingCSS);
  console.log('Restored missing CSS for landing pages.');
} else {
  console.log('CSS already exists.');
}
