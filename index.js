var sectionList = [
    {
        title: 'SD06-MTLP'
    },
    {
        title: 'SD06-MTLP'
    },
    {
        title: 'SD10-MTLP'
    },
    {
        title: 'PD05-MTLP'
    },
    {
        title: 'SM06-MTLP'
    }
];

var sectionBar = sectionList.map(function (navigationObject) {
    return ('<a class="section-list_buttons"'
        + ' href="section-'
        + navigationObject.title
        + '.html">' +
        navigationObject.title + '</a>');
}).join("");
document.getElementById('buttonContainer').innerHTML = sectionBar;
