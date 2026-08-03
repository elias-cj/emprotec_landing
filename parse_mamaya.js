const fs = require('fs');
const path = require('path');

const html = fs.readFileSync('mamaya_full.html', 'utf8');

// 1. Extract image URLs
const imgRegex = /(?:src|href|background-image:url)\s*=\s*["']?([^"'\s>]+\.(?:png|jpg|jpeg|svg|webp))/gi;
let match;
const imageUrls = new Set();
while ((match = imgRegex.exec(html)) !== null) {
  let url = match[1];
  if (url.startsWith('//')) url = 'https:' + url;
  if (url.startsWith('http')) imageUrls.add(url);
}

// 2. Extract Elementor sections/widgets text
const textRegex = /<(h[1-6]|p|a|span|div)[^>]*class=["'][^"']*(?:elementor-heading-title|elementor-size-default|elementor-button-text|elementor-icon-box-title|elementor-icon-box-description|elementor-cta__title|elementor-cta__description|ht-slide-title|ht-slide-content|ht-slide-button)[^"']*["'][^>]*>([\s\S]*?)<\/\1>/gi;

console.log('=== IMAGES FOUND (' + imageUrls.size + ') ===');
console.log(Array.from(imageUrls));

// Also let's extract all elementor section titles and texts
console.log('\n=== TEXT STRUCTURE ===');
const domClean = html.replace(/<script[\s\S]*?<\/script>/gi, '').replace(/<style[\s\S]*?<\/style>/gi, '');

// Simple HTML tag stripper
function stripTags(str) {
  return str.replace(/<[^>]+>/g, ' ').replace(/\s+/g, ' ').trim();
}

// Extract headings
const headings = domClean.match(/<h[1-6][^>]*>[\s\S]*?<\/h[1-6]>/gi) || [];
console.log('\n--- HEADINGS ---');
headings.forEach(h => console.log('•', stripTags(h)));

// Extract buttons/links
const buttons = domClean.match(/<a[^>]*class=["'][^"']*(?:button|btn|cta|elementor-button)[^"']*["'][^>]*>[\s\S]*?<\/a>/gi) || [];
console.log('\n--- BUTTONS ---');
buttons.forEach(b => console.log('➜', stripTags(b)));

fs.writeFileSync('extracted_images.json', JSON.stringify(Array.from(imageUrls), null, 2));
