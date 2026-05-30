const fs = require('fs');
const path = require('path');

const cssPath = path.join(__dirname, '../client/assets/css/style.css');
let cssContent = fs.readFileSync(cssPath, 'utf-8');

const newCSS = `
/* Cards Grid & Dashboard Layout Fixes */
.cards-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 1.5rem;
  margin-top: 1rem;
}

.card {
  background: white;
  border-radius: 12px;
  padding: 1.5rem;
  box-shadow: 0 4px 15px rgba(0,0,0,0.02);
  border: 1px solid #f1f3f5;
  transition: transform 0.2s, box-shadow 0.2s;
  display: flex;
  flex-direction: column;
}

.card:hover {
  transform: translateY(-4px);
  box-shadow: 0 10px 25px rgba(0,0,0,0.05);
}

.card-title {
  font-size: 1.1rem;
  font-weight: 700;
  color: #212529;
  margin: 0 0 1rem 0;
}

.card-text {
  font-size: 0.9rem;
  color: #495057;
  margin: 0 0 0.5rem 0;
  line-height: 1.5;
}

.card .btn-green {
  margin-top: auto;
  align-self: flex-start;
}
`;

if (!cssContent.includes('.cards-grid')) {
  fs.writeFileSync(cssPath, cssContent + newCSS);
  console.log('Restored Cards Grid CSS.');
} else {
  console.log('Cards Grid CSS already exists.');
}
