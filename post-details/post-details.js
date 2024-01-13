// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)


const postId = new URL(location.href).searchParams.get('postId');


async function fooposts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const posts = await response.json();
    console.log(posts);

        const wrap = document.getElementById('wrap');
        const div = document.createElement('div')
        const h4 = document.createElement('h4');
        const h5 = document.createElement('h5');

        h4.textContent = `User ID:${posts.userId} - Post ID:${posts.id} .Title: ${posts.title}`;
        h5.textContent = `Body: ${posts.body}`;
        div.appendChild(h4);
        div.appendChild(h5);
        wrap.appendChild(div);


    async function foocomments() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await response.json();
        console.log(comments);

        for (const user of comments) {
            const wrap = document.getElementById('wrap');
            const ul = document.createElement('ul');
            const postId = document.createElement('li');
            const id = document.createElement('li');
            const name = document.createElement('li');
            const email = document.createElement('li');
            const body = document.createElement('li');

            postId.textContent = `postId: ${user.postId}`;
            id.textContent = `id: ${user.id}`;
            name.textContent = `name: ${user.name}`;
            email.textContent = `email: ${user.email}`;
            body.textContent = `body: ${user.body}`;

            ul.append(postId, id, name, email, body);
            wrap.appendChild(ul);
        }

    }
    void foocomments()

}

void fooposts()




