let arr1 = [1, 2, 3, 4, 5, 6, 7];

const binarySearch = (arr, target) => {
    let left = 0;
    let right = arr.length - 1;
    let middle = Math.floor((right - left) / 2);

    if (arr[middle] === target) {
        return 0;
    }

    while (left <= right) {
        if (arr[middle] === target) {
            return middle;
        } else if (target < arr[middle]) {
            right = middle - 1;
        } else {
            left = middle + 1;
        }
        middle = Math.floor((right + left) / 2);
    }
    return -1;
}

// console.log(binarySearch(arr1, 6)) // => 1

let arr2 = [1, 2, 3, 4, 5, 6, 7, 66];

const binarySearchRecursive = (arr, target, left = 0, right = arr.length - 1) => {
    let middle = Math.floor((right + left) / 2);

    if (left > right) {
        return -1;
    }

    if (arr[middle] === target) {
        return middle;
    } else if (target < arr[middle]) {
        return binarySearchRecursive(arr, target, left, (middle - 1));
    } else if (target > arr[middle]) {
        return binarySearchRecursive(arr, target, (middle + 1), right);
    }
}

console.log(binarySearchRecursive(arr2, 0)) // => 1

let mtx = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

const matrix = (mtx, target) => {
    let left = 0;
    let right = mtx.length - 1;
    let midMatrix = Math.floor((right - left) / 2);

    let middleArray = mtx[midMatrix];

    let middleLeft = 0;
    let middleRight = middleArray.length - 1;
    let middleArrayMiddle = Math.floor((middleRight + middleLeft) / 2);

    while (left <= right) {
        while (middleLeft <= middleRight) {
            if (middleArray[middleArrayMiddle] === target) {
                return true;
            }
            if (middleArray[middleArrayMiddle] > target) {
                middleRight = middleArrayMiddle - 1;
            } else {
                middleLeft = middleArrayMiddle + 1;
            }
            middleArrayMiddle = Math.floor((middleRight + middleLeft) / 2);
        }
        if (midMatrix === 0 || midMatrix === mtx.length) {
            return false;
        } else if (mtx[midMatrix - 1][2] >= target) {
            right = midMatrix - 1;
        } else {
            left = midMatrix + 1;
        }
        midMatrix = Math.floor((right + left) / 2);
        middleArray = mtx[midMatrix];
        middleLeft = 0;
        middleRight = middleArray.length - 1;
        middleArrayMiddle = Math.floor((middleRight + middleLeft) / 2);
    }
    return false;
}

// console.log(matrix(mtx, 0));
// console.log(matrix(mtx, 1));
// console.log(matrix(mtx, 2));
// console.log(matrix(mtx, 3));
// console.log(matrix(mtx, 4));
// console.log(matrix(mtx, 5));
// console.log(matrix(mtx, 6));
// console.log(matrix(mtx, 7));
// console.log(matrix(mtx, 8));
// console.log(matrix(mtx, 9));
// console.log(matrix(mtx, 10));

