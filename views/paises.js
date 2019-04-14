const items = [
    { name: "Corrientes", id: "Corrientes" },
    { name: "Tres de Abril", id: "Tres de Abril" },
    { name: "9 de Julio", id: "9 de Julio" },
    { name: "Alvear", id: "Alvear" },
    { name: "Bella Vista", id: "Bella Vista" },
    { name: "Berón de Astrada", id: "Berón de Astrada" },
    { name: "Bonpland", id: "Bonpland" },
    { name: "Caá Catí", id: "Caá Catí" },
    { name: "Colonia Carlos Pellegrini", id: "Colonia Carlos Pellegrini" },
    { name: "Colonia Carolina", id: "Colonia Carolina" },
    { name: "Chavarría", id: "Chavarría" },
    { name: "Colonia Libertad", id: "Colonia Libertad" },
    { name: "Colonia Liebig", id: "Colonia Liebig" },
    { name: "Colonia Pando", id: "Colonia Pando" },
    { name: "Concepción", id: "Concepción" },
    { name: "Cruz de los Milagros", id: "Cruz de los Milagros" },
    { name: "Curuzú Cuatiá", id: "Curuzú Cuatiá" },
    { name: "Empedrado", id: "Empedrado" },
    { name: "Esquina", id: "Esquina" },
    { name: "Estación Torrent", id: "Estación Torrent" },
    { name: "Felipe Yofre", id: "Felipe Yofre" },
    { name: "Garabí", id: "Garabí" },
    { name: "Garruchos", id: "Garruchos" },
    { name: "Gobernador Martinez", id: "Gobernador Martinez" },
    { name: "Gobernador V. Virasoro", id: "Gobernador V. Virasoro" },
    { name: "Goya", id: "Goya" },
    { name: "Guaviraví", id: "Guaviraví" },
    { name: "Herliztka", id: "Herliztka" },
    { name: "Ita Ibaté", id: "Ita Ibaté" },
    { name: "Itatí", id: "Itatí" },
    { name: "Ituzaingó", id: "Ituzaingó" },
    { name: "José Rafael Gomez", id: "José Rafael Gomez" },
    { name: "Juan Pujol", id: "Juan Pujol" },
    { name: "La Cruz", id: "La Cruz" },
    { name: "San Isidro", id: "San Isidro" },
    { name: "Lomas de Vallejos", id: "Lomas de Vallejos" },
    { name: "Loreto", id: "Loreto" },
    { name: "Mariano I. Loza", id: "Mariano I. Loza" },
    { name: "Mburucuyá", id: "Mburucuyá" },
    { name: "Mercedes", id: "Mercedes" },
    { name: "Mocoretá", id: "Mocoretá" },
    { name: "Monte Caseros", id: "Monte Caseros" },
    { name: "Pago de los Deseos", id: "Pago de los Deseos" },
    { name: "Palmar Grande", id: "Palmar Grande" },
    { name: "Parada Pucheta", id: "Parada Pucheta" },
    { name: "Paso de la Patria", id: "Paso de la Patria" },
    { name: "Paso de los Libres", id: "Paso de los Libres" },
    { name: "Pedro R. Fernandez", id: "Pedro R. Fernandez" },
    { name: "Perugorria", id: "Perugorria" },
    { name: "Pueblo Libertador", id: "Pueblo Libertador" },
    { name: "Lavalle", id: "Lavalle" },
    { name: "Ramada Paso", id: "Ramada Paso" },
    { name: "Riachuelo", id: "Riachuelo" },
    { name: "Saladas", id: "Saladas" },
    { name: "San Antonio de Apipe", id: "San Antonio de Apipe" },
    { name: "San Carlos", id: "San Carlos" },
    { name: "San Cosme", id: "San Cosme" },
    { name: "San Lorenzo", id: "San Lorenzo" },
    { name: "San Luis del Palmar", id: "San Luis del Palmar" },
    { name: "San Miguel", id: "San Miguel" },
    { name: "San Roque", id: "San Roque" },
    { name: "Santa Ana de los Guacaras", id: "Santa Ana de los Guacaras" },
    { name: "Santa Lucía", id: "Santa Lucía" },
    { name: "Colonia Santa Rosa", id: "Colonia Santa Rosa" },
    { name: "Santo Tome", id: "Santo Tome" },
    { name: "Sauce", id: "Sauce" },
    { name: "Tabay", id: "Tabay" },
    { name: "Tapebicuá", id: "Tapebicuá" },
    { name: "Tatacua", id: "Tatacua" },
    { name: "Villa Olivari", id: "Villa Olivari" },
    { name: "Yapeyú", id: "Yapeyú" },
    { name: "Yatayti Calle", id: "Yatayti Calle" },
    { name: "El Sombrero", id: "El Sombrero" },
    {
        name: "Capital Federal",
        id: "Capital Federal",
    },
    {
        name: "Buenos Aires",
        id: "Buenos Aires",
    },
    {
        name: "Catamarca",
        id: "Catamarca",
    },
    {
        name: "Chaco",
        id: "Chaco",
    },
    {
        name: "Chubut",
        id: "Chubut",
    },
    {
        name: "Cordoba",
        id: "Cordoba",
    },

    {
        name: "Entre Rios",
        id: "Entre Rios",
    },
    {
        name: "Formosa",
        id: "Formosa",
    },
    {
        name: "Jujuy",
        id: "Jujuy",
    },
    {
        name: "La Pampa",
        id: "La Pampa",
    },
    {
        name: "La Rioja",
        id: "La Rioja",
    },
    {
        name: "Mendoza",
        id: "Mendoza",
    },
    {
        name: "Misiones",
        id: "Misiones",
    },
    {
        name: "Neuquen",
        id: "Neuquen",
    },
    {
        name: "Rio Negro",
        id: "Rio Negro",
    },
    {
        name: "Salta",
        id: "Salta",
    },
    {
        name: "San Juan",
        id: "San Juan",
    },
    {
        name: "San Luis",
        id: "San Luis",
    },
    {
        name: "Santa Cruz",
        id: "Santa Cruz",
    },
    {
        name: "Santa Fe",
        id: "Santa Fe",
    },
    {
        name: "Santiago del Estero",
        id: "Santiago del Estero",
    },
    {
        name: "Tierra del Fuego",
        id: "Tierra del Fuego",
    },
    {
        name: "Tucuman",
        id: "Tucuman",
    },
    {
        name: "Afganistan",
        id: "Afganistan"
    },
    {
        name: "Albania",
        id: "Albania"
    },
    {
        name: "Alemania",
        id: "Alemania"
    },
    {
        name: "Andorra",
        id: "Andorra"
    },
    {
        name: "Angola",
        id: "Angola"
    },
    {
        name: "Antartida",
        id: "Antartida"
    },
    {
        name: "Antigua y Barbuda",
        id: "Antigua y Barbuda"
    },
    {
        name: "Arabia Saudi",
        id: "Arabia Saudi"
    },
    {
        name: "Argelia",
        id: "Argelia"
    },
    {
        name: "Argentina",
        id: "Argentina"
    },
    {
        name: "Armenia",
        id: "Armenia"
    },
    {
        name: "Australia",
        id: "Australia"
    },
    {
        name: "Austria",
        id: "Austria"
    },
    {
        name: "Azerbaiyan",
        id: "Azerbaiyan"
    },
    {
        name: "Bahamas",
        id: "Bahamas"
    },
    {
        name: "Bahrain",
        id: "Bahrain"
    },
    {
        name: "Bangladesh",
        id: "Bangladesh"
    },
    {
        name: "Barbados",
        id: "Barbados"
    },
    {
        name: "Belgica",
        id: "Belgica"
    },
    {
        name: "Belice",
        id: "Belice"
    },
    {
        name: "Benin",
        id: "Benin"
    },
    {
        name: "Bermudas",
        id: "Bermudas"
    },
    {
        name: "Bielorrusia",
        id: "Bielorrusia"
    },
    {
        name: "Birmania Myanmar",
        id: "Birmania Myanmar"
    },
    {
        name: "Bolivia",
        id: "Bolivia"
    },
    {
        name: "Bosnia y Herzegovina",
        id: "Bosnia y Herzegovina"
    },
    {
        name: "Botswana",
        id: "Botswana"
    },
    {
        name: "Brasil",
        id: "Brasil"
    },
    {
        name: "Brunei",
        id: "Brunei"
    },
    {
        name: "Bulgaria",
        id: "Bulgaria"
    },
    {
        name: "Burkina Faso",
        id: "Burkina Faso"
    },
    {
        name: "Burundi",
        id: "Burundi"
    },
    {
        name: "Butan",
        id: "Butan"
    },
    {
        name: "Cabo Verde",
        id: "Cabo Verde"
    },
    {
        name: "Camboya",
        id: "Camboya"
    },
    {
        name: "Camerun",
        id: "Camerun"
    },
    {
        name: "Canada",
        id: "Canada"
    },
    {
        name: "Chad",
        id: "Chad"
    },
    {
        name: "Chile",
        id: "Chile"
    },
    {
        name: "China",
        id: "China"
    },
    {
        name: "Chipre",
        id: "Chipre"
    },
    {
        name: "Colombia",
        id: "Colombia"
    },
    {
        name: "Comores",
        id: "Comores"
    },
    {
        name: "Congo",
        id: "Congo"
    },
    {
        name: "Corea del Norte",
        id: "Corea del Norte"
    },
    {
        name: "Corea del Sur",
        id: "Corea del Sur"
    },
    {
        name: "Costa de Marfil",
        id: "Costa de Marfil"
    },
    {
        name: "Costa Rica",
        id: "Costa Rica"
    },
    {
        name: "Croacia",
        id: "Croacia"
    },
    {
        name: "Cuba",
        id: "Cuba"
    },
    {
        name: "Dinamarca",
        id: "Dinamarca"
    },
    {
        name: "Dominica",
        id: "Dominica"
    },
    {
        name: "Ecuador",
        id: "Ecuador"
    },
    {
        name: "Egipto",
        id: "Egipto"
    },
    {
        name: "El Salvador",
        id: "El Salvador"
    },
    {
        name: "El Vaticano",
        id: "El Vaticano"
    },
    {
        name: "Emiratos arabes Unidos",
        id: "Emiratos arabes Unidos"
    },
    {
        name: "Eritrea",
        id: "Eritrea"
    },
    {
        name: "Eslovaquia",
        id: "Eslovaquia"
    },
    {
        name: "Eslovenia",
        id: "Eslovenia"
    },
    {
        name: "España",
        id: "España"
    },
    {
        name: "Estados Unidos",
        id: "Estados Unidos"
    },
    {
        name: "Estonia",
        id: "Estonia"
    },
    {
        name: "Etiopia",
        id: "Etiopia"
    },
    {
        name: "Filipinas",
        id: "Filipinas"
    },
    {
        name: "Finlandia",
        id: "Finlandia"
    },
    {
        name: "Fiji",
        id: "Fiji"
    },
    {
        name: "Francia",
        id: "Francia"
    },
    {
        name: "Gabon",
        id: "Gabon"
    },
    {
        name: "Gambia",
        id: "Gambia"
    },
    {
        name: "Georgia",
        id: "Georgia"
    },
    {
        name: "Ghana",
        id: "Ghana"
    },
    {
        name: "Gibraltar",
        id: "Gibraltar"
    },
    {
        name: "Granada",
        id: "Granada"
    },
    {
        name: "Grecia",
        id: "Grecia"
    },
    {
        name: "Guam",
        id: "Guam"
    },
    {
        name: "Guatemala",
        id: "Guatemala"
    },
    {
        name: "Guinea",
        id: "Guinea"
    },
    {
        name: "Guinea Ecuatorial",
        id: "Guinea Ecuatorial"
    },
    {
        name: "Guinea Bissau",
        id: "Guinea Bissau"
    },
    {
        name: "Guyana",
        id: "Guyana"
    },
    {
        name: "Haiti",
        id: "Haiti"
    },
    {
        name: "Honduras",
        id: "Honduras"
    },
    {
        name: "Hungria",
        id: "Hungria"
    },
    {
        name: "India",
        id: "India"
    },
    {
        name: "Indian Ocean",
        id: "Indian Ocean"
    },
    {
        name: "Indonesia",
        id: "Indonesia"
    },
    {
        name: "Iran",
        id: "Iran"
    },
    {
        name: "Iraq",
        id: "Iraq"
    },
    {
        name: "Irlanda",
        id: "Irlanda"
    },
    {
        name: "Islandia",
        id: "Islandia"
    },
    {
        name: "Israel",
        id: "Israel"
    },
    {
        name: "Italia",
        id: "Italia"
    },
    {
        name: "Jamaica",
        id: "Jamaica"
    },
    {
        name: "Japon",
        id: "Japon"
    },
    {
        name: "Jersey",
        id: "Jersey"
    },
    {
        name: "Jordania",
        id: "Jordania"
    },
    {
        name: "Kazajstan",
        id: "Kazajstan"
    },
    {
        name: "Kenia",
        id: "Kenia"
    },
    {
        name: "Kirguistan",
        id: "Kirguistan"
    },
    {
        name: "Kiribati",
        id: "Kiribati"
    },
    {
        name: "Kuwait",
        id: "Kuwait"
    },
    {
        name: "Laos",
        id: "Laos"
    },
    {
        name: "Lesoto",
        id: "Lesoto"
    },
    {
        name: "Letonia",
        id: "Letonia"
    },
    {
        name: "Libano",
        id: "Libano"
    },
    {
        name: "Liberia",
        id: "Liberia"
    },
    {
        name: "Libia",
        id: "Libia"
    },
    {
        name: "Liechtenstein",
        id: "Liechtenstein"
    },
    {
        name: "Lituania",
        id: "Lituania"
    },
    {
        name: "Luxemburgo",
        id: "Luxemburgo"
    },
    {
        name: "Macedonia",
        id: "Macedonia"
    },
    {
        name: "Madagascar",
        id: "Madagascar"
    },
    {
        name: "Malasia",
        id: "Malasia"
    },
    {
        name: "Malawi",
        id: "Malawi"
    },
    {
        name: "Maldivas",
        id: "Maldivas"
    },
    {
        name: "Mali",
        id: "Mali"
    },
    {
        name: "Malta",
        id: "Malta"
    },
    {
        name: "Marruecos",
        id: "Marruecos"
    },
    {
        name: "Mauricio",
        id: "Mauricio"
    },
    {
        name: "Mauritania",
        id: "Mauritania"
    },
    {
        name: "Mexico",
        id: "Mexico"
    },
    {
        name: "Micronesia",
        id: "Micronesia"
    },
    {
        name: "Moldavia",
        id: "Moldavia"
    },
    {
        name: "Monaco",
        id: "Monaco"
    },
    {
        name: "Mongolia",
        id: "Mongolia"
    },
    {
        name: "Montserrat",
        id: "Montserrat"
    },
    {
        name: "Mozambique",
        id: "Mozambique"
    },
    {
        name: "Namibia",
        id: "Namibia"
    },
    {
        name: "Nauru",
        id: "Nauru"
    },
    {
        name: "Nepal",
        id: "Nepal"
    },
    {
        name: "Nicaragua",
        id: "Nicaragua"
    },
    {
        name: "Niger",
        id: "Niger"
    },
    {
        name: "Nigeria",
        id: "Nigeria"
    },
    {
        name: "Noruega",
        id: "Noruega"
    },
    {
        name: "Nueva Zelanda",
        id: "Nueva Zelanda"
    },
    {
        name: "Oman",
        id: "Oman"
    },
    {
        name: "Paises Bajos",
        id: "Paises Bajos"
    },
    {
        name: "Pakistan",
        id: "Pakistan"
    },
    {
        name: "Palau",
        id: "Palau"
    },
    {
        name: "Panama",
        id: "Panama"
    },
    {
        name: "Papua Nueva Guinea",
        id: "Papua Nueva Guinea"
    },
    {
        name: "Paraguay",
        id: "Paraguay"
    },
    {
        name: "Peru",
        id: "Peru"
    },
    {
        name: "Polonia",
        id: "Polonia"
    },
    {
        name: "Portugal",
        id: "Portugal"
    },
    {
        name: "Puerto Rico",
        id: "Puerto Rico"
    },
    {
        name: "Qatar",
        id: "Qatar"
    },
    {
        name: "Reino Unido",
        id: "Reino Unido"
    },
    {
        name: "Republica Centroafricana",
        id: "Republica Centroafricana"
    },
    {
        name: "Republica Checa",
        id: "Republica Checa"
    },
    {
        name: "Republica Democratica del Congo",
        id: "Republica Democratica del Congo"
    },
    {
        name: "Republica Dominicana",
        id: "Republica Dominicana"
    },
    {
        name: "Ruanda",
        id: "Ruanda"
    },
    {
        name: "Rumania",
        id: "Rumania"
    },
    {
        name: "Rusia",
        id: "Rusia"
    },
    {
        name: "Sahara Occidental",
        id: "Sahara Occidental"
    },
    {
        name: "Samoa",
        id: "Samoa"
    },
    {
        name: "San Cristobal y Nevis",
        id: "San Cristobal y Nevis"
    },
    {
        name: "San Marino",
        id: "San Marino"
    },
    {
        name: "San Vicente y las Granadinas",
        id: "San Vicente y las Granadinas"
    },
    {
        name: "Santa Lucia",
        id: "Santa Lucia"
    },
    {
        name: "Santo Tome y Principe",
        id: "Santo Tome y Principe"
    },
    {
        name: "Senegal",
        id: "Senegal"
    },
    {
        name: "Seychelles",
        id: "Seychelles"
    },
    {
        name: "Sierra Leona",
        id: "Sierra Leona"
    },
    {
        name: "Singapur",
        id: "Singapur"
    },
    {
        name: "Siria",
        id: "Siria"
    },
    {
        name: "Somalia",
        id: "Somalia"
    },
    {
        name: "Southern Ocean",
        id: "Southern Ocean"
    },
    {
        name: "Sri Lanka",
        id: "Sri Lanka"
    },
    {
        name: "Swazilandia",
        id: "Swazilandia"
    },
    {
        name: "Sudafrica",
        id: "Sudafrica"
    },
    {
        name: "Sudan",
        id: "Sudan"
    },
    {
        name: "Suecia",
        id: "Suecia"
    },
    {
        name: "Suiza",
        id: "Suiza"
    },
    {
        name: "Surinam",
        id: "Surinam"
    },
    {
        name: "Tailandia",
        id: "Tailandia"
    },
    {
        name: "Taiwan",
        id: "Taiwan"
    },
    {
        name: "Tanzania",
        id: "Tanzania"
    },
    {
        name: "Tayikistan",
        id: "Tayikistan"
    },
    {
        name: "Togo",
        id: "Togo"
    },
    {
        name: "Tokelau",
        id: "Tokelau"
    },
    {
        name: "Tonga",
        id: "Tonga"
    },
    {
        name: "Trinidad y Tobago",
        id: "Trinidad y Tobago"
    },
    {
        name: "Tunez",
        id: "Tunez"
    },
    {
        name: "Turkmekistan",
        id: "Turkmekistan"
    },
    {
        name: "Turquia",
        id: "Turquia"
    },
    {
        name: "Tuvalu",
        id: "Tuvalu"
    },
    {
        name: "Ucrania",
        id: "Ucrania"
    },
    {
        name: "Uganda",
        id: "Uganda"
    },
    {
        name: "Uruguay",
        id: "Uruguay"
    },
    {
        name: "Uzbekistan",
        id: "Uzbekistan"
    },
    {
        name: "Vanuatu",
        id: "Vanuatu"
    },
    {
        name: "Venezuela",
        id: "Venezuela"
    },
    {
        name: "Vietnam",
        id: "Vietnam"
    },
    {
        name: "Yemen",
        id: "Yemen"
    },
    {
        name: "Djibouti",
        id: "Djibouti"
    },
    {
        name: "Zambia",
        id: "Zambia"
    },
    {
        name: "Zimbabue",
        id: "Zimbabue"

    }
];

export default items;