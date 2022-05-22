window.onload = createAvatars;

function createAvatars() {
    fetch('../assets/member-avatars/members.txt').then(function(response) {
        return response.text();
    }).then(function(data) {
        let memberList = data.split('\n');
        for (var i = 0; i < memberList.length; i++) {
            $('.member-group').append('<div class="member">' +
                                    `<img class="member-avatar" src="../assets/member-avatars/${memberList[i].split('-')[0].split(' ')[0].toLowerCase() + memberList[i].split('-')[0].split(' ')[1][0].toLowerCase()}.jpg" onerror="this.src='../assets/member-avatars/default-avatar.jpg'">` +
                                    `<h1 class="member-info">${memberList[i].split('-')[0].trim()}</h1>` +
                                    `<h2 class="member-position">${memberList[i].split('-')[1].trim()}</h2>` +
                                 '</div>');
        }
    });
}