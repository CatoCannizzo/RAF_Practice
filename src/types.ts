//Delete or figure out how to use
//explictly defines blogpost props for typescript
//moving to collections I think is is no longer used but can be used to fix "post errors"
interface BlogPostFrontMatter {
  title: string;
  pubDate: string;
  author: string;
  draft?: boolean;
  tags: string[];
}

export type { BlogPostFrontMatter };
