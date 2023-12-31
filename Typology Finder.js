var current_question = -1;
var score = 0;

var int = 0;
var opn = 0;
var ind = 0;
var ord = 0;
var ent = 0;
var asr = 0;
var com = 0;
var pol = 0;
var wtd = 0;
var vol = 0;

var openness = 0;
var conscientiousness = 0;
var extraversion = 0;
var agreeableness = 0;
var neuroticism = 0;

var test_status = 0;

var enn_6 = 0;
var se = 0;


function buttonclick(score) {
    var questions = [

        "Frequently consume educational content during free time.", 
        "Set specific goals and work hard to achieve them.", 
        "Pursue making new friends and keeping a wide social sphere.", 
        "Give emotional support to others rather than giving rational solutions.", // Fe and Fi
        "Frequently imagine worst-case scenarios and threats.", // E6
        "Be viewed as a creative, artistic, and unconventional person.", 
        "Make schedules or routines for your day as it stabilizes your life.", // Si
        "Make quick decisions with your action-oriented attitude.", // Se and Te
        "Steer clear of interpersonal conflict as much as possible.", 
        "Often get angry or upset over seemingly minor inconveniences.", 
        "Prefer mentally stimulating activities or jobs over simple ones.", 
        "Be intentional with spending your time and don’t waste much of it.", // Te
        "Often be considered as the enthusiastic one in the group.", 
        "Often help or donate to others in order to take care of them.", 
        "Feel easily discouraged by bad events or performance.", 
        "Embrace alternative and eccentric lifestyles over traditional ones.",
        "Use your detail-oriented attitude to prevent mistakes and omissions.", // Si
        "Prefer taking charge and leading over more passive roles.",
        "Focus on calming others down rather than shaking them up.",
        "Frequently be seen as having a temperamental attitude.",
        "Engage in solving puzzles such as Sudoku or Rubik’s Cube.",
        "Focus on getting things done and checking things off from a to-do list.", // Te
        "Seek exciting and fun experiences to not feel bored.",
        "Vicariously feel pain if someone else is also experiencing pain.",
        "Often feel insecure and doubtful about your own abilities.", // E6
        "Often daydream and view it as an essential part of life.",
        "Consider details and contingencies to make careful decisions.", // Si
        "Be considered as having a strong personality.",
        "Prefer collaborating with others rather than competing with them.",
        "Often binge on food, social media, etc. to escape the moment.",
        "Often engage in philosophical or complex thought.",
        "Easily focus on finishing the task at hand.",
        "Usually prefer the company of others over alone time.",
        "Frequently inquire if others are feeling good or not.", // Fe
        "Be considered as a person with frequent negative feelings.",
        "Pursue understanding yourself and your feelings, values, and lifestyle.", // Fi
        "Often utilize planners or agendas to keep your life in order.", // Si and Te
        "Be eager to share your thoughts and opinions.",
        "Make a point to act and play as fair as possible.",
        "Frequently experience volatile mood shifts throughout the day.",
        "Be viewed as having an inquisitive and cerebral attitude.",
        "Prefer a productive lifestyle over a laid-back one.", // Te
        "Frequently have a good laugh with others or yourself.",
        "Often be viewed as having a soft and tender heart.",
        "Often feel stopped by your fears and negative attitude.",
        "Prefer a new place, route, or method over a known one.", // Ne and Se
        "Frequently be reminded of your highly orderly attitude.", // Si
        "Often find yourself dominating the conversations.",
        "Rarely try to flaunt yourself and your abilities.",
        "Have somewhat extreme reactions to things in general.",
        "Feel satisfied by consuming complex, challenging material.",
        "Be seen as an ambitious and hardworking person.",
        "Often feel excited about social events such as parties.",
        "Often put others’ needs and well-being over your own.", 
        "Easily get caught up in negative or pessimistic patterns.",
        "Frequently engage in creative outlets such as music and art.",
        "Work to keep your spaces as clean and orderly as possible.",
        "Often feel bored if you have to work behind-the-scenes.",
        "Be seen as a very humble and polite person.",
        "Be easily made to lose control of my own feelings."

        ];

    if (test_status == 0) {
        test_status = 1;
        document.getElementById("test").style.display = "block"
        document.getElementById("start").style.display = "none"
    } 

    current_question += 1;
    document.getElementById("question_number").innerHTML = "Question " + (current_question + 1);
    document.getElementById("Statement").innerHTML = questions[current_question];

    if (current_question == 5 || current_question == 25) {
        enn_6 += score
    }

    if (current_question == 8) {
        se += score
    }

    if (current_question % 10 == 1){
        int += score;
    }

    else if (current_question % 10 == 2){
        ind += score;
    }
   
    else if (current_question % 10 == 3){
        ent += score;
    }
    
    else if (current_question % 10 == 4){
        com += score;
    }
    
    else if (current_question % 10 == 5){
        wtd += score;
    }
    
    else if (current_question % 10 == 6){
        opn += score;
    }
    
    else if (current_question % 10 == 7){
        ord += score;
    }
    
    else if (current_question % 10 == 8){
        asr += score;
    }
    
    else if (current_question % 10 == 9){
        pol += score;
    }
    
    else if (current_question % 10 == 0){
        vol += score;
    }
    

    if (current_question > (questions.length - 1)){
        document.getElementById("question_number").style.display = "none";
        document.getElementById("Statement").innerHTML = "Finished!";
        int = Math.round((int / 18) * 100)
        opn = Math.round((opn / 18) * 100)
        ind = Math.round((ind / 18) * 100)
        ord = Math.round((ord / 18) * 100)
        ent = Math.round((ent / 18) * 100)
        asr = Math.round((asr / 18) * 100)
        com = Math.round((com / 18) * 100)
        pol = Math.round((pol / 18) * 100)
        wtd = Math.round((wtd / 18) * 100)
        vol = Math.round((vol / 18) * 100)

        openness = Math.round((int + opn) / 2)
        conscientiousness = Math.round((ind + ord) / 2)
        extraversion = Math.round((ent + asr) / 2)
        agreeableness = Math.round((com + pol) / 2)
        neuroticism = Math.round((wtd + vol) / 2)
        get_result();
    }
}

