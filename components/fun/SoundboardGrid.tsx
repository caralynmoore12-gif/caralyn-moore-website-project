"use client";
import { useRef, useState } from "react";

const items = [
  { id: "03", image: "/soundboard/images/03.png", clips: ["/soundboard/clips/03/soundboard clips_blueberries.mp3"] },
  {
    id: "01", image: "/soundboard/images/01.png",
    clips: [
      "/soundboard/clips/01/soundboard clips_jail_01.mp3",
      "/soundboard/clips/01/soundboard clips_jail_02.mp3",
      "/soundboard/clips/01/soundboard clips_jail_03.mp3",
      "/soundboard/clips/01/soundboard clips_jail_04.mp3",
      "/soundboard/clips/01/soundboard clips_jail_05.mp3",
      "/soundboard/clips/01/soundboard clips_jail_06.mp3",
      "/soundboard/clips/01/soundboard clips_jail_07.mp3",
      "/soundboard/clips/01/soundboard clips_jail_08.mp3",
      "/soundboard/clips/01/soundboard clips_jail_09.mp3",
    ],
  },
  { id: "08", image: "/soundboard/images/08.png", clips: ["/soundboard/clips/08/soundboard clips_palm springs_good leg.mp3"] },
  { id: "04", image: "/soundboard/images/04.png", clips: ["/soundboard/clips/04/soundboard clips_little women_rudest boy.mp3"] },
  {
    id: "02", image: "/soundboard/images/02.png",
    clips: [
      "/soundboard/clips/02/soundboard clips_rock facts_01.mp3",
      "/soundboard/clips/02/soundboard clips_rock facts_02.mp3",
      "/soundboard/clips/02/soundboard clips_rock facts_03.mp3",
      "/soundboard/clips/02/soundboard clips_rock facts_04.mp3",
    ],
  },
  { id: "09", image: "/soundboard/images/09.png", clips: ["/soundboard/clips/09/soundboard clips_twilight_aro laugh.mp3"] },
  { id: "07", image: "/soundboard/images/07.png", clips: ["/soundboard/clips/07/soundboard clips_over the garden wall_aint that just the way.mp3"] },
  { id: "06", image: "/soundboard/images/06.png", clips: ["/soundboard/clips/06/soundboard clips_moonstruck_bring me the big knife.mp3"] },
  { id: "05", image: "/soundboard/images/05.png", clips: ["/soundboard/clips/05/soundboard clips_love island_text.mp3"] },
  {
    id: "codenames",
    image: "/soundboard/images/Codenames/soundboard-icons_0000s_0000_board-games.png",
    clips: [
      "/soundboard/clips/Codenames/soundboard clips_codenames_01.mp3",
      "/soundboard/clips/Codenames/soundboard clips_codenames_02.mp3",
    ],
  },
  {
    id: "final-fantasy",
    image: "/soundboard/images/Final Fantasy/soundboard-icons_0000s_0018_Final-Fantasy_Can't-Catch-a-Ball.png",
    clips: ["/soundboard/clips/Final Fantasy/soundboard clips_Final Fantasy_Can't Catch a Ball.mp3"],
  },
  {
    id: "harry-potter",
    image: "/soundboard/images/Harry Potter/soundboard-icons_0000s_0001_Harry-Potter_expelled.png",
    clips: [
      "/soundboard/clips/Harry Potter/soundboard clips_harry potter_or worse expelled_01.mp3",
      "/soundboard/clips/Harry Potter/soundboard clips_harry potter_or worse expelled_02.mp3",
    ],
  },
  {
    id: "knives-out",
    image: "/soundboard/images/Knives Out/soundboard-icons_0000s_0016_Knives-Out_nana.png",
    clips: ["/soundboard/clips/Knives Out/soundboard clips_knives out_ransom Murder Reveal_01.mp3"],
  },
  {
    id: "lotr-diversion",
    image: "/soundboard/images/Lord of the Rings - Diversion/soundboard-icons_0000s_0015_Lord-of-the-rings_diversion.png",
    clips: ["/soundboard/clips/Lord of the Rings - Diversion/soundboard clips_Lord of the Rings_a diversion_01.mp3"],
  },
  {
    id: "lotr-potatoes",
    image: "/soundboard/images/Lord of the Rings - Potatoes/soundboard-icons_0000s_0014_Lord-of-the-rings_potato.png",
    clips: [
      "/soundboard/clips/Lord of the Rings - Potatoes/soundboard clips_Lord of the Rings_Potatoes_01.mp3",
      "/soundboard/clips/Lord of the Rings - Potatoes/soundboard clips_Lord of the Rings_Potatoes_02.mp3",
      "/soundboard/clips/Lord of the Rings - Potatoes/soundboard clips_Lord of the Rings_Potatoes_03.mp3",
    ],
  },
  {
    id: "lotr-wigs",
    image: "/soundboard/images/Lord of the Rings - Wigs/soundboard-icons_0000s_0013_Lord-of-the-Rings_Wigs.png",
    clips: [
      "/soundboard/clips/Lord of the Rings - Wigs/soundboard clips_Lord of the Rings_elijah wood is asked if he wears wigs_01.mp3",
      "/soundboard/clips/Lord of the Rings - Wigs/soundboard clips_Lord of the Rings_elijah wood is asked if he wears wigs_02.mp3",
      "/soundboard/clips/Lord of the Rings - Wigs/soundboard clips_Lord of the Rings_elijah wood is asked if he wears wigs_03.mp3",
      "/soundboard/clips/Lord of the Rings - Wigs/soundboard clips_Lord of the Rings_elijah wood is asked if he wears wigs_04.mp3",
    ],
  },
  {
    id: "muffins",
    image: "/soundboard/images/Muffins/soundboard-icons_0000s_0004_Muffins.png",
    clips: [
      "/soundboard/clips/Muffins/soundboard clips_Muffins_01.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_02.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_03.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_04.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_05.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_06.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_07.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_08.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_09.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_10.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_11.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_12.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_13.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_14.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_15.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_16.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_17.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_18.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_19.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_20.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_21.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_22.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_23.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_24.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_25.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_26.mp3",
      "/soundboard/clips/Muffins/soundboard clips_Muffins_27.mp3",
    ],
  },
  {
    id: "palm-springs-doing",
    image: "/soundboard/images/Palm Springs_What are we doing/soundboard-icons_0004_what-are-we-doing.png",
    clips: ["/soundboard/clips/Palm Springs_What are we doing/soundboard clips_palm springs_what are we doing.mp3"],
  },
  {
    id: "david-pumpkins",
    image: "/soundboard/images/SNL - David Pumpkins/soundboard-icons_0000s_0010_SNL_David-Pumpkins.png",
    clips: [
      "/soundboard/clips/SNL - David Pumpkins/soundboard clips_SNL_David Pumpkins_01.mp3",
      "/soundboard/clips/SNL - David Pumpkins/soundboard clips_SNL_David Pumpkins_02.mp3",
      "/soundboard/clips/SNL - David Pumpkins/soundboard clips_SNL_David Pumpkins_03.mp3",
      "/soundboard/clips/SNL - David Pumpkins/soundboard clips_SNL_David Pumpkins_04.mp3",
    ],
  },
  {
    id: "dear-sister",
    image: "/soundboard/images/SNL - Dear Sister/soundboard-icons_0000s_0011_SNL_Dear-Sister.png",
    clips: [
      "/soundboard/clips/SNL - Dear Sister/soundboard clips_SNL_Dear Sister_01.mp3",
      "/soundboard/clips/SNL - Dear Sister/soundboard clips_SNL_Dear Sister_02.mp3",
      "/soundboard/clips/SNL - Dear Sister/soundboard clips_SNL_Dear Sister_03.mp3",
    ],
  },
  {
    id: "school-of-rock",
    image: "/soundboard/images/School of Rock - Idiot/soundboard-icons_0000s_0003_School-of-Rock_Idiot.png",
    clips: ["/soundboard/clips/School of Rock - Idiot/soundboard clips_school of rock_idiot_01.mp3"],
  },
  {
    id: "shia",
    image: "/soundboard/images/Shia Labeouf/soundboard-icons_0000s_0002_Shia-LaBeouf.png",
    clips: [
      "/soundboard/clips/Shia Labeouf/soundboard clips_Shia LaBeouf_01.mp3",
      "/soundboard/clips/Shia Labeouf/soundboard clips_Shia LaBeouf_02.mp3",
      "/soundboard/clips/Shia Labeouf/soundboard clips_Shia LaBeouf_03.mp3",
      "/soundboard/clips/Shia Labeouf/soundboard clips_Shia LaBeouf_04.mp3",
    ],
  },
  {
    id: "shoes",
    image: "/soundboard/images/Shoes/soundboard-icons_0000s_0012_Shoes.png",
    clips: [
      "/soundboard/clips/Shoes/soundboard clips_Shoes_01.mp3",
      "/soundboard/clips/Shoes/soundboard clips_Shoes_02.mp3",
      "/soundboard/clips/Shoes/soundboard clips_Shoes_03.mp3",
      "/soundboard/clips/Shoes/soundboard clips_Shoes_04.mp3",
      "/soundboard/clips/Shoes/soundboard clips_Shoes_05.mp3",
      "/soundboard/clips/Shoes/soundboard clips_Shoes_06.mp3",
      "/soundboard/clips/Shoes/soundboard clips_Shoes_07.mp3",
    ],
  },
  {
    id: "spongebob-granny",
    image: "/soundboard/images/Spongebob - Chocolate granny/soundboard-icons_0000s_0009_Spongebob_I-remember.png",
    clips: ["/soundboard/clips/Spongebob - Chocolate granny/soundboard clips_spongebob_I remember Chocolate_01.mp3"],
  },
  {
    id: "spongebob-chocolate",
    image: "/soundboard/images/Spongebob - Chocolate guy/soundboard-icons_0000s_0008_Spongebob_chocolate.png",
    clips: [
      "/soundboard/clips/Spongebob - Chocolate guy/soundboard clips_spongebob_Chocolate_01.mp3",
      "/soundboard/clips/Spongebob - Chocolate guy/soundboard clips_spongebob_Chocolate_02.mp3",
      "/soundboard/clips/Spongebob - Chocolate guy/soundboard clips_spongebob_Chocolate_03.mp3",
      "/soundboard/clips/Spongebob - Chocolate guy/soundboard clips_spongebob_Chocolate_04.mp3",
      "/soundboard/clips/Spongebob - Chocolate guy/soundboard clips_spongebob_Chocolate_05.mp3",
      "/soundboard/clips/Spongebob - Chocolate guy/soundboard clips_spongebob_Chocolate_06.mp3",
    ],
  },
  {
    id: "spongebob-mayo",
    image: "/soundboard/images/Spongebob - is Mayonnaise an Instrument/soundboard-icons_0000s_0007_Spongebob_mayonnaise.png",
    clips: ["/soundboard/clips/Spongebob - is Mayonnaise an Instrument/soundboard clips_spongebob_is mayonnaise an instrument_01.mp3"],
  },
  {
    id: "twilight-decisions",
    image: "/soundboard/images/Twilight - Decisions Decisions/soundboard-icons_0000s_0006_Twilight_decisions.png",
    clips: ["/soundboard/clips/Twilight - Decisions Decisions/soundboard clips_Twilight_Decisions Decisions_01.mp3"],
  },
  {
    id: "twilight-loca",
    image: "/soundboard/images/Twilight - Loca/soundboard-icons_0000s_0005_Twilight_loca.png",
    clips: ["/soundboard/clips/Twilight - Loca/soundboard clips_Twilight_loca_01.mp3"],
  },
  {
    id: "twilight-omg",
    image: "/soundboard/images/Twilight_Oh my god/soundboard-icons_0001_oh-my-god.png",
    clips: ["/soundboard/clips/Twilight_Oh my god/soundboard clips_twilight_oh my god.mp3"],
  },
];

export default function SoundboardGrid() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const indexRef = useRef<Record<string, number>>({});
  const [shuffled] = useState(() => [...items].sort(() => Math.random() - 0.5));

  const play = (item: typeof items[number]) => {
    const current = indexRef.current[item.id] ?? 0;
    const clip = item.clips[current % item.clips.length];
    indexRef.current[item.id] = (current + 1) % item.clips.length;
    const audio = audioRef.current;
    if (!audio) return;
    audio.pause();
    audio.src = clip;
    audio.play();
  };

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(160px, 1fr))",
          gap: "12px",
        }}
      >
        {shuffled.map((item) => (
          <button
            key={item.id}
            onClick={() => play(item)}
            style={{
              background: "none",
              border: "2px solid transparent",
              padding: "6px",
              cursor: "pointer",
              transition: "border-color 0.15s, transform 0.15s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = "var(--dark)";
              e.currentTarget.style.transform = "scale(1.04)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = "transparent";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            <img src={item.image} alt="" style={{ width: "100%", display: "block" }} />
          </button>
        ))}
      </div>
      <audio ref={audioRef} />
    </>
  );
}
