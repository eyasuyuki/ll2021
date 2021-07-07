const marked = require('marked');
const fs = require('fs');

const inFile = process.argv[2]
const outFile = process.argv[3]

const inputContent = fs.readFileSync(inFile, 'utf8')

const renderer = new marked.Renderer();
const heading = renderer.heading.bind(renderer)
renderer.heading = (text, level, raw, slugger) => {
    return heading(text, level, raw, slugger).replace(/>/i, 'class="matter-h${level}">')
}
const link = renderer.link.bind(renderer);
renderer.link = (href, title, text) => {
    return link(href, title, text).replace(/>/i, 'class="matter-link">');
};

marked.use({ renderer })

const content = `<!DOCTYPE html>
<html lang="ja">
<head>
<meta charset="UTF-8">
<title>Learn Languages 2021</title>
<link href="https://res.cloudinary.com/finnhvman/raw/upload/matter/matter-0.2.2.css" rel="stylesheet">
</head>
<body class="matter-body1">
${marked(inputContent)}
</body>
</html>`

fs.writeFileSync(outFile, content)
