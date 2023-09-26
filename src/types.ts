export interface Row {
    name: string;
    order: string;
    icon: string;
    posts: Post[];
}

export interface Post {
    slug: string;
    img: string;
    title: string;
}

export interface Props {
    title: string;
}
