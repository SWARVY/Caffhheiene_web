import { MAIN_SETTING } from '@/constants/mainSetting';
import { allPosts } from '@/contentlayer/generated';

interface Category {
  name: string;
  amount: number;
}

export function getAllPost() {
  return allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
}

export function getAllCategory() {
  const categories: Category[] = [{ name: 'All Posts', amount: 0 }];

  allPosts.forEach(({ category }) => {
    category.forEach((categoryItem) => {
      const target = categories.findIndex((item) => item.name === categoryItem);

      if (target === -1) {
        categories.push({ name: categoryItem, amount: 1 });
      } else {
        categories[target].amount += 1;
      }
    });
    categories[0].amount += 1;
  });

  return categories;
}

export function getRecentPost() {
  return getAllPost().slice(0, MAIN_SETTING.recentlyPostDataAmount + 1);
}

export function getPostContent(id: number) {
  const sortedPostData = getAllPost();

  return {
    prev: sortedPostData[sortedPostData.length - id + 1] ?? null,
    curr: sortedPostData[sortedPostData.length - id],
    next: sortedPostData[sortedPostData.length - id - 1] ?? null,
  };
}
