const badgeForm = document.getElementById('badgeForm');
const downloadBadge = document.getElementById('dwnBadge');

badgeForm.addEventListener('submit', function (event) {
    event.preventDefault();

    const formcontainer = document.getElementById('formContainer');
    formcontainer.style.display = 'none';

    const name = document.getElementById('name').value;
    const university = document.getElementById('university').value;
    const team = "@" + document.getElementById('team').value;
    const access = document.getElementById('access').value;

    const id = 'ID' + Math.floor(Math.random() * 10000).toString().padStart(4, '0');


    $('#badgeName').text(name);
    $('#badgeUniversity').text(university);
    $('#badgecontainer').text(team);
    $('#badgeAccess').text(access);

    $('#qrcode').empty();

    $('#qrcode').qrcode({
        text: `ID: ${id}\nNom complet: ${name}\nEtudiant à: ${university}\nNom d"équipe: ${team}\nAccès: ${access}`,
        width: 128,
        height: 128
    });

    $('#badge').css('display', 'block');
    $('#dwnBadge').css('display', 'block');
});

downloadBadge.addEventListener('click', function (e) {
    e.preventDefault();
    const badgeElement = document.getElementById('badge');
    htmlToImage.toPng(badgeElement)
        .then(function (dataUrl) {
            const link = document.createElement('a');
            link.download = 'badge.png';
            link.href = dataUrl;
            link.click();
        })
        .catch(function (error) {
            console.error('Error converting HTML to image:', error);
        });
});