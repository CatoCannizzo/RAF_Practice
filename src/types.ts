//Delete or figure out how to use
//explictly defines blogpost props for typescript
interface BlogPostFrontMatter {
   title: string;
   date: string;
   author: string;
   draft?: boolean;
}

export type{
   BlogPostFrontMatter
} 
