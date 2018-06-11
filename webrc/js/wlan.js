var WLAN_STATUS_OFF = 0;
var WLAN_STATUS_ON = 1;
var WLAN_STATUS_WPS = 2;

var WLAN_WLAN_MODE_2G = 0;
var WLAN_WLAN_MODE_5G = 1;
var WLAN_WLAN_MODE_2G_5G = 2;

var WLAN_BROADCAST_ENABLE = 0;
var WLAN_BROADCAST_DISABLE = 1;

var WLAN_SECURITY_DISABLE = 0;
var WLAN_SECURITY_WEP = 1;
var WLAN_SECURITY_WPA = 2;
var WLAN_SECURITY_WPA2 = 3;
var WLAN_SECURITY_WPA_WPA2 = 4;

var WLAN_WPA_TYPE_TKIP = 0;
var WLAN_WPA_TYPE_AES = 1;
var WLAN_WPA_TYPE_AUTO = 2;

var WLAN_WEP_TYPE_OPEN = 0;
var WLAN_WEP_TYPE_SHARE = 1;

var WLAN_APISOLATION_DISABLE = 0;
var WLAN_APISOLATION_ENABLE = 1;

var WLAN_WMODE_802B = 0;
var WLAN_WMODE_802BG = 1;
var WLAN_WMODE_802BGN = 2;
var WLAN_WMODE_802AUTO = 3;
var WLAN_WMODE_802A = 4;
var WLAN_WMODE_802AN = 5;
var WLAN_WMODE_802AC = 6;

var countryArrayCustome = ["CN", "US", "JP", "CA", "MX", "DE", "GB", "IN", "IL", "KR", "MY", "RU", "SG", "TW", "CZ", "FR", "ES", "IT", "SK", "PT", "RO", "ZA", "MK", "SA", "BG", "PL", "TZ", "GH", "GR", "NL", "BE", "HU", "HR", "CH", "AT", "DK", "FI", "LT", "LV", "EE", "LU", "IE", "IS", "AL", "MT", "CY", "TR", "SI", "LK", "AE", "BH", "QA", "AU", "NZ", "FJ", "EG", "CG", "MZ", "LS", "CL", "NO", "SE", "BR", "JM", "CR", "HN", "SV","NI","PA"];

