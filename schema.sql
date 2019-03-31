--schema.sql--
create table Top_five_songs_about_death_a_Lauras_dad_tribute_list (
    id serial primary key,
    top_five_list varchar(500),
    song varchar(200),
    artist varchar(200)
);