import { BlogType } from '../enums/blog-type.enum';

export class Blog {
    public title: string;
    public type: BlogType;
    public date: string;

    constructor(init?: Partial<Blog>) {
        Object.assign(this, init);
    }
}
