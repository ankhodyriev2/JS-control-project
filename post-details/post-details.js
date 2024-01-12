// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

//let const userId = postID
const postId = new URL(location.href).searchParams.get('postId');


async function fooposts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    const posts = await response.json();
    console.log(posts);

        const h4 = document.createElement('h4');
        h4.innerText = `${posts.userId} - ${posts.id} - ${posts.title} - ${posts.body}`;
        wrap.appendChild(h4);

    async function foocomments() {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`);
        const comments = await response.json();
        console.log(comments);


        for (const user of comments) {
            const wrap = document.getElementById('wrap');
            const ul = document.createElement('ul');
            const id = document.createElement('li');
            const postId = document.createElement('li');
            const body = document.createElement('li');
            const email = document.createElement('li');
            const name = document.createElement('li');

            id.textContent = `id: ${user.id}`;
            postId.textContent = `postId: ${user.postId}`;
            email.textContent = `email: ${user.email}`;
            body.textContent = `body: ${user.body}`;
            name.textContent = `name: ${user.name}`;

            ul.append(postId, id, name, email, body);
            wrap.appendChild(ul);
        }

    }
    void foocomments()

}

void fooposts()




