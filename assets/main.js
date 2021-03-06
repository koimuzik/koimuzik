var b_sv = location.hostname;
function onClicked(c, a, f) {
    $(document).on('click', c, function() {
        document.title = a, init.page(f)
    })
}
location.hostname == b_sv && (noti = {
    main: function() {
        toastr.options = {
            closeButton: !0,
            debug: !1,
            progressBar: !0,
            positionClass: 'toast-top-right',
            onclick: null,
            showDuration: '400',
            hideDuration: '1000',
            timeOut: '8000',
            extendedTimeOut: '1500',
            showEasing: 'swing',
            hideEasing: 'linear',
            showMethod: 'fadeIn',
            hideMethod: 'fadeOut'
        }
    },
    clear: function() {
        toastr.clear()
    },
    success: function(c) {
        return this.clear(), toastr.success(c)
    },
    info: function(c) {
        return this.clear(), toastr.info(c)
    },
    warning: function(c) {
        return this.clear(), toastr.warning(c)
    },
    error: function(c) {
        return this.clear(), toastr.error(c)
    }
}, init = {
    getBW: function(c, a, f) {
        var q = c.split(a);
        return q[1] ? (q = q[1].split(f), q[0]) : 0
    },
    addZero: function(c) {
        return 10 > c && (c = '0' + c), c
    },
    replace_JSON: function(c) {
        return JSON.parse(c.toString())
    },
    validate_RegEx: function(c) {
        return c.replace(/(\\|\.|\[|\]|\{|\}|\(|\)|\*|\+|\?|\^|\$|\|)/g, '\\$1')
    },
    randomString: function(c) {
        for (var a = 'abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX0123456789', f = '', q = 0; c > q; q++) {
            f += a[init.randomInt(a.length)]
        };
        return f
    },
    randomNumber: function(c) {
        for (var a = '0123456789', f = '', q = 0; c > q; q++) {
            f += a[init.randomInt(a.length)]
        };
        return f
    },
    randomText: function(c) {
        for (var a = 'abcdefghijklmnoprstuvyzxABCDEFGHIJKLMNOPRSTUVYZX', f = '', q = 0; c > q; q++) {
            f += a[init.randomInt(a.length)]
        };
        return f
    },
    spinText: function(c) {
        var a = c.match(/{([^{}]*)}/g);
        if (!a) {
            return c
        };
        for (i in a) {
            spin = a[i], ori_spin = spin, spin = spin.replace('{', '').replace('}', ''), spin_strs = spin.split('|'), c = c.replace(ori_spin, spin_strs[init.randomInt(spin_strs.length)])
        };
        return init.spinText(c)
    },
    number_format: function(c, a, f, q) {
        c = (c + '').replace(/[^0-9+\-Ee.]/g, '');
        var g = isFinite(+c) ? +c : 0,
            j = isFinite(+a) ? Math.abs(a) : 0,
            l = 'undefined' == typeof q ? ',' : q,
            h = 'undefined' == typeof f ? '.' : f,
            b = '',
            m = function(c, a) {
                var f = Math.pow(10, a);
                return '' + (Math.round(c * f) / f).toFixed(a)
            };
        return b = (j ? m(g, j) : '' + Math.round(g)).split('.'), b[0].length > 3 && (b[0] = b[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, l)), (b[1] || '').length < j && (b[1] = b[1] || '', b[1] += new Array(j - b[1].length + 1).join('0')), b.join(h)
    },
    toJSON: function(c) {
        var a = new Object;
        return a.gid = c.gid, a.gname = c.gname, a.members = c.members, a
    },
    randomInt: function(c) {
        return Math.floor(Math.random() * c)
    },
    timeNow: function() {
        var c = new Date,
            a = init.addZero(c.getDate()),
            f = init.addZero(c.getMonth() + 1),
            q = init.addZero(c.getFullYear()),
            g = init.addZero(c.getHours()),
            j = init.addZero(c.getMinutes()),
            l = init.addZero(c.getSeconds());
        return a + '/' + f + '/' + q + ' - ' + g + ':' + j + ':' + l
    },
    formatTime: function(c) {
        var a = new Date(1e3 * c),
            f = Math.floor((a - new Date(0)) / 864e5),
            q = a.getUTCHours() + 24 * f,
            g = a.getUTCMinutes(),
            j = a.getSeconds();
        return 10 > q && (q = '0' + q), 10 > g && (g = '0' + g), 10 > j && (j = '0' + j), q + ':' + g + ':' + j
    },
    page: function(c) {
       /* $('.loader-circle').show(), $.get('//' + b_sv + '/tools/html/' + c + '.html', {
            now: $.now()
        }, function(a) {
            $('#bachdeptrai').hide().html(a).fadeIn('fast'), 'undefined' == typeof _ljs[c] ? (bload(c, function() {
                $('.loader-circle').fadeOut('fast')
            }), _ljs[c] = 1) : $('.loader-circle').fadeOut('fast')
        })*/
    },
    dataTables: function() {
        $('.editable').dataTable({
            responsive: !0,
            dom: 'T<\"clear\">lfrtip',
            bLengthChange: !1,
            bInfo: !1,
            bPaginate: !1,
            language: {
                sSearch: 'T??? kh???: ',
                sZeroRecords: 'Kh??ng c?? k???t qu??? ph?? h???p'
            },
            tableTools: {
                sSwfPath: '/files/swf/dataTables.swf'
            }
        })
    },
    count_members_GR: function(c, a, f, q) {
        $.get('https://graph.facebook.com/' + c, {
            fields: 'members.limit(1).summary(true)',
            access_token: f
        }).done(function(c) {
            $(a).text(init.number_format(c.members.summary.total_count)), q()
        })
    }
}, $.fn.extend({
    disabled: function() {
        return this.attr('disabled', 'disabled').addClass('disabled')
    },
    undisabled: function() {
        return this.removeAttr('disabled').removeClass('disabled')
    },
    buttonLoad: function() {
        return this.addClass('m-progress').disabled()
    },
    buttonStop: function() {
        return this.removeClass('m-progress').undisabled()
    },
    validate: function() {
        return '' == $.trim(this.val()) ? (noti.error('Vui l??ng ??i???n ?????y ????? n???i dung !'), !1) : $.trim(this.val())
    },
    isNumber: function() {
        return $.isNumeric(this.validate()) ? parseInt($.trim(this.validate())) : (noti.error('Vui l??ng nh???p ????ng ?????nh d???ng d??? li???u !'), !1)
    },
    thisSelect: function() {
        return this.click(function() {
            this.select()
        })
    },
    onEnter: function(c) {
        this.keypress(function(a) {
            13 == a.which && c()
        })
    }
}), run = {
    main: function() {
        noti.main(), $('.loader-circle').fadeOut('fast'), this.ClickGET_AccessToken(), this.ClickExtensions(), this.ClickLogin(), this.ClickToken(), this.ClickID(), this.ClickInbox(), this.ClickFR(), this.ClickGR(), this.ClickPAGE(), this.ClickAUTO(), this.ClickCode()
    },
    loading: function() {
        return '<img src=\"//i.imgur.com/63EDGlY.gif\" />'
    },
    confirm: function() {
        return '<img src=\"//i.imgur.com/wwAuTRn.gif\" />'
    },
    checkpoint: function() {
        return '<img src=\"//i.imgur.com/cBQ5zxZ.png\" />'
    },
    success: function() {
        return '<img src=\"//i.imgur.com/dwMSftC.png\" />'
    },
    error: function() {
        return '<img src=\"//i.imgur.com/0MxbOaq.png\" />'
    },
    ClickGET_AccessToken: function() {
        $(document).on('click', '#ClickGET_PagesManageriOs', function() {
            window.open('https://goo.gl/hesouU', '_blank')
        }), $(document).on('click', '#ClickGET_HTCSense', function() {
            window.open('https://goo.gl/8OZr7k', '_blank')
        })
    },
    ClickExtensions: function() {
        $(document).on('click', '#extension_update', function() {
            swal({
                title: 'L???i',
                text: 'Ti???n i??ch b???n ??ang s??? d???ng b??? l???i, h??y update l??n phi??n b???n m???i nh???t !',
                type: 'error',
                showCancelButton: !1,
                confirmButtonColor: '#DD6B55'
            })
        })
    },
    ClickLogin: function() {
        onClicked('#token_GET', '????ng nh???p ????? l???y Access Token', 'token_get')
    },
    ClickToken: function() {
        onClicked('#token_CheckLive', 'Check Access Token Live or DIE', 'token_checklive'), onClicked('#token_CheckLive_Fast', 'Check Access Token Live Max Speed', 'token_checklive_fast'), onClicked('#token_LocTrung', 'L???c Tr??ng Access Token', 'token_loctrung'), onClicked('#token_LocList', 'L???c Access Token t??? List', 'token_loctoken')
    },
    ClickID: function() {
        onClicked('#check_GETInfo_FR', 'GET Th??ng tin c???a b???n b??', 'check_info_fr'), onClicked('#Comment_Manager', 'Facebook Comment Manager', 'comment_manager'), onClicked('#Graph_Search', 'Facebook Graph Search', 'graph_search')
    },
    ClickInbox: function() {
        onClicked('#inbox_CountInbox', 'B???n nh???n tin cho ai nhi???u nh???t ???', 'inbox_count'), onClicked('#inbox_SendInbox', onClicked('#inbox_SendInbox', 'G???i tin nh???n h??ng lo???t !', 'inbox_send'), 'G???i tin nh???n h??ng lo???t !', 'inbox_send'), onClicked('#inbox_Delete', 'Xo??a t???t c??? ca?? tin nh???n', 'inbox_delete')
    },
    ClickFR: function() {
        onClicked('#friend_ScanPosts', 'SCAN b??i vi???t tr??n t?????ng', 'scan_post'), onClicked('#friend_Request', 'MENU L???i m???i k???t b???n', 'friend_request'), onClicked('#friend_TagsComment', 'AUTO Tags b???n b?? v??o status', 'auto_tags'), onClicked('#auto_Tagfr', 'Auto Share Tags', 'auto_tagfr'), onClicked('#friend_TagInStt', 'Tags b???n b?? v??o Posts', 'friend_taginstt'), onClicked('#friend_Pokes', 'Ch???c b???n b?? h??ng lo???t', 'friend_pokes'), onClicked('#friend_Add', 'Th??m b???n b?? h??ng lo???t', 'friend_add'), onClicked('#friend_Delete', 'Xo??a b???n b?? h??ng lo???t', 'friend_delete'), onClicked('#friend_Unfollow', 'B??? theo d??i h??ng lo???t', 'friend_unfollow')
    },
    ClickGR: function() {
        onClicked('#group_ScanPosts', 'SCAN b??i vi???t tr??n nh??m', 'scan_post'), onClicked('#group_ScanSex', 'SCAN b??nh lu???n SPAM, SEX', 'group_scansex'), onClicked('#group_Join', 'T??? ?????ng tham gia danh s???h nh??m', 'group_join'), onClicked('#group_Thamgia', 'T??? ?????ng tham gia danh s???h nh??m', 'group_thamgia'), onClicked('#group_CheckYear', 'Check GR c??? t??? Access Token', 'group_checkyear'), onClicked('#group_AddMem', 'Th??m b???n b?? v??o nh??m', 'group_add'), onClicked('#group_Leave', 'T??? ?????ng tho??t kh???i nh??m', 'group_leave')
    },
    ClickPAGE: function() {
        onClicked('#page_ScanPosts', 'SCAN b??i vi???t tr??n trang', 'scan_post'), onClicked('#page_CountLike', '?????m s??? Like PAGE hi???n c??', 'page_count_like'), onClicked('#page_Ratings', 'T??ng ????nh gi?? cho trang h??ng lo???t', 'page_rating'), onClicked('#page_Checkin', 'T??ng checkins trang h??ng lo???t', 'page_checkin'), onClicked('#page_Invited', 'M???i b???n b?? thi??ch trang', 'page_invited'), onClicked('#page_Unlike', 'B??? thi??ch trang h??ng lo???t', 'page_unlike')
    },
    ClickAUTO: function() {
        $(document).on('click', '#auto_PostLink', function() {
            noti.error('T??nh n??ng n??y hi???n ch??a kh??? d???ng !')
        }), $(document).on('click', '#auto_PostImage', function() {
            noti.error('T??nh n??ng n??y hi???n ch??a kh??? d???ng !')
        }), onClicked('#auto_Share', 'AUTO Share Posts', 'auto_share'), onClicked('#auto_Tagfrfemale', 'AUTO Share Tags Friends - FEMALE', 'auto_Tagfrfemale'), onClicked('#auto_Tagfrmale', 'AUTO Share Tags Friends - MALE', 'auto_Tagfrmale'), onClicked('#auto_Sharegrb', 'AUTO Share Group - API feed', 'auto_sharegrb'), onClicked('#auto_Cmtnf', 'AUTO Comment Newsfeed', 'auto_cmtnf'), onClicked('#auto_Sharet', 'AUTO Th??nh ?????p Trai', 'auto_sharet'), onClicked('#auto_Group', 'AUTO Posts Group', 'auto_group'), onClicked('#auto_Wall', 'AUTO Posts Wall', 'auto_wall'), onClicked('#auto_Like', 'AUTO Like', 'auto_like'), onClicked('#auto_Comment', 'AUTO Comment', 'auto_comment'), onClicked('#auto_AddFriend', 'AUTO Add Friends', 'auto_addfriends'), onClicked('#auto_Follow', 'AUTO Theo d??i', 'auto_follow'), onClicked('#auto_UpComment', 'AUTO Uptop b??i vi???t', 'auto_uptop'), onClicked('#auto_InvitedEvent', 'M???i b???n b?? tham gia s??? ki???n', 'auto_invitedevent')
    },
    ClickCode: function() {
        onClicked('#code_Image', 'T???o n??t Play d???ng Video', 'code_image'), onClicked('#code_Encode', 'Encode JS C?? B???n', 'code_encode'), onClicked('#code_CSSMinify', 'R??t g???n CSS - CSS Minifier', 'code_cssminify'), onClicked('#code_JSMinify', 'R??t g???n JS - JS Minifier', 'code_jsminify'), onClicked('#code_RandomString', 'T???o v??n b???n ng???u nhi??n', 'code_randomstring'), onClicked('#code_LiveStream', 'Live Stream Facebook tr??n PC', 'code_livestream')
    }
}, timeout_array = [], timer = {
    count_down: function(c, a, f, q, g) {
        return -1 === f && (a--, f = 59), -1 === a && (c--, a = 59), -1 == c ? (clearTimeout(timeout), g(), !1) : ($('#' + q).text(init.addZero(c) + ':' + init.addZero(a) + ':' + init.addZero(f)), void((timeout = setTimeout(function() {
            f--, timer.count_down(c, a, f, q, g)
        }, 1e3))))
    },
    count_down_array: function(c, a, f, q, g, j) {
        return -1 === f && (a--, f = 59), -1 === a && (c--, a = 59), -1 == c ? (clearTimeout(timeout_array[g]), j(), !1) : ($('#' + q).text(init.addZero(c) + ':' + init.addZero(a) + ':' + init.addZero(f)), void((timeout_array[g] = setTimeout(function() {
            f--, timer.count_down_array(c, a, f, q, g, j)
        }, 1e3))))
    }
}, run.main())