
/*
 * ------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export interface AuthorInput {
    firstName: string;
    lastName: string;
}

export interface UpdateAuthorInput {
    firstName?: string;
    lastName?: string;
}

export interface IQuery {
    allAuthors(): Author[] | Promise<Author[]>;
    author(id: string): Author | Promise<Author>;
}

export interface Author {
    _id: string;
    firstName?: string;
    lastName?: string;
    posts?: Post[];
    address?: Address;
}

export interface Post {
    _id: string;
    title?: string;
}

export interface Address {
    zipCode?: string;
    phone?: string;
    city?: string;
}

export interface IMutation {
    createAuthor(author: AuthorInput): Author | Promise<Author>;
    deleteAuthor(id: string): string | Promise<string>;
    updateAuthor(id: string, author: UpdateAuthorInput): Author | Promise<Author>;
}
