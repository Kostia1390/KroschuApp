// data.js
const data = [
    { id: 111, name: "Oksana Tkachuk" },
    { id: 222, name: "CPM" },
    { id: 122, name: "Anastasiia Pavlichenko" },
    { id: 125, name: "Profspilka" },
    { id: 130, name: "Marian Proniv" },
    { id: 131, name: "Tetiana Cherniavska" },
    { id: 132, name: "Mykhailo Telekalo" },
    { id: 133, name: "Oleh Liubchuk" },
    { id: 134, name: "Production Shift Leader" },
    { id: 135, name: "Cutting" },
    { id: 136, name: "VK" },
    { id: 137, name: "EPT TIGM 11,12,13,14" },
    { id: 138, name: "EPT TIGI 21,22,23,24" },
    { id: 139, name: "EPT 27, 087041" },
    { id: 140, name: "Skoda 087002" },
    { id: 141, name: "Andrii Zaverukha" },
    { id: 142, name: "S33K" },
    { id: 143, name: "EPT 087008 M" },
    { id: 144, name: "SK316 MRA" },
    { id: 145, name: "Sviatoslav Hlushniuk" },
    { id: 146, name: "Denys Zaitsev" },
    { id: 147, name: "Maintenance Office" },
    { id: 148, name: "Volodymyr Denysiuk" },
    { id: 149, name: "Tool Room" },
    { id: 150, name: "Maintenance" },
    { id: 151, name: "Chystolis" },
    { id: 152, name: "MAN 087048" },
    { id: 153, name: "Cutting SF" },
    { id: 154, name: "MAN SF" },
    { id: 155, name: "Vadym Rudnytskyi" },
    { id: 156, name: "Anna Koven" },
    { id: 157, name: "EPT TIGI 24, 25" },
    { id: 158, name: "MAN 087063" },
    { id: 159, name: "V37M Production" },
    { id: 450, name: "21TIGI" },
    { id: 451, name: "22TIGI" },
    { id: 452, name: "316K-087009" },
    { id: 453, name: "EPT 087807 I" },
    { id: 454, name: "SK316" },
    { id: 455, name: "EPT MAN 087044" },
    { id: 456, name: "Musterbau" },
    { id: 457, name: "Nadiia Pryshchepa" },
    { id: 458, name: "087027 line" },
    { id: 471, name: "EPT 087045" },
    { id: 472, name: "EPT 316K" },
    { id: 473, name: "Alina Tkachenko" },
    { id: 474, name: "Yurii Ozhgo" },
    { id: 449, name: "MRM SK316" },
    { id: 161, name: "Sergii Sokolchuk" },
    { id: 162, name: "Oksana Gryban" },
    { id: 163, name: "Maksym Polishchuk" },
    { id: 164, name: "Olena Makarchuk" },
    { id: 165, name: "KIT Tiguan" },
    { id: 166, name: "Yana Sydorchuk" },
    { id: 167, name: "Maryna Mezentseva" },
    { id: 168, name: "Yuliia Shpet" },
    { id: 169, name: "Natalia Dyvak" },
    { id: 170, name: "Oleksii Oksanich" },
    { id: 171, name: "Oleksandr Korinchuk" },
    { id: 172, name: "Yuliia Kurylenko" },
    { id: 173, name: "Iryna Denysenko" },
    { id: 174, name: "Warehouse of overalls" },
    { id: 175, name: "Oleksii Kyryliuk" },
    { id: 176, name: "KSUZ-Pagoda" },
    { id: 177, name: "Yuliia Sych" },
    { id: 178, name: "Olha Beketova" },
    { id: 179, name: "Olha Melnyk" },
    { id: 180, name: "Lager" },
    { id: 181, name: "Versand" },
    { id: 182, name: "Artur Nurme" },
    { id: 183, name: "Vitalii Luniaka" },
    { id: 184, name: "Oleksandra Zhydetska" },
    { id: 185, name: "Taras Uschchapovskyi" },
    { id: 186, name: "Dmytro Stepanytskyi" },
    { id: 187, name: "Anatolii Kosiakevych" },
    { id: 188, name: "Svitlana Vikarchuk" },
    { id: 189, name: "Oleksandr Matviienko" },
    { id: 431, name: "Serhii Smoliuk" },
    { id: 433, name: "BGVK" },
    { id: 434, name: "Kateryna Korinchuk" },
    { id: 435, name: "Olha Kovalchuk" },
    { id: 436, name: "Maksym Nonik" },
    { id: 437, name: "Vasyl Yukhymchuk" },
    { id: 438, name: "Vita Ivaniuk" },
    { id: 439, name: "Anatoliy Sapinskyi" },
    { id: 190, name: "Financial" },
    { id: 191, name: "Alina Lavreniuk" },
    { id: 192, name: "Anastasiia Levytska" },
    { id: 193, name: "Ganna Korobenko" },
    { id: 194, name: "Vita Snihurivska" },
    { id: 195, name: "Olha Skrynzhevska" },
    { id: 196, name: "Iryna Rybak" },
    { id: 197, name: "Nataliia Havryliuk" },
    { id: 199, name: "KSUZ-Bank" },
    { id: 200, name: "Olena Talko" },
    { id: 201, name: "Maksym Kuliavyk" },
    { id: 202, name: "Irena Tsivinska" },
    { id: 204, name: "Conferens 8832 - 2nd floor" },
    { id: 205, name: "Conference room CPM" },
    { id: 206, name: "Conference room TPM" },
    { id: 207, name: "Conference room 3rd floor" },
    { id: 208, name: "HR-Training" },
    { id: 209, name: "Conference 8832" },
    { id: 210, name: "Tetyana Onischuk" },
    { id: 211, name: "Maksym Vasyliev" },
    { id: 212, name: "SFQS SchVK" },
    { id: 213, name: "Oleksandr Savchuk" },
    { id: 214, name: "Valentyna Zakhleniuk" },
    { id: 215, name: "QSSF SK316" },
    { id: 216, name: "AP-Team" },
    { id: 217, name: "QS WE" },
    { id: 218, name: "QS LAB" },
    { id: 219, name: "QS AU" },
    { id: 220, name: "Maryna Rybak" },
    { id: 221, name: "Nataliia Polishchuk" },
    { id: 223, name: "Oleg Zakhleniuk" },
    { id: 224, name: "Nataliia V. Matviichuk" },
    { id: 225, name: "SFQS TIG" },
    { id: 226, name: "Vitalii Petukhov" },
    { id: 227, name: "SFQS MAN" },
    { id: 228, name: "Svitlana Patsap" },
    { id: 229, name: "Svitlana Milevska" },
    { id: 230, name: "Oleksandr Pasichnyk" },
    { id: 231, name: "Oleksandr Slovinskyi" },
    { id: 232, name: "Oleksandra Dykun" },
    { id: 233, name: "Svitlana Nemanii" },
    { id: 240, name: "Viktoriia Ivasenko" },
    { id: 241, name: "Volodymyr Druz" },
    { id: 242, name: "Yuliia Savitska" },
    { id: 243, name: "Vadym Stavinskyi" },
    { id: 244, name: "Anastasiia Podust" },
    { id: 245, name: "Oleksandr Ivasenko" },
    { id: 246, name: "Nataliia Starychenko" },
    { id: 247, name: "Roman Zabolotnyi" },
    { id: 248, name: "Ivan Pokydko" },
    { id: 249, name: "PMB VA" },
    { id: 250, name: "PMB" },
    { id: 252, name: "Anastasiia Adamenko" },
    { id: 253, name: "Iryna Sych" },
    { id: 254, name: "Maksym Satanin" },
    { id: 255, name: "Carpenters" },
    { id: 256, name: "Lawyers" },
  { id: 257, name: "Anna Vehera" },
  { id: 258, name: "Nataliia Bolshaia" },
  { id: 259, name: "Iryna Ilyk" },
  { id: 261, name: "Serhii Kos" },
  { id: 262, name: "Iryna Pushkina" },
  { id: 264, name: "Nataliia Gerasymchuk" },
  { id: 265, name: "Yuliia Tkachuk" },
  { id: 266, name: "Viktoriia Lazarieva" },
  { id: 267, name: "Nataliia Dorofeieva" },
  { id: 268, name: "Iryna Kolomiiets" },
  { id: 269, name: "HR info" },
  { id: 270, name: "Svitlana Levina" },
  { id: 271, name: "Sergii Drobotun" },
  { id: 273, name: "Tetiana Pliusnina" },
  { id: 274, name: "Svitlana Samoilenko" },
  { id: 276, name: "Yaroslav Tsurkan" },
  { id: 277, name: "Sergii Liulevych" },
  { id: 278, name: "KSUZ Medical" },
  { id: 279, name: "Olga Boldysko" },
  { id: 280, name: "Vitalii Protasevych" },
  { id: 281, name: "Iryna Kravchenko" },
  { id: 282, name: "Oksana Sivozdrav" },
  { id: 283, name: "Archive" },
  { id: 284, name: "Vita Ivashkevych" },
  { id: 285, name: "Svitlana Dosova" },
  { id: 286, name: "Tetiana Hultiaieva" },
  { id: 287, name: "Nataliia Vanat" },
  { id: 288, name: "Social workers" },
  { id: 289, name: "Nataliia Huzii" },
  { id: 290, name: "Yuliia Koshak" },
  { id: 291, name: "87012" },
  { id: 292, name: "Mykola Shapochka" },
  { id: 293, name: "Maryna Romanova" },
  { id: 294, name: "Liudmyla Kashperuk" },
  { id: 295, name: "Oleksandr Andrusenko" },
  { id: 296, name: "EPT 087811 B" },
  { id: 400, name: "Oleksandr Boialskyi" },
  { id: 401, name: "Roman Dardalevych" },
  { id: 402, name: "Yaroslav Chovniuk" },
  { id: 403, name: "IE TV/CAD MAN" },
  { id: 404, name: "Viacheslav Novytskyi" },
  { id: 406, name: "Oleksandr Klymenko" },
  { id: 407, name: "Dmitro Losik" },
  { id: 408, name: "Ruslan Mustafaiev" },
  { id: 409, name: "Serhii Ostapchuk" },
  { id: 410, name: "NHMR IE" },
  { id: 411, name: "Kateryna Mostova" },
  { id: 412, name: "Serhii Kravets" },
  { id: 413, name: "Oleksandr Boiko" },
  { id: 414, name: "Andrii Panchuk" },
  { id: 415, name: "Maksym Polivanchuk" },
  { id: 416, name: "Iryna Pryshchepchuk" },
  { id: 417, name: "Vitalii Yevpak" },
  { id: 418, name: "Andrii Svitselskyi" },
  { id: 419, name: "Pavlo Sereda" },
  { id: 420, name: "Kostiantyn Vashchenko" },
  { id: 459, name: "Hrynchuk, Kateryna" },
  { id: 460, name: "Voitsytskyi Maksym" },
  { id: 461, name: "Yanovych Denys" },
  { id: 462, name: "Gorbaliuk, Andrii" },
  { id: 463, name: "Sych, Pavlo" },
  { id: 464, name: "Panchenko, Dariia" },
  { id: 465, name: "Avramenko, Yurii" },
  { id: 466, name: "Merchuk Svitlana" },
  { id: 467, name: "N/A" },
  { id: 468, name: "Baranivskyi Vadym" },
  { id: 469, name: "Holovanov, Oleh" },
  { id: 470, name: "Rybachok/Kravets" }
  ];
  
  export default data;
  