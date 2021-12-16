// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html,
//     которая имеет детальную информацию про текущий пост.
//user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.


let id = JSON.parse(localStorage.getItem('userId'));
fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let wrapDiv = document.createElement('div');
        wrapDiv.className = 'wrapDiv';
        document.body.append(wrapDiv);

        let userBtn = document.createElement('button');
        userBtn.innerText = 'post of current user';
        userBtn.className = 'userBtn';

        for (const Key in user) {
            if (typeof user[Key] === "object") {

                for (const KeyKey in user[Key]) {
                    if (typeof user[Key][KeyKey] === "object") {

                        for (const keyKeyKey in user[Key][KeyKey]) {
                            if (typeof user[Key][KeyKey][keyKeyKey] === "object") {

                            } else {
                                let companiDiv = document.createElement('div');
                                companiDiv.className = 'companiDiv';
                                companiDiv.innerHTML = `${keyKeyKey[0].toUpperCase() + keyKeyKey.substr(1)}  ${user[Key][KeyKey][keyKeyKey]}`;
                                wrapDiv.append(companiDiv);
                            }
                        }
                    } else {
                        let adressDiv = document.createElement('div');
                        adressDiv.className = 'adressDiv';
                        adressDiv.innerHTML = `${KeyKey[0].toUpperCase() + KeyKey.substr(1)} - ${user[Key][KeyKey]}`;
                        wrapDiv.append(adressDiv);
                    }
                }

            } else {
                let userDiv = document.createElement('div');
                userDiv.className = 'userDiv';
                userDiv.innerHTML = `${Key[0].toUpperCase() + Key.substr(1)} - ${user[Key]}`;
                wrapDiv.append(userDiv);
            }
        }
        wrapDiv.append(userBtn);

        let popDiv = document.createElement('div');
        popDiv.className = 'popDiv';
        wrapDiv.append(popDiv);

        userBtn.addEventListener('click', function (e) {
            e.preventDefault();
            fetch(`https://jsonplaceholder.typicode.com/users/${id}/posts`)
                .then(response => response.json())
                .then(posts => {

                    for (const post of posts) {
                        let titleDiv = document.createElement('div');
                        titleDiv.className = 'titleDiv';
                        popDiv.append(titleDiv);

                        let postBtn = document.createElement('button');
                        postBtn.className = 'postBtn';
                        postBtn.innerText = 'post';

                        let bodyPost = document.createElement('div');
                        bodyPost.className = 'bodyPost';

                        for (const postKey in post) {
                            bodyPost.innerHTML = `${post.title[0].toUpperCase() + post.title.substr(1)}`;
                        }
                        titleDiv.append(bodyPost);
                        titleDiv.append(postBtn);

                        postBtn.addEventListener('click', function (e) {
                            e.preventDefault();
                            let postId = JSON.stringify(post.id);
                            localStorage.setItem('postId', postId);
                            window.location.href = '../therdUserPostsDetails/post-details.html';
                        })
                    }
                    popDiv = '';
                })

        })
    })

