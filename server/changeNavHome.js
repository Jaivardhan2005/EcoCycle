const fs = require('fs');
const path = require('path');

function walkDir(dir, callback) {
  fs.readdirSync(dir).forEach(f => {
    let dirPath = path.join(dir, f);
    let isDirectory = fs.statSync(dirPath).isDirectory();
    isDirectory ? walkDir(dirPath, callback) : callback(dirPath);
  });
}

walkDir(path.join(__dirname, '../client'), (filePath) => {
  if (filePath.endsWith('.html')) {
    let content = fs.readFileSync(filePath, 'utf-8');
    
    // Replace <a href="/pages/auth/login.html" class="nav-link active">Solutions</a>
    // and <a href="/pages/auth/login.html" class="nav-link">Solutions</a>
    
    // We can use a regex to match the anchor tag containing "Solutions"
    const regex1 = /<a href="[^"]*" class="nav-link">Solutions<\/a>/g;
    const regex2 = /<a href="[^"]*" class="nav-link active">Solutions<\/a>/g;
    
    let changed = false;
    if (regex1.test(content)) {
      content = content.replace(regex1, '<a href="/index.html" class="nav-link">Home</a>');
      changed = true;
    }
    if (regex2.test(content)) {
      content = content.replace(regex2, '<a href="/index.html" class="nav-link active">Home</a>');
      changed = true;
    }
    
    if (changed) {
      fs.writeFileSync(filePath, content);
      console.log('Updated', filePath);
    }
  }
});
