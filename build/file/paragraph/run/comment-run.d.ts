import { FileChild } from '../../file-child';
import { XmlComponent } from '../../xml-components';
export interface ICommentOptions {
    readonly id: number;
    readonly children: readonly FileChild[];
    readonly initials?: string;
    readonly author?: string;
    readonly date?: Date;
}
export interface ICommentExtendedOptions {
    readonly paraId: string;
    readonly done: number;
    readonly commentId: string;
}
export interface ICommentsOptions {
    readonly children: readonly ICommentOptions[];
}
export interface ICommentsExtendedOptions {
    readonly children: readonly ICommentExtendedOptions[];
}
export declare class CommentRangeStart extends XmlComponent {
    constructor(id: number);
}
export declare class CommentRangeEnd extends XmlComponent {
    constructor(id: number);
}
export declare class CommentReference extends XmlComponent {
    constructor(id: number);
}
export declare class Comment extends XmlComponent {
    constructor({ id, initials, author, date, children }: ICommentOptions);
}
export declare class CommentExtended extends XmlComponent {
    constructor({ paraId, done, commentId }: ICommentExtendedOptions);
}
export declare class Comments extends XmlComponent {
    constructor({ children }: ICommentsOptions);
}
export declare class CommentsExtended extends XmlComponent {
    constructor({ children }: ICommentsExtendedOptions);
}
