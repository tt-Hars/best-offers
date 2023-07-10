exports.handler = async (event, context) => {
  const countries = [
    {
      "countryCode": "AE",
      "name": "United Arab Emirates",
      "currencyCode": "AED"
    },
    {
      "countryCode": "AL",
      "name": "Albania",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "AM",
      "name": "Armenia",
      "currencyCode": "AMD"
    },
    {
      "countryCode": "AO",
      "name": "Angola",
      "currencyCode": "AOA"
    },
    {
      "countryCode": "AR",
      "name": "Argentina",
      "currencyCode": "ARS"
    },
    {
      "countryCode": "AT",
      "name": "Austria",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "AU",
      "name": "Australia",
      "currencyCode": "AUD"
    },
    {
      "countryCode": "AZ",
      "name": "Azerbaijan",
      "currencyCode": "AZM"
    },
    {
      "countryCode": "BA",
      "name": "Bosnia-Herzegovina",
      "currencyCode": "BAM"
    },
    {
      "countryCode": "BB",
      "name": "Barbados",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "BE",
      "name": "Belgium",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "BG",
      "name": "Bulgaria",
      "currencyCode": "BGN"
    },
    {
      "countryCode": "BR",
      "name": "Brazil",
      "currencyCode": "BRL"
    },
    {
      "countryCode": "BY",
      "name": "Belarus",
      "currencyCode": "BYR"
    },
    {
      "countryCode": "CA",
      "name": "Canada",
      "currencyCode": "CAD"
    },
    {
      "countryCode": "CH",
      "name": "Switzerland",
      "currencyCode": "CHF"
    },
    {
      "countryCode": "CN",
      "name": "China",
      "currencyCode": "CNY"
    },
    {
      "countryCode": "CO",
      "name": "Colombia",
      "currencyCode": "COP"
    },
    {
      "countryCode": "CR",
      "name": "Costa Rica",
      "currencyCode": "CRC"
    },
    {
      "countryCode": "CU",
      "name": "Cuba",
      "currencyCode": "CUP"
    },
    {
      "countryCode": "CW",
      "name": "Curaçao"
    },
    {
      "countryCode": "CY",
      "name": "Cyprus",
      "currencyCode": "CYP"
    },
    {
      "countryCode": "CZ",
      "name": "Czech Republic",
      "currencyCode": "CZK"
    },
    {
      "countryCode": "DE",
      "name": "Germany",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "DK",
      "name": "Denmark",
      "currencyCode": "DKK"
    },
    {
      "countryCode": "DO",
      "name": "Dominican Republic",
      "currencyCode": "DOP"
    },
    {
      "countryCode": "DZ",
      "name": "Algeria",
      "currencyCode": "DZD"
    },
    {
      "countryCode": "EE",
      "name": "Estonia",
      "currencyCode": "EEK"
    },
    {
      "countryCode": "EG",
      "name": "Egypt",
      "currencyCode": "EGP"
    },
    {
      "countryCode": "ES",
      "name": "Spain",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "ET",
      "name": "Ethiopia",
      "currencyCode": "ETB"
    },
    {
      "countryCode": "FI",
      "name": "Finland",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "FR",
      "name": "France",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "GB",
      "name": "United Kingdom",
      "currencyCode": "GBP"
    },
    {
      "countryCode": "GE",
      "name": "Georgia",
      "currencyCode": "GEL"
    },
    {
      "countryCode": "GQ",
      "name": "Equatorial Guinea"
    },
    {
      "countryCode": "GR",
      "name": "Greece",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "HR",
      "name": "Croatia",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "HU",
      "name": "Hungary",
      "currencyCode": "HUF"
    },
    {
      "countryCode": "IE",
      "name": "Ireland",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "IL",
      "name": "Israel",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "IN",
      "name": "India",
      "currencyCode": "INR"
    },
    {
      "countryCode": "IQ",
      "name": "Iraq",
      "currencyCode": "IQD"
    },
    {
      "countryCode": "IR",
      "name": "Iran",
      "currencyCode": "IRR"
    },
    {
      "countryCode": "IS",
      "name": "Iceland",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "IT",
      "name": "Italy",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "JM",
      "name": "Jamaica",
      "currencyCode": "JMD"
    },
    {
      "countryCode": "JO",
      "name": "Jordan",
      "currencyCode": "JOD"
    },
    {
      "countryCode": "JP",
      "name": "Japan",
      "currencyCode": "JPY"
    },
    {
      "countryCode": "KE",
      "name": "Kenya",
      "currencyCode": "KES"
    },
    {
      "countryCode": "KR",
      "name": "South Korea",
      "currencyCode": "KRW"
    },
    {
      "countryCode": "KW",
      "name": "Kuwait",
      "currencyCode": "KWD"
    },
    {
      "countryCode": "KZ",
      "name": "Kazakhstan",
      "currencyCode": "KZT"
    },
    {
      "countryCode": "LB",
      "name": "Lebanon"
    },
    {
      "countryCode": "LT",
      "name": "Lithuania",
      "currencyCode": "LTL"
    },
    {
      "countryCode": "LU",
      "name": "Luxembourg",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "LV",
      "name": "Latvia",
      "currencyCode": "LVL"
    },
    {
      "countryCode": "MA",
      "name": "Morocco",
      "currencyCode": "MAD"
    },
    {
      "countryCode": "MD",
      "name": "Moldova",
      "currencyCode": "MDL"
    },
    {
      "countryCode": "ME",
      "name": "Montenegro",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "MK",
      "name": "North Macedonia",
      "currencyCode": "MKD"
    },
    {
      "countryCode": "MT",
      "name": "Malta",
      "currencyCode": "MTL"
    },
    {
      "countryCode": "MU",
      "name": "Mauritius",
      "currencyCode": "MUR"
    },
    {
      "countryCode": "MV",
      "name": "Maldives",
      "currencyCode": "MVR"
    },
    {
      "countryCode": "MX",
      "name": "Mexico",
      "currencyCode": "MXN"
    },
    {
      "countryCode": "NA",
      "name": "Namibia",
      "currencyCode": "NAD"
    },
    {
      "countryCode": "NG",
      "name": "Nigeria",
      "currencyCode": "NGN"
    },
    {
      "countryCode": "NL",
      "name": "Netherlands",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "NO",
      "name": "Norway",
      "currencyCode": "NOK"
    },
    {
      "countryCode": "OM",
      "name": "Oman",
      "currencyCode": "OMR"
    },
    {
      "countryCode": "PA",
      "name": "Panama",
      "currencyCode": "PAB"
    },
    {
      "countryCode": "PL",
      "name": "Poland",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "PT",
      "name": "Portugal",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "QA",
      "name": "Qatar",
      "currencyCode": "QAR"
    },
    {
      "countryCode": "RO",
      "name": "Romania",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "RS",
      "name": "Serbia",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "RU",
      "name": "Russia",
      "currencyCode": "USD"
    },
    {
      "countryCode": "SA",
      "name": "Saudi Arabia",
      "currencyCode": "SAR"
    },
    {
      "countryCode": "SE",
      "name": "Sweden",
      "currencyCode": "SEK"
    },
    {
      "countryCode": "SG",
      "name": "Singapore",
      "currencyCode": "SGD"
    },
    {
      "countryCode": "SI",
      "name": "Slovenia",
      "currencyCode": "SIT"
    },
    {
      "countryCode": "SK",
      "name": "Slovakia",
      "currencyCode": "SKK"
    },
    {
      "countryCode": "SY",
      "name": "Seychelles",
      "currencyCode": "SYP"
    },
    {
      "countryCode": "TH",
      "name": "Thailand",
      "currencyCode": "THB"
    },
    {
      "countryCode": "TM",
      "name": "Turkmenistan",
      "currencyCode": "TMM"
    },
    {
      "countryCode": "TN",
      "name": "Tunisia",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "TR",
      "name": "Turkey",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "TZ",
      "name": "Tanzania",
      "currencyCode": "TZS"
    },
    {
      "countryCode": "UA",
      "name": "Ukraine",
      "currencyCode": "USD"
    },
    {
      "countryCode": "US",
      "name": "USA",
      "currencyCode": "USD"
    },
    {
      "countryCode": "XK",
      "name": "Kosovo",
      "currencyCode": "EUR"
    },
    {
      "countryCode": "ZA",
      "name": "South Africa",
      "currencyCode": "ZAR"
    },
    {
      "countryCode": "ZW",
      "name": "Zimbabwe",
      "currencyCode": "ZWD"
    }
  ]
  
  const stations = [
    {
      "tlc": "AAL",
      "name": "Aalborg",
      "countryCode": "DK",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ADA",
      "name": "Adana",
      "countryCode": "TR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "AGA",
      "name": "Agadir",
      "countryCode": "MA",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ALC",
      "name": "Alicante",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "AMS",
      "name": "Amsterdam",
      "countryCode": "NL",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "AYT",
      "name": "Antalya",
      "countryCode": "TR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ATH",
      "name": "Athens",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BCN",
      "name": "Barcelona",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BRI",
      "name": "Bari (Apulia)",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BSL",
      "name": "Basel",
      "countryCode": "CH",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BIA",
      "name": "Bastia (Corsica)",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BEY",
      "name": "Beirut",
      "countryCode": "LB",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BEG",
      "name": "Belgrade",
      "countryCode": "RS",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BGO",
      "name": "Bergen",
      "countryCode": "NO",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BER",
      "name": "Berlin Brandenburg",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BIO",
      "name": "Bilbao",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BHX",
      "name": "Birmingham",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BLQ",
      "name": "Bologna",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BOD",
      "name": "Bordeaux",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BRE",
      "name": "Bremen",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BDS",
      "name": "Brindisi",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "OTP",
      "name": "Bucharest (Henri Coanda)",
      "countryCode": "RO",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BUD",
      "name": "Budapest",
      "countryCode": "HU",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BOJ",
      "name": "Burgas",
      "countryCode": "BG",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CAG",
      "name": "Cagliari (Sardinia)",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CLY",
      "name": "Calvi (Corsica)",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CMN",
      "name": "Casablanca",
      "countryCode": "MA",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CTA",
      "name": "Catania (Sicily)",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CHQ",
      "name": "Chania (Crete)",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CGN",
      "name": "Cologne-Bonn",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CPH",
      "name": "Copenhagen",
      "countryCode": "DK",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CFU",
      "name": "Corfu",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "DTM",
      "name": "Dortmund",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "DRS",
      "name": "Dresden",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "DXB",
      "name": "Dubai",
      "countryCode": "AE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "DUB",
      "name": "Dublin",
      "countryCode": "IE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "DBV",
      "name": "Dubrovnik",
      "countryCode": "HR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "DUS",
      "name": "Dusseldorf",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "EDI",
      "name": "Edinburgh",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "EBL",
      "name": "Erbil",
      "countryCode": "IQ",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FAO",
      "name": "Faro",
      "countryCode": "PT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FLR",
      "name": "Florence",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FRA",
      "name": "Frankfurt/Main",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FUE",
      "name": "Fuerteventura",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FNC",
      "name": "Funchal (Madeira)",
      "countryCode": "PT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "GDN",
      "name": "Gdańsk",
      "countryCode": "PL",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "GVA",
      "name": "Geneva",
      "countryCode": "CH",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "GOT",
      "name": "Gothenburg",
      "countryCode": "SE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "GRZ",
      "name": "Graz",
      "countryCode": "AT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "HAM",
      "name": "Hamburg",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "HAJ",
      "name": "Hanover",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "HEL",
      "name": "Helsinki",
      "countryCode": "FI",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "HER",
      "name": "Heraklion (Crete)",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "HRG",
      "name": "Hurghada",
      "countryCode": "EG",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "IBZ",
      "name": "Ibiza",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "INN",
      "name": "Innsbruck (Tyrol)",
      "countryCode": "AT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "IVL",
      "name": "Ivalo",
      "countryCode": "FI",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ADB",
      "name": "Izmir",
      "countryCode": "TR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "XRY",
      "name": "Jerez de la Frontera",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "JER",
      "name": "Jersey",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KLX",
      "name": "Kalamata",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FKB",
      "name": "Karlsruhe/Baden-Baden",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "AOK",
      "name": "Karpathos",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KVA",
      "name": "Kavala",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KRN",
      "name": "Kiruna",
      "countryCode": "SE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KTT",
      "name": "Kittila (Lapland)",
      "countryCode": "FI",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KGS",
      "name": "Kos",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KRK",
      "name": "Krakow",
      "countryCode": "PL",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KZR",
      "name": "Kutahya Zafer",
      "countryCode": "TR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KAO",
      "name": "Kuusamo",
      "countryCode": "FI",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SUF",
      "name": "Lamezia Terme",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ACE",
      "name": "Lanzarote",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LCA",
      "name": "Larnaca",
      "countryCode": "CY",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LPA",
      "name": "Las Palmas/Gran Canaria",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LEJ",
      "name": "Leipzig/Halle",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LIL",
      "name": "Lille",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LNZ",
      "name": "Linz",
      "countryCode": "AT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LIS",
      "name": "Lisbon",
      "countryCode": "PT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LHR",
      "name": "London Heathrow",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LUX",
      "name": "Luxembourg",
      "countryCode": "LU",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "LYS",
      "name": "Lyon",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "AGP",
      "name": "Malaga",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MLA",
      "name": "Malta",
      "countryCode": "MT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MAN",
      "name": "Manchester",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "RAK",
      "name": "Marrakech",
      "countryCode": "MA",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "RMF",
      "name": "Marsa Alam",
      "countryCode": "EG",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MRS",
      "name": "Marseille",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FMM",
      "name": "Memmingen/Allgäu",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MAH",
      "name": "Menorca",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "BGY",
      "name": "Milan Bergamo",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MXP",
      "name": "Milan Malpensa",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MIR",
      "name": "Monastir",
      "countryCode": "TN",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "MUC",
      "name": "Munich",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FMO",
      "name": "Münster/Osnabrück",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "JMK",
      "name": "Mykonos",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NDR",
      "name": "Nador",
      "countryCode": "MA",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NTE",
      "name": "Nantes",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NAP",
      "name": "Naples",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NCL",
      "name": "Newcastle",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NQY",
      "name": "Newquay (St Mawgan Airport)",
      "countryCode": "GB",
      "isCluster": false,
      "isNational": true,
      "isInternational": false,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NCE",
      "name": "Nice",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "NUE",
      "name": "Nuremberg",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "OLB",
      "name": "Olbia (Sardinia)",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "OSL",
      "name": "Oslo",
      "countryCode": "NO",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PAD",
      "name": "Paderborn/Lippstadt",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PMO",
      "name": "Palermo",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PMI",
      "name": "Palma de Mallorca",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "CDG",
      "name": "Paris",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PSA",
      "name": "Pisa (Tuscany)",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "OPO",
      "name": "Porto",
      "countryCode": "PT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PRG",
      "name": "Prague",
      "countryCode": "CZ",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PVK",
      "name": "Preveza",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PRN",
      "name": "Pristina",
      "countryCode": "XK",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "PUY",
      "name": "Pula",
      "countryCode": "HR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "KEF",
      "name": "Reykjavik",
      "countryCode": "IS",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "RHO",
      "name": "Rhodes",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "RJK",
      "name": "Rijeka",
      "countryCode": "HR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "FCO",
      "name": "Rome Fiumicino",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "RVN",
      "name": "Rovaniemi",
      "countryCode": "FI",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SCN",
      "name": "Saarbruecken",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SZG",
      "name": "Salzburg",
      "countryCode": "AT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SMI",
      "name": "Samos",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SZF",
      "name": "Samsun Carsamba",
      "countryCode": "TR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "JTR",
      "name": "Santorini",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SJJ",
      "name": "Sarajevo",
      "countryCode": "BA",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SPU",
      "name": "Split",
      "countryCode": "HR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SPC",
      "name": "Sta Cruz de la Palma",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ARN",
      "name": "Stockholm",
      "countryCode": "SE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SXB",
      "name": "Strasbourg",
      "countryCode": "FR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "STR",
      "name": "Stuttgart",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "GWT",
      "name": "Sylt",
      "countryCode": "DE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TNG",
      "name": "Tangier",
      "countryCode": "MA",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TBS",
      "name": "Tbilisi",
      "countryCode": "GE",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TFS",
      "name": "Tenerife South",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "SKG",
      "name": "Thessaloniki",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TSR",
      "name": "Timisoara",
      "countryCode": "RO",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TIA",
      "name": "Tirana",
      "countryCode": "AL",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TIV",
      "name": "Tivat",
      "countryCode": "ME",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TOS",
      "name": "Tromsø",
      "countryCode": "NO",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "TUN",
      "name": "Tunis",
      "countryCode": "TN",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "VLC",
      "name": "Valencia",
      "countryCode": "ES",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "VAR",
      "name": "Varna",
      "countryCode": "BG",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "VCE",
      "name": "Venice (Marco Polo)",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "VRN",
      "name": "Verona",
      "countryCode": "IT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "VIE",
      "name": "Vienna",
      "countryCode": "AT",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW", "V7"],
      "type": "AIRPORT"
    },
    {
      "tlc": "VOL",
      "name": "Volos",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "WRO",
      "name": "Wroclaw",
      "countryCode": "PL",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "EVN",
      "name": "Yerevan - Zvartnots Int´l",
      "countryCode": "AM",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ZAD",
      "name": "Zadar",
      "countryCode": "HR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ZAG",
      "name": "Zagreb",
      "countryCode": "HR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ZTH",
      "name": "Zakynthos",
      "countryCode": "GR",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    },
    {
      "tlc": "ZRH",
      "name": "Zurich",
      "countryCode": "CH",
      "isCluster": false,
      "isNational": false,
      "isInternational": true,
      "isOrigin": true,
      "isDestination": true,
      "airlineCodes": ["EW"],
      "type": "AIRPORT"
    }
  ]

  const json = JSON.stringify({countries, stations});

  return {
    statusCode: 200,
    body: json,
  };
};