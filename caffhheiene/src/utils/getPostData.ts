import { MAIN_SETTING } from '@/constants/mainSetting';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const postsDirectory = path.join(process.cwd(), 'public/blog');

interface TagType {
  name: string;
  amount: number;
}

export function getSortedPostData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const postData = fileNames.map((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    return matter(fileContents);
  });

  return postData.sort((a, b) => a.data.date - b.data.date);
}

export function getRecentlyPostData() {
  const sortedPostData = getSortedPostData();

  if (sortedPostData.length > MAIN_SETTING.recentlyPostDataAmount) {
    return sortedPostData.slice(0, MAIN_SETTING.recentlyPostDataAmount + 1);
  }
  return sortedPostData;
}

export function getDetailPostData(index: number) {
  const sortedPostData = getSortedPostData();
  return sortedPostData[index - 1];
}

export function getCategoryData() {
  const fileNames = fs.readdirSync(postsDirectory);
  const TagList: TagType[] = [{ name: 'All Posts', amount: 0 }];

  fileNames.forEach((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, 'utf-8');
    const { data } = matter(fileContents);

    data.category.forEach((tag: string) => {
      const targetIndex = TagList.findIndex((item) => item.name === tag);

      if (targetIndex === -1) {
        TagList.push({ name: tag, amount: 0 });
      } else {
        TagList[targetIndex].amount += 1;
      }
    });
    TagList[0].amount += 1;
  });

  return TagList;
}