let names = ["abramo", "addia", "adeline", "agata", "aguie", "alano", "aldo", "aldrich", "alfonse", "ali", "alidia", "allard", "allissa", "almeta", "alon", "alvin", "alysa", "amalea", "ambrosius", "amie", "amine", "anderea", "andrej", "andrus", "andy", "anette", "angel", "angelia", "angelika", "angie", "angy", "annadiane", "annamarie", "anne-corinne", "anneliese", "anthony", "aransa", "archie", "ardelle", "arden", "ariel", "armando", "arnaldo", "audie", "audry", "audry", "august", "barthel", "basilio", "bearnard", "becka", "bekki", "benedikt", "bernadene", "berny", "berte", "billy", "birgit", "blaine", "blondell", "blondelle", "bonni", "boycie", "bram", "brana", "brent", "briahana", "briany", "bride", "bridget", "brien", "briggs", "brittney", "brnaba", "brunhilda", "brunhilda", "bryn", "buckie", "bunnie", "caldwell", "carena", "carl", "carlene", "carley", "carlos", "carly", "carmine", "carol-jean", "caryl", "casie", "cass", "caterina", "celesta", "chadwick", "chalmers", "channa", "charin", "charline", "charmine", "cheslie", "chickie", "chickie", "chicky", "chris", "christen", "christina", "chrystal", "chukwuka", "cilka", "claire", "clarey", "clarissa", "claudell", "clayborn", "clementia", "cloe", "codie", "cody", "conney", "conrad", "conroy", "consolata", "constantine", "conway", "coop", "coralyn", "coretta", "cory", "cos", "craig", "creight", "cristi", "curtice", "cybill", "dagmar", "dalenna", "danette", "danila", "dantae", "danya", "darb", "darnell", "darrin", "datha", "daveen", "davie", "debby", "debera", "dedie", "deja", "dell", "demetris", "dennison", "devi", "didi", "dimitry", "dolf", "domini", "dorette", "dorey", "dorothee", "dorri", "dorrie", "douglas", "dunc", "duncan", "durward", "ebenezer", "ebony", "edythe", "efren", "egan", "elden", "elie", "elisandra", "elmer", "elora", "elyse", "emelia", "emmalyn", "enid", "enrichetta", "erasmus", "erastus", "erich", "erl", "eugenius", "evered", "fair", "farra", "felike", "felipa", "fenelia", "ferrell", "ferris", "fidela", "filbert", "finn", "florian", "frederich", "fredrick", "fremont", "gale", "gan", "gannie", "gearard", "geno", "george", "georgeanne", "georgie", "gianna", "gilburt", "giovanni", "giselle", "giuditta", "giulia", "gonzalo", "greta", "griffin", "griswold", "gwendolen", "hadlee", "hadleigh", "hali", "hannah", "hannie", "hanny", "harlene", "harper", "harwell", "hattie", "haven", "hazel", "heath", "hebert", "hedvige", "hester", "huberto", "hughie", "hupaul", "hymie", "ilse", "inez", "inez", "ingeborg", "irena", "irma", "irwinn", "ivett", "jaclyn", "jacquette", "jaine", "jamie", "janek", "jarrad", "jasen", "jay", "jeanne", "jeannette", "jenda", "jenesh", "jeremias", "jerrilyn", "jerrylee", "jimmy", "joan", "joanie", "jock", "johanne", "johnathan", "joleen", "jolie", "jonathan", "joseph", "joshia", "jourdain", "judye", "jules", "kadijah", "kai", "kain", "kameron", "kane", "karen", "karie", "karlan", "karylin", "katee", "katee", "kathe", "kathy", "kellen", "kelley", "kelwin", "kendrick", "kevon", "kiley", "kinsley", "kipp", "kirsti", "kirsti", "konstanze", "kordula", "kristofer", "kylie", "laird", "laura", "lauralee", "laverna", "lawry", "leda", "lemmie", "lenna", "les", "lian", "lilith", "lindy", "lizzy", "lock", "lorelei", "lorri", "lucienne", "luigi", "luis", "luke", "lutero", "lutero", "lynn", "mab", "maegan", "mair", "maitilde", "malik", "marcela", "margarethe", "marguerite", "mariana", "maribelle", "marie-ann", "marieann", "marilin", "marion", "marlena", "marna", "marney", "marney", "marnie", "mathew", "matilda", "mavra", "mayor", "meggi", "meggie", "melanie", "melesa", "melicent", "mellicent", "melly", "merline", "mervin", "micaela", "michael", "michelina", "mikey", "milty", "mitchel", "moira", "monti", "mora", "morey", "mort", "mureil", "murial", "myrta", "nadeen", "nappie", "nariko", "nataniel", "natasha", "natka", "neala", "neile", "neile", "nerte", "newton", "nikolia", "ninnetta", "ninon", "nolan", "norina", "norma", "norton", "odelle", "ofelia", "olivette", "olwen", "olympie", "osborn", "osbourne", "owen", "pacorro", "padraig", "pam", "pamelina", "patience", "patin", "patrizio", "pauly", "peder", "pennie", "peter", "petrina", "petronella", "phaedra", "phebe", "philippa", "philippine", "pierre", "pincus", "quintilla", "rab", "raddy", "randene", "raychel", "rebekkah", "renell", "reynolds", "rheba", "richardo", "rinaldo", "rita", "riva", "rivy", "rocky", "rodrique", "ronny", "roosevelt", "rory", "rosalie", "rosamund", "roxi", "roy", "rubi", "ruprecht", "rustie", "rycca", "saidee", "salaidh", "sallie", "sampson", "sancho", "sanson", "sascha", "savita", "selie", "sergeant", "sergent", "sergio", "shanta", "sharla", "sharrar", "sharron", "shauna", "shayna", "shea", "sheffield", "sheila", "shep", "shurlock", "shurwood", "sibby", "sihame", "sinclair", "sindee", "skell", "skipp", "stacee", "stanton", "steffi", "stephanie", "stoddard", "sukey", "sula", "suzette", "sydelle", "sydney", "tabby", "tadeo", "taffy", "teodoor", "terrijo", "tessa", "tessa", "thurston", "tiffy", "tildy", "todd", "tome", "tommy", "torie", "tove", "towney", "tracie", "tresa", "tresa", "truda", "tully", "ugo", "vaclav", "valdemar", "vale", "valencia", "vallie", "vasilis", "verna", "verney", "veronique", "viki", "virgie", "voniel", "warden", "waylen", "wells", "wernher", "will", "willy", "wilow", "witty", "wolfgang", "woodrow", "worden", "ysabel", "zolly"]