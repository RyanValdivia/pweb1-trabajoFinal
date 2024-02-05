-- MySQL dump 10.13  Distrib 8.0.34, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: bdlibros
-- ------------------------------------------------------
-- Server version	8.0.35
/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */
;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */
;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */
;
/*!50503 SET NAMES utf8 */
;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */
;
/*!40103 SET TIME_ZONE='+00:00' */
;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */
;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */
;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */
;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */
;
--
-- Table structure for table `libros`
--
DROP TABLE IF EXISTS `libros`;
/*!40101 SET @saved_cs_client     = @@character_set_client */
;
/*!50503 SET character_set_client = utf8mb4 */
;
CREATE TABLE `libros` (
  `id` int NOT NULL AUTO_INCREMENT,
  `titulo` varchar(255) NOT NULL,
  `autor` varchar(255) NOT NULL,
  `generoLiterario` varchar(255) DEFAULT NULL,
  `descripcion` text,
  `rutaDePortada` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE = InnoDB AUTO_INCREMENT = 61 DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */
;
--
-- Dumping data for table `libros`
--
LOCK TABLES `libros` WRITE;
/*!40000 ALTER TABLE `libros` DISABLE KEYS */
;
INSERT INTO `libros`
VALUES (
    1,
    'El Principito',
    'Antoine de Saint-Exupéry',
    'Infantil',
    '\"El Principito\" narra las aventuras de un pequeño príncipe en diferentes planetas, explorando temas como la amistad y el amor, con reflexiones filosóficas que resaltan la esencia de la vida.',
    '1_ElPrincipito.jpg'
  ),
  (
    2,
    'La Metamorfosis',
    'Franz Kafka',
    'Fantasia',
    '\"La Metamorfosis\" relata la transformación de Gregor Samsa en un insecto y explora temas de alienación y deshumanización. La obra examina la condición humana y las relaciones familiares.',
    '2_LaMetamorfosis.jpg'
  ),
  (
    3,
    'Mujercitas',
    'Louisa May Alcott',
    'Novela',
    '\"Mujercitas\" sigue la vida de las hermanas March mientras transcurre la Guerra Civil estadounidense. La novela destaca valores familiares, amor y ambiciones individuales en un contexto histórico significativo.',
    '3_Mujercitas.jpg'
  ),
  (
    4,
    'Persepelis',
    'Marjane Satrapi',
    'Novela',
    '\"Persépolis\" es una novela gráfica que narra la vida de una joven en Irán durante la Revolución Islámica. Ofrece una perspectiva única sobre la cultura, política e identidad en ese contexto.',
    '4_Persepelis.jpg'
  ),
  (
    5,
    'Los secretos de Heap House',
    'Edward Carey',
    'Fantasia',
    '\"Los secretos de Heap House\" es una novela que explora la vida en una peculiar mansión donde cada habitante tiene habilidades especiales relacionadas con sus objetos personales.',
    '5_LossecretosdeHeapHouse.jpg'
  ),
  (
    6,
    'Los 7 Maridos de Evelyn Hugo',
    'Taylor Jenkins Reid',
    'Fantasia',
    '\"Los 7 Maridos de Evelyn Hugo\" es una novela que desentraña la vida de una legendaria estrella de cine, Evelyn Hugo, revelando sus siete matrimonios y secretos personales.',
    '6_Los7MaridosdeEvelynHugo.jpg'
  ),
  (
    7,
    'El Curioso Incidente del Perro a Medianoche',
    'Mark Haddon',
    'Novela',
    '\"El Curioso Incidente del Perro a Medianoche\" sigue a Christopher, un adolescente con trastorno del espectro autista, mientras investiga la muerte de un perro. La narrativa revela verdades sorprendentes sobre su propia vida.',
    '7_ElCuriosoIncidentedelPerroaMedianoche.jpg'
  ),
  (
    8,
    'Invisible',
    'Eloy Moreno',
    'Fantasia',
    'Emotiva, conmovedora, diferente... \"Invisible\" narra, a través de los ojos de un niño, una historia que podría ser la de cualquiera de nosotros.',
    '8_Invisible.jpg'
  ),
  (
    9,
    'El Hombre de Tiza',
    'C.J Tudor',
    'Fantasia',
    '\"En \'El Hombre de Tiza\', los símbolos de tiza de la infancia resurgen entre amigos, desenterrando secretos oscuros y revelando eventos perturbadores del pasado que deben enfrentar.\"',
    '9_ElHombredeTiza.jpg'
  ),
  (
    10,
    'Verity',
    'Colleen Hoover',
    'Novela',
    '\"Verity\" es un suspense que sigue a Lowen Ashleigh, una escritora contratada para completar las novelas de Verity Crawford. La historia revela oscuros secretos que impactan la vida de Lowen.',
    '10_Verity.jpg'
  ),
  (
    11,
    'Alicia en el país de las maravillas',
    'Lewis Carroll',
    'Infantil',
    'Alicia, una niña curiosa, cae por un agujero y se encuentra en un mundo mágico donde todo es posible. Allí, tiene aventuras con personajes extraños y absurd, como el Conejo Blanco, la Oruga, el Gato Cheshire y la Reina Roja.',
    '11_Aliciaenelpaísdelasmaravillas.jpg'
  ),
  (
    12,
    'Charlie y la fábrica de chocolate',
    'Roald Dahl',
    'Infantil',
    'Charlie Bucket, un niño pobre, gana un bolet dorado para visitar la fábrica de chocolate de Will Wonka. Allí, Charlie y otros cuatro niños tienen l oportunidad de probar los dulces más deliciosos y de conocer a los extravagantes Oompa-Loompas.',
    '12_Charlieylafábricadechocolate.jpg'
  ),
  (
    13,
    'El libro de la selva',
    'Rudyard Kipling',
    'Infantil',
    'Mowgli, un niño huérfano, es criado por lobos en selva india. Allí, aprende a sobrevivir y a vivir en armonía con la naturaleza',
    '13_Ellibrodelaselva.jpg'
  ),
  (
    14,
    'Pinocho',
    'Carlo Collodi',
    'Infantil',
    'Pinocho, un mu eco de madera, sueña con convertirse en un ni o de verdad. Para lograrlo, debe aprender a ser bueno y responsable.',
    '14_Pinocho.jpg'
  ),
  (
    15,
    'Peter Pan',
    'James Matthew Barrie',
    'Infantil',
    'Peter Pan es un niño que nunca crece y vive en e País de Nunca Jamás, un lugar mágico donde to es posile...',
    '15_PeterPan.jpg'
  ),
  (
    16,
    'El maravilloso mago de Oz',
    'L. Frank Baum',
    'Infantil',
    'Dorothy Gale es una niña de Kansas que e transportada a la Tierra de Oz por un tornado. Allí, conoce a un Espantapájaros, un Hombre d Hojalata y un León Cobarde, y se embarca en una aventura para encontrar al Mago de Oz, quien le ayudará a regresar a casa.',
    '16_ElmaravillosomagodeOz.jpg'
  ),
  (
    17,
    'Harry Potter',
    'J.K. Rowling',
    'Infantil',
    'Cuentan la historia de un niño huérfano que descubr que es un mago. En la escuela de magia Hogwarts, Harry aprende a usar sus poderes y se embarca en aventuras para salvar el mundo.',
    '17_HarryPotter.jpg'
  ),
  (
    18,
    'Las Cronicas de Narnia',
    'C.S. Lewis',
    'Infantil',
    'Cuatro niños descubren un mundo mágico llamado Narni , donde deben luchar contra la malvada bruja Blanca.',
    '18_LasCronicasdeNarnia.jpg'
  ),
  (
    19,
    'Matilda',
    'Roald Dahi',
    'Infantil',
    'Matilda Wormwood es una niña con poderes mágicos que usa para vengarse de sus padres abusivos y ayudar a los demás.',
    '19_Matilda.jpg'
  ),
  (
    20,
    'La isla del tesoro',
    'Robert Louis Stevenson',
    'Infantil',
    'Es una historia de piratas y aventuras. Sigue la historia de Jim Hawkins, un niño que encuentra un mapa del tesoro. Jim se embarca en una aventura para encontrar el tesoro, acompañado de un grupo de piratas.',
    '20_Laisladeltesoro.jpg'
  ),
  (
    21,
    'Cien años de soledad',
    'Gabriel García Márquez',
    'Novela',
    'La obra maestra de García Márquez narra la historia de la familia Buendía en el mágico pueblo de Macondo,explorando temas de amor, poder y soledad a lo largo de varias generaciones, fusionando lo real y lo mágico en una narrativa cautivadora.',
    '21_Cienañosdesoledad.jpg'
  ),
  (
    22,
    'Don Quijote de la Mancha',
    'Miguel de Cervantes',
    'Novela',
    'Cervantes da vida a la figura del ingenioso hidalgo don Quijote, quien, obsesionado por los libros de caballería,  se embarca en aventuras ridículas  y conmovedoras que cuestionan  la  realidad  y  la fantasía.',
    '22_DonQuijotedelaMancha.jpg'
  ),
  (
    23,
    'Rayuela',
    'Julio Cortázar',
    'Novela',
    'Cortázar desafía las convenciones narrativas con su estructura única, invitando a los lectores a participar activamente en la historia del viaje existencial de Horacio Oliveira entre París y Buenos Aires.',
    '23_Rayuela.jpg'
  ),
  (
    24,
    'El amor en los tiempos del cólera',
    'Gabriel García Márquez',
    'Novela',
    'García Márquez cuenta la historia de Florentino Ariza  y  Fermina  Daza, quienes, separados por décadas, reavivan un amor pasional en su vejez, explorando el tiempo y la duración del amor.',
    '24_Elamorenlostiemposdelcólera.jpg'
  ),
  (
    25,
    'Crónica de una muerte anunciada',
    'Gabriel García Márquez',
    'Novela',
    'García Márquez relata el asesinato inevitable de Santiago Nasar en un pequeño pueblo latinoamericano, explorando la naturaleza del destino y la fatalidad en una estructura narrativa única y envolvente.',
    '25_Crónicadeunamuerteanunciada.jpg'
  ),
  (
    26,
    'La ciudad y los perros',
    'Mario Vargas Llosa',
    'Novela',
    'Vargas Llosa examina la brutal realidad de la vida militar en la academia Leoncio Prado, donde un grupo de jóvenes lucha por sobrevivir en un ambiente opresivo marcado por la corrupción y la violencia.',
    '26_Laciudadylosperros.jpg'
  ),
  (
    27,
    'Aura',
    'Carlos Fuentes',
    'Novela',
    'Fuentes fusiona lo gótico y lo erótico en esta novela donde Felipe Montero, al aceptar un trabajo para transcribir las memorias de una anciana, se ve envuelto en un laberinto de pasiones y misterios.',
    '27_Aura.jpg'
  ),
  (
    28,
    'La sombra del viento',
    'Carlos Ruiz Zafón',
    'Novela',
    'En la Barcelona posguerra, Zafón teje una trama de misterio en torno a Daniel Sempere, quien descubre un libro maldito, desencadenando una búsqueda peligrosa en el Cementerio de los Libros Olvidados.',
    '28_Lasombradelviento.jpg'
  ),
  (
    29,
    'Ficciones',
    'Jorge Luis Borges',
    'Novela',
    'Borges despliega su genialidad literaria en una colección de cuentos que desafían la realidad y exploran mundos imaginarios, donde los laberintos, los espejos y las bibliotecas adquieren un significado filosófico profundo.',
    '29_Ficciones.jpg'
  ),
  (
    30,
    'El túnel',
    'Ernesto Sabato',
    'Novela',
    'Narra la obsesión del pintor Juan Pablo Castel por María,llevándolo a cometer un crimen. La novela explora la soledad y la alienación a través de una narrativa intensa y psicológica.',
    '30_Eltúnel.jpg'
  ),
  (
    31,
    '1984',
    'George Orwell',
    'Ciencia FIcción',
    'En un mundo distópico, Orwell presenta una sociedad controlada por un régimen totalitario que manipula la verdad y la realidad, explorando temas de vigilancia, opresión y resistencia.',
    '31_1984.jpg'
  ),
  (
    32,
    'Dune',
    'Frank Herbert',
    'Ciencia FIcción',
    'Herbert crea un épico universo en \"Dune\", donde las casas nobles luchan por controlar el recurso más valioso del cosmos, la especia melange, en un viaje lleno de política, traición y profecías.',
    '32_Dune.jpg'
  ),
  (
    33,
    'Los detectives salvajes',
    'Roberto Bolaño',
    'Ciencia FIcción',
    'La obra maestra de Bolaño sigue la búsqueda de dos poetas jóvenes en el mundo literario y contracultural de México, revelando una red de personajes excéntricos y una travesía que abarca décadas y continentes.',
    '33_Losdetectivessalvajes.jpg'
  ),
  (
    34,
    'La máquina del tiempo',
    'H.G. Wells',
    'Ciencia FIcción',
    'Wells introduce la idea del viaje en el tiempo con la historiade un científico que viaja al futuro distante, encontrándose con sociedades divergentes y desafiantes.',
    '34_Lamáquinadeltiempo.jpg'
  ),
  (
    35,
    'Yo, robot',
    'Isaac Asimov',
    'Ciencia FIcción',
    'Una investigación llevada a cabo por un periodista acerca de la trayectoria de la robopsicóloga Susan Calvin da pie a los nueve relatos que componen esta novela.',
    '35_Yo,robot.jpg'
  ),
  (
    36,
    'Guía del autoestopista galáctico',
    'Douglas Adams',
    'Ciencia FIcción',
    'La Tierra es destruida para dar paso a una autopista hiperespacial, y Arthur Dent inicia un cómico viaje intergaláctico con la Guía del autoestopista galáctico en este clásico de Douglas Adams.',
    '36_Guíadelautoestopistagaláctico.jpg'
  ),
  (
    37,
    'Crónicas marcianas',
    'Ray Bradbury',
    'Ciencia FIcción',
    'Bradbury ofrece una serie de relatos que exploran la colonización y la transformación de Marte, revelando las complejidadesde la naturaleza humana.',
    '37_Crónicasmarcianas.jpg'
  ),
  (
    38,
    'Fahrenheit 451',
    'Ray Bradbury',
    'Ciencia FIcción',
    'Bradbury imagina un mundo donde los bomberos queman libros para controlar el pensamiento, desafiando la censura y la supresión de la creatividad.',
    '38_Fahrenheit451.jpg'
  ),
  (
    39,
    'Solaris',
    'Stanisław Lem',
    'Ciencia FIcción',
    'Lem aborda la exploración psicológica y la comunicación con un misterioso océano inteligente en el planeta Solaris, desafiando la comprensión humana.',
    '39_Solaris.jpg'
  ),
  (
    40,
    'Un mundo feliz',
    'Aldous Huxley',
    'Ciencia FIcción',
    'En un mundo controlado por la reproducción artificial y el condicionamiento social, desde Alfa hasta Épsilon, Aldous Huxley explora la manipulación genética y la hipnopedia en \"Un mundo feliz\".',
    '40_Unmundofeliz.jpg'
  ),
  (
    41,
    'Trilogía del Vatídico',
    'Robin Hobb',
    'Fantasia',
    'Traspié Hidalgo Vatídico, hijo bastardo del príncipe heredero, enfrenta piratas y conspiraciones en un reino asediado. Con dones mágicos, protege a su rey en una apasionante trilogía.',
    '41_TrilogíadelVatídico.jpg'
  ),
  (
    42,
    'Crónica del Asesino de Reyes',
    'Patrick Rothfuss',
    'Fantasia',
    'Kvothe, mendigo, ladrón, mago y héroe, es el enigmático protagonista en una saga entre leyenda y narración propia. Dos libros publicados, El nombre del viento y El temor de un hombre sabio, forman parte de la adictiva trilogía.',
    '42_CrónicadelAsesinodeReyes.jpg'
  ),
  (
    43,
    'La Sombra del Viento',
    'Carlos Ruíz Zafón',
    'Fantasia',
    'En \"La Sombra del Viento,\" Daniel Sempere, intrigado por el autor Julián Carax, descubre oscuros secretos en Barcelona. Junto a su amigo Fermín, desentraña misterios y enfrenta peligros mientras investiga la enigmática vida del escritor.',
    '43_LaSombradelViento.jpg'
  ),
  (
    44,
    'Mundodisco',
    'Terry Pratchett',
    'Fantasia',
    'Explora la Tierra plana sostenida por elefantes y una tortuga en la serie \'Mundodisco\' de Terry Pratchett, donde la fantasía y el humor se entrelazan. Con 40 novelas, iniciar con \"Dioses menores\" ofrece una divertida introducción a los encantadores arcos narrativos del hechicero Rincewind, las brujas y la Guardia de la Ciudad.',
    '44_Mundodisco.jpg'
  ),
  (
    45,
    'Jonathan Strange y el señor Norrell',
    'Susanna Clarke',
    'Fantasia',
    'Presenta un siglo XIX alternativo donde la magia y las Guerras Napoleónicas convergen. El ávido señor Norrell, al dar vida a las piedras de la Catedral de York, se une a Jonathan Strange en una historia única que explora la magia en la lucha contra Napoleón. Aunque se anunció una secuela, por ahora, esta obra es la única entrega.',
    '45_JonathanStrangeyelseñorNorrell.jpg'
  ),
  (
    46,
    'El Ultimo Deseo',
    'Andrzej Sapkowski',
    'Fantasia',
    'En el mundo de magia y maravillas, Geralt de Rivia, un brujo mutante, caza monstruos con sus espadas de acero y plata. Irónico y errante, desvela monstruos ocultos tras apariencias humanas mientras sortea intrigas y toma decisiones éticas.',
    '46_ElUltimoDeseo.jpg'
  ),
  (
    47,
    'Los libros de Terramar',
    'Ursula K. Le Guin',
    'Fantasia',
    'La saga de Ursula K. Le Guin, iniciada con \"Un mago de Terramar\" en los años 60, es un clásico del género que ofrece un mundo mágico c on dragones y magos. La colección ilustrada por Charles Vess incluye las 6 novelas, cuentos adicionales y material inédito, destacando la humanidad de los personajes en esta mágica saga.',
    '47_LoslibrosdeTerramar.jpg'
  ),
  (
    48,
    'Canción de hielo y fuego',
    'George R.R. Martin',
    'Fantasia',
    'En un mundo de estaciones prolongadas, Robert Baratheon se sienta en el Trono de Hierro, conquistándolo tras una guerra sangrienta contra la dinastía Targaryen y su último rey.',
    '48_Cancióndehieloyfuego.jpg'
  ),
  (
    49,
    'El archivo de las tormentas',
    'Brandon Sanderson',
    'Fantasia',
    'Brandon Sanderson, destacado autor de fantasía, concluyó \"La rueda del tiempo,\" creó \"Nacidos de la bruma\" y actualmente destaca con la saga \"El archivo de las tormentas,\" fusionando ciencia ficción postapocalíptica en un mundo de fantasía épica, donde personajes diversos buscan devolver la magia a un mundo que la ha perdido.',
    '49_Elarchivodelastormentas.jpg'
  ),
  (
    50,
    'El señor de los anillos',
    'J.R.R. Tolkien',
    'Fantasia',
    'En la pacífica Comarca, un joven hobbit recibe la misión de custodiar el Anillo Único y emprender un peligroso viaje para destruirlo en la Grieta del Destino, acompañado por un variado grupo de magos, hombres, elfos y enanos, enfrentándose a las sombras de Mordor y las huestes de Sauron, el Señor Oscuro.',
    '50_Elseñordelosanillos.jpg'
  ),
  (
    51,
    'La mujer del viajero en el tiempo',
    'Audrey Niffenegger',
    'Romance',
    'Un bibliotecario, Henry, viaja involuntariamente en el tiempo debido a una disfunción genética. Su amor con Clare enfrenta desafíos únicos, explorando la perdurabilidad del amor y las emociones iniciales en una relación.',
    '51_Lamujerdelviajeroeneltiempo.jpg'
  ),
  (
    52,
    'Farsa de amor a la española',
    'Elena Armas',
    'Romance',
    'Catalina busca un acompañante para la boda de su hermana y, en un giro sorprendente, Aaron, su molesto compañero de trabajo, se ofrece a fingir amor. La decisión se reduce entre tolerar a Aaron con su actitud petulante o revelar la farsa a su familia.',
    '52_Farsadeamoralaespañola.jpg'
  ),
  (
    53,
    'Todas esas cosas que te diré mañana',
    'Elisabet Benavent',
    'Romance',
    'Miranda, subdirectora de una revista de moda, enfrenta el dolor de ser dejada por su pareja, Tristán. En un giro, Benavent, maestra de la literatura erótica y romántica, presenta una historia de saltos en el tiempo que reconstruye de manera aleatoria los momentos clave de una relación.',
    '53_Todasesascosasquetedirémañana.jpg'
  ),
  (
    54,
    'El vestido de novia',
    'Danielle Steel',
    'Romance',
    'La autora más leída del mundo cuenta la emotiva historia de una familia en San Francisco, centrada en un vestido especial heredado a lo largo de generaciones, desde los años veinte hasta las consecuencias del desplome de Wall Street',
    '54_Elvestidodenovia.jpg'
  ),
  (
    55,
    'El mapa de los anehlos',
    'Alice Kellen',
    'Romance',
    'Grace, tras perder a su hermana, emprende un viaje emocional al seguir las instrucciones del juego \"El mapa de los anhelos\", en busca de Will Tucker. Un recorrido lleno de vulnerabilidades y descubrimientos inesperados.',
    '55_Elmapadelosanehlos.jpg'
  ),
  (
    56,
    'La hipótesis del amor',
    'Ali Hazelwood',
    'Romance',
    'Olive, escéptica sobre el amor duradero, besa al reputado pero insensato profesor Adam para demostrar a su amiga Ahn que ha superado el pasado. Sorprendentemente, Adam acepta ser su novio falso, y a medida que simulan la relación, la tensión crece peligrosamente.',
    '56_Lahipótesisdelamor.jpg'
  ),
  (
    57,
    'Los amantes de Hamburgo',
    'Miriam Georg',
    'Romance',
    'Lily, alejada en Liverpool, regresa a Hamburgo con su hija Hanna. Mientras la familia lucha contra las dificultades económicas, Jo, inmerso en la lucha obrera, ansía vengarse de Ludwig. En medio de la miseria del puerto, Lily espera que algún día Jo conozca a su hija.',
    '57_LosamantesdeHamburgo.jpg'
  ),
  (
    58,
    'La melodía de la memoria',
    'Alyson Richman',
    'Romance',
    'Enfrentando la dictadura en Chile, Octavio Ribeiro, un soñador comprometido, pone en peligro a su familia por sus ideales. Cuando surge la oportunidad de exiliarse, su esposa Salomé descubre verdades dolorosas en el camino de regreso al amor.',
    '58_Lamelodíadelamemoria.jpg'
  ),
  (
    59,
    'Boulevard',
    'Flor M. Salvador',
    'Romance',
    'Luke y Hasley no eran el prototipo de una pareja perfecta. Sin embargo, ambos le pusieron una definición a lo que ellos crearon...',
    '59_Boulevard.jpg'
  ),
  (
    60,
    'Antes de diciembre',
    'Joana Marcus',
    'Romance',
    'Narra la historia adictiva de Jenna Brown, enfrentando su primer año universitario con una relación a distancia y abierta. Atravesando la tentación con el mejor amigo del novio de su compañera, Jenna tiene hasta diciembre para descubrir si su vida amorosa cambiará para siempre.',
    '60_Antesdediciembre.jpg'
  );
/*!40000 ALTER TABLE `libros` ENABLE KEYS */
;
UNLOCK TABLES;
--
-- Dumping events for database 'bdlibros'
--
--
-- Dumping routines for database 'bdlibros'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */
;
/*!40101 SET SQL_MODE=@OLD_SQL_MODE */
;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */
;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */
;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */
;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */
;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */
;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */
;
-- Dump completed on 2024-01-18  0:38:02