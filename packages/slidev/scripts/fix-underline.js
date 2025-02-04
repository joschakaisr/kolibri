#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

function filterFiles(dir, regExp) {
	let files = [];
	const dirPath = path.resolve(process.cwd(), dir);
	fs.readdirSync(dirPath).forEach((file) => {
		const fullPath = path.resolve(dir, file);
		if (fs.lstatSync(fullPath).isDirectory()) {
			files = files.concat(filterFiles(fullPath, regExp));
		} else {
			const content = fs.readFileSync(fullPath, 'utf-8');
			if (regExp.test(content)) {
				console.warn(`${fullPath} fix underline updated`);
				fs.writeFileSync(fullPath, content.replace(regExp, 'commonjsHelpers'), 'utf-8');
			}
		}
	});
	return files;
}

filterFiles(path.relative(process.cwd(), 'dist'), /_commonjsHelpers-[^.]+/g);
