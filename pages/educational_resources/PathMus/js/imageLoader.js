function imageLoad(imagePath){
    $.get(imagePath, function( loaded_content ) {
            console.log("getting called");
            var passphrase = myLib.passphrase;
            var encryptedMsg = loaded_content
            var encryptedHMAC = encryptedMsg.substring(0, 64)
            var encryptedHTML = encryptedMsg.substring(64);
            var decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();
            if(decryptedHMAC !== encryptedHMAC) {
                alert('Bad passphrase! Reload page to decrypt.');
                return;
            }
            decryptedImage = decrypt(encryptedHTML, passphrase);
            viewer = OpenSeadragon({
                id: "openseadragon",
                prefixUrl: "/js/images/",
                tileSources: {
                    type: 'image',
                    url: decryptedImage
                }
            });
        });
}