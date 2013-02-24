
$(function(){
    $('#menu li a').click(function(){
        item = $(this).attr('href');
        if ($(item).is(":visible")) return false;

        $("#menu li a").removeClass('selected');
        $(this).addClass('selected');

        $(".section").fadeOut(500, function(){
            if ($(this)[0] == $(item)[0]) {
                $(this).delay(500).fadeIn(500);
                resize();
            }
        });
        return false;
    })

//    $("#jquery_jplayer_1").jPlayer({
//        ready: function () {
//            $(this).jPlayer({
//                swfPath: '../js',
//                solution: 'html, flash',
//                supplied: 'm4a, oga',
//                preload: 'metadata',
//                volume: 0.8,
//                muted: false,
//                backgroundColor: '#000000',
//                cssSelectorAncestor: '#jp_container_1',
//                cssSelector: {
//                    videoPlay: '.jp-video-play',
//                    play: '.jp-play',
//                    pause: '.jp-pause',
//                    stop: '.jp-stop',
//                    seekBar: '.jp-seek-bar',
//                    playBar: '.jp-play-bar',
//                    mute: '.jp-mute',
//                    unmute: '.jp-unmute',
//                    volumeBar: '.jp-volume-bar',
//                    volumeBarValue: '.jp-volume-bar-value',
//                    volumeMax: '.jp-volume-max',
//                    currentTime: '.jp-current-time',
//                    duration: '.jp-duration',
//                    fullScreen: '.jp-full-screen',
//                    restoreScreen: '.jp-restore-screen',
//                    repeat: '.jp-repeat',
//                    repeatOff: '.jp-repeat-off',
//                    gui: '.jp-gui',
//                    noSolution: '.jp-no-solution'
//                },
//                errorAlerts: false,
//                warningAlerts: false
//            })
//            .jPlayer("setMedia", {
//                mp3: "resources/AyAy.mp3"
//            });
//        },
//        swfPath: "/js",
//        supplied: "mp3"
//    });

    $('div.jp-title ul li').click(function(){
        $(this).siblings().removeClass("selected");
        $(this).addClass("selected");
        var filename = $(this).attr('id');
        $("#jquery_jplayer_1").jPlayer( "setMedia", {
            mp3: "resources/" + filename + '.mp3'
        }).jPlayer("play");
    });

    $('div.music .item a').click(function(){
        $('div.jp-title ul li#' + $(this).attr('songid')).click();
    });

    $(window).scroll(function() {
        $(".logo").css({
            "-webkit-transform": "rotate(" + ($(this).scrollTop() / 10) + "deg)",
            "-moz-transform": "rotate(" + ($(this).scrollTop() / 10) + "deg)"
        });
    });

    resize();

    $('.wrapper').fadeIn();
});

$(window).resize(function(){
    resize();
});

function resize(){
    wWidth = $(window).width();
    wHeight = $(window).height();
    sWidth = Math.min(Math.max(400, (wWidth - 700)), 960);
    $('.section').css({
        width: sWidth + 'px'
    });
    if (sWidth > 600){
        vWidth = (sWidth / 2) - 14;
        sHeight = Math.ceil($('#videos').find('.item .video').length / 2);
    }else{
        vWidth = (sWidth) - 10;
        sHeight = Math.ceil($('#videos').find('.item .video').length);
    }
    $('#videos').find('.item .video').css({
        width: vWidth,
        height: vWidth * 3 / 4,
    }).parent().css({
        float: 'left',
        margin: '5px',
        width: vWidth,
        height: vWidth * 3 / 4,
        border: '1px solid #333',
        padding: 0,
        overflow: 'hidden',
    }).parent().css({
        height:  26 + sHeight * vWidth * 3 / 4,
    });

    $('#music').find('.item .sc-trackslist').css({
        width: (sWidth - 270) + 'px'
    });

    if (!$('#streams').html()){
        $('#streams').html('<a style="margin:10px;" class="twitter-timeline" data-dnt="true" width="300" height="' + parseInt((wHeight/2)-60) + '" href="https://twitter.com/BeatrootNews" data-widget-id="302822508762107904">Tweets by @BeatrootNews</a>' +
        '<div style="margin:10px 0;" class="fb-like-box" data-href="http://www.facebook.com/beatrootofficial" data-height="' + parseInt((wHeight/2)-60) + '" data-width="300" data-show-faces="true" data-colorscheme="dark" data-stream="true" data-header="true"></div>');
    }

}