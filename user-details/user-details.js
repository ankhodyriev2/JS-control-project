//На странице user-details.html:
// // 4 Вивести всю, без виключення, title всіх постів поточного юзера на який клікнули
// // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('userId');

const foo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();
    console.log(userId);

    const wrap = document.getElementById('wrap');
    const ul = document.createElement('ul');
    const id = document.createElement('li');
    const username = document.createElement('li');
    const email = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const city = document.createElement('li');
    const zipcode = document.createElement('li');
    const lat = document.createElement('li');
    const lng = document.createElement('li');
    const phone = document.createElement('li');
    const website = document.createElement('li');
    const companyName = document.createElement('li');
    const catchPhrase = document.createElement('li');
    const bs = document.createElement('li');
    const post = document.createElement('li');
    const button = document.createElement('button');


    id.textContent = `id: ${user.id}`;
    username.textContent = `username: ${user.username}`;
    email.textContent = `email: ${user.email}`;
    street.textContent = `street: ${user.address.street}`;
    suite.textContent = `suite: ${user.address.suite}`;
    city.textContent = `city: ${user.address.city}`;
    zipcode.textContent = `zipcode: ${user.address.zipcode}`;
    lat.textContent = `lat: ${user.address.geo.lat}`;
    lng.textContent = `lng: ${user.address.geo.lng}`;
    phone.textContent = `phone: ${user.phone}`;
    website.textContent = `website: ${user.website}`;
    companyName.textContent = `companyName: ${user.company.name}`;
    catchPhrase.textContent = `catchPhrase: ${user.company.catchPhrase}`;
    bs.textContent = `bs: ${user.company.bs}`;
    post.textContent = 'post: ${user.post}';
    button.innerText = 'post of current user';

    ul.append(id, username, email, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs, button);
    wrap.appendChild(ul);
    console.log(user);

            button.onclick = function () {
                location.href = `../title/title.html?userId=${user.id}`;
            }
}

void foo();
