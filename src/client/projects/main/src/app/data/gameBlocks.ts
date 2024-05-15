import { IGameBlock } from "../models/IGameBlock"

export const gameBlocks: IGameBlock[] = [
    {
        id: 1,
        name: "PacMan",
        header: "Pac-man",
        containerSelector: "x-pacMan-container",
        info: `А вы знали, что… <br> <br>
        - Игра Pac-Man вышла в Японии в 1979 году, но у себя на Родине она не пользовалась такой популярностью, пока ей не заинтересовалась американская компания "Midway", которая позже выпустит культовый файтинг "Mortal Kombat" <br> <br>
        - На сегодняшний момент абсолютным чемпионом и рекордсменом по игре в Pac-Man является американец Билли Митчел. В 1999 году ,когда Билли было 33 года, он смог поставить абсолютный рекорд, пройдя полностью всю игру, поедая все точки, призраков и фрукты, и не потеряв не единой жизни. Таким образом он умудрился заработать 3333360 очков, что до него никто не мог сделать. <br> <br>
        - Игра "Pac-Man" стала настолько успешной и культовой, что различные разработчики стали плодить ее многочисленные клоны. За последние 40 с лишним лет вышло несколько десятков игр по данной тематике. <br> <br>
        - Компания "ID software" в 1992 году выпустила культовый 3D-шутер "Wolfenstein 3D". Но причем тут Pac-Man? Да при том, что в третьем эпизоде можно попасть на секретный 10-й уровень. В этом случае главный герой попадает в точно такой же лабиринт, как и в игре Pac-Man, и теперь он должен собрать все сокровища на уровне. Но главная проблема заключается в том, что за ним охотятся те самые призраки, которых нельзя убить. <br> <br>
        - Созданная в Японии оригинальная игра носила название не "Pac-Man", а "Puck-Man" от японского "Паку-Паку", что означает звук открывающегося и закрывающегося рта. Но когда спустя год игра попала в США, компания Midway решила, что данное название не очень подходит для игры, так как в любом случае найдутся детишки, которые затрут или закрасят букву "P" на игровом автомате, чтобы сделать ее похожей на "F". Я думаю, не стоит говорить о том, какое в этом случае получится слово. Таким образом и игра и обрела название "Pac-man".`,
        imgUrls: [
            "../assets/pacman/1.png",
            "../assets/pacman/2.png",
            "../assets/pacman/3.png",
            "../assets/pacman/4.png"
        ],
        gameUrl: "https://pacman.ee/",
        jsDosCDN: "https://cdn.dos.zone/original/2X/5/5cdcffbf268b3be0555025902b52a8d21ad595b9.jsdos"
    },
    {
        id: 2,
        name: "NeedForSpeed",
        header: "The need for speed",
        containerSelector: "x-NeedForSpeed-container",
        info: `А вы знали, что… <br> <br>
        - Первая часть сериала вышла 31 августа 1994 года на приставке Рапаsоniс 3DO. Разработкой игры занималась ЕА Canada (до покупки В 1991 году издательством Electronic Arts компания называлась Distinctive Software). На РС игру портировали лишь спустя год. <br> <br>
        - В первой части было представлено 8 реально существующих автомобилей. Технические характеристики машин разработчикам предоставила редакция журнала Road & Track. Именно поэтому полное название игры — Road & Track Presents: The Need for Speed. <br> <br>
        - Удивительно, но после триумфального шествия первой части, Need for Speed 11 встретили довольно прохладно. Виной тому три грубые ошибки разработчиков: они решили убрать из игры полицейских, добавить к серийным моделям автомобилей концепткары и сделать все трассы закольцованными. <br> <br>
        - В 1997 году Electronic Arts попыталась запустить спинофф Need for Speed под названием V-Rally. Разработкой раллийного симулятора занималась французская компания Eden Studios. В 1999 году подоспело продолжение V-Rally 2. Но на этом история отпочкования от Need for Speed закончилась.`,
        imgUrls: [
            "../assets/needForSpeed/1.png",
            "../assets/needForSpeed/2.png",
            "../assets/needForSpeed/3.png",
            "../assets/needForSpeed/4.png"
        ],
        gameUrl: "https://playclassic.games/games/racing-driving-dos-games-online/play-the-need-for-speed-online/play/",
        jsDosCDN: "https://cdn.dos.zone/custom/dos/nfs.jsdos"
    },
    {
        id: 3,
        name: "SpaceInvaders",
        header: "SpaceInvaders",
        containerSelector: "x-spaceInvaders-container",
        info: `А вы знали, что… <br><br>
        - Space Invaders (Космические захватчики) — видеоигра, разработанная Томохиро Нисикадо и выпущенная в 1978 году на аркадных автоматах. <br><br>
        - Томохиро Нисикадо - японский разработчик компьютерных игр. На создание игры и оборудования к ней он потратил год. <br><br>
        - Изначально в игре должны были появиться различные виды врагов, такие как танки, боевая авиация и космические корабли. Однако Нисикадо так и не смог определиться с их движениями: технические ограничения затрудняли симуляцию полёта. Симуляция движений людей была проще, но Нисикадо считал расстрел людей аморальным. <br><br>
        - Первоначальное название игры — Space Monsters (рус. Космические монстры), придуманное по аналогии с популярной в то время в Японии песней Monster, было изменено на Space Invaders по просьбе начальства Нисикадо. <br><br>
        - До Space Invaders были игры, которые позволяли игроку расстреливать цели, но это была первая игра, в которой враг тоже отвечал огнём. Игрок впервые видел разрушаемые барьеры, за которыми он мог прятаться. <br><br>
        - Игра популяризировала достижение высокого счёта и сохранения его в памяти автомата для отображения в таблице достижений. Было введено возрастание сложности игры. Сегодня это основа однопользовательских игр.`,
        imgUrls: [
            "../assets/spaceInvaders/1.png",
            "../assets/spaceInvaders/2.png",
            "../assets/spaceInvaders/3.png",
            "../assets/spaceInvaders/4.png"
        ],
        gameUrl: "https://invaders.ee/",
        jsDosCDN: "https://cdn.dos.zone/custom/dos/space-invaders______.jsdos"
    },
    {
        id: 4,
        name: "Tetris",
        header: "Tetris",
        containerSelector: "x-tetris-container",
        info: `А вы знали, что… <br><br>
        - Первый «Тетрис» был написан на Паскале для допотопной «Электроники-60». <br><br>
        - Название легендарной игры «Тетрис» - это идея Алексея Пажитнова, ее советского изобретателя, - гибрид слов «тетрамино» и «теннис». <br><br>
        - В Книге рекордов Гиннесса о «Тетрисе» девять записей. В том числе «Самое длительное тюремное заключение благодаря компьютерной игре». Фейз Чопдат отсидел четыре месяца за то, что играл в «Тетрис» на борту самолета, летевшего в Манчестер, и отказался прекратить игру, несмотря на просьбы бортпроводников. <br><br>
        - По данным Tetris Friends Online Games, в игру онлайн играют более миллиона раз в день. <br><br>
        - От «Тетриса» умнеют - это доказали исследователи, заставившие группу подростков играть по полчаса в день в течение трех месяцев. Сканирование показало структурные изменения в тех частях мозга, которые отвечали за движение, скорость реакции, критическое мышление и способность производить вычисления.`,
        imgUrls: [
            "../assets/tetris/1.png",
            "../assets/tetris/2.png",
            "../assets/tetris/3.png",
            "../assets/tetris/4.png"
        ],
        gameUrl: "https://ubg365.github.io/tetris/",
        jsDosCDN: "https://cdn.dos.zone/custom/dos/tetris____.jsdos"
    },
    {
        id: 5,
        name: "SuperMario",
        header: "Super Mario",
        containerSelector: "x-mario-container",
        info: `А вы знали, что… <br><br>
        - Когда Марио дебютировал в игре "Donkey Kong", его звали Джампмен. Лишь когда игра стала популярной, компания "Nintendo" решила дать герою более простое имя и назвала его Марио. <br><br>
        - Появившись в игре "Donkey Kong", действия которой происходили на стройке, Марио был плотником. Только позже, появившись в игре "Mario Bros", Марио решили сделать сантехником, из-за путешествий по трубам. <br><br>
        - Марио имеет культовый костюм, который узнают фанаты по всему миру. Однако изначально такой вид создавался лишь из-за графических ограничений. Художники сделали синий комбинезон и красные рукава, чтобы игроки могли различать движения рук и ног. Усы были добавлены, чтобы сохранять четкость черт лица. А его шляпу добавили только, чтобы не анимировать волосы. <br><br>
        - Марио принадлежит несколько мировых рекордов Гиннесса. Самым впечатляющим из них видится рекорд в качестве самого продаваемого персонажа видеоигр в мире. <br><br>
        - После дебюта в "Donkey Kong" разработчики решили примерить Марио роль злодея, поместив его в игру "Donkey Kong Jr.". В игре Марио схватил Донки Конга и посадил его в клетку. А сыну Донки Конга пришлось отправиться на спасение своего отца.`,
        imgUrls: [
            "../assets/superMario/1.png",
            "../assets/superMario/2.png",
            "../assets/superMario/3.png",
            "../assets/superMario/4.png"
        ],
        gameUrl: "https://supermario.ee/",
        jsDosCDN: "https://cdn.dos.zone/custom/dos/mario-luigi.jsdos"
    },
    {
        id: 6,
        name: "Pong",
        header: "Pong",
        containerSelector: "x-pong-container",
        info: `А вы знали, что… <br><br>
        - Pong — одна из ранних аркадных видеоигр. Это теннисная спортивная игра с использованием простой двумерной графики, разработанная и выпущенная фирмой Atari в 1972 году. <br><br>
        - Pong — это первая видеоигра, пришедшая в дома миллионов простых пользователей и усадившая их перед экранами телевизоров.  <br><br>
        - Pong до сих пор остается объектом научных исследований, в том числе в области обучения алгоритмов искусственного интеллекта, улучшения нейронных сетей и разработки интерфейса типа «мозг-машина» под названием Neuralink.`,
        imgUrls: [
            "../assets/pong/1.png",
            "../assets/pong/2.png",
            "../assets/pong/3.png",
            "../assets/pong/4.png"
        ],
        gameUrl: "https://ponggame.io/",
        jsDosCDN: "https://cdn.dos.zone/custom/dos/emeritus-pong.jsdos"
    },
]