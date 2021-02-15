var keySize = 256;
var iterations = 1000;
function decrypt (encryptedMsg, pass) {
    var salt = CryptoJS.enc.Hex.parse(encryptedMsg.substr(0, 32));
    var iv = CryptoJS.enc.Hex.parse(encryptedMsg.substr(32, 32))
    var encrypted = encryptedMsg.substring(64);

    var key = CryptoJS.PBKDF2(pass, salt, {
        keySize: keySize/32,
        iterations: iterations
    });

    var decrypted = CryptoJS.AES.decrypt(encrypted, key, {
        iv: iv,
        padding: CryptoJS.pad.Pkcs7,
        mode: CryptoJS.mode.CBC
    }).toString(CryptoJS.enc.Utf8);
    return decrypted;
}
function loadSection(path) {
    resetList();
    // Underlines and focuses nav on new section
    var encoded_path = encodeURIComponent(path);
    var targetID = "viewport"
    hashTargetID = "#"+targetID;

    $(hashTargetID).load(encoded_path, function() {
        $(hashTargetID).css("display", "none");
        // Initially loads 
        var passphrase = myLib.passphrase;
        var encryptedMsg = $(hashTargetID).html();
        var encryptedHMAC = encryptedMsg.substring(0, 64)
        var encryptedHTML = encryptedMsg.substring(64);
        var decryptedHMAC = CryptoJS.HmacSHA256(encryptedHTML, CryptoJS.SHA256(passphrase).toString()).toString();
        if(decryptedHMAC !== encryptedHMAC) {
            alert('Bad passphrase! Reload page to decrypt.');
            return;
        }
        // load decrypted values
        var plainHTML = decrypt(encryptedHTML, passphrase);
        document.getElementById(targetID).innerHTML = plainHTML;
        var codes = document.getElementById(targetID).getElementsByTagName("script");   
        for(var i=0;i<codes.length;i++)  
        {  
            eval(codes[i].text);  
        }  
        $(hashTargetID).css("display", "block");
    });
}
function loadMenu() {
    loadSectionUnencrypted("./content/pages/main/main.html") //main.html and index.html should be identical except index should have signin form
    resetList();
}
function resetList() {
    $("#breadcrumb-list").empty();
    var appendItem = '<a href="#!" class="breadcrumb" id="breadcrumb-main" onclick="javascript:loadMenu()">Collections</a>'
    $("#breadcrumb-list").append(appendItem)
}
function loadCollection(collectionName){
    switch(collectionName){
        case "Musculoskeletal":
             loadSection("./content/pages/collections/musculoskeletal.html")
            break;
        case "Integumentary":
              loadSection("/content/pages/collections/integumentary.html")
            break;
        case "Neurology":
              loadSection("/content/pages/collections/neurology.html")
            break;
        case "Sexual_health":
              loadSection("/content/pages/collections/sexual_health.html")
            break;
        case "Renal":
               loadSection("/content/pages/collections/renal.html")
            break;
        case "Endocrinology":
               loadSection("/content/pages/collections/endocrinology.html")
            break;
        case "Haematology":
               loadSection("/content/pages/collections/haematology.html")
            break;
        case "Gastrointestinal":
              loadSection("/content/pages/collections/gastrointestinal.html")
            break;
        case "Respiratory":
              loadSection("/content/pages/collections/respiratory.html")
            break;
        case "Cardiovascular":
              loadSection("/content/pages/collections/cardiovascular.html")
            break;
    }
}

function loadSectionUnencrypted(path) {
    $("#viewport").load(path)
}




// Materialize JS
// create STATES
myLib.searchState = false;
function toggleSearchState() {
    myLib.searchState = !myLib.searchState;
    if (myLib.searchState == true) {
        $("#search-bar").attr( "style", "display: block !important;" )
    } else{
        $("#search-bar").attr( "style", "display: none !important;" )
    }
}

var elem;
var instance;
document.addEventListener('DOMContentLoaded', function() {
    elem = document.querySelector('.sidenav');
    instance = M.Sidenav.init(elem);
  });
// sidenav toggling
document.getElementById("sidenav-toggle").addEventListener("click", () => {
    instance.open();
});
// Searchbar toggling
var searchbarToggler = document.getElementsByClassName("searchbar-toggle");
for (var i = 0; i < searchbarToggler.length; i++) {
    searchbarToggler[i].addEventListener('click', toggleSearchState, false);
}

//breadcrumbs-main
$("#breadcrumb-main").click(() => {
    loadMenu();
})
document.getElementById("sidenav-toggle").addEventListener("click", () => {
    instance.open();
});

$('html').bind('keypress', function(e)
{
   if(e.keyCode == 13)
   {
      return false;
   }
});