// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ
// як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в
//     окремий блок всі коментарі поточного поста


// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(response => response.json())
//     .then(result => {
//
//         let wrapDiv = document.createElement('div');
//         wrapDiv.className = 'wrapDiv';
//         document.body.append(wrapDiv);
//
//         result.forEach(value => {
//
//             let blockDiv = document.createElement('div');
//             blockDiv.className = 'blockDiv';
//             wrapDiv.append(blockDiv);
//
//             let btn = document.createElement('button');
//             btn.innerText = 'click';
//             btn.style.marginBottom = '5px';
//             blockDiv.append(btn);
//
//             let popDiv = document.createElement('div');
//             popDiv.className = 'popDiv';
//             document.body.append(popDiv);
//
//
//             for (const valueKey in value) {
//                 let keyDiv = document.createElement('div');
//                 keyDiv.className = 'keyDiv';
//                 blockDiv.appendChild(keyDiv);
//                 keyDiv.innerHTML = `${valueKey.toUpperCase()} - ${value[valueKey]}`;
//             }
//
//             btn.addEventListener('click', function (e) {
//                 popDiv.style.display = 'block';
//                 let newStr = value.body[0].toUpperCase() + value.body.substr(1);
//                 popDiv.innerHTML = `${newStr}`;
//             })
//
//             popDiv.onclick = e => {
//                 popDiv.style.display = 'none'
//             }
//
//         })
//     })
