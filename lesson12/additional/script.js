// 1.
// Отримати відповідь з цього ресурсу відповідь,
// та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий
//     блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий
//     блок виводяться всі коментарі поточного поста


// fetch('https://jsonplaceholder.typicode.com/users')
//     .then(response => response.json())
//     .then(users => {
//         let wrapDiv = document.createElement('div');
//         wrapDiv.className = 'wrapDiv';
//         document.body.append(wrapDiv);
//
//         for (const usersElement of users) {
//
//             let userDiv = document.createElement('div');
//             userDiv.className = 'userDiv';
//             wrapDiv.append(userDiv);
//
//             let btn = document.createElement('button');
//             btn.innerHTML = 'click';
//             userDiv.append(btn);
//
//             for (const key in usersElement) {
//                 if (typeof usersElement[key] === 'object') {
//
//                     for (const keyKey in usersElement[key]) {
//                         if (typeof usersElement[key][keyKey] === "object") {
//
//                             for (const keyKeyKey in usersElement[key][keyKey]) {
//                                 if (typeof usersElement[key][keyKey][keyKeyKey] === "object") {
//
//                                 } else {
//                                     let geoDiv = document.createElement('div');
//                                     geoDiv.className = 'geoDiv';
//                                     geoDiv.innerHTML = `${keyKeyKey} - ${usersElement[key][keyKey][keyKeyKey]}`;
//                                     userDiv.append(geoDiv);
//                                 }
//                             }
//                         } else {
//                             let adresDiv = document.createElement('div');
//                             adresDiv.className = 'adresDiv';
//                             adresDiv.innerHTML = `${keyKey} - ${usersElement[key][keyKey]}`;
//                             userDiv.append(adresDiv);
//                         }
//                     }
//                 } else {
//                     let contentDiv = document.createElement('div');
//                     contentDiv.className = 'contentDiv';
//                     contentDiv.innerHTML = `${key} - ${usersElement[key]}`;
//                     userDiv.append(contentDiv);
//                 }
//             }
//
//             let popDiv = document.createElement('div');
//             popDiv.className = 'popDiv';
//             userDiv.append(popDiv);
//
//
//             btn.addEventListener('click', function () {
//                 fetch('https://jsonplaceholder.typicode.com/posts')
//                     .then(response => response.json())
//                     .then(posts => {
//                         popDiv.style.display = 'block';
//                         let postsDiv = document.createElement('div');
//                         postsDiv.className = 'postsDiv';
//                         popDiv.append(postsDiv);
//
//                         for (const post of posts) {
//                             let onePostDiv = document.createElement('div');
//                             onePostDiv.className = 'onePostDiv';
//                             let postBtn = document.createElement('button');
//                             postBtn.innerHTML = 'enter';
//
//                             for (const postKey in post) {
//                                 if (usersElement.id === post.userId) {
//                                     let contDiv = document.createElement('div');
//                                     contDiv.className = 'contDiv';
//                                     contDiv.innerText = `${postKey} - ${post[postKey]}`;
//                                     postsDiv.appendChild(onePostDiv);
//                                     onePostDiv.appendChild(contDiv);
//                                     onePostDiv.appendChild(postBtn);
//
//                                     contDiv.onclick = () => {
//                                         onePostDiv.style.display = 'none'
//                                     }
//                                 }
//
//                             }
//
//                             postBtn.addEventListener('click', function () {
//                                 fetch('https://jsonplaceholder.typicode.com/comments')
//                                     .then(response => response.json())
//                                     .then(coments => {
//                                         let comentsDiv = document.createElement('div');
//                                         comentsDiv.className = 'comentDiv';
//                                         onePostDiv.appendChild(comentsDiv);
//
//                                         for (const coment of coments) {
//                                             let oneComentDiv = document.createElement('div');
//                                             oneComentDiv.className = 'oneComentDiv';
//                                             let comentBtn = document.createElement('button');
//                                             comentBtn.innerHTML = 'close block';
//
//                                             for (const comentKey in coment) {
//                                                 if (post.userId === coment.postId) {
//                                                     let contComentDiv = document.createElement('div');
//                                                     contComentDiv.className = 'contComentDiv';
//                                                     contComentDiv.innerText = `${comentKey} - ${coment[comentKey]}`;
//                                                     comentsDiv.appendChild(oneComentDiv);
//                                                     oneComentDiv.appendChild(contComentDiv);
//                                                     oneComentDiv.appendChild(comentBtn);
//
//                                                     comentBtn.onclick = () => {
//                                                         oneComentDiv.style.display = 'none';
//                                                     }
//                                                 }
//                                             }
//                                         }
//                                     })
//                             })
//                         }
//                     })
//             })
//         }
//     })








