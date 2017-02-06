$.fn.actionSheet = function(params) {
    var $el = $(this);
    var options = params.options;
    var label = params.label;
    var onClick = params.onClick;
    var onCancel = params.onCancel;

    var template = buildASTemplate(label, options);

    function buildASTemplate(label, options) {
        var arr = [];
        arr.push(''
            + '<div class="actionsheet">'
                + '<div class="actionsheet-bg"></div>'
                + '<div class="actionsheet-body">'
        );
        if (label) {
            arr.push(buildASLabel(label));
        }
        for (var i = 0; i < options.length; i++) {
            arr.push(buildASItem(options[i]));
        }
        arr.push(''
                + '</div>'
                + '<div class="actionsheet-cancel">取消</div>'
            + '</div>'
        );
        return arr.join('');
    }

    function buildASLabel(label) {
        return '<div class="actionsheet-item-figure actionsheet-label">' + label + '</div>';
    }

    function buildASItem(data) {
        return '<div class="actionsheet-item-figure actionsheet-item" data-value=' + data.value + '>' + data.label + '</div>';
    }

    $el.hide().html(template)
        .on('click', '.actionsheet-item', function (e) {
            onClick($(this).data('value'));
        })
        .on('click', '.actionsheet-cancel, .actionsheet-bg', function (e) {
            onCancel();
        });

    return $el;
}