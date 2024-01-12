//На странице user-details.html:
// // 4 Вивести всю, без виключення, title всіх постів поточного юзера на який клікнули
// // 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// // (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// // 6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html, котра має детальну інфу про поточний пост.

const userId = new URL(location.href).searchParams.get('userId');

const foo = async () => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
    const user = await response.json();

    const wrap = document.getElementById('wrap');
    const ul = document.createElement('ul');
    const id = document.createElement('li');
    const name = document.createElement('li');
    const phone = document.createElement('li');
    const username = document.createElement('li');
    const website = document.createElement('li');

    const city = document.createElement('li');
    const geolat = document.createElement('li');
    const geolng = document.createElement('li');
    const street = document.createElement('li');
    const suite = document.createElement('li');
    const zipcode = document.createElement('li');

    const companybs = document.createElement('li');
    const companycatchPhrase = document.createElement('li');
    const companyName = document.createElement('li');

    const email = document.createElement('li');

    const button = document.createElement('button');

    id.textContent = `id: ${user.id}`;
    name.textContent = `name: ${user.name}`;
    phone.textContent = `phone: ${user.phone}`;
    username.textContent = `username: ${user.username}`;
    website.textContent = `website: ${user.website}`;

    city.textContent = `city: ${user.address.city}`;
    geolat.textContent = `geolat: ${user.address.geo.lat}`;
    geolng.textContent = `geolng: ${user.address.geo.lng}`;
    street.textContent = `street: ${user.address.street}`;
    suite.textContent = `suite: ${user.address.suite}`;
    zipcode.textContent = `zipcode: ${user.address.zipcode}`;

    companybs.textContent = `companybs: ${user.company.bs}`;
    companycatchPhrase.textContent = `companycatchPhrase: ${user.company.catchPhrase}`;
    companyName.textContent = `companyName: ${user.company.name}`;

    email.textContent = `email: ${user.email}`;

    button.innerText = 'post of current user';

    ul.append(id, name, phone, username, website, city, geolat, geolng, street, suite, zipcode, companybs, companycatchPhrase, companyName, email, button);
    wrap.appendChild(ul);
    console.log(user);

            button.onclick = function () {
                location.href = `../title/title.html?userId=${user.id}`;
            }
}

void foo();
