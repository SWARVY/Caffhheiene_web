import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/blog');

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const data = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    return matter(fileContents);
  });

  return data.sort((a, b) => a.data.date - b.data.date);
}

export function getDetailPostData(index: number) {
  const sortedPostData = getSortedPostData();
  return sortedPostData[index - 1];
}
