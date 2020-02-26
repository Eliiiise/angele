
var song = [];
tpl_song= $('.musics').html();

function get_song() {
    $.ajax({
        url: `https://mmi.univ-smb.fr/~valloire/angele/song.php`,
        dataType: 'json',
        type: 'GET',
    }).done(function(response) {
        song=response.data;
        console.log(song);
        display_song(song);
    });
}

function display_song(song) {
    for (const prop in song){
        $('.musics').html(Mustache.render(tpl_song, {song : song}));
    }
    select();
    like();
    play();
    stop();
}

get_song();







