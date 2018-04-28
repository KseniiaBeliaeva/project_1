var pickingShedule = sectionList.map(function (navigationObject) {
    return ('<a class="section-list_buttons"'
        + ' href="section-'
        + navigationObject.title
        + '.html">' +
        navigationObject.title + '</a>');
}).join("");
document.getElementById('buttonContainer').innerHTML = sectionBar;

