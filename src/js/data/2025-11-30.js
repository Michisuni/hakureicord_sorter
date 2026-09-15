// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2025-11-30";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Goons", tooltip: "Goons", key: "goon" },
      { name: "VC Gang", tooltip: "I guess", key: "vc" },
      { name: "Artists", tooltip: "Those who draw, you should too", key: "draw" },
    ]
  },
  {
    name: "Filter by Continent of Residence",
    key: "stage",
    tooltip: "Check this to restrict to members to their continent of residence.",
    checked: false,
    sub: [ { name: "Americas", key: "am" }, { name: "Europe", key: "eu" }, { name: "Asia", key: "as" }, { name: "Poland", key: "po"}
    ]
  },
  {
    name: "Remove Alts",
    key: "alt",
    tooltip: "Check this to remove alt accounts."
  },
  {
    name: "Remove Former-Members",
    key: "notonserver",
    tooltip: "Check this to remove all members who left.",
    checked: false
  },
  {
    name: "Remove Nameless Characters",
    key: "nameless",
    tooltip: "Check this to remove all characters without canonical names.",
    checked: false
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Roger",
    username: "fluffy.ellen",
    img: "roger.png",
    opts: {
      series: [ "goon", "draw" ],
      stage: ["eu"]
    }
  },
  {
    name: "Gnolf",
    username: "gnolf",
    img: "gnolf.png",
    opts: {
      series: ["draw"],
      stage: ["eu"]
    }
  },
  {
    name: "Hunja",
    username: "hunja10",
    img: "hunja.png",
    opts: {
      series: [ ],
      stage: ["eu"]
    }
  },
  {
    name: "AALLEEXX",
    username: "legoproalex",
    img: "alex.png",
    opts: {
      series: [ ],
      stage: []
    },
  },
  {
    name: "Aya with A Fez",
    username: "michisuni",
    img: "michisuni.png",
    opts: {
      series: ["draw"],
      stage: ["sa"]
    },
  },
  {
    name: "AwesomeGaryOMG",
    username: "awesomegaryomg",
    img: "gary.png",
    opts: {
      series: [],
      stage: ["am"]
    },
  },
  {
    name: "Cheddar",
    username: "the_cheddar",
    img: "cheddar.png",
    opts: {
      series: [],
      stage: []
    },
  },
  {
    name: "Deesaster",
    username: "deesaster",
    img: "deesaster.png",
    opts: {
      series: [],
      stage: ["eu"]
    },
  },
  {
    name: "Kratzzi",
    img: "kratzzi.png",
    opts: {
      series: [],
      stage: ["am"],
      notonserver: true
    },
  },
  {
    name: "uwo",
    username: "kaizoner",
    img: "uwo.png",
    opts: {
      series: ["goon", "draw"],
      stage: ["am"]
    },
  },
  {
    name: "e.j",
    username: "e.j_",
    img: "ej.png",
    opts: {
      series: ["goon", "draw"],
      stage: ["as"]
    },
  },
  {
    name: "Matte",
    username: "matte_vevo",
    img: "matte.png",
    opts: {
      series: [ "goon", "draw" ],
      stage: ["eu"]
    }
  },
  {
    name: "neisbor",
    username: "neisbor",
    img: "neisbor.png",
    opts: {
      series: ["goon", "draw"],
      stage: ["sa"]
    },
  },
  {
    name: "Definitely Not Cris",
    username: "definitelynotcris",
    img: "axel.png",
    opts: {
      series: ["vc"],
      stage: ["am"]
    },
  },
  {
    name: "Green",
    username: "greenasukaofficial",
    img: "green.png",
    opts: {
      series: ["vc", "draw"],
      stage: ["am"]
    }
  },
  {
    name: "Jpeg",
    username: "utsuho._reiuji",
    img: "jpeg.gif",
    opts: {
      series: ["vc", "draw"],
      stage: ["am"]
    }
  },
  {
    name: "Clown",
    username: "mysillygame",
    img: "clown.png",
    opts: {
      series: ["vc", "draw"],
      stage: ["eu", "po"]
    }
  },
  {
    name: "KitKatFumo",
    username: "kitkatfumo",
    img: "kitkatfumo.png",
    opts: {
      series: ["vc"],
      stage: ["am"]
    }
  },
  {
    name: "lawrence",
    username: "corpsekitsune",
    img: "lawrence.gif",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "lilihahattl",
    username: "lilihahattl",
    img: "lilith.png",
    opts: {
      series: [],
      stage: ["as"]
    }
  },
  {
    name: "Master106",
    username: "master106yay",
    img: "master.png",
    opts: {
      series: ["draw"],
      stage: ["am"]
    }
  },
  {
    name: "raisin",
    username: "parousia_",
    img: "raisin.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "Sean the Builder",
    username: "seanthebuilder",
    img: "sean.png",
    opts: {
      series: [],
      stage: ["as"]
    }
  },
  {
    name: "Toso",
    username: "tosoju",
    img: "toso.png",
    opts: {
      series: [],
      stage: ["am"]
    }
  },
  {
    name: "madensuyu",
    username: "_madensuyu_",
    img: "madensuyu.png",
    opts: {
      series: ["draw"],
      stage: ["eu", "as"]
    }
  },
  {
    name: "Alise",
    username: "alise7716",
    img: "alise.png",
    opts: {
      series: [],
      stage: ["as"]
    }
  },
  {
    name: "BlackHole",
    username: "blackhole.2482",
    img: "blackhole.png",
    opts: {
      series: ["draw"],
      stage: ["eu"]
    }
  },
  {
    name: "Timur Glazkov",
    username: "timurglazkov",
    img: "timur.png",
    opts: {
      series: [],
      stage: ["eu"]
    }
  },
  {
    name: "Chris The Clip",
    username: "christheclip",
    img: "clip.png",
    opts: {
      series: [],
      stage: ["as"]
    }
  },
  {
    name: "DANTEH",
    username: "steafyheaster",
    img: "danteh.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "UglyZilla",
    username: "imyuukakazami",
    img: "zilla.png",
    opts: {
      series: [],
      stage: ["as", "eu"]
    }
  },
  {
    name: "Lime Gaming",
    username: "limegaming",
    img: "lime.png",
    opts: {
      series: ["vc"],
      stage: ["am"]
    }
  },
  {
    name: "Phyto",
    username: "phyto",
    img: "phyto.png",
    opts: {
      series: [],
      stage: ["am"]
    }
  },
  {
    name: "Asia Noct",
    username: "asia_noct",
    img: "noct.png",
    opts: {
      series: [],
      stage: ["as"]
    }
  },
  {
    name: "Azter (Soku antagonist)",
    username: "az_ter",
    img: "azter.png",
    opts: {
      series: [],
      stage: ["eu", "po"]
    }
  },
  {
    name: "Bepo",
    username: "bepo.exe",
    img: "bepo.png",
    opts: {
      series: ["draw"],
      stage: []
    }
  },
  {
    name: "Nas88",
    username: "nas_88",
    img: "nas.png",
    opts: {
      series: ["draw"],
      stage: ["eu"]
    }
  },
  {
    name: "FunnyMan",
    username: ".shrimpleton",
    img: "funnyman.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "AsiateVonNebenAn",
    username: "asiatevonnebenan",
    img: "asiate.png",
    tooltip: "Banned.",
    opts: {
      series: [],
      stage: ["eu", "as"],
      notonserver: true
    }
  },
  {
    name: "Cornboi",
    username: "cornboi7413",
    img: "cornboi.png",
    opts: {
      series: [],
      stage: ["am"],
      notonserver: true
    }
  },
  {
    name: "prdgy",
    username: "teamugi2007",
    img: "prdgy.png",
    opts: {
      series: [],
      stage: ["eu"],
      notonserver: true
    }
  },
  {
    name: "Karsren",
    username: "kasrendekku",
    img: "karsren.png",
    opts: {
      series: [],
      stage: [],
      notonserver: true
    }
  },
  {
    name: "Chip",
    username: "sir.chip",
    img: "chip.png",
    opts: {
      series: [],
      stage: ["am"],
      notonserver: true
    }
  },
  {
    name: "Kuno",
    username: "kunossanary",
    img: "kuno.png",
    opts: {
      series: [],
      stage: [],
      notonserver: true
    }
  },
  {
    name: "Pichu",
    username: "shuna.03",
    img: "pichu.png",
    tooltip: "Asiate's Alt.",
    opts: {
      series: [],
      stage: ["eu", "as"],
      notonserver: true,
      alt: true
    }
  },
  {
    name: "Hardfeed",
    username: "hardfeed",
    img: "hardfeed.png",
    opts: {
      series: [],
      stage: [],
      notonserver: true
    }
  },
  {
    name: "72Here",
    username: "trench_coat_button",
    img: "72.png",
    opts: {
      series: [],
      stage: ["am"] 
    }
  },
  {
    name: "Hiroki",
    username: "hirokiej",
    img: "hiroki.png",
    opts: {
      series: [],
      stage: ["eu", "po"] 
    }
  },
  {
    name: "JJante",
    username: "jjanteyt",
    img: "jjante.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "Kyo",
    username: "_natthenatty(constantly changes)",
    img: "kyo.png",
    opts: {
      series: [],
      stage: ["am"] 
    }
  },
  {
    name: "TheBakaCirno",
    username: "thebakacirno",
    img: "thebakacirno.png",
    opts: {
      series: [],
      stage: ["eu"] 
    }
  },
  {
    name: "Vistr",
    username: "vistr",
    img: "vistr.png",
    opts: {
      series: [],
      stage: ["eu", "as"] 
    }
  },
  {
    name: "Krosis",
    username: "yoshikazu__miyano",
    img: "krosis.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "ditto",
    username: "soniclover9106_",
    img: "ditto.png",
    opts: {
      series: [],
      stage: ["eu", "as"] 
    }
  },
  {
    name: "Norce",
    username: "norce4906",
    img: "norce.png",
    opts: {
      series: [],
      stage: ["eu"] 
    }
  },
  {
    name: "ecroN",
    username: "ecron5792",
    tooltip: "Norces's Alt.",
    img: "ecron.png",
    opts: {
      series: [],
      stage: ["eu"],
	  alt: true 
    }
  },
  {
    name: "Exciton",
    username: "exciton.",
    img: "exciton.png",
    opts: {
      series: [],
      stage: ["as"] 
    }
  },
  {
    name: "FerretViking",
    username: "ferretviking6969",
    img: "ferretviking.png",
    opts: {
      series: [],
      stage: ["am"] 
    }
  },
  {
    name: "Fuschy",
    username: "geheimschatten",
    img: "fuschy.png",
    opts: {
      series: [],
      stage: ["eu"] 
    }
  },
  {
    name: "Goohbye",
    username: "goohbye",
    img: "goohbye.png",
    opts: {
      series: [],
      stage: ["eu", "po"] 
    }
  },
  {
    name: "Grok",
    username: "grok",
    img: "grok.png",
    opts: {
      series: [],
      stage: ["eu"],
	  alt: true
    }
  },
  {
    name: "Galunga",
    username: "galunga_5726",
    img: "galunga.png",
    opts: {
      series: [],
      stage: ["eu"] 
    }
  },
  {
    name: "halfdaybreak",
    username: "halfdaybreak",
    img: "halfdaybreak.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "Hong Meiling",
    username: "hongmeilingofficial",
    tooltip: "Kratzzi's Alt.",
    img: "china.png",
    opts: {
      series: [],
      stage: ["am"],
	  alt: true 
    }
  },
  {
    name: "Kat_",
    username: "kat.anime",
    img: "kat.png",
    opts: {
      series: [],
      stage: ["eu", "po"]
    }
  },
  {
    name: "Lapis(Beti)",
    username: "beti9505",
    img: "beti.png",
    opts: {
      series: [],
      stage: ["eu", "po"]
    }
  },
  {
    name: "lobaceussphere",
    username: "lobaceussphere",
    img: "lobaceussphere.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "madensuyu (alt)",
    username: "kuang_quan_shui",
    img: "suyu2.png",
    opts: {
      series: [],
      stage: ["eu", "as"],
	    alt: true 
    }
  },
  {
    name: "mars946",
    username: "mars946",
    img: "mars.png",
    opts: {
      series: [],
      stage: ["sa"] 
    }
  },
  {
    name: "mir[A]",
    username: "astolfobae",
    img: "mira.png",
    opts: {
      series: [],
      stage: ["eu"] 
    }
  },
  {
    name: "Monchete99",
    username: "monchete99",
    img: "monchete99.png",
    opts: {
      series: [],
      stage: ["eu"]
    }
  },
  {
    name: "Morgan BIG NEWS !!!!",
    username: "mena_ox_",
    img: "morgan.png",
    opts: {
      series: [],
      stage: ["eu"]
    }
  },
  {
    name: "Mountainshiro",
    username: "yamashiro_takane",
    img: "mountainshiro.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "nepnep",
    username: "nepnep39",
    img: "nepnep.png",
    opts: {
      series: [],
      stage: ["eu"]
    }
  },
  {
    name: "Nintendo Hater",
    username: "evilmysillygame",
	tooltip: "Clown's alt.",
    img: "nintendohater.png",
    opts: {
      series: [],
      stage: ["eu", "po"],
	  alt: true
    }
  },
  {
    name: "notgunz",
    username: "notgunz",
    img: "notgunz.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "pandakekok9",
    username: "pandakekok9",
    img: "panda.png",
    opts: {
      series: [],
      stage: ["as"] 
    }
  },
  {
    name: "sex",
    username: "sexhaver21",
	tooltip: "E.j's alt.",
    img: "sex.png",
    opts: {
      series: [],
      stage: ["as"],
	  alt: true
    }
  },
  {
    name: "Sleepless(火影)",
    username: "sleepless0293",
    img: "sleepless.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "Sneakers O'Toole",
    username: "spoonfullofsmug",
    img: "spoon.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "still life",
    username: "bkreiofficial",
	tooltip: "Green's alt.",
    img: "stilllife.png",
    opts: {
      series: [],
      stage: ["am"],
	  alt: true 
    }
  },
  {
    name: "suchigninque",
    username: "suchigninque",
	tooltip: "Matte's alt.",
    img: "suchigninque.png",
    opts: {
      series: [],
      stage: ["eu"],
	  alt: true
    }
  },
  {
    name: "Sierra",
    username: "fapsauce",
    img: "sierra.png",
    opts: {
      series: [],
      stage: ["eu", "sa"]
    }
  },
  {
    name: "The queen of hatred",
    username: "cj4x2509",
	tooltip: "Chris the Clip's alt.",
    img: "hatred.png",
    opts: {
      series: [],
      stage: ["as"],
	    alt: true  
    }
  },
  {
    name: "the red kirk",
    username: "redkirky",
    img: "redkirk.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "Tiny",
    username: "tiny7033",
    img: "tiny.png",
    opts: {
      series: [],
      stage: []
    }
  },
  {
    name: "WoxedPL",
    username: "woxedpl",
    img: "woxed.png",
    opts: {
      series: [],
      stage: ["eu", "po"]
    }
  },
  {
    name: "yugi",
    username: "ywxv",
    img: "yugi.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "yugi (alt)",
    username: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyv",
    img: "yugi2.png",
    opts: {
      series: [],
      stage: [] 
    }
  },
  {
    name: "Zero rero rero rero",
    username: "zeroidion",
    img: "zero.png",
    opts: {
      series: [],
      stage: [] 
    }
  }
];