function manualinsert() {
    document.getElementById("manual").style.display = "";
    document.getElementById("start").style.display = "none";
    document.getElementById("manualb").style.display = "none";
    document.getElementById("Statement").innerHTML = "Trait scores are between 0 and 100."
}

function manual() {
    int = document.getElementById("int").valueAsNumber;
    opn = document.getElementById("opn").valueAsNumber;
    ind = document.getElementById("ind").valueAsNumber;
    ord = document.getElementById("ord").valueAsNumber;
    ent = document.getElementById("ent").valueAsNumber;
    asr = document.getElementById("asr").valueAsNumber;
    com = document.getElementById("com").valueAsNumber;
    pol = document.getElementById("pol").valueAsNumber;
    wtd = document.getElementById("wtd").valueAsNumber;
    vol = document.getElementById("vol").valueAsNumber;
    get_result()
}

function get_result() {
    document.getElementById("results").style.display = "block";
    document.getElementById("test").style.display = "none";
    document.getElementById("manual").style.display = "none";
    document.getElementById("question_number").style.display = "none";
    document.getElementById("Statement").style.display = "none";
    document.getElementById("OTE").innerHTML = "Openess to Experience: " + openness + "%";
    document.getElementById("int").innerHTML = "Intellect: " + int + "%";
    document.getElementById("opn").innerHTML = "Openness: " + opn + "%";
    document.getElementById("CON").innerHTML = "Conscientiousness: " + conscientiousness + "%";
    document.getElementById("ind").innerHTML = "Industriousness: " + ind + "%";
    document.getElementById("ord").innerHTML = "Orderliness: " + ord + "%";
    document.getElementById("EXT").innerHTML = "Extraversion: " + extraversion + "%";
    document.getElementById("ent").innerHTML = "Enthusiasm: " + ent + "%";
    document.getElementById("asr").innerHTML = "Assertiveness: " + asr + "%";
    document.getElementById("AGR").innerHTML = "Agreeableness: " + agreeableness + "%";
    document.getElementById("com").innerHTML = "Compassion: " + com + "%";
    document.getElementById("pol").innerHTML = "Politeness: " + pol + "%";
    document.getElementById("NEU").innerHTML = "Neuroticism: " + neuroticism + "%";
    document.getElementById("wtd").innerHTML = "Withdrawal: " + wtd + "%";
    document.getElementById("vol").innerHTML = "Volatility: " + vol + "%";
    
    document.getElementById("bar_OTEs").style.width = openness + "%";
    document.getElementById("bar_ints").style.width = int + "%";
    document.getElementById("bar_opns").style.width = opn + "%";
    document.getElementById("bar_CONs").style.width = conscientiousness + "%";
    document.getElementById("bar_inds").style.width = ind + "%";
    document.getElementById("bar_ords").style.width = ord + "%";
    document.getElementById("bar_EXTs").style.width = extraversion + "%";
    document.getElementById("bar_ents").style.width = ent + "%";
    document.getElementById("bar_asrs").style.width = asr + "%";
    document.getElementById("bar_AGRs").style.width = agreeableness + "%";
    document.getElementById("bar_coms").style.width = com + "%";
    document.getElementById("bar_pols").style.width = pol + "%";
    document.getElementById("bar_NEUs").style.width = neuroticism + "%";
    document.getElementById("bar_wtds").style.width = wtd + "%";
    document.getElementById("bar_vols").style.width = vol + "%";

    document.getElementById("charts_space").style.display = "";
    document.getElementById("typology_finder").style.display = "";
    document.getElementById("prediction").style.display = "";

    document.getElementById("point_oc").style.left = conscientiousness + "%";
    document.getElementById("point_oc").style.bottom = openness + "%";

    document.getElementById("point_oe").style.left = extraversion + "%";
    document.getElementById("point_oe").style.bottom = openness + "%";

    document.getElementById("point_oa").style.left = agreeableness + "%";
    document.getElementById("point_oa").style.bottom = openness + "%";

    document.getElementById("point_on").style.left = neuroticism + "%";
    document.getElementById("point_on").style.bottom = openness + "%";

    document.getElementById("point_ce").style.left = conscientiousness + "%";
    document.getElementById("point_ce").style.bottom = extraversion + "%";

    document.getElementById("point_ca").style.left = conscientiousness + "%";
    document.getElementById("point_ca").style.bottom = agreeableness + "%";

    document.getElementById("point_cn").style.left = conscientiousness + "%";
    document.getElementById("point_cn").style.bottom = neuroticism + "%";

    document.getElementById("point_ea").style.left = agreeableness + "%";
    document.getElementById("point_ea").style.bottom = extraversion + "%";

    document.getElementById("point_en").style.left = neuroticism + "%";
    document.getElementById("point_en").style.bottom = extraversion + "%";

    document.getElementById("point_an").style.left = neuroticism + "%";
    document.getElementById("point_an").style.bottom = agreeableness + "%";

    if (ord < 60) {
        document.getElementById("ennea1").style.display = "none";
    }
    
    if (com < 60) {
        document.getElementById("ennea2").style.display = "none";
    }

    if (ind < 60) {
        document.getElementById("ennea3").style.display = "none";
    }

    if (opn < 60 || wtd < 30) {
        document.getElementById("ennea4").style.display = "none";
    }

    if (int < 60 || ent > 70) {
        document.getElementById("ennea5").style.display = "none";
    }

    if (enn_6 < 4 || wtd < 30) {
        document.getElementById("ennea6").style.display = "none";
    }

    if (opn < 60 || ent < 60 || wtd > 80) {
        document.getElementById("ennea7").style.display = "none";
    }

    if (asr < 60 || pol > 50 || wtd > 50) {
        document.getElementById("ennea8").style.display = "none";
    }

    if (pol < 60) {
        document.getElementById("ennea9").style.display = "none";
    }

    if (ind > 80 || asr > 80) {
        document.getElementById("infp").style.display = "none";
        document.getElementById("intp").style.display = "none";
        document.getElementById("isfp").style.display = "none";
        document.getElementById("istp").style.display = "none";
    }

    if (ord < 40) {
        document.getElementById("infj").style.display = "none";
        document.getElementById("intj").style.display = "none";
        document.getElementById("isfj").style.display = "none";
        document.getElementById("istj").style.display = "none";
    }

    if (ord > 60) {
        document.getElementById("enfp").style.display = "none";
        document.getElementById("entp").style.display = "none";
        document.getElementById("esfp").style.display = "none";
        document.getElementById("estp").style.display = "none";
    }

    if (asr < 30 && ind < 40) {
        document.getElementById("enfj").style.display = "none";
        document.getElementById("entj").style.display = "none";
        document.getElementById("esfj").style.display = "none";
        document.getElementById("estj").style.display = "none";
    }

    if (opn > 80 || ord < 50) {
        document.getElementById("esfj").style.display = "none";
        document.getElementById("estj").style.display = "none";
        document.getElementById("isfj").style.display = "none";
        document.getElementById("istj").style.display = "none";
    }

    if (int < 40 || opn < 60) {
        document.getElementById("enfp").style.display = "none";
        document.getElementById("entp").style.display = "none";
        document.getElementById("infp").style.display = "none";
        document.getElementById("intp").style.display = "none";
    }

    if (int < 40) {
        document.getElementById("enfj").style.display = "none";
        document.getElementById("entj").style.display = "none";
        document.getElementById("infj").style.display = "none";
        document.getElementById("intj").style.display = "none";
    }

    if (ind < 50 || com > 90) {
        document.getElementById("entj").style.display = "none";
        document.getElementById("estj").style.display = "none";
        document.getElementById("intj").style.display = "none";
        document.getElementById("istj").style.display = "none";
    }

    if (com < 60) {
        document.getElementById("enfj").style.display = "none";
        document.getElementById("esfj").style.display = "none";
        document.getElementById("infj").style.display = "none";
        document.getElementById("isfj").style.display = "none";
    }

    if (com < 40) {
        document.getElementById("enfp").style.display = "none";
        document.getElementById("esfp").style.display = "none";
        document.getElementById("infp").style.display = "none";
        document.getElementById("isfp").style.display = "none";
    }

    if (com > 80) {
        document.getElementById("entp").style.display = "none";
        document.getElementById("estp").style.display = "none";
        document.getElementById("intp").style.display = "none";
        document.getElementById("istp").style.display = "none";
    }

    if (se < 3) {
        document.getElementById("esfp").style.display = "none";
        document.getElementById("estp").style.display = "none";
    }

    if (se < 1) {
        document.getElementById("isfp").style.display = "none";
        document.getElementById("istp").style.display = "none";
    }

    if (opn < 30 && ind > 40 && ent > 50) {
        document.getElementById("pop").style.display = "";
    }

    if (opn > 70 && ord > 70 && ent < 40) {
        document.getElementById("clas").style.display = "";
    }

    if (opn > 70 && ord < 30) {
        document.getElementById("rock").style.display = "";
    }

    if (ent > 60) {
        document.getElementById("dance").style.display = "";
    }

    if (ent > 60 && ord < 30) {
        document.getElementById("rap").style.display = "";
    }

    if (wtd > 70) {
        document.getElementById("repeat").style.display = "";
    }

    if (opn > 50 && wtd > 70) {
        document.getElementById("dark").style.display = "";
    }

    if (ent > 70 && wtd < 40) {
        document.getElementById("upbeat").style.display = "";
    }

    if (opn > 60 && ent > 50) {
        document.getElementById("apple").style.display = "";
    }

    if (int > 80 && ent < 30 && wtd > 70) {
        document.getElementById("anti").style.display = "";
    }

    if (int > 70 && ent < 50 && pol > 50 && wtd > 30) {
        document.getElementById("android").style.display = "";
    }

    if (int > 80 && opn > 70 && ent < 40 && com < 70) {
        document.getElementById("linux").style.display = "";
    }

    if (openness > 80) {
        document.getElementById("ipad").style.display = "";
    }

    if (opn > 60 && ent < 50 && neuroticism > 60) {
        document.getElementById("cat").style.display = "";
    }

    if (ind > 70 && ord > 30 && extraversion > 60 && agreeableness > 65) {
        document.getElementById("dog").style.display = "";
    }

    if (opn > 80) {
        document.getElementById("exo").style.display = "";
    }

    if (openness > 60 && conscientiousness < 40 && neuroticism > 50) {
        document.getElementById("night").style.display = "";
    }

    if (conscientiousness > 70) {
        document.getElementById("early").style.display = "";
    }

    if (int > 50 && extraversion < 40 && wtd > 50) {
        document.getElementById("winter").style.display = "";
    }

    if (extraversion > 60 && ent > 70) {
        document.getElementById("summer").style.display = "";
    }

    if (opn > 50 && ent > 50) {
        document.getElementById("iced").style.display = "";
    }

    if (opn > 60 && asr < 50 && agreeableness > 50 && wtd > 50) {
        document.getElementById("latte").style.display = "";
    }

    if (ind > 60 && asr > 60 && vol > 50 && pol < 50) {
        document.getElementById("esp").style.display = "";
    }

    if (conscientiousness > 50 && agreeableness > 50) {
        document.getElementById("che").style.display = "";
    }

    if (extraversion > 40 && neuroticism > 60) {
        document.getElementById("over").style.display = "";
    }

    if (vol < 50 && asr < 40) {
        document.getElementById("slow").style.display = "";
    }

    if (neuroticism > 60 && asr > 70) {
        document.getElementById("fast").style.display = "";
    }

    if (int > 75) {
        document.getElementById("rubik").style.display = "";
    }

    if (int > 70 && extraversion < 60) {
        document.getElementById("gla").style.display = "";
    }

    if (openness > 70 && wtd > 70) {
        document.getElementById("pers").style.display = "";
    }

    if (int > 65 && agreeableness < 80) {
        document.getElementById("eng").style.display = "";
    }

    if (int > 65 && conscientiousness > 70 && com > 70) {
        document.getElementById("med").style.display = "";
    }

    if (openness > 70 && asr > 70 && ind > 30) {
        document.getElementById("entr").style.display = "";
    }

    if (openness > 70 && ord < 40) {
        document.getElementById("create").style.display = "";
    }
}