var countryArrayGeneral = ["CN", "US", "JP", "CA", "MX", "DE", "GB", "IN", "IL", "KR", "MY", "RU", "SG", "TW", "CZ", "FR", "ES", "IT", "SK", "PT", "RO", "ZA", "MK", "SA", "BG", "PL", "TZ", "GH", "IS","BS","CU"]
if ($.inArray(config.DefaultCountry, countryArrayGeneral) == -1) {
    countryArrayGeneral.push(config.DefaultCountry);
}
var countryArrayAll = [
    ["AR", "13", "ARGENTINA", "four"],
    ["AM", "13", "ARMENIA", "five"],
    ["AU", "13", "AUSTRALIA", "one"],
    ["AT", "13", "AUSTRIA", "five"],
    ["AZ", "13", "AZERBAIJAN", "five"],
    ["BH", "13", "BAHRAIN", "one"],
    ["BY", "13", "BELARUS", "five"],
    ["BE", "13", "BELGIUM", "five"],
    ["BZ", "13", "BELIZE", "three"],
    ["BO", "13", "BOLIVIA", "three"],
    ["BR", "13", "BRAZIL", "one"],
    ["BN", "13", "BRUNEI DARUSSALAM", "three"],
    ["BG", "13", "BULGARIA", "five"],
    ["CA", "11", "CANADA", "one"],
    ["CL", "13", "CHILE", "one"],
    ["CN", "13", "CHINA", "one"],
    ["CO", "11", "COLOMBIA", "one"],
    ["CR", "11", "COSTA RICA", "notsupport"],
    ["HR", "13", "CROATIA", "five"],
    ["CY", "13", "CYPRUS", "five"],
    ["CZ", "13", "CZECH REPUBLIC", "five"],
    ["DK", "13", "DENMARK", "five"],
    ["DO", "11", "DOMINICAN REPUBLIC", "one"],
    ["EC", "13", "ECUADOR", "one"],
    ["EG", "13", "EGYPT", "five"],
    ["SV", "11", "EL SALVADOR", "notsupport"],
    ["EE", "13", "ESTONIA", "five"],
    ["FI", "13", "FINLAND", "five"],
    ["FR", "13", "FRANCE", "five"],
    ["GE", "13", "GEORGIA", "five"],
    ["DE", "13", "GERMANY", "five"],
    ["GR", "13", "GREECE", "five"],
    ["GT", "11", "GUATEMALA", "one"],
    ["HN", "11", "HONDURAS", "one"],
    ["HK", "13", "HONG KONG", "one"],
    ["HU", "13", "HUNGARY", "five"],
    ["IS", "13", "ICELAND", "five"],
    ["IN", "13", "INDIA", "one"],
    ["ID", "13", "INDONESIA", "three"],
    ["IR", "13", "IRAN", "three"],
    ["IQ", "13", "IRAQ", "one"],
    ["IE", "13", "IRELAND", "five"],
    ["IL", "13", "ISRAEL", "five"],
    ["IT", "13", "ITALY", "five"],
    ["JP", "13", "JAPAN", "five"],
    ["JO", "13", "JORDAN", "five"],
    ["KZ", "13", "KAZAKHSTAN", "notsupport"],
    ["KR", "13", "KOREA REPUBLIC", "four"],
    ["KW", "13", "KUWAIT", "notsupport"],
    ["LV", "13", "LATVIA", "five"],
    ["LB", "13", "LEBANON", "three"],
    ["LI", "13", "LIECHTENSTEIN", "five"],
    ["LT", "13", "LITHUANIA", "five"],
    ["LU", "13", "LUXEMBOURG", "five"],
    ["MO", "13", "MACAU", "one"],
    ["MK", "13", "MACEDONIA", "five"],
    ["MY", "13", "MALAYSIA", "three"],
    ["MT", "13", "MALTA", "five"],
    ["MX", "11", "MEXICO", "one"],
    ["MC", "13", "MONACO", "five"],
    ["MA", "13", "MOROCCO", "notsupport"],
    ["NL", "13", "NETHERLANDS", "five"],
    ["NZ", "13", "NEW ZEALAND", "one"],
    ["NG", "13", "NIGERIA", "one"],
    ["KP", "13", "NORTH KOREA", "four"],
    ["NO", "13", "NORWAY", "five"],
    ["OM", "13", "OMAN", "one"],
    ["PK", "13", "PAKISTAN", "four"],
    ["PA", "11", "PANAMA", "one"],
    ["PE", "13", "PERU", "three"],
    ["PH", "13", "PHILIPPINES", "one"],
    ["PL", "13", "POLAND", "five"],
    ["PT", "13", "PORTUGAL", "five"],
    ["PR", "11", "PUERTO RICO", "one"],
    ["QA", "13", "QATAR", "notsupport"],
    ["RO", "13", "ROMANIA", "five"],
    ["RU", "13", "RUSSIA", "two"],
    ["SA", "13", "SAUDIA ARABIA", "one"],
    ["SG", "13", "SINGAPORE", "one"],
    ["SK", "13", "SLOVAK REPUBLIC", "five"],
    ["SI", "13", "SLOVENIA", "five"],
    ["ZA", "13", "SOUTH AFRICA", "one"],
    ["ES", "13", "SPAIN", "five"],
    ["LK", "13", "SRI LANKA", "one"],
    ["SE", "13", "SWEDEN", "five"],
    ["CH", "13", "SWITZERLAND", "five"],
    ["SY", "13", "SYRIA", "notsupport"],
    ["TW", "11", "TAIWAN", "three"],
    ["TH", "13", "THAILAND", "one"],
    ["TT", "13", "TRINIDAD & TOBAGO", "one"],
    ["TN", "13", "TUNISIA", "five"],
    ["TR", "13", "TURKEY", "five"],
    ["UA", "13", "UKRAINE", "notsupport"],
    ["AE", "13", "UNITED ARAB EMIRATES", "five"],
    ["GB", "13", "UNITED KINGDOM", "five"],
    ["US", "11", "UNITED STATES", "one"],
    ["UY", "13", "URUGUAY", "one"],
    ["UZ", "11", "UZBEKISTAN", "one"],
    ["VE", "13", "VENEZUELA", "three"],
    ["VN", "13", "VIETNAM", "five"],
    ["YE", "13", "YEMEN", "notsupport"],
    ["ZW", "13", "ZIMBABWE", "notsupport"],
    ["DZ", "13", "Algeria", "notsupport"],
    ["CG", "13", "Congo", "five"],
    ["TZ", "13", "Tanzania", "five"],
    ["GH", "13", "GHANA", "notsupport"],
    ["GA", "13", "Gabon", "one"],
    ["KE", "13", "Kenya", "five"],
    ["LR", "13", "Liberia", "five"],
    ["AL","13","Albania","notsupport"],
    ["FJ","13","Fiji","notsupport"],
    ["MZ","13","Mozambique","notsupport"],
    ["LS","13","Lesotho","notsupport"],
    ["ST","13","SAO TOME AND PRINCIPE","notsupport"],
    ["BS","11","Bahamas","notsupport"],
    ["CU","11","Cuba","notsupport"],
    ["RS","13","SERBIA","five"],
    ["MNE","13","Montenegro","five"],
    ["NE", "13", "NIGER", "one"],
    ["JM", "11", "Jamaica", "notsupport"],
    ["NI", "11", "Nicaragua", "notsupport"],
    ["VU", "13", "Vanuatu", "notsupport"]
]

