// dataSetVersion = "2019-11-26"; // Change this when creating a new data set version. YYYY-MM-DD format.
dataSetVersion = "2026-09-15";
dataSet[dataSetVersion] = {};

dataSet[dataSetVersion].options = [
  {
    name: "Filter by Series Entry",
    key: "series",
    tooltip: "Check this to restrict to certain series.",
    checked: false,
    sub: [
      { name: "Goons", tooltip: "Goons", key: "goon" },
      { name: "Nocts", tooltip: "Nocts", key: "noct" },
      { name: "Artists", tooltip: "Those who draw, you should too", key: "draw" },
      { name: "Jpeg's Gang", tooltip: "Jpeg's Gang", key: "gang" },
      { name: "Hakureicorders", tooltip: "People who are or once were on the Hakurei r/place server", key: "hakureicorder" },
      { name: "Maincorders", tooltip: "Maincord people from maincord who were never on hakurei r/place", key: "maincorder" },
    ]
  }, 
  {
    name: "Filter by Join Date",
    key: "date",
    tooltip: "Check this to restrict to members by their join date.",
    checked: false,
    sub: [ { name: "22er", key: "22" }, { name: "23er", key: "23" }, { name: "Nonplacer (24+)", key: "24" }
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
    name: "Remove Irrelevant people",
    key: "who",
    tooltip: "Random kid.",
  }
];

dataSet[dataSetVersion].characterData = [
  {
    name: "Roger",
    username: "fluffy.ellen",
    img: "roger.png",
    opts: {
      series: ["goon", "draw", "hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Gnolf",
    username: "gnolf",
    img: "gnolf.png",
    opts: {
      series: ["draw", "hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Hunja",
    username: "hunja10",
    img: "hunja.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "AALLEEXX",
    username: "legoproalex",
    img: "alex.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    },
  },
  {
    name: "Aya with A Fez",
    username: "michisuni",
    img: "michisuni.png",
    opts: {
      series: ["noct", "draw", "hakureicorder"],
	  date: ["22"],
    },
  },
  {
    name: "AwesomeGaryOMG",
    username: "awesomegaryomg",
    img: "gary.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    },
  },
  {
    name: "Cheddar",
    username: "the_cheddar",
    img: "cheddar.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    },
  },
  {
    name: "Deesaster",
    username: "deesaster",
    img: "deesaster.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    },
  },
  {
    name: "Kratzzi",
    username: "kratzzi",
    img: "kratzzi.png",
    opts: {
      series: ["noct", "hakureicorder"],
	  date: ["23"],
      notonserver: true
    },
  },
  {
    name: "uwo",
    username: "kaizoner",
    img: "uwo.png",
    opts: {
      series: ["goon", "draw", "hakureicorder"],
	  date: ["24"],
    },
  },
  {
    name: "e.j",
    username: "e.j_",
    img: "ej.png",
    opts: {
      series: ["goon", "draw", "hakureicorder"],
	  date: ["23"],
    },
  },
  {
    name: "Matte",
    username: "matte_vevo",
    img: "matte.png",
    opts: {
      series: ["goon", "draw", "hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "neisbor",
    username: "neisbor",
    img: "neisbor.png",
    opts: {
      series: ["goon", "draw", "hakureicorder"],
	  date: ["24"],
    },
  },
  {
    name: "Cato",
    username: "cato1487",
    img: "cato.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Definitely Not Cris",
    username: "definitelynotcris",
    img: "axel.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["23"],
    },
  },
  {
    name: "Green",
    username: "greenasukaofficial",
    img: "green.png",
    opts: {
      series: ["gang", "draw", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Jpeg",
    username: "utsuho._reiuji",
    img: "jpeg.gif",
    opts: {
      series: ["gang", "draw", "hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Clown",
    username: "mysillygame",
    img: "clown.png",
    opts: {
      series: ["gang", "draw", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "KitKatFumo",
    username: "kitkatfumo",
    img: "kitkatfumo.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "lawrence",
    username: "corpsekitsune",
    img: "lawrence.gif",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "lilihahattl",
    username: "lilihahattl",
    img: "lilith.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Master106",
    username: "master106yay",
    img: "master.png",
    opts: {
      series: ["draw", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "raisin",
    username: "parousia_",
    img: "raisin.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Sean the Builder",
    username: "seanthebuilder",
    img: "sean.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Toso",
    username: "tosoju",
    img: "toso.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "madensuyu",
    username: "_madensuyu_",
    img: "madensuyu.png",
    opts: {
      series: ["noct", "draw", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Alise",
    username: "alise7716",
    img: "alise.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "BlackHole",
    username: "blackhole.2482",
    img: "blackhole.png",
    opts: {
      series: ["draw", "hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Timur Glazkov",
    username: "timurglazkov",
    img: "timur.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Chris The Clip",
    username: "christheclip",
    img: "clip.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "DANTEH",
    username: "steafyheaster",
    img: "danteh.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "UglyZilla",
    username: "imyuukakazami",
    img: "zilla.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Lime Gaming",
    username: "limegaming",
    img: "lime.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "Phyto",
    username: "phyto",
    img: "phyto.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Asia Noct",
    username: "asia_noct",
    img: "noct.png",
    opts: {
      series: ["noct", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Azter (Soku antagonist)",
    username: "az_ter",
    img: "azter.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Bepo",
    username: "bepo.exe",
    img: "bepo.png",
    opts: {
      series: ["draw", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Nas88",
    username: "nas_88",
    img: "nas.png",
    opts: {
      series: ["draw", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "FunnyMan",
    username: ".shrimpleton",
    img: "funnyman.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "AsiateVonNebenAn",
    username: "asiatevonnebenan",
    img: "asiate.png",
    tooltip: "Banned.",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
      notonserver: true
    }
  },
  {
    name: "Cornboi",
    username: "cornboi7413",
    img: "cornboi.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
      notonserver: true
    }
  },
  {
    name: "prdgy",
    username: "teamugi2007",
    img: "prdgy.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
      notonserver: true
    }
  },
  {
    name: "Karsren",
    username: "kasrendekku",
    img: "karsren.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
      notonserver: true
    }
  },
  {
    name: "Chip",
    username: "sir.chip",
    img: "chip.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
      notonserver: true
    }
  },
  {
    name: "Kuno",
    username: "kunossanary",
    img: "kuno.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
      notonserver: true,
	  who: true
    }
  },
  {
    name: "Pichu",
    username: "shuna.03",
    img: "pichu.png",
    tooltip: "Asiate's Alt.",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
      notonserver: true,
      alt: true
    }
  },
  {
    name: "Hardfeed",
    username: "hardfeed",
    img: "hardfeed.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
      notonserver: true
    }
  },
  {
    name: "72Here",
    username: "trench_coat_button",
    img: "72.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Hiroki",
    username: "hirokiej",
    img: "hiroki.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "JJante",
    username: "jjanteyt",
    img: "jjante.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["24"],
	  who: true
    }
  },
  {
    name: "Kyo",
    username: "_natthenatty(constantly changes)",
    img: "kyo.png",
    opts: {
      series: ["noct", "hakureicorder"],
	  date: ["22"]
    }
  },
  {
    name: "TheBakaCirno",
    username: "thebakacirno",
    img: "thebakacirno.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"] 
    }
  },
  {
    name: "Vistr",
    username: "vistr",
    img: "vistr.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"]
    }
  },
  {
    name: "Krosis",
    username: "yoshikazu__miyano",
    img: "krosis.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"]
    }
  },
  {
    name: "ditto",
    username: "soniclover9106_",
    img: "ditto.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"]
    }
  },
  {
    name: "Norce",
    username: "norce4906",
    img: "norce.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"]
    }
  },
  {
    name: "ecroN",
    username: "ecron5792",
    tooltip: "Norces's Alt.",
    img: "ecron.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  alt: true 
    }
  },
  {
    name: "Exciton",
    username: "exciton.",
    img: "exciton.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"]
    }
  },
  {
    name: "FerretViking",
    username: "ferretviking6969",
    img: "ferretviking.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"]
    }
  },
  {
    name: "Fuschy",
    username: "geheimschatten",
    img: "fuschy.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"]
    }
  },
  {
    name: "Goohbye",
    username: "goohbye",
    img: "goohbye.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"]
    }
  },
  {
    name: "Grok",
    username: "grok",
    img: "grok.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  alt: true
    }
  },
  {
    name: "Galunga",
    username: "galunga_5726",
    img: "galunga.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "halfdaybreak (dooot)",
    username: "halfdaybreak",
    img: "halfdaybreak.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "Hong Meiling",
    username: "hongmeilingofficial",
    tooltip: "Kratzzi's Alt.",
    img: "china.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  alt: true 
    }
  },
  {
    name: "Kat_",
    username: "kat.anime",
    img: "kat.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "Lapis(Beti)",
    username: "beti9505",
    img: "beti.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "lobaceussphere",
    username: "lobaceussphere",
    img: "lobaceussphere.png",
    opts: {
      series: ["hakureicorder"],
	    date: ["22"],
	    who: true
    }
  },
  {
    name: "madensuyu (alt)",
    username: "kuang_quan_shui",
    img: "suyu2.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	    alt: true 
    }
  },
  {
    name: "mars946",
    username: "mars946",
    img: "mars.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "mir[A]",
    username: "astolfobae",
    img: "mira.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Monchete99",
    username: "monchete99",
    img: "monchete99.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Morgan BIG NEWS !!!!",
    username: "mena_ox_",
    img: "morgan.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "Mountainshiro",
    username: "yamashiro_takane",
    img: "mountainshiro.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  who: true
    }
  },
  {
    name: "nepnep",
    username: "nepnep39",
    img: "nepnep.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "Nintendo Hater",
    username: "evilmysillygame",
	tooltip: "Clown's alt.",
    img: "nintendohater.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["23"],
	  alt: true
    }
  },
  {
    name: "notgunz",
    username: "notgunz",
    img: "notgunz.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "pandakekok9",
    username: "pandakekok9",
    img: "panda.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
    }
  },
  {
    name: "sex",
    username: "sexhaver21",
	tooltip: "E.j's alt.",
    img: "sex.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  alt: true
    }
  },
  {
    name: "Sleepless(火影)",
    username: "sleepless0293",
    img: "sleepless.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "Sneakers O'Toole",
    username: "spoonfullofsmug",
    img: "spoon.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
	  alt: true
    }
  },
  {
    name: "still life",
    username: "bkreiofficial",
	tooltip: "Green's alt.",
    img: "stilllife.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["23"],
	  alt: true 
    }
  },
  {
    name: "suchigninque",
    username: "suchigninque",
	tooltip: "Matte's alt.",
    img: "suchigninque.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
	  alt: true
    }
  },
  {
    name: "Sierra",
    username: "fapsauce",
    img: "sierra.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "The queen of hatred",
    username: "cj4x2509",
	tooltip: "Chris the Clip's alt.",
    img: "hatred.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  alt: true
    }
  },
  {
    name: "the red kirk",
    username: "redkirky",
    img: "redkirk.png",
    opts: {
      series: ["gang", "hakureicorder"],
	  date: ["24"],
	  who: true
    }
  },
  {
    name: "Tiny",
    username: "tiny7033",
    img: "tiny.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"]
    }
  },
  {
    name: "WoxedPL",
    username: "woxedpl",
    img: "woxed.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
    }
  },
  {
    name: "yugi",
    username: "ywxv",
    img: "yugi.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "yugi (alt)",
    username: "yyyyyyyyyyyyyyyyyyyyyyyyyyyyyyv",
    img: "yugi2.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
    }
  },
  {
    name: "Zero rero rero rero",
    username: "zeroidion",
    img: "zero.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
    }
  },
  {
	name: "BrainDamagedFriendo",
	username: "smugbraindamagedcunkfriendo",
    img: "friendo.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
	  notonserver: true 
    }
  },
  {
	name: "CowTs",
	username: "cowts",
    img: "cowts.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
	  notonserver: true
    }
  },
  {
	name: "EgnimaticSpellcaster",
	username: "enigmaticspellcaster",
    img: "enigmatic.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
	  notonserver: true,
	  who: true
    }
  },
  {
	name: "Jorge",
	username: "jorge227",
    img: "jorge.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
	  notonserver: true 
    }
  },
  {
	name: "Elwin",
	username: "elwin__789",
    img: "elwin.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  notonserver: true
    }
  },
  {
	name: "Midnight Solus",
	username: "midnightsolus",
    img: "midnight.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  notonserver: true,
	  who: true
    }
  },
  {
	name: "Heaven",
	username: "heavensama",
    img: "heaven.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["24"],
	  notonserver: true,
	  who: true 
    }
  },
  {
	name: "Atheist Sanae (Emu)",
	username: "atheistsanae",
    img: "sanae.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
	  notonserver: true 
    }
  },
  {
	name: "1984",
	username: "198408882_37300",
	tooltip: "probly mad dogs alt.",
    img: "1984.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["23"],
	  alt: true,
	  notonserver: true 
    } 
  },
  {
	name: "Mario",
	username: "matte_official_90251",
    img: "mario.png",
    opts: {
      series: ["hakureicorder"],
	  date: ["22"],
	  alt: true,
	  notonserver: true 
    } 
  },
  {
	name: "Denmark",
	username: "denmark_",
    img: "denmark.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Dooot",
	username: "a.foi.production",
    img: "doot.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Delta Pie",
	username: "overstonked",
    img: "delta.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Rummy",
	username: "deleted account",
    img: "rummy.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Alani Cataphract",
	username: "alancpl",
    img: "alani.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Wriggle",
	username: "deleted account",
    img: "wriggle.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Axslashel",
	username: "axslashel",
    img: "axslashel.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Solace",
	username: "solace2026",
    img: "solace.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Waffles",
	username: "lemon_waffles",
    img: "waffles.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Banana",
	username: ".bananaking",
    img: "banana.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    }  
  },
  {
	name: "Rocketman",
	username: "rocketman237",
    img: "rocketman.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Dpao",
	username: "dpao",
    img: "dpao.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Udzuki",
	username: "splycer",
    img: "udzuki.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Endu",
	username: "littleendu",
    img: "endu.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Goober",
	username: "kirahakoto",
    img: "goober.png",
    opts: {
      series: ["maincorder"],
	  date: ["23"],
    } 
  },
  {
	name: "Warsprite",
	username: "warsprite",
    img: "warsprite.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Artimedias",
	username: "artimedias",
    img: "artimedias.png",
    opts: {
      series: ["maincorder"],
	  date: ["23"],
    } 
  },
  {
	name: "Knap",
	username: "kutakanapepene",
    img: "knap.png",
    opts: {
      series: ["maincorder"],
	  date: ["23"],
    } 
  },
  {
	name: "cyniro",
	username: "cyniro",
    img: "cyniro.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "Bappity",
	username: "bappitythebruh6086",
    img: "bappity.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "liam",
	username: "nerfko",
    img: "liam.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "notnazrin",
	username: "gabagool8008",
    img: "notnazrin.jpg",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "北方工业™",
	username: "tian.ming",
    img: "tianming.png",
    opts: {
      series: ["maincorder"],
	  date: ["23"],
    } 
  },
  {
	name: "Cy",
	username: "muringigi",
    img: "cy.png",
    opts: {
      series: ["maincorder"],
	  date: ["23"],
    } 
  },
  {
	name: "Kosuzumi Yakumo (Ryan)",
	username: "didntmoethelawn",
    img: "lawn.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "krosisbh (old acc)",
	username: "krosisbh",
    img: "krosisbh.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
	  alt: true,
    } 
  },
  {
	name: "Alice Margatroid",
	username: "min141",
    img: "alice.png",
    opts: {
      series: ["maincorder"],
	  date: ["23"],
    } 
  },
  {
	name: "Dr.Bidoofenshmirtz",
	username: "theultimateace1",
    img: "doof.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  },
  {
	name: "uzumasa",
	username: "phigibo",
    img: "uzumasa.png",
    opts: {
      series: ["maincorder"],
	  date: ["22"],
    } 
  }
];