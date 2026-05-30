const fs = require('fs');
const path = require('path');

const userFiles = [
  'client/pages/user/dashboard.html',
  'client/pages/user/services.html',
  'client/pages/user/myBookings.html'
];

const newNav = `  <nav class="main-nav">
    <div class="nav-left">
      <a href="/index.html" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#188038" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="border-radius: 8px;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        EcoCycle
      </a>
    </div>
    <div class="nav-right">
      <span id="userName" style="font-weight: 600; color: #555;"></span>
      <a href="#" id="logoutBtn" class="btn btn-outline" style="padding: 0.5rem 1.5rem !important; margin-left: 1rem;">Logout</a>
    </div>
  </nav>`;

const userSidebar = `    <div class="sidebar">
      <a href="dashboard.html" {ACTIVE_DASH}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="3" rx="2" ry="2"></rect><path d="M3 9h18M9 21V9"></path></svg>
        Dashboard
      </a>
      <a href="services.html" {ACTIVE_SERV}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
        Find Services
      </a>
      <a href="myBookings.html" {ACTIVE_BOOK}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        My Bookings
      </a>
    </div>`;

const agencyFiles = [
  'client/pages/agency/dashboard.html',
  'client/pages/agency/createService.html',
  'client/pages/agency/myServices.html'
];

const agencyNav = `  <nav class="main-nav">
    <div class="nav-left">
      <a href="/index.html" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#188038" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="border-radius: 8px;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        EcoCycle
      </a>
    </div>
    <div class="nav-right">
      <span id="agencyName" style="font-weight: 600; color: #555;"></span>
      <a href="#" id="logoutBtn" class="btn btn-outline" style="padding: 0.5rem 1.5rem !important; margin-left: 1rem;">Logout</a>
    </div>
  </nav>`;

const agencySidebar = `    <div class="sidebar">
      <a href="dashboard.html" {ACTIVE_DASH}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
        Dashboard (Bookings)
      </a>
      <a href="createService.html" {ACTIVE_CREATE}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
        Create Service
      </a>
      <a href="myServices.html" {ACTIVE_MY}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 17 12 22 22 17"></polyline><polyline points="2 12 12 17 22 12"></polyline></svg>
        My Services
      </a>
    </div>`;

const adminFiles = [
  'client/pages/admin/dashboard.html',
  'client/pages/admin/verifyAgencies.html',
  'client/pages/admin/verifyServices.html'
];

const adminNav = `  <nav class="main-nav">
    <div class="nav-left">
      <a href="/index.html" class="logo">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#188038" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" style="border-radius: 8px;"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>
        EcoCycle
      </a>
    </div>
    <div class="nav-right">
      <span style="font-weight: 600; color: #555;">Admin Console</span>
      <a href="#" id="logoutBtn" class="btn btn-outline" style="padding: 0.5rem 1.5rem !important; margin-left: 1rem;">Logout</a>
    </div>
  </nav>`;

const adminSidebar = `    <div class="sidebar">
      <a href="dashboard.html" {ACTIVE_DASH}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg>
        Dashboard Overview
      </a>
      <a href="verifyAgencies.html" {ACTIVE_AGEN}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
        Verify Agencies
      </a>
      <a href="verifyServices.html" {ACTIVE_SERV}>
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        Verify Services
      </a>
    </div>`;

function replaceNav(content, newNavStr) {
  return content.replace(/<nav class="glass-nav">[\s\S]*?<\/nav>/, newNavStr);
}

function replaceSidebar(content, newSidebarStr, file) {
  let activeD = '', activeS = '', activeB = '', activeC = '', activeM = '', activeA = '';
  
  if (file.includes('dashboard.html')) activeD = 'class="active"';
  else if (file.includes('services.html') || file.includes('verifyServices.html')) activeS = 'class="active"';
  else if (file.includes('myBookings.html')) activeB = 'class="active"';
  else if (file.includes('createService.html')) activeC = 'class="active"';
  else if (file.includes('myServices.html')) activeM = 'class="active"';
  else if (file.includes('verifyAgencies.html')) activeA = 'class="active"';

  const sidebar = newSidebarStr
    .replace('{ACTIVE_DASH}', activeD)
    .replace('{ACTIVE_SERV}', activeS)
    .replace('{ACTIVE_BOOK}', activeB)
    .replace('{ACTIVE_CREATE}', activeC)
    .replace('{ACTIVE_MY}', activeM)
    .replace('{ACTIVE_AGEN}', activeA);

  return content.replace(/<div class="sidebar glass-panel">[\s\S]*?<\/div>/, sidebar);
}

// Process User Files
userFiles.forEach(f => {
  let content = fs.readFileSync(path.join(__dirname, '..', f), 'utf-8');
  content = replaceNav(content, newNav);
  content = replaceSidebar(content, userSidebar, f);
  content = content.replace(/<link rel="stylesheet" href="\.\.\/\.\.\/assets\/css\/style\.css">/g, '<link rel="stylesheet" href="/assets/css/style.css?v=3">');
  content = content.replace(/<script src="\.\.\/\.\.\/utils/g, '<script src="/utils');
  fs.writeFileSync(path.join(__dirname, '..', f), content);
});

// Process Agency Files
agencyFiles.forEach(f => {
  let content = fs.readFileSync(path.join(__dirname, '..', f), 'utf-8');
  content = replaceNav(content, agencyNav);
  content = replaceSidebar(content, agencySidebar, f);
  content = content.replace(/<link rel="stylesheet" href="\.\.\/\.\.\/assets\/css\/style\.css">/g, '<link rel="stylesheet" href="/assets/css/style.css?v=3">');
  content = content.replace(/<script src="\.\.\/\.\.\/utils/g, '<script src="/utils');
  fs.writeFileSync(path.join(__dirname, '..', f), content);
});

// Process Admin Files
adminFiles.forEach(f => {
  let content = fs.readFileSync(path.join(__dirname, '..', f), 'utf-8');
  content = replaceNav(content, adminNav);
  content = replaceSidebar(content, adminSidebar, f);
  content = content.replace(/<link rel="stylesheet" href="\.\.\/\.\.\/assets\/css\/style\.css">/g, '<link rel="stylesheet" href="/assets/css/style.css?v=3">');
  content = content.replace(/<script src="\.\.\/\.\.\/utils/g, '<script src="/utils');
  fs.writeFileSync(path.join(__dirname, '..', f), content);
});

console.log('UI Patched successfully!');
