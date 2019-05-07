export default class BlogApi {

    _baseUrl = 'https://jsonplaceholder.typicode.com';

    async getResource(url) {
        const res = await fetch(`${this._baseUrl}${url}`);

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}, received ${res.status}`);
        }

        return await res.json();
    }

    async getAllPosts() {
        const res = await this.getResource(`/posts/`);
        return res;
    }

    async getPost(id) {
        const res = await this.getResource(`/posts/${id}`);
        return res;
    }

    async getPostComments(id) {
        const res = await this.getResource(`/comments?postId=${id}`);
        return res;
    }
}
