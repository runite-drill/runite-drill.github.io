export function eu4_builder(mod, files, gameFolder) {
  /*
  # MUSIC MOD CREATION TOOL (MMCT) for Europa Universalis 4

  # This is a script that creates the required .asset file and a basic .txt file for your Europa Universalis 4 Music Mod based on the .ogg files passed into it.
  # It will also create the localization file needed to name your music channel in the music player (EU4 v1.35 onwards).
  
  # The script will skip over any file called "maintheme" as this only replaces the loading music and is not shown in-game by the audio engine.
  # You are strongly encouraged to hop into the generated files and check that everything has been created properly. In particular, you may wish to add to the conditions in the .txt file that affect the chances of the music playing.
  
  # This script is open-source and was created by community composer Runite Drill / Utopia for ease in publishing music mods.
  # Feel free to join their music modding community and ask any questions: https://discord.gg/SdQhfBM
  
  # For more info/guide on music modding, please visit the EU4 wiki: https://eu4.paradoxwikis.com/Music_modding
  */

  const musicFolder = gameFolder.folder("music");
  const localisationFolder = gameFolder.folder("localisation");

  //Create .asset file
  const asset = [assetHeader];
  files.forEach((f) => {
    if (f.title !== "maintheme") {
      asset.push(assetDef(f));
    };
    musicFolder.file(f.name, f);
  });
  musicFolder.file(`${mod}_MMCT.asset`, asset.join('\n'));

  //Create .txt file
  const text = [textHeader];
  files.forEach((f) => {
    if (f.title !== "maintheme") {
      text.push(textDef(f));
    };
  });
  musicFolder.file(`${mod}_MMCT.txt`, text.join('\n'));

  //Create music channel .yml localization file
  localisationFolder.file(`${mod}_MMCT_l_english.yml`, locDef(mod));
};

const assetHeader = `#This file was automatically generated by the Music Mod Creation Tool (MMCT), created by Runite Drill / Utopia.
#Consider joining the music modding discord server, Utopia, if you have any questions: https://discord.gg/SdQhfBM.
#Use the Music Mod Creation Tool to generate your own music mods for all Paradox Interactive games: https://runite-drill.github.io/music-mod-creation-tool/
  
#Please confirm the output is as expected before testing in-game.
`;

function assetDef(file) {
  return `music = {
    name = "${file.title}"
    file = "${file.name}"
}\n`;
};

const textHeader = assetHeader + `
#In this file you can specify the triggers, factors and conditions in which the music will play in-game.
#Consult the music modding page on the EU4 wiki for more info: https://eu4.paradoxwikis.com/Music_modding.
`;

function textDef(file) {
  return `song = {
    name = "${file.title}"
    chance = {
        modifier = { factor = 1 }
        #modifier = { factor = 0 is_at_war = yes } #example modifier: music will not play when at war
    }
}\n`;
};

function locDef(mod) {
  return `\uFEFFl_english:\n CHANNEL_music_${mod}_MMCT:0 "${mod}"`;
};