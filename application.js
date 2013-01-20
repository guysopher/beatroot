
$(function(){
    $('#menu li a').click(function(){
        $('html, body').animate({
            scrollTop: $($(this).attr('href')).offset().top
        }, 1000);
    })

    $("#jquery_jplayer_1").jPlayer({
        ready: function () {
            $(this).jPlayer({
                swfPath: '../js',
                solution: 'html, flash',
                supplied: 'm4a, oga',
                preload: 'metadata',
                volume: 0.8,
                muted: false,
                backgroundColor: '#000000',
                cssSelectorAncestor: '#jp_container_1',
                cssSelector: {
                    videoPlay: '.jp-video-play',
                    play: '.jp-play',
                    pause: '.jp-pause',
                    stop: '.jp-stop',
                    seekBar: '.jp-seek-bar',
                    playBar: '.jp-play-bar',
                    mute: '.jp-mute',
                    unmute: '.jp-unmute',
                    volumeBar: '.jp-volume-bar',
                    volumeBarValue: '.jp-volume-bar-value',
                    volumeMax: '.jp-volume-max',
                    currentTime: '.jp-current-time',
                    duration: '.jp-duration',
                    fullScreen: '.jp-full-screen',
                    restoreScreen: '.jp-restore-screen',
                    repeat: '.jp-repeat',
                    repeatOff: '.jp-repeat-off',
                    gui: '.jp-gui',
                    noSolution: '.jp-no-solution'
                },
                errorAlerts: false,
                warningAlerts: false
            })
            .jPlayer("setMedia", {
                mp3: "resources/AyAy.mp3"
            });
        },
        swfPath: "/js",
        supplied: "mp3"
    });

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
            "-webkit-transform": "rotate(" + ($(this).scrollTop() / 5) + "deg)",
            "-moz-transform": "rotate(" + ($(this).scrollTop() / 5) + "deg)"
        });
    });

    $('.wrapper').fadeIn();
});
