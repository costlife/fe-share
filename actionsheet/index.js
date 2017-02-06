$(function () {
    var $as = $('#root').actionSheet({
        label: '推荐条件（大于或等于）',
        options: [{
            label: '100.00',
            value: 100,
        },{
            label: '100.00',
            value: 100,
        }],
        onClick: function (value) {
            alert(value);
        },
        onCancel: function (e) {
            $as.hide();
        },
    });
    $('button').on('click', function () {
        $as.show();
    })
});