const badgeIcons = {
    'EMPLOYEE': 'bi bi-person-fill',
    'PARTNER': 'https://discord.id/img/flags/1.png',
    'HYPESQUAD_EVENTS': 'https://discord.id/img/flags/2.png',
    'BUGHUNTER_LEVEL_1': 'https://discord.id/img/flags/3.png',
    'BUGHUNTER_LEVEL_2': 'https://discord.id/img/flags/14.png',
    'HOUSE_HYPESQUAD': 'https://discord.id/img/flags/6.png',
    'HOUSE_BRILLIANCE': 'https://discord.id/img/flags/8.png',
    'HOUSE_BALANCE': 'https://discord.id/img/flags/7.png',
    'HOUSE_BRAVERY': 'https://discord.id/img/flags/6.png',
    'ACTIVE_DEVELOPER': 'https://discord.id/img/flags/22.png',
};

function getUserInfo() {
    const userId = '906196365460258906';

    fetch(`https://discordlookup.mesavirep.xyz/v1/user/${userId}`)
        .then(response => response.json())
        .then(data => {
            const avatarElement = document.getElementById('avatar');
            const discordInfoElement = document.getElementById('discordinf');

            if (data.avatar && data.avatar.link) {
                avatarElement.src = data.avatar.link;
            } else {
                avatarElement.src = '';
            }

            const statusMap = {
                0: 'Offline',
                1: 'Online',
                2: 'Away',
                3: 'Do Not Disturb',
                4: 'Invisible',
            };

            const badgesHTML = data.badges.map(badge => {
                const badgeIcon = badgeIcons[badge];
                return badgeIcon ? `<img src="${badgeIcon}" height="20px">` : badge;
            }).join(' ');

            discordInfoElement.innerHTML = `
                <h1><i class="bi bi-discord"></i> Discord Info</h1>
                <p>Tag: ${data.tag}</p>
                <p>Global Name: ${data.global_name}</p>
                <p>Badges: ${badgesHTML}</p>
                <p>Created Account: ${new Date(data.created_at).toLocaleDateString()}</p>
            `;
        })
        .catch(error => {
            console.error(error);
            console.log('Error on loading avatar');
        });
}

document.addEventListener('DOMContentLoaded', getUserInfo);

$(document).ready(function () {
    $("#container").addClass("show");
});
