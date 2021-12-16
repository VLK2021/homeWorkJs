let postId = JSON.parse(localStorage.getItem('postId'));
fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {

        let wrapPostDiv = document.createElement('div');
        wrapPostDiv.className = 'wrapPostDiv';
        document.body.append(wrapPostDiv);

        let postBtn = document.createElement('button');
        postBtn.innerText = 'coments';
        postBtn.className = 'postBtn';

        for (const key in post) {
            let postDiv = document.createElement('div');
            postDiv.className = 'postDiv';
            postDiv.innerHTML = `${key[0].toUpperCase() + key.substr(1)} - ${post[key]}`;
            wrapPostDiv.append(postDiv);
        }
        wrapPostDiv.append(postBtn);

        let popDiv = document.createElement('div');
        popDiv.className = 'popDiv';
        wrapPostDiv.append(popDiv);

        postBtn.addEventListener('click', function (e) {
            e.preventDefault();
            fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
                .then(response => response.json())
                .then(coments => {

                    let backBtn = document.createElement('button');
                    backBtn.className = 'backBtn';
                    backBtn.innerText = 'back to start';

                    for (const coment of coments) {
                        let comentDiv = document.createElement('div');
                        comentDiv.className = 'comentDiv';
                        popDiv.append(comentDiv);

                        for (const key in coment) {
                            let contentComentDiv = document.createElement('div');
                            contentComentDiv.className = 'contentComentDiv';
                            contentComentDiv.innerHTML = `${key[0].toUpperCase() + key.substr(1)} - ${coment[key]}`;
                            comentDiv.append(contentComentDiv);
                        }
                    }
                    popDiv.append(backBtn);

                    popDiv = '';

                    backBtn.onclick = (e) => {
                        e.preventDefault();
                        window.location.href = '../firstPageIndex/index.html';
                    }
                })
        })
    })





