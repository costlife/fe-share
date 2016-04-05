var BigPipe = function () {
}

BigPipe.onPageletArrive = function (options) {
    var id = options.id,
        content = options.content;
    document.getElementById(id).innerHTML = content;
}