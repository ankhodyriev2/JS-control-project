
//Сторінка  "post of current user", з'являються title всіх постів поточного юзера
 // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
 // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('userId');
const foo = async () => {
    const json = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}/posts`);
    const users = await json.json();
    console.log(users);

//fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
    //   .then((response) => response.json())
    //   .then((json) => console.log(json));
   //  const users = await json.json();

    const wrap = document.getElementById('wrap');

    for (const user of users) {
        const div = document.createElement('div');
        const button = document.createElement('button');

        div.innerText = `${user.id} - ${user.title}`;
        button.innerText = 'post details';

        div.appendChild(button);
        wrap.appendChild(div);
    }
}
void foo()


