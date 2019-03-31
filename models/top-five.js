const db = require('./conn');

class TopFive {
    constructor(id, top_five_list, song, artist) {
        this.id = id;
        this.topFiveList = top_five_list;
        this.song = song;
        this.artist = artist;
    }

    static getById(id) {
        const table = 'Top_five_songs_about_death_a_Lauras_dad_tribute_list';
        return db.one(`select * from ${table} where id=${id}`)
            .then((musicData) => {
                const musicInstance = new TopFive(
                                      musicData.id,
                                      musicData.topFiveList,
                                      musicData.song,
                                      musicData.artist
                                      );
                return musicInstance;
            })
            .catch(() => {
                return null;
            });
    }
    static getAll() {
        const table = 'Top_five_songs_about_death_a_Lauras_dad_tribute_list';
        return db.any(`select * from ${table}`)
            .then((arrayOfMusic) => {
                return arrayOfMusic.map((musicData) => {
                    const musicList = new TopFive (
                                      musicData.id,
                                      musicData.topFiveList,
                                      musicData.song,
                                      musicData.artist
                                      );
                    console.log(musicList);
                    return musicList;
                });
            })
            .catch(() => {
                return null;
            });
    }
    save() {
        const table = 'Top_five_songs_about_death_a_Lauras_dad_tribute_list';
        return db.result(`update ${table} set
                            top_five_list=${this.topFiveList},
                            song=${this.song},
                            artist=${this.artist},
                        where id=${this.id}
                        `);
    }
}

module.exports = TopFive;