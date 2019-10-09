# Binary Search Practice

## Exercises

1. Given a sorted array of numbers, write a function `binarySearch(arr, target)` to find the index of a target element within array in O(log(n)) time. Do not use recursion.

    ```js
    let arr = [1, 2, 3, 4, 5, 6, 7]
    binarySearch(arr, 2) // => 1
    ```

2. Given a sorted array of numbers, write a function `binarySearchRecursive(arr, target)` to find the index of a target element within array in O(log(n)) time. Use recursion.

    ```js
    let arr = [1, 2, 3, 4, 5, 6, 7]
    binarySearchRecursive(arr, 2) // => 1
    ```

3. Find if a target value is contained in a matrix of dimensions m x n.  Your function should return true if the element was found, false otherwise.

    This matrix has the following properties:
    * Integers in each row are sorted from left to right.
    * The first integer of each row is greater than or equal to the last integer of the previous row.

    Example matrix:
    ```js
    let mtx = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ]
    ```
    Resource: https://www.interviewbit.com/problems/matrix-search/


4. Give an array of people names find a target name like 'cody' in the array using binary search. Your function should return the index at which the target name or word was found and -1 otherwise.
    * Your name should be in this array try to find it using binary search.
    * Challenge: find all your classmates names.

    ```js
    let names = ["abramo", "addia", "adeline", "agata", "aguie", "alano", "aldo", "aldrich", "alfonse", "ali", "alidia", "allard", "allissa", "almeta", "alon", "alvin", "alysa", "amalea", "ambrosius", "amie", "amine", "anderea", "andrej", "andrus", "andy", "anette", "angel", "angelia", "angelika", "angie", "angy", "annadiane", "annamarie", "anne-corinne", "anneliese", "anthony", "aransa", "archie", "ardelle", "arden", "ariel", "armando", "arnaldo", "audie", "audry", "audry", "august", "barthel", "basilio", "bearnard", "becka", "bekki", "benedikt", "bernadene", "berny", "berte", "billy", "birgit", "blaine", "blondell", "blondelle", "bonni", "boycie", "bram", "brana", "brent", "briahana", "briany", "bride", "bridget", "brien", "briggs", "brittney", "brnaba", "brunhilda", "brunhilda", "bryn", "buckie", "bunnie", "caldwell", "carena", "carl", "carlene", "carley", "carlos", "carly", "carmine", "carol-jean", "caryl", "casie", "cass", "caterina", "celesta", "chadwick", "chalmers", "channa", "charin", "charline", "charmine", "cheslie", "chickie", "chickie", "chicky", "chris", "christen", "christina", "chrystal", "chukwuka", "cilka", "claire", "clarey", "clarissa", "claudell", "clayborn", "clementia", "cloe", "codie", "cody", "conney", "conrad", "conroy", "consolata", "constantine", "conway", "coop", "coralyn", "coretta", "cory", "cos", "craig", "creight", "cristi", "curtice", "cybill", "dagmar", "dalenna", "danette", "danila", "dantae", "danya", "darb", "darnell", "darrin", "datha", "daveen", "davie", "debby", "debera", "dedie", "deja", "dell", "demetris", "dennison", "devi", "didi", "dimitry", "dolf", "domini", "dorette", "dorey", "dorothee", "dorri", "dorrie", "douglas", "dunc", "duncan", "durward", "ebenezer", "ebony", "edythe", "efren", "egan", "elden", "elie", "elisandra", "elmer", "elora", "elyse", "emelia", "emmalyn", "enid", "enrichetta", "erasmus", "erastus", "erich", "erl", "eugenius", "evered", "fair", "farra", "felike", "felipa", "fenelia", "ferrell", "ferris", "fidela", "filbert", "finn", "florian", "frederich", "fredrick", "fremont", "gale", "gan", "gannie", "gearard", "geno", "george", "georgeanne", "georgie", "gianna", "gilburt", "giovanni", "giselle", "giuditta", "giulia", "gonzalo", "greta", "griffin", "griswold", "gwendolen", "hadlee", "hadleigh", "hali", "hannah", "hannie", "hanny", "harlene", "harper", "harwell", "hattie", "haven", "hazel", "heath", "hebert", "hedvige", "hester", "huberto", "hughie", "hupaul", "hymie", "ilse", "inez", "inez", "ingeborg", "irena", "irma", "irwinn", "ivett", "jaclyn", "jacquette", "jaine", "jamie", "janek", "jarrad", "jasen", "jay", "jeanne", "jeannette", "jenda", "jenesh", "jeremias", "jerrilyn", "jerrylee", "jimmy", "joan", "joanie", "jock", "johanne", "johnathan", "joleen", "jolie", "jonathan", "joseph", "joshia", "jourdain", "judye", "jules", "kadijah", "kai", "kain", "kameron", "kane", "karen", "karie", "karlan", "karylin", "katee", "katee", "kathe", "kathy", "kellen", "kelley", "kelwin", "kendrick", "kevon", "kiley", "kinsley", "kipp", "kirsti", "kirsti", "konstanze", "kordula", "kristofer", "kylie", "laird", "laura", "lauralee", "laverna", "lawry", "leda", "lemmie", "lenna", "les", "lian", "lilith", "lindy", "lizzy", "lock", "lorelei", "lorri", "lucienne", "luigi", "luis", "luke", "lutero", "lutero", "lynn", "mab", "maegan", "mair", "maitilde", "malik", "marcela", "margarethe", "marguerite", "mariana", "maribelle", "marie-ann", "marieann", "marilin", "marion", "marlena", "marna", "marney", "marney", "marnie", "mathew", "matilda", "mavra", "mayor", "meggi", "meggie", "melanie", "melesa", "melicent", "mellicent", "melly", "merline", "mervin", "micaela", "michael", "michelina", "mikey", "milty", "mitchel", "moira", "monti", "mora", "morey", "mort", "mureil", "murial", "myrta", "nadeen", "nappie", "nariko", "nataniel", "natasha", "natka", "neala", "neile", "neile", "nerte", "newton", "nikolia", "ninnetta", "ninon", "nolan", "norina", "norma", "norton", "odelle", "ofelia", "olivette", "olwen", "olympie", "osborn", "osbourne", "owen", "pacorro", "padraig", "pam", "pamelina", "patience", "patin", "patrizio", "pauly", "peder", "pennie", "peter", "petrina", "petronella", "phaedra", "phebe", "philippa", "philippine", "pierre", "pincus", "quintilla", "rab", "raddy", "randene", "raychel", "rebekkah", "renell", "reynolds", "rheba", "richardo", "rinaldo", "rita", "riva", "rivy", "rocky", "rodrique", "ronny", "roosevelt", "rory", "rosalie", "rosamund", "roxi", "roy", "rubi", "ruprecht", "rustie", "rycca", "saidee", "salaidh", "sallie", "sampson", "sancho", "sanson", "sascha", "savita", "selie", "sergeant", "sergent", "sergio", "shanta", "sharla", "sharrar", "sharron", "shauna", "shayna", "shea", "sheffield", "sheila", "shep", "shurlock", "shurwood", "sibby", "sihame", "sinclair", "sindee", "skell", "skipp", "stacee", "stanton", "steffi", "stephanie", "stoddard", "sukey", "sula", "suzette", "sydelle", "sydney", "tabby", "tadeo", "taffy", "teodoor", "terrijo", "tessa", "tessa", "thurston", "tiffy", "tildy", "todd", "tome", "tommy", "torie", "tove", "towney", "tracie", "tresa", "tresa", "truda", "tully", "ugo", "vaclav", "valdemar", "vale", "valencia", "vallie", "vasilis", "verna", "verney", "veronique", "viki", "virgie", "voniel", "warden", "waylen", "wells", "wernher", "will", "willy", "wilow", "witty", "wolfgang", "woodrow", "worden", "ysabel", "zolly" ] 
    ```

## Resources
* [w3resource - Search JavaScript arrays with Binary Search](https://www.w3resource.com/javascript-exercises/javascript-function-exercise-18.php)
* [Binary Search Algorithm in JS](https://www.youtube.com/watch?v=92e5Ih4Chbk)
* [HackerRank Video Binary Search](https://www.youtube.com/watch?v=P3YID7liBug)
