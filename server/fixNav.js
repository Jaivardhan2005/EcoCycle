const fs = require('fs');
const path = require('path');

const files = [
  'client/index.html',
  'client/about.html',
  'client/impact.html'
];

files.forEach(f => {
  const filePath = path.join(__dirname, '..', f);
  if (!fs.existsSync(filePath)) return;
  
  let content = fs.readFileSync(filePath, 'utf-8');
  
  // Fix nav-center
  content = content.replace(/<div class="nav-center">[\s\S]*?<\/div>/, `<div class="nav-center">
      <a href="/pages/auth/login.html" class="nav-link">Solutions</a>
      <a href="/pages/auth/login.html" class="nav-link">Individuals</a>
      <a href="/pages/auth/login.html" class="nav-link">Agencies</a>
      <a href="/impact.html" class="nav-link ${f.includes('impact') ? 'active' : ''}">Impact</a>
      <a href="/about.html" class="nav-link ${f.includes('about') ? 'active' : ''}">About</a>
    </div>`);

  // Fix footer
  content = content.replace(/<div class="footer-right">[\s\S]*?<\/div>/, `<div class="footer-right">
      <a href="#">Privacy</a>
      <a href="#">Terms</a>
      <a href="/impact.html">Impact</a>
      <a href="/about.html">About</a>
    </div>`);
    
  fs.writeFileSync(filePath, content);
});

console.log('Fixed navs');
