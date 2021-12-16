
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        let usersDiv = document.createElement('div');
        usersDiv.className = 'usersDiv';
        document.body.append(usersDiv);
        for (const user of users) {
            let userDiv = document.createElement('div');
            userDiv.className = 'userDiv';
            usersDiv.append(userDiv);
            let userContentDiv = document.createElement('div');
            userContentDiv.className = 'userContentDiv';
            userDiv.append(userContentDiv);

            userContentDiv.innerText = `${user.id} - ${user.name}`;

            let userButton = document.createElement('button');
            userButton.className = 'userButton';
            userButton.innerText = 'click';
            userDiv.append(userButton);

            userButton.addEventListener('click', function (e) {
                e.preventDefault();
                let id = user.id;
                localStorage.setItem('userId', JSON.stringify(id));
                window.location.href = '../secondUserDetails/user-details.html';
            })
        }
    })