var countryArray = [];
if (config.SupportPlmnWifiCountryView) {
    $.each(countryArrayAll, function(i, v) {
        if ($.inArray(v[0], countryArrayCustome) != -1) {
            v[2] = v[2].toUpperCase(); //WIFI channel国家显示统一转换显示大写
            countryArray.push(v)
        }
    });
} else {
    $.each(countryArrayAll, function(i, v) {
        if ($.inArray(v[0], countryArrayGeneral) != -1) {
            v[2] = v[2].toUpperCase(); //WIFI channel国家显示统一转换显示大写
            countryArray.push(v)
        }
    });
}

var country5gChannelObj = {
    "one": [36, 40, 44, 48, 149, 153, 157, 161, 165],
    "two": [36, 40, 44, 48, 149, 153, 157, 161], //US,CA,MX,KR,
    "three": [149, 153, 157, 161, 165], //MY
    "four": [149, 153, 157, 161],
    "five": [36, 40, 44, 48], //JP,GB,DE,EU,AF,IT,ES
    "notsupport": [] //not support 5G
}

/*如下数组是需要显示wifi国家名称对应国家语言,
第一列为固定英语名称从countryArrayGeneral找countryArrayAll，后面的每一列为不同语言*/
var langWifiCountryNameView = [
    ["en_default","sp_latam"],
    ["BULGARIA", "BULGARIA"],
    ["CANADA","CANADÁ"],
    ["CHINA","CHINA"],
    ["CZECH REPUBLIC","REPÚBLICA CHECA"],
    ["FRANCE","FRANCIA"],
    ["GERMANY","ALEMANIA"],
    ["ICELAND","ISLANDIA"],
    ["INDIA","INDIA"],
    ["ISRAEL","ISRAEL"],
    ["ITALY","ITALIA"],
    ["JAPAN","JAPÓN"],
    ["KOREA REPUBLIC","REPÚBLICA DE COREA"],
    ["MACEDONIA","MACEDONIA"],
    ["MALAYSIA","MALASIA"],
    ["MEXICO","MÉXICO"],
    ["POLAND","POLONIA"],
    ["PORTUGAL","PORTUGAL"],
    ["ROMANIA","RUMANIA"],
    ["RUSSIA","RUSIA"],
    ["SAUDIA ARABIA","ARABIA SAUDITA"],
    ["SINGAPORE","SINGAPUR"],
    ["SLOVAK REPUBLIC","REPÚBLICA ESLOVACA"],
    ["SOUTH AFRICA","SUDÁFRICA"],
    ["SPAIN","ESPAÑA"],
    ["TAIWAN","TAIWÁN"],
    ["UNITED KINGDOM","REINO UNIDO"],
    ["UNITED STATES","ESTADOS UNIDOS"],
    ["TANZANIA","TANZANIA"],
    ["GHANA","GHANA"],
    ["Bahamas","Bahamas"],
    ["Cuba","Cuba"],
    ["Jamaica","Jamaica"],
    ["Costa Rica","Costa Rica"] ,
    ["HONDURAS","HONDURAS"],
    ["EL SALVADOR", "EL SALVADOR"],
    ["Nicaragua","Nicaragua"],
    ["PANAMA","PANAMA"]
];
var langNum;
if($.inArray(language,config.wifiCountryNameLangView) != -1){
        langNum = langWifiCountryNameView[0].indexOf(language);
        if(langNum != -1){
            groudArr(langNum);
        }
}

function groudArr(langNumber){
    var LnagArr = [],CountryNameArr = [],nameNum;
    
    $.each(langWifiCountryNameView,function(i,v){
        CountryNameArr[i] = v[0];
    });
    $.each(countryArray,function(n,v){
        LnagArr[n] = v[2];  
    });
    $.each(LnagArr,function(i,v){
        nameNum = CountryNameArr.indexOf(LnagArr[i]);
        if(nameNum != -1){
            countryArray[i][2] = (langWifiCountryNameView[nameNum][langNumber]);
        }
        
    });
    //console.log(countryArray);
}
