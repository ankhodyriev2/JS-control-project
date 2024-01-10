console.log('bla-bla-bla');
//В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html, котра має детальну інфорацію про об'єкт на який клікнули
//
//
// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.
//
// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)

const foo = async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/users');
    const users = await json.json();
    console.log(users)
    const wrap = document.getElementById('wrap');

    for (const user of users) {
        const div = document.createElement('div');
        const button = document.createElement('button');

        div.innerText = `${user.id} - ${user.name}`;
        button.innerText = 'details';

        div.appendChild(button);
        wrap.appendChild(div);

        button.onclick = function () {
            location.href = `../user-details/index2.html?userId=${user.id}`;
        }
    }
}

void foo();
