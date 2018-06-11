document.write(unescape('%3Cscript src="js/libs/jquery.cookie.min.js?' + Math.random() + '"%3E%3C/script%3E'));
//---------------- global ---------------------------------------
/* API result */
var API_RESULT_SUCCESS = 0;
var API_RESULT_FAIL = 1;

/*login state*/
var LOGIN_STATE_LOGOUT = 0;
var LOGIN_STATE_SUCCESS = 1;
var LOGIN_STATE_LOGIN_TIMES_USEDOUT = 2;
var LOGIN_STATE_PASSWORD_WRONG = 3;
var LOGIN_STATE_SOME_ONE_LOGINED = 4;

/*sim card state***/
var MACRO_UIM_STATE_UNKNOWN = 0; //show no card
var MACRO_UIM_STATE_DETECTED = 1; //show sim card error
var MACRO_UIM_STATE_PIN1_OR_UPIN_REQ = 2; //need pin
var MACRO_UIM_STATE_PUK1_OR_PUK_REQ = 3; //need puk
var MACRO_UIM_STATE_PERSON_CHECK_REQ = 4; //need simlock
var MACRO_UIM_STATE_PIN1_PERM_BLOCKED = 5; //puk block, sim card invalid
var MACRO_UIM_STATE_ILLEGAL = 6; //invalidSimCard
var MACRO_UIM_STATE_READY = 7; //sim ready
var MACRO_UIM_STATE_INITING = 11; //sim card initing

/*SIM card PIN state*/
var MACRO_UIM_PIN_STATE_UNKNOWN = 0; //no pin
var MACRO_UIM_PIN_STATE_ENABLED_NOT_VERIFIED = 1; //sim need pin, pin enable
var MACRO_UIM_PIN_STATE_ENABLED_VERIFIED = 2; //sim card ready and pin enable
var MACRO_UIM_PIN_STATE_DISABLED = 3; //pin disable
var MACRO_UIM_PIN_STATE_BLOCKED = 4; // puk block
var MACRO_UIM_PIN_STATE_PERMANENTLY_BLOCKED = 5; //puk block

/***************SIM Lock Status**********************/
var SIMLOCK_PERSO_NONE_REQUIRED = -1; /*no sim lock/sim lock unlock*/
var SIMLOCK_PERSO_NET_PIN_REQUIRED = 0; /*nck*/
var SIMLOCK_PERSO_NETSUB_PIN_REQUIRED = 1; /*nsck*/
var SIMLOCK_PERSO_SP_PIN_REQUIRED = 2; /*spck*/
var SIMLOCK_PERSO_CORP_PIN_REQUIRED = 3; /*cck*/
var SIMLOCK_PERSO_PH_FSIM_PIN_REQUIRED = 4; /*pck*/

var SIMLOCK_PERSO_NET_PUK_REQUIRED = 15; /*rck*/
var SIMLOCK_PERSO_NETSUB_PUK_REQUIRED = 16;
var SIMLOCK_PERSO_SP_PUK_REQUIRED = 17;
var SIMLOCK_PERSO_CORP_PUK_REQUIRED = 18;
var SIMLOCK_PERSO_PH_FSIM_PUK_REQUIRED = 19;
var SIMLOCK_PERSO_RCK_FORBID = 30; /*rck forbid*/

/****auto pin state *****/
var SIM_AUTO_PIN_DISABLE = 0;
var SIM_AUTO_PIN_ENABLE = 1;

/** unlock pin return data****/
var SIM_UNLOCK_PIN_SUCCESS = 0;
var SIM_UNLOCK_PIN_FAILED = 1;
var SIM_UNLOCK_PIN_FORMAT_ERROR = 2;

/** unlock puk return data****/
var SIM_UNLOCK_PUK_SUCCESS = 0;
var SIM_UNLOCK_PUK_FAILED = 1;
var SIM_UNLOCK_PUK_FORMAT_ERROR = 2;
var SIM_UNLOCK_PUK_PIN_ERROR = 3;

/** change pin code return data****/
var SIM_CHANGE_PIN_CODE_SUCCESS = 0;;
var SIM_CHANGE_PIN_CODE_FAILED = 1;
var SIM_CHANGE_PIN_CODE_CURRNPIN_ERROR = 2;
var SIM_CHANGE_PIN_CODE_NEWPIN_ERROR = 3;

/** disable/enable pin return data****/
var SIM_CHANGE_PIN_STATE_SUCCESS = 0;
var SIM_CHANGE_PIN_STATE_FAILED = 1;
var SIM_CHANGE_PIN_STATE_PINCODE_ERROR = 2;

/** save pin operation return data****/
var SIM_SET_AUTOVAL_PIN_SUCCESS = 0;
var SIM_SET_AUTOVAL_PIN_FAILED = 1;
var SIM_SET_AUTOVAL_PIN_PINCODE_ERROR = 2;

/****unlock simlock return data****/
var SIM_UNLOCK_SIMLOCK_SUCCESS = 0;
var SIM_UNLOCK_SIMLOCK_FAILED = 1;
var SIM_UNLOCK_SIMLOCK_FORMAT_ERROR = 2;

/*--Network--*/
var G_SDK_TIMER_GET_NETWORK_SEARCH_RESULT = null;
var G_SDK_TIMER_GET_NETWORK_REGISTER_RESULT = null;

/*--searching state--*/
var NW_NONE_SELECT = 0;
var NW_SELECTING = 1;
var NW_SELECT_SUCCESS = 2;
var NW_SELECT_FAILURE = 3;

var NW_REGIST_NONE = 0;
var NW_REGISTING = 1;
var NW_REGIST_SUCCESS = 2;
var NW_REGIST_FAILURE = 3;
/*--network mode--*/
var NETWORK_MODE_AUTOMATIC = 4;
var NETWORK_MODE_GSM_ONLY = 13;
var NETWORK_MODE_WCDMA_ONLY = 14;

/*--network select mode--*/
var SEL_MODE_AUTOMATIC = 0;
var SEL_MODE_MANUAL = 1;

/*--network type--*/
var NW_TYPE_GSM = 1;
var NW_TYPE_UMTS = 2;
var NW_TYPE_LTE = 3;
var NW_TYPE_TD_SCDMA = 9;

/*--network state--*/
var NW_STATE_AVAILABLE = 1;
var NW_STATE_CURRENT = 2;
var NW_STATE_FORBIDDEN = 3;

var NW_REG_STAT_REGISTRATING = 2;
/*--end Network--*/

/*---Profile operation return data---*/
var PROFILE_OPERATE_NEW = 1;
var PROFILE_OPERATE_EDIT = 0;
var PROFILE_USER_LEN = 15;
var PROFILE_TYPE_USER_DEFINE = 1;
var PROFILE_TYPE_BUILD_IN = 0;

/*******change password return data***************/
var USER_CHANGE_PASSWORD_SUCCESS = 0;
var USER_CHANGE_PASSWORD_FAILED = 1;
var USER_CURRENT_PASSWORD_ERROR = 2;
var USER_CHANGE_PASSWORD_PARAM_ERROR = 3;

/****SMS Opertation error*****/
/** get sms contact list return data****/
var SMS_CONTACT_LIST_PAGENUM_FORMAT_ERROR = 2;

/****get sms init status****/
var SMS_INIT_STATUS_COMPLETE = 0; //sms init complete
var SMS_INIT_STATUS_INITING = 1; //sms is initing

/****get sms type****/
var SMS_LIST_SMS_TYPE_READ = 0; // read
var SMS_LIST_SMS_TYPE_UNREAD = 1; // unread
var SMS_LIST_SMS_TYPE_SENT = 2; // sent
var SMS_LIST_SMS_TYPE_SENT_FAILED = 3; // sent failed
var SMS_LIST_SMS_TYPE_REPORT = 4; // report
var SMS_LIST_SMS_TYPE_FLASH = 5; // flash
var SMS_LIST_SMS_TYPE_DRAFT = 6; // draft

/****delete sms type****/
var SMS_DELETE_FLAG_ALL = 0; //delete all SMS
var SMS_DELETE_FLAG_Contact = 1; // delete one record in Contact SMS list 
var SMS_DELETE_FLAG_Content = 2; //delete one record in Content  SMS list

/****send & save sms id****/
var SMS_SEND_SAVE_NEW = -1; //-1 means send or save a new sms.

/****get sms send status***/
var SMS_SEND_STATUS_NONE = 0; // none
var SMS_SEND_STATUS_SENDING = 1; // sending
var SMS_SEND_STATUS_SUCCESS = 2; // success
var SMS_SEND_STATUS_FAIL_SENDING = 3; // failstill sending last message
var SMS_SEND_STATUS_FULL = 4; // fail with Memory full
var SMS_SEND_STATUS_FAILED = 5; // fail

/****sms setting************/
var SMS_SETTING_REPORT_DISABLE = 0; //report disable
var SMS_SETTING_REPORT_ENABLE = 1; //report enable
var SMS_SETTING_STORE_SIM = 0; //sms store in sim card
var SMS_SETTING_STORE_DEVICE = 1; //sms store in device

/*---------singal---------*/
var MACRO_BATTERY_CHARGING = 0;
var MACRO_BATTERY_COMPLATE = 1;
var MACRO_BATTERY_NOCHARGE = 2;

/*-------set Wps PIN status-------*/
var SET_WPS_WRONG = 1;
var SET_WPS_FAILD = 2;
var SET_WPS_PIN_WRONG = 3;

/***********Connected Devices Type**************/
var CONNDEVICE_LOGINED_DEVICE = 0;
var CONNDEVICE_CONNECTEDONLY_DEVICE = 1;

/***********Connected Devices ConnectMode**************/
var CONNDEVICE_USB_DEVICE = 0;
var CONNDEVICE_WIFI_DEVICE = 1;

/***********Connected Devices change name type**************/
var CONNDEVICE_SAVE_CONNECTED_NAME = 1;

/***********Online update**************/
var VERSION_CHECKING = 0;
var VERSION_NEW_YES = 1;
var VERSION_NEW_NO = 2
var VERSION_NO_CONNECT = 3;
var VERSION_NO_SERVICE = 4;
var VERSION_CHECK_ERROR = 5;

var FOTA_DOWNLOAD_STATE_FREE = 0;
var FOTA_DOWNLOAD_STATE_DOWNLOADING = 1;
var FOTA_DOWNLOAD_STATE_COMPLETED = 2;


var FOTA_BATTERY_STATE_ON_ENOUGH = 0;
var FOTA_BATTERY_STATE_ENOUGH = 1;

/*usage setting*/
var USAGE_TIME_LIMIT_ENABLE = 1;
var USAGE_TIME_LIMIT_DISABLE = 0;

var USAGE_AUTO_DISCONN_ENABLE = 1;
var USAGE_AUTO_DISCONN_DISABLE = 0;

/*sms time type*/
var sms_time_type_ymd = 0;
var sms_time_type_dmy = 1;
var sms_time_type_mdy = 2;
var sms_time_type = 3;
var sms_time_type_five_dmy= 5
/*login username val*/
var userNameFixedGray = 1;
var userNameEditable = 2
var userNameHide = 3;

/*connected dial condition val,only homepage have dial btn*/
var connectedNoDial = 0;
var connectedDial = 1;

/***********common function for data verify start ************/
function isNumber(str) {
    return /^[0-9]+$/.test(str);
}

function isInterger(str) {
    return /^-?[0-9]+$/.test(str);
}

function checkStringInvalid(str) {
    if (str == null || str == "") {
        return false;
    } else {
        return true;
    }
}

function validatePin(pinCode) {
    return !(pinCode == "" || pinCode.length < 4 || pinCode.length > 8 || !isNumber(pinCode))
}

function validatePuk(pukCode) {
    return !(pukCode == "" || pukCode.length != 8 || !isNumber(pukCode));
}

function validateSimlock(simlockCode) {

    return !(simlockCode == "" || simlockCode.length != config.isSimlockNckDigit || !isNumber(simlockCode));
}
/***********common function for data verify start ************/

function setCookie(cname, cvalue, exdays) {
    $.cookie(cname,cvalue,{ expires: exdays||30 })
    /*
    var exday = exdays || 30;
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
    */
}
//get cookie  
function getCookie(cname) {
    return $.cookie(cname)||""
    /*
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
    */
}
var SDK = (function() {

    //common fn start


    function encrypt(str) {
        if (str == "" || str == undefined) {
            return "";
        }
        //var key = $("[name='header-meta']").attr("content");
        var key = "e5dl12XYVggihggafXWf0f2YSf2Xngd1";
        var str1 = [];
        var encryStr = "";
        for (var i = 0; i < str.length; i++) {
            var char_i = str.charAt(i);
            var num_char_i = char_i.charCodeAt();
            str1[2 * i] = (key[i % key.length].charCodeAt() & 0xf0) | ((num_char_i & 0xf) ^ (key[i % key.length].charCodeAt() & 0xf));
            str1[2 * i + 1] = (key[i % key.length].charCodeAt() & 0xf0) | ((num_char_i >> 4) ^ (key[i % key.length].charCodeAt() & 0xf));
        }
        for (var i = 0; i < str1.length; i++) {
            encryStr += String.fromCharCode(str1[i]);
        }
        return encryStr;
    }

    function newEncrypt(str,key) {
        if (str == "" || str == undefined) {
            return "null";
        }
        str = String(str)
        var key = key||"e5dl12XYVggihggafXWf0f2YSf2Xngd1";
        var str1 = [];
        var encryStr = "";
        for (var i = 0; i < str.length; i++) {
            var char_i = str.charAt(i);
            var num_char_i = char_i.charCodeAt();
            str1[2 * i] = (key[i % key.length].charCodeAt() & 0xf0) | ((num_char_i & 0xf) ^ (key[i % key.length].charCodeAt() & 0xf));
            str1[2 * i + 1] = (key[i % key.length].charCodeAt() & 0xf0) | ((num_char_i >> 4) ^ (key[i % key.length].charCodeAt() & 0xf));
        }
        for (var i = 0; i < str1.length; i++) {
            encryStr += String.fromCharCode(str1[i]);
        }
        return encryStr;
    }

    function uiencrypt(str){
        return newEncrypt(str,"e5dlfsdfsddsfdafXWf0f2YSf2Xngd1")
    }

    function uidecrypt(str) {
        if (str == "" || str == undefined) {
          return "";
        }
        var jrd_key = "e5dlfsdfsddsfdafXWf0f2YSf2Xngd1";
        var key_len = jrd_key.length;
        var tmp_str = [];
        var new_i;
        for (i = 0; i < str.length; i++) {
          if (i == 0) {
            new_i = 0;
          } else {
            new_i = i / 2;
          }
          tmp_str[new_i] = ((str[i + 1].charCodeAt() ^ jrd_key[new_i % key_len].charCodeAt()) << 4) | ((str[i].charCodeAt() ^ jrd_key[new_i % key_len].charCodeAt()) & 0xf);
          i++;
        }
        var dencryStr = "";
        for (var i = 0; i < tmp_str.length; i++) {
          dencryStr += String.fromCharCode(tmp_str[i]);
        }
        return dencryStr;
      }

    var headers = {};


    function getToken(tokenApi, apiName) {
        var token = "74623918"
        if ($.inArray(apiName, config.whiteListApi) == -1) {
            try {
                $.ajax({
                    type: "post",
                    url: "/jrd/webapi",
                    dataType: "text",
                    headers: {
                        '_TclRequestVerificationToken': encrypt(token)
                    },
                    async: false,
                    data: JSON2.stringify({
                        "jsonrpc": "2.0",
                        "method": tokenApi,
                        "params": {},
                        "id": 1
                    }),
                    success: function(data) {
                        token = jQuery.parseJSON(data).result.token
                    }
                })
            } catch (err) {
                return encrypt(token)
            }
        }
        return encrypt(token.toString())
    }

    function getHeaders(apiName) {
        var headers = {};
        if (config.IsVerifyToken) {
            if (apiName == 'Login' || apiName == "ForceLogin") {
                headers['_TclRequestVerificationToken'] = getToken("GetLoginToken", apiName);
            } else {
                headers['_TclRequestVerificationToken'] = getToken("GetToken", apiName);
            }
        }

        try {
            headers['_TclRequestVerificationKey'] = "KSDHSDFOGQ5WERYTUIQWERTYUISDFG1HJZXCVCXBN2GDSMNDHKVKFsVBNf";
            headers['_TclRequestVerificationToken'] = getCookie("loginToken") || "null";
        } catch (err) {

        }

        return headers;
    }

    function requestJsonRpcAsync(method, params, id, callback) {
        var postData = {
            "jsonrpc": "2.0",
            "method": method,
            "params": params,
            "id": id
        };
        var postDataStr = JSON2.stringify(postData); //need use json2.js on ie6,ie7,ie8 compatibility
        $.ajax({
            type: "post",
            url: "/jrd/webapi?api=" + method,
            dataType: "text",
            data: postDataStr,
            headers: getHeaders(method),
            success: function(datas) {
                var data = jQuery.parseJSON(datas);
                if (data.hasOwnProperty("result") && !data.hasOwnProperty("error")) {
                    callback(data.result);
                } else {
                    callback(data);
                }
            },
            error: function() {
                callback();
            }
        })
    }

    function requestJsonRpcSync(method, params, id) {
        var postData = {
            "jsonrpc": "2.0",
            "method": method,
            "params": params,
            "id": id
        };
        var postDataStr = JSON2.stringify(postData); //need use json2.js on ie6,ie7,ie8 compatibility
        var returnData;
        $.ajax({
            type: "post",
            url: "/jrd/webapi?api=" + method,
            dataType: "text",
            async: false,
            headers: getHeaders(method),
            data: postDataStr,
            success: function(data) {
                returnData = jQuery.parseJSON(data);
            }
        })
        return returnData;
    }

    function requestJsonRpcIsOk(result) {
        return result.hasOwnProperty("result") && !result.hasOwnProperty("error");
    }

    function requestJsonRpcIsAbsoluteOk(result) {
        return null != result && result.hasOwnProperty("result") && !result.hasOwnProperty("error");
    }

    function callbackCode(error) {
        return {
            "error": error
        };
    }

    function stopTimer(timer) {
        if (timer != null) {
            clearTimeout(timer);
            timer = null;
        }
    }

    //common fn end

    var User, SIM, Connection, Network, Wlan, SMS, Statistics, USSD, Update, Firewall, LAN, ConnectionDevices, System, Sharing, Profile, phonebook, TR069;
    //User start
    User = {
        Login: function(Username, Password) {
            if (!checkStringInvalid(Username) || !checkStringInvalid(Password)) {
                return LOGIN_STATE_PASSWORD_WRONG;
            }

            var params = {
                "UserName": Username,
                "Password": Password
            }
            if (config.IsEncryptionAndToken) {
                params = {
                    "UserName": newEncrypt(Username),
                    "Password": newEncrypt(Password)
                }
            }
            var result = requestJsonRpcSync("Login", params, "1.1");

            if (requestJsonRpcIsOk(result)) {
                try {
                    if (result.result.hasOwnProperty("token")) {
                        setCookie("loginToken", newEncrypt(result.result.token))
                    } else {
                        setCookie("loginToken", "null")
                    }
                } catch (err) {
                    setCookie("loginToken", "null")
                }

                return LOGIN_STATE_SUCCESS;
            } else {
                var errorCode = result.error.code;

                if (errorCode == "010101") {
                    // Username or Password is not correct.
                    return LOGIN_STATE_PASSWORD_WRONG;

                } else if (errorCode == "010102") {
                    // login failed
                    return LOGIN_STATE_SOME_ONE_LOGINED;

                } else {
                    return LOGIN_STATE_LOGIN_TIMES_USEDOUT;
                }
            }
        },

        Logout: function() {
            var result = requestJsonRpcSync("Logout", null, "1.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;

            } else {
                return API_RESULT_FAIL;
            }
        },

        GetLoginState: function() {
            var result = requestJsonRpcSync("GetLoginState", null, "1.3");

            if (requestJsonRpcIsOk(result)) {
                return result.result.State;
            } else {
                return 0;
            }
        },

        ChangePassword: function(username, currPassword, newPassword) {
            if (!checkStringInvalid(username) || !checkStringInvalid(currPassword) || !checkStringInvalid(currPassword)) {
                return USER_CHANGE_PASSWORD_PARAM_ERROR;
            }

            //newEncrypt
            var params = {
                "UserName": username,
                "CurrPassword": currPassword,
                "NewPassword": newPassword
            }
            if (config.IsEncryptionAndToken) {
                params = {
                    "UserName": newEncrypt(username),
                    "CurrPassword": newEncrypt(currPassword),
                    "NewPassword": newEncrypt(newPassword)
                }
            }
            var result = requestJsonRpcSync("ChangePassword", params, "1.4");

            if (requestJsonRpcIsOk(result)) {
                return USER_CHANGE_PASSWORD_SUCCESS;

            } else {
                var errorCode = result.error.code;
                if (errorCode == "010401") {
                    return USER_CHANGE_PASSWORD_FAILED;
                } else if (errorCode == "010402") {
                    return USER_CURRENT_PASSWORD_ERROR;
                } else {
                    return USER_CHANGE_PASSWORD_FAILED;
                }
            }
        },

        HeartBeat: function() {
            var result = requestJsonRpcSync("HeartBeat", null, "1.5");
            try {
                if (result.error.code == "-32698" || result.error.code == "-32699") {
                    var State = SDK.User.GetLoginState();
                    if (State == 1) {
                        SDK.User.Logout();
                        location.reload();
                    }
                }
            } catch (err) {}

        },

        ForceLogin: function(Username, Password) {
            if (!checkStringInvalid(Username) || !checkStringInvalid(Password)) {
                return LOGIN_STATE_PASSWORD_WRONG;
            }
            var result = requestJsonRpcSync("ForceLogin", {
                "UserName": Username,
                "Password": Password
            }, "1.6");

            if (requestJsonRpcIsOk(result)) {
                return LOGIN_STATE_SUCCESS;
            } else {
                var errorCode = result.error.code;

                if (errorCode == "010601") {
                    // Username or Password is not correct.
                    return LOGIN_STATE_PASSWORD_WRONG;

                } else {
                    return LOGIN_STATE_LOGIN_TIMES_USEDOUT;
                }
            }
        },
        SetPasswordChangeFlag: function(choiceVal) {
            var result = requestJsonRpcSync("SetPasswordChangeFlag", {
                "change_flag": choiceVal
            }, "1.7");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetPasswordChangeFlag: function() {
            var result = requestJsonRpcSync("GetPasswordChangeFlag", null, "1.8");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "change_flag": 0
                }
            }
        },
        GetAutoRemenberPassword: function() {
            try{
                var data = uidecrypt(getCookie("mifiObj"));
                if(data!==""){
                    data = $.parseJSON(data)
                }
                //$.parseJSON
                var mifiObj ={
                    "save_flag": data.f,
                }
                mifiObj.username = uidecrypt(data.u)
                mifiObj.password = uidecrypt(data.p)
                
               return mifiObj
            }catch(err){
                return {
                    "save_flag": "0",
                    "username": "",
                    "password": ""
                }
            }
            /*
            var result = requestJsonRpcSync("GetAutoRemenberPassword", null, "1.9");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "save_flag": "0",
                    "username": "admin",
                    "password": "admin"
                }
            }*/
        },
        SetAutoRemenberPassword: function(remenberPWVal, UserName, Password) {
            try{
                var mifiObj =  {
                 "f": remenberPWVal,
                 "u": uiencrypt(UserName)
                } 
                if(remenberPWVal==1){
                    //mifiObj.u = uiencrypt(UserName);
                    mifiObj.p = uiencrypt(Password)
                }
                setCookie("mifiObj",uiencrypt(JSON.stringify(mifiObj)))
             }catch(err){
 
             }
            /*
            var result = requestJsonRpcSync("SetAutoRemenberPassword", {
                "save_flag": remenberPWVal,
                "username": UserName,
                "password": Password
            }, "1.10");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
            */
        }
    };
    //User end

    //SIM start
    SIM = {
        GetSimStatus: function() {
            var result = requestJsonRpcSync("GetSimStatus", null, "2.1");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SIMState": 0,
                    "PinState": 1,
                    "PinRemainingTimes": 3,
                    "PukRemainingTimes": 10,
                    "SIMLockState": 1,
                    "SIMLockRemainingTimes": 1,
                    "PLMN": ""
                };
            }
        },

        UnlockPin: function(pinCode) {
            if (!validatePin(pinCode)) {
                return SIM_UNLOCK_PIN_FORMAT_ERROR; //pin code format error
            }

            var result = requestJsonRpcSync("UnlockPin", {
                "Pin": pinCode
            }, "2.2");
            if (requestJsonRpcIsOk(result)) {
                return SIM_UNLOCK_PIN_SUCCESS;
            } else {
                return SIM_UNLOCK_PIN_FAILED;
            }

        },

        UnlockPuk: function(pukCode, newPin) {

            if (!validatePuk(pukCode)) {
                return SIM_UNLOCK_PUK_FORMAT_ERROR; //puk code format error
            }
            if (!validatePin(newPin)) {
                return SIM_UNLOCK_PUK_PIN_ERROR; //new Pin code format error
            }

            var result = requestJsonRpcSync("UnlockPuk", {
                "Puk": pukCode,
                "Pin": newPin
            }, "2.3");
            if (requestJsonRpcIsOk(result)) {
                return SIM_UNLOCK_PUK_SUCCESS;
            } else {
                return SIM_UNLOCK_PUK_FAILED; //unlock Puk failed
            }
        },

        ChangePinCode: function(currentPin, newPin) {

            if (!validatePin(currentPin)) {
                return SIM_CHANGE_PIN_CODE_CURRNPIN_ERROR; //current pin code format error
            }
            if (!validatePin(newPin)) {
                return SIM_CHANGE_NEWPIN_FORMAT_ERROR; //new pin code format error
            }

            var result = requestJsonRpcSync("ChangePinCode", {
                "CurrentPin": currentPin,
                "NewPin": newPin
            }, "2.4");

            if (requestJsonRpcIsOk(result)) {
                return SIM_CHANGE_PIN_CODE_SUCCESS;
            } else {
                return SIM_CHANGE_PIN_CODE_NEWPIN_ERROR; //change pin failed
            }
        },

        ChangePinState: function(state, pin) {
            var returnData;
            if (!validatePin(pin)) {
                return SIM_CHANGE_PIN_STATE_PINCODE_ERROR; //pin code format error
            }
            /* if(state != G_SDK_PIN_SET_STATE_DISABLE && state != G_SDK_PIN_SET_STATE_ENABLE){
                return callbackCode(2);//pin state error
            }*/

            var result = requestJsonRpcSync("ChangePinState", {
                "State": state,
                "Pin": pin
            }, "2.5");

            if (requestJsonRpcIsOk(result)) {
                return SIM_CHANGE_PIN_STATE_SUCCESS;
            } else {
                return SIM_CHANGE_PIN_STATE_FAILED; //change pin state failed
            }
        },

        GetAutoEnterPinState: function() {
            var result = requestJsonRpcSync("GetAutoValidatePinState", null, "2.6");
            if (requestJsonRpcIsOk(result)) {
                return result.result.State;
            } else {
                return 0;
            }
        },

        SetAutoEnterPinState: function(state, pinCode) {
            if (!validatePin(pinCode)) {
                return SIM_SET_AUTOVAL_PIN_PINCODE_ERROR; //pin code format error
            }
            /* if(state != G_SDK_PIN_AUTO_ENTER_STATE_DISABLE && state != G_SDK_PIN_AUTO_ENTER_STATE_ENABLE){
                return callbackCode(2)//Auto enter pin state error
            }*/
            var result = requestJsonRpcSync("SetAutoValidatePinState", {
                "Pin": pinCode,
                "State": state
            }, "2.7");
            if (requestJsonRpcIsOk(result)) {
                return SIM_SET_AUTOVAL_PIN_SUCCESS;
            } else {
                return SIM_SET_AUTOVAL_PIN_FAILED; //change pin auto enter state failed
            }

        },

        UnlockSimlock: function(type, simlockCode) {

            if (!validateSimlock(simlockCode)) {
                return SIM_UNLOCK_SIMLOCK_FORMAT_ERROR; //simlock code format error
            }
            var result = requestJsonRpcSync("UnlockSimlock", {
                "SIMLockState": type,
                "SIMLockCode": simlockCode
            }, "2.8");

            if (requestJsonRpcIsOk(result)) {
                return SIM_UNLOCK_SIMLOCK_SUCCESS;
            } else {
                return SIM_UNLOCK_SIMLOCK_FAILED;
            }
        }
    };
    //SIM end

    //Connection start
    Connection = {
        GetConnectionState: function() {
            var result = requestJsonRpcSync("GetConnectionState", null, "3.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "ConnectionStatus": "0",
                    "ConnectProfile": "china unicom",
                    "UlRate": "",
                    "DlRate": "",
                    "UlBytes": "",
                    "DlBytes": "",
                    "IPv4Adrress": "",
                    "IPv6Adrress": "",
                    "ConnectionTime": "",
                    "ClearCode": 0,
                    "mPdpRejectCount": 0
                };
            }
        },

        Connect: function() {
            var result = requestJsonRpcSync("Connect", null, "3.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        DisConnect: function() {
            var result = requestJsonRpcSync("DisConnect", null, "3.3");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetConnectionSettings: function() {
            var result = requestJsonRpcSync("GetConnectionSettings", null, "3.4");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "PdpType": 0,
                    "RoamingConnect": 0,
                    "ConnectMode": 1
                };
            }
        },

        SetConnectionSettings: function(PdpType, RoamingConnect, ConnectMode) {
            var result = requestJsonRpcSync("SetConnectionSettings", {
                "PdpType": PdpType,
                "RoamingConnect": RoamingConnect,
                "ConnectMode": ConnectMode
            }, "3.5");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }

        },
        SetRoamConnectionWarnTipsFlag: function(warnTipsFlag) {
            var result = requestJsonRpcSync("SetRoamConnectionWarnTipsFlag", {
                "WarnTipsFlag": warnTipsFlag
            }, "3.6");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetRoamConnectionWarnTipsFlag: function() {
            var result = requestJsonRpcSync("GetRoamConnectionWarnTipsFlag", null, "3.7");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "WarnTipsFlag":0
                };
            }
        }
    };
    //Connection end

    //Network start
    Network = {
        GetNetworkInfo: function() {
            var result = requestJsonRpcSync("GetNetworkInfo", null, "4.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "PLMN": "26202",
                    "NetworkType": 1,
                    "NetworkName": "",
                    "SpnName": "",
                    "LAC": "",
                    "CellId": "",
                    "RncId": "",
                    "Roaming": 0,
                    "SignalStrength": 1

                };
            }
        },

        SearchNetwork: function() {
            var result = requestJsonRpcSync("SearchNetwork", null, "4.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SearchNetworkResult: function() {
            var result = requestJsonRpcSync("SearchNetworkResult", null, "4.3");
            if (requestJsonRpcIsOk(result)) {
                return result.ListNetworkItem;
            } else {
                return {
                    "SearchState": 0,
                    "ListNetworkItem": [{
                        "NetworkID": 12,
                        "State": 0,
                        "Numberic": "46001",
                        "Rat": "",
                        "FullName": "",
                        "ShortName": ""
                    }]
                }
            }
        },

        RegisterNetwork: function(NetworkID) {
            var result = requestJsonRpcSync("RegisterNetwork", {
                "NetworkID": NetworkID
            }, "4.4");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetNetworkRegisterState: function() {
            var result = requestJsonRpcSync("GetNetworkRegisterState", null, "4.5");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "State": 0
                };
            }
        },

        GetNetworkSettings: function() {
            var result = requestJsonRpcSync("GetNetworkSettings", null, "4.6");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "NetworkMode": "0",
                    "NetselectionMode": "0",
                    "NetworkBand": "0"
                };
            }
        },

        SetNetworkSettings: function(NetworkMode, NetselectionMode) {
            var result = requestJsonRpcSync("SetNetworkSettings", {
                "NetworkMode": NetworkMode,
                "NetselectionMode": NetselectionMode
                //"NetworkBand": NetworkBand
            }, "4.7");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }

    };
    //Network end

    //Wlan start
    Wlan = {
        GetWlanState: function() {
            var result = requestJsonRpcSync("GetWlanState", null, "5.1");

            if (requestJsonRpcIsAbsoluteOk(result)) {
                return result.result;
            } else {
                return {
                    "WlanState": 1
                };
            }
        },

        SetWlanOff: function() {
            var result = requestJsonRpcSync("SetWlanOff", null, "5.2");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SetWlanOn: function() {
            var result = requestJsonRpcSync("SetWlanOn", null, "5.3");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetWlanSettings: function() {
            var result = requestJsonRpcSync("GetWlanSettings", null, "5.4");
            if (requestJsonRpcIsOk(result)) {
                var wifi2gInfo = $.grep(result.result.APList, function(n, i) {
                    if (config.BandSupport == 1) {
                        return n.WlanAPID == 1;
                    } else {
                        return n.WlanAPID == 0;
                    }

                })[0];
                var wifi5gInfo = $.grep(result.result.APList, function(n, i) {
                    if (config.BandSupport == 1 || config.BandSupport == 2 || config.BandSupport == 3) {
                        return n.WlanAPID == 1;
                    } else {
                        return n.WlanAPID == 0;
                    }

                })[0];
                var wifiInfo = {
                    "WlanAPMode": result.result.WlanAPMode,
                    "WiFiMode": result.result.WiFiMode,
                    "WiFiOffTime": result.result.WiFiOffTime,
                    "Ssid": wifi2gInfo.Ssid,
                    "SsidHidden": wifi2gInfo.SsidHidden,
                    "CountryCode": wifi2gInfo.CountryCode,
                    "SecurityMode": wifi2gInfo.SecurityMode,
                    "WpaType": wifi2gInfo.WpaType,
                    "WpaKey": wifi2gInfo.WpaKey,
                    "WepType": wifi2gInfo.WepType,
                    "WepKey": wifi2gInfo.WepKey,
                    "Channel": wifi2gInfo.Channel,
                    "CurChannel": wifi2gInfo.CurChannel,
                    "ApIsolation": wifi2gInfo.ApIsolation,
                    "WMode": wifi2gInfo.WMode,
                    "max_numsta": wifi2gInfo.max_numsta,
                    "curr_num": wifi2gInfo.curr_num,
                    "Ssid_5G": wifi5gInfo.Ssid,
                    "SsidHidden_5G": wifi5gInfo.SsidHidden,
                    "SecurityMode_5G": wifi5gInfo.SecurityMode,
                    "WpaType_5G": wifi5gInfo.WpaType,
                    "WpaKey_5G": wifi5gInfo.WpaKey,
                    "WepType_5G": wifi5gInfo.WepType,
                    "WepKey_5G": wifi5gInfo.WepKey,
                    "Channel_5G": wifi5gInfo.Channel,
                    "ApIsolation_5G": wifi5gInfo.ApIsolation,
                    "WMode_5G": wifi5gInfo.WMode,
                    "max_numsta_5G": wifi5gInfo.max_numsta
                };
                if (wifiInfo.WMode == 0) {
                    wifiInfo.WMode = 3
                }
                return wifiInfo;
            } else {
                return {
                    "Ssid": "",
                    "SsidHidden": 1,
                    "CountryCode": "it",
                    "SecurityMode": 1,
                    "WpaType ": 1,
                    "WpaKey ": "",
                    "WepType ": 1,
                    "WepKey": "",
                    "Channel": 5,
                    "ApIsolation": 1,
                    "WMode": 1,
                    "max_numsta": 10,
                    "curr_num": 3
                };
            }
        },

        SetWlanSettings: function(sendData) {
            var postData = {
                "WlanAPMode": sendData.WlanAPMode,
                "WiFiOffTime": sendData.WiFiOffTime,
                "WiFiMode": sendData.WiFiMode,
                "APList": [{
                    "WlanAPID": 0,
                    "ApStatus": sendData.WlanAPMode == 0 ? 1 : 0,
                    "WMode": sendData.WMode,
                    "Ssid": sendData.Ssid,
                    "SsidHidden": sendData.SsidHidden,
                    "Channel": sendData.Channel,
                    "SecurityMode": sendData.SecurityMode,
                    "WepType": sendData.WepType,
                    "WepKey": sendData.WepKey,
                    "WpaType": sendData.WpaType,
                    "WpaKey": sendData.WpaKey,
                    "CountryCode": sendData.CountryCode,
                    "ApIsolation": sendData.ApIsolation,
                    "max_numsta": sendData.max_numsta
                }]
            };
            if (config.BandSupport != 0) {
                postData.APList.push({
                    "WlanAPID": 1,
                    "ApStatus": sendData.WlanAPMode == 1 ? 1 : 0,
                    "WMode": sendData.WMode_5G,
                    "Ssid": sendData.Ssid_5G,
                    "SsidHidden": sendData.SsidHidden_5G,
                    "Channel": sendData.Channel_5G,
                    "SecurityMode": sendData.SecurityMode_5G,
                    "WepType": sendData.WepType_5G,
                    "WepKey": sendData.WepKey_5G,
                    "WpaType": sendData.WpaType_5G,
                    "WpaKey": sendData.WpaKey_5G,
                    "CountryCode": sendData.CountryCode,
                    "ApIsolation": sendData.ApIsolation_5G,
                    "max_numsta": sendData.max_numsta_5G
                })
            }
            var result = requestJsonRpcSync("SetWlanSettings", postData, "5.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }

        },

        SetWPSPin: function(WpsPin) {
            var result = requestJsonRpcSync("SetWPSPin", {
                "WpsPin": WpsPin
            }, "5.6");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                var errorCode = result.error.code;
                if (errorCode == "050601") {
                    // Set WPS PIN mode failed.
                    return SET_WPS_FAILD;

                } else if (errorCode == "050602") {
                    // WPS PIN code wrong
                    return SET_WPS_PIN_WRONG;

                } else {
                    return SET_WPS_FAILD;
                }

            }
        },

        SetWPSPbc: function() {
            var result = requestJsonRpcSync("SetWPSPbc", null, "5.7");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetWlanSupportMode: function() {
            var result = requestJsonRpcSync("GetWlanSupportMode", null, "5.8");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "WlanAPMode": 0
                };
            }
        }
    };
    //Wlan end

    //SMS start
    SMS = {
        GetSMSInitStatus: function() {
            var result = requestJsonRpcSync("getSmsInitState", null, "6.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result.state;
            } else {
                return {
                    state: 0 //initing
                }
            }
        },

        GetSMSContactList: function(pageNum) {
            if (!isNumber(pageNum)) {
                return SMS_CONTACT_LIST_PAGENUM_FORMAT_ERROR; //page number format error
            }
            var result = requestJsonRpcSync("GetSMSContactList", {
                "Page": pageNum
            }, "6.2");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SMSContactList": [],
                    "Page": pageNum
                }; //if get contact list error,return null list format.
            }
        },

        GetSMSContentList: function(pageNum, contactId) {
            if (!isNumber(pageNum)) {
                return SMS_CONTACT_LIST_PAGENUM_FORMAT_ERROR; //page number format error
            }
            var result = requestJsonRpcSync("GetSMSContentList", {
                "Page": pageNum,
                "ContactId": contactId
            }, "6.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SMSContentList": [],
                    "Page": pageNum,
                    "ContactId": contactId,
                    "PhoneNumber": []
                };
                //if get content list error,return null list format.
            }
        },

        GetSMSStorageState: function() {
            var result = requestJsonRpcSync("GetSMSStorageState", null, "6.4");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "LeftCount": 0,
                    "TUseCount": 0,
                    "UnreadSMSCount": 0
                };
            }
        },

        DeleteSMS: function(delFlag, contactId, smsId) {
            var result = requestJsonRpcSync("DeleteSMS", {
                "DelFlag": delFlag,
                "ContactId": contactId,
                "SMSId": smsId
            }, "6.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SendSMS: function(smsId, smsContent, phoneNumber, smsTime) {
            var result = requestJsonRpcSync("SendSMS", {
                "SMSId": smsId,
                "SMSContent": smsContent,
                "PhoneNumber": phoneNumber,
                "SMSTime": smsTime
            }, "6.6");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetSendSMSResult: function() {
            var result = requestJsonRpcSync("GetSendSMSResult", null, "6.7");

            if (requestJsonRpcIsOk(result)) {
                return result.result.SendStatus;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SaveSMS: function(smsId, smsContent, phoneNumber, smsTime) {
            var result = requestJsonRpcSync("SaveSMS", {
                "SMSId": smsId,
                "SMSContent": smsContent,
                "PhoneNumber": phoneNumber,
                "SMSTime": smsTime
            }, "6.8");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetSMSSettings: function() {
            var result = requestJsonRpcSync("GetSMSSettings", null, "6.9");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SMSCenter": "+8613800270500",
                    "StoreFlag": 1
                };
            }
        },

        SetSMSSettings: function(smsReportFlag, storeFlag, smsCenter) {
            var result = requestJsonRpcSync("SetSMSSettings", {
                "SMSReportFlag": smsReportFlag,
                "StoreFlag": storeFlag,
                "SMSCenter": smsCenter
            }, "6.10");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetSingleSMS: function(smsId) {
            var result = requestJsonRpcSync("GetSingleSMS", {
                "SMSId": smsId,
            }, "6.11");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SMSContent": ""
                };
            }
        },
        SetSmsEncodingOptimization: function(SmsEncodingFlag) {
            var result = requestJsonRpcSync("SetSmsEncodingOptimization", {
                "SmsEncodingOptimization": SmsEncodingFlag
            }, "6.12");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetSmsEncodingOptimization: function() {
            var result = requestJsonRpcSync("GetSmsEncodingOptimization", null, "6.13");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SmsEncodingOptimization": 0
                };
            }
        }
    }
    //SMS end

    //Statistics start
    Statistics = {
        GetUsageRecord: function() {
            var result = requestJsonRpcSync("GetUsageRecord", {
                current_time: getSystemTime()
            }, "7.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "HUseData": 0,
                    "HCurrUseUL": 0,
                    "HCurrUseDL": 0,
                    "RoamUseData": 0,
                    "RCurrUseUL": 0,
                    "RCurrUseDL": 0,
                    "TConnTimes": 0,
                    "CurrConnTimes": 0,
                    "MonthlyPlan": 0
                }
            }
        },

        SetUsageRecordClear: function(clearTime) {
            var result = requestJsonRpcSync("SetUsageRecordClear", {
                clear_time: clearTime
            }, "7.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetUsageSettings: function() {
            var result = requestJsonRpcSync("GetUsageSettings", null, "7.3");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "BillingDay": 1,
                    "MonthlyPlan": 500,
                    "UsedData": 300,
                    "TimeLimitFlag": 1,
                    "TimeLimitTimes": 1,
                    "UsedTimes": 1,
                    "AutoDisconnFlag": 1,
                    "Unit": 0
                };
            }
        },

        SetUsageSettings: function(params) {
            var result = requestJsonRpcSync("SetUsageSettings", params, "7.4");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    }
    //Statistics end  

    //USSD start
    USSD = {
        SendUSSD: function(ussdContent, ussdType) {
            var result = requestJsonRpcSync("SendUSSD", {
                "UssdContent": ussdContent,
                "UssdType": ussdType
            }, "8.1");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetUSSDSendResult: function() {
            var result = requestJsonRpcSync("GetUSSDSendResult", null, "8.2");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "UssdContent": "",
                    "UssdType": 0,
                    "SendState": 0,
                    "UssdContentLen": 0
                };
            }
        },

        SetUSSDEnd: function() {
            var result = requestJsonRpcSync("SetUSSDEnd", null, "8.3");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    }
    //USSD end

    //Update start
    Update = {
        GetDeviceNewVersion: function() {
            var result = requestJsonRpcSync("GetDeviceNewVersion", null, "9.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "State": "0",
                    "Version": ""
                };
            }
        },

        SetFOTAStartDownload: function() {
            var result = requestJsonRpcSync("SetFOTAStartDownload", null, "9.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetDeviceUpgradeState: function() {
            var result = requestJsonRpcSync("GetDeviceUpgradeState", null, "9.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "Status": 0,
                    "Process": 0
                };
            }
        },

        SetDeviceUpdateStop: function() {
            var result = requestJsonRpcSync("SetDeviceUpdateStop", null, "9.4");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SetCheckNewVersion: function() {
            var result = requestJsonRpcSync("SetCheckNewVersion", null, "9.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SetDeviceStartUpdate: function() {
            var result = requestJsonRpcSync("SetDeviceStartUpdate", null, "9.6");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        SetFotaUpdatedNotification: function(FotaUpdatedState) {
            var result = requestJsonRpcSync("SetFotaUpdatedNotification", {
                "FotaUpdatedNotification": FotaUpdatedState
            }, "9.7");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    }
    //Update end

    //Firewall start
    Firewall = {
        GetMacFilterSettings: function() {
            var result = requestJsonRpcSync("GetMacFilterSettings", null, "10.1");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "filter_policy": 1,
                    "MacAllowList": [],
                    "MacDenyList": []
                };
            }
        },
        SetMacFilterSettings: function(filterPolicy, macAllowList, macDenyList) {
            var result = requestJsonRpcSync("SetMacFilterSettings", {
                "filter_policy": filterPolicy,
                "MacAllowList": macAllowList,
                "MacDenyList": macDenyList
            }, "10.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetPortFwding: function() {
            var result = requestJsonRpcSync("getPortFwding", null, "10.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "total_num": 0,
                    "portfwd_list": []
                };
            }
        },
        AddPortFwding: function(sendData) {
            var result = requestJsonRpcSync("addPortFwding", sendData, "10.4");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        DeletePortFwding: function(sendData) {
            var result = requestJsonRpcSync("deletePortFwding", sendData, "10.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        EditPortFwding: function(sendData) {
            var result = requestJsonRpcSync("editPortFwding", sendData, "10.6");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetDMZSettings: function() {
            var result = requestJsonRpcSync("getDMZInfo", null, "10.8");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "dmz_status": 0,
                    "dmz_ip": ""
                };
            }
        },
        SetDMZSettings: function(sendData) {
            var result = requestJsonRpcSync("setDMZInfo", sendData, "10.9");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetIPFilterList: function() {
            var result = requestJsonRpcSync("getIPFilterList", null, "10.10");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "total_num": 0,
                    "ipFilter_list": []
                };
            }
        },
        AddIPFilter: function(sendData) {
            var result = requestJsonRpcSync("addIPFilter", sendData, "10.11");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        DeleteIPFilter: function(sendData) {
            var result = requestJsonRpcSync("deleteIPFilter", sendData, "10.12");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        EditIPFilter: function(sendData) {
            var result = requestJsonRpcSync("editIPFilter", sendData, "10.13");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetFirewallSwitch: function() {
            var result = requestJsonRpcSync("getFirewallSwitch", null, "10.14");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "firewall_status": 0,
                    "ipflt_status": "",
                    "wan_ping_status": 0,
                    "port_forward_status": 0
                };
            }
        },
        SetFirewallSwitch: function(sendData) {
            var result = requestJsonRpcSync("setFirewallSwitch", sendData, "10.15");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetUrlFilterSettings: function() {
            var result = requestJsonRpcSync("getUrlFilterSettings", null, "10.19");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "filter_policy": 1,
                    "UrlAllowList": [],
                    "UrlDenyList": []
                };
            }
        },
        SetUrlFilterSettings: function(filterPolicy, urlAllowList, urlDenyList) {
            var result = requestJsonRpcSync("SetUrlFilterSettings", {
                "filter_policy": filterPolicy,
                "UrlAllowList": urlAllowList,
                "UrlDenyList": urlDenyList
            }, "10.20");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    };
    //Firewall end

    //LAN start
    LAN = {
        GetLanSettings: function() {
            var result = requestJsonRpcSync("GetLanSettings", null, "11.1");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "IPv4IPAddress": "192.168.1.1",
                    "SubnetMask": "255.255.255.0",
                    "DHCPServerStatus": "0",
                    "StartIPAddress": "192.168.1.3",
                    "EndIPAddress": "192.168.1.99",
                    "DHCPLeaseTime": "12",
                    "MacAddress": "",
                    "DNSMode": "",
                    "DNSAddress1": "",
                    "DNSAddress2": ""
                };
            }
        },

        SetLanSettings: function(iPv4IPAddress, subnetMask, dHCPServerStatus, startIPAddress, endIPAddress, dHCPLeaseTime, macAddress, DNSServerStatus, preDNSAddress, secDNSAddress) {
            var result = requestJsonRpcSync("SetLanSettings", {
                "IPv4IPAddress": iPv4IPAddress,
                "SubnetMask": subnetMask,
                "DHCPServerStatus": dHCPServerStatus,
                "StartIPAddress": startIPAddress,
                "EndIPAddress": endIPAddress,
                "DHCPLeaseTime": dHCPLeaseTime,
                "MacAddress": macAddress,
                "DNSMode": DNSServerStatus,
                "DNSAddress1": preDNSAddress,
                "DNSAddress2": secDNSAddress
            }, "11.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    };
    //LAN end

    //ConnectionDevices start
    ConnectionDevices = {
        GetConnectedDeviceList: function() {
            var result = requestJsonRpcSync("GetConnectedDeviceList", null, "12.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "id": 0,
                    "DeviceName": "d1-orange-link",
                    "MacAddress": "98:FC:D2:99:EF",
                    "IPAddress": "192.168.1.100",
                    "AssociationTime": 100,
                    "DeviceType": 1,
                    "ConnectMode": 0
                };
            }
        },

        GetBlockDeviceList: function() {
            var result = requestJsonRpcSync("GetBlockDeviceList", null, "12.2");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "id": 0,
                    "DeviceName": "d1-orange-link",
                    "MacAddress": "98:FC:D2:99:EF",
                    "IPAddress": "192.168.1.100",
                    "AssociationTime": 100,
                    "DeviceType": 1,
                    "ConnectMode": 0
                };
            }
        },

        SetConnectedDeviceBlock: function(DeviceName, MacAddress) {
            var result = requestJsonRpcSync("SetConnectedDeviceBlock", {
                "DeviceName": DeviceName,
                "MacAddress": MacAddress
            }, "12.3");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                var errorCode = result.error.code;

                if (errorCode == "120301") {
                    // Set device block failed..
                    return API_RESULT_FAIL;
                }
            }
        },

        SetDeviceUnlock: function(DeviceName, MacAddress) {
            var result = requestJsonRpcSync("SetDeviceUnlock", {
                "DeviceName": DeviceName,
                "MacAddress": MacAddress
            }, "12.4");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                var errorCode = result.error.code;

                if (errorCode == "120401") {
                    // Set device block failed..
                    return API_RESULT_FAIL;
                }
            }
        },

        SetDeviceName: function(DeviceName, MacAddress, DeviceType, ConnectMode) {

            var result = requestJsonRpcSync("SetDeviceName", {
                "DeviceName": DeviceName,
                "MacAddress": MacAddress,
                "DeviceType": DeviceType,
                "ConnectMode": ConnectMode
            }, "12.5");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                var errorCode = result.error.code;

                if (errorCode == "120501") {
                    // Set device name failed..
                    return API_RESULT_FAIL;
                }
            }
        }
    };
    //ConnectionDevices end

    //System start
    System = {
        GetSystemInfo: function() {
            var result = requestJsonRpcSync("GetSystemInfo", null, "13.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return result.error;
            }
        },

        SetLanguage: function(Language) {
            var result = requestJsonRpcSync("SetLanguage", {
                "Language": Language
            }, "13.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetLanguage: function() {
            var result = requestJsonRpcSync("GetCurrentLanguage", null, "13.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result.Language;
            } else {
                return "en";
            }
        },

        GetCurrentLanguage: function() {
            var result = requestJsonRpcSync("GetCurrentLanguage", null, "13.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "Language": "en"
                }
            }
        },

        GetSystemStatus: function() {
            var result = requestJsonRpcSync("GetSystemStatus", null, "13.4");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "NetworkType": 1,
                    "SignalStrength": 1,
                    "WlanState": 1,
                    "ConnectionStatus": 1,
                    "SmsState": 1,
                    "chg_state": 1,
                    "bat_cap": 50,
                    "bat_level": 1,
                    "Roaming": 0,
                    "curr_num": 4,
                    "NetworkName": "CMCC",
                    "TotalConnNum": 5
                }
            }
        },
        GetAsyncSystemStatus: function(callback) {
            requestJsonRpcAsync("GetSystemStatus", null, "13.4", function(result) {
                callback(result);
            });
        },
        SetDeviceReboot: function() {
            var result = requestJsonRpcSync("SetDeviceReboot", null, "13.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SetDeviceReset: function() {
            var result = requestJsonRpcSync("SetDeviceReset", null, "13.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SetDeviceBackup: function() {
            var result = requestJsonRpcSync("SetDeviceBackup", null, "13.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        SetDeviceRestore: function() {
            var result = requestJsonRpcSync("SetDeviceRestore", null, "13.4");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "filename": ""
                };
            }
        },
        GetUpnpSettings: function() {
            var result = requestJsonRpcSync("GetUpnpSettings", null, "13.16");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "upnp_switch": 0
                };
            }
        },
        SetUpnpSettings: function(sendData) {
            var result = requestJsonRpcSync("SetUpnpSettings", sendData, "13.17");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        getNewPageFlagSemaphore: function() {
            var result = requestJsonRpcSync("getNewPageFlagSemaphore", null, "13.18");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "flag_state": 1
                };
            }
        },
        setNewPageFlagSemaphore: function(sendData) {
            var result = requestJsonRpcSync("setNewPageFlagSemaphore", sendData, "13.19");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        SendPingURL: function(sendData) {
            var result = requestJsonRpcSync("SendPingURL", {
                "PingURL": sendData
            }, "13.24");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        SetMyNumber: function(sendData) {
            var result = requestJsonRpcSync("SetMyNumber", sendData, "13.25");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        getDNSInfo: function() {
            var result = requestJsonRpcSync("getDNSInfo", null, "12.1");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "DNSMode": "",
                    "DNSAddress1": "",
                    "DNSAddress2": ""
                };
            }
        },
        setDNSInfo: function(DNSServerStatus, preDNSAddress, secDNSAddress) {
            var result = requestJsonRpcSync("setDNSInfo", {
                "DNSMode": DNSServerStatus,
                "DNSAddress1": preDNSAddress,
                "DNSAddress2": secDNSAddress
            }, "12.1");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetWanAccess: function() { //ping function enable or disable.
            var result = requestJsonRpcSync("GetWanAccess", null, "13.16");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "disableWanAcess": 0
                };
            }
        },
        SetWanAccess: function(sendData) { /*0表示开启ping wan侧访问， 1表示关闭ping wan侧访问*/
            var result = requestJsonRpcSync("SetWanAccess", sendData, "13.17");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        GetProfilePromptFlag: function() {
            var result = requestJsonRpcSync("GetProfilePromptFlag", null, "15.6");
            //result={"jsonrpc":"2.0","result":{"prom_flag":1},"id":"1.3"};
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "prom_flag": 0
                };
            }
        },
        SetProfilePre: function(profile_pre) {
            var result = requestJsonRpcSync("SetProfilePre", {
                "profile_pre": profile_pre
            }, "15.7");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        setLogDownoad:function(){
            var result = requestJsonRpcSync("setLogDownoad", null, "15.8");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    }
    //System end

    //Sharing start
    Sharing = {
        GetDLNASettings: function() {
            var result = requestJsonRpcSync("GetDLNASettings", null, "14.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "DlnaStatus": 0,
                    "DlnaName": ""
                };
            }
        },

        SetDLNASettings: function(dlnaStatus, dlnaName) {
            var result = requestJsonRpcSync("SetDLNASettings", {
                "DlnaStatus": dlnaStatus,
                "DlnaName": dlnaName
            }, "14.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetSambaStatus: function() {
            var result = requestJsonRpcSync("GetSambaStatus", null, "14.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SambaStatus": 0
                };
            }
        },

        SetSambaStatus: function(sambaStatus) {
            var result = requestJsonRpcSync("SetSambaStatus", {
                "SambaStatus": sambaStatus
            }, "14.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetFtpStatus: function() {
            var result = requestJsonRpcSync("GetFtpStatus", null, "14.5");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "FtpStatus": 0
                };
            }
        },

        SetFtpStatus: function(ftpStatus) {
            var result = requestJsonRpcSync("SetFtpStatus", {
                "FtpStatus": ftpStatus
            }, "14.6");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetUsbcardStatus: function() {
            var result = requestJsonRpcSync("GetUsbcardStatus", null, "14.10");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "UsbcardStatus": 0
                };
            }
        },

        SetUsbcardStatus: function(usbcardStatus) {
            var result = requestJsonRpcSync("SetUsbcardStatus", {
                "UsbcardStatus": usbcardStatus
            }, "14.11");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        GetSDCardSpace: function() {
            var result = requestJsonRpcSync("GetSDCardSpace", null, "14.7");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "TotalSpace": 0,
                    "UsedSpace": 0
                };
            }
        },

        GetSDFileList: function(path, page) {
            var result = requestJsonRpcSync("GetSDFileList", {
                "Path": path,
                "Page": page
            }, "14.8");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "FileList": [],
                    "Path": "",
                    "TotalPage": 0,
                    "Page": 0
                };
            }
        },

        GetSDcardStatus: function() {
            var result = requestJsonRpcSync("GetSDcardStatus", null, "14.9");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SDcardStatus": 0,
                };
            }
        }
    }
    //Sharing end

    //Profile start
    Profile = {
        GetProfileList: function() {
            var result = requestJsonRpcSync("GetProfileList", null, "15.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result.ProfileList;
            } else {
                return {
                    "ProfileID": 1,
                    "ProfileName": "China Unicom",
                    "APN": "3gnet",
                    "AuthType": 0,
                    "DailNumber": "*99#",
                    "UserName": "china",
                    "Password": "1234",
                    "Default": 1,
                    "IsPredefine": 1,
                    "IPAdrress": ""
                };
            }
        },
        AddNewProfile: function(sendData) {
            var result = requestJsonRpcSync("AddNewProfile", sendData, "15.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }

        },
        EditProfile: function(sendData) {
            var result = requestJsonRpcSync("EditProfile", sendData, "15.3");

            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        DeleteProfile: function(ProfileID) {
            var result = requestJsonRpcSync("DeleteProfile", {
                "ProfileID": ProfileID
            }, "15.4");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },
        SetDefaultProfile: function(ProfileID) {
            var result = requestJsonRpcSync("SetDefaultProfile", {
                "ProfileID": ProfileID
            }, "15.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }

    };
    //Profile end
    //phonebook start
    PhoneBook = {
        getPhoneBookInitState: function() {
            var result = requestJsonRpcSync("getPhoneBookInitState", null, "19.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "pb_init_state": 1
                };
            }
        },

        getPhoneBooklistInfo: function(typeNum) {
            var result = requestJsonRpcSync("getPhoneBooklistInfo", {
                "pb_type": typeNum
            }, "19.2");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                // return {
                if (typeNum == "sim") {
                    return {
                        "current_num": 1,
                        "totle_num": 1,
                        "data": [{
                            "pb_id": 1,
                            "pb_name": "jeck",
                            "phone_number": "88888888"
                        }]
                    };

                } else if (typeNum == "local") {
                    return {
                        "data": [{
                            "pb_id": 1,
                            "pb_name": "jeck",
                            "phone_number": "88888888"
                        }]
                    };
                }
                // };
            }

        },

        getPhoneBookInfo: function(typeNum) {
            var result = requestJsonRpcSync("getPhoneBookInfo", {
                "pb_type": typeNum
            }, "19.3");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                //return {
                if (typeNum == "sim") {
                    return {
                        "current_num": 1,
                        "totle_num": 1,
                        "name_length": "12",
                        "number_length": "32"
                    };
                } else if (typeNum == "local") {
                    return {
                        "current_num": 1,
                        "totle_num": 1,
                        "name_length": "12",
                        "number_length": "22"
                    };
                }
                //};
            }
        },

        getPhoneBookSingle: function(typeNum, id) {
            var result = requestJsonRpcSync("getPhoneBookSingle", {
                "pb_id": id,
                "pb_type": typeNum
            }, "19.4");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                // return {
                if (typeNum == "sim") {
                    return {
                        "pb_id": 1,
                        "pb_name": "jeck",
                        "phone_number": "88888888"
                    };
                } else if (typeNum == "local") {
                    return {
                        "pb_id": 2,
                        "pb_name": "jeck",
                        "phone_number": "88888888"
                    };
                }
                // };
            }
        },
        deletePhoneBook: function(params) {
            var result = requestJsonRpcSync("deletePhoneBook", params, "19.5");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        addPhoneBook: function(params) {
            var result = requestJsonRpcSync("addPhoneBook", params, "19.6");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        },

        editPhoneBook: function(params) {
            var result = requestJsonRpcSync("editPhoneBook", params, "19.7");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    };

    //phonebook end
    //TR069 start
    TR069 = {

        GetClientConfiguration: function() {
            var result = requestJsonRpcSync("GetClientConfiguration", null, "18.1");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "Inform": 0,
                    "InformInterval": 100,
                    "AcsUrl": "http://192.168.1.1 ",
                    "AcsUserName": "freecwmp",
                    "AcsUserPassword": " freecwmp ",
                    "ConReqAuthent": 1,
                    "ConReqUserName": "username",
                    "ConReqUserPassword": "userpassword"
                };

            }
        },

        SetClientConfiguration: function(params) {
            var result = requestJsonRpcSync("SetClientConfiguration", params, "18.2");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    };

    //Power start
    Power = {
        GetPowerSavingMode: function() {
            var result = requestJsonRpcSync("GetPowerSavingMode", null, "16.2");
            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "SmartMode": 0,
                    "WiFiMode": 0
                };
            }
        },
        SetPowerSavingMode: function(sendData) {
            var result = requestJsonRpcSync("SetPowerSavingMode", sendData, "16.3");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    };
    //Power end

    //PDP Timer start
    PDPTimer = {
        GetFDTimer: function() {
            var result = requestJsonRpcSync("GetFDTimer", null, "7.5");

            if (requestJsonRpcIsOk(result)) {
                return result.result;
            } else {
                return {
                    "FDTimer": 0
                };
            }
        },
        SetFDTimer: function(fdTimer) {
            var result = requestJsonRpcSync("SetFDTimer", {
                "FDTimer": fdTimer
            }, "7.6");
            if (requestJsonRpcIsOk(result)) {
                return API_RESULT_SUCCESS;
            } else {
                return API_RESULT_FAIL;
            }
        }
    };
    //PDP Timer end

    return {
        requestJsonRpcAsync: requestJsonRpcAsync,
        requestJsonRpcSync: requestJsonRpcSync,
        requestJsonRpcIsOk: requestJsonRpcIsOk,
        User: User,
        SIM: SIM,
        Connection: Connection,
        Network: Network,
        Wlan: Wlan,
        SMS: SMS,
        Statistics: Statistics,
        USSD: USSD,
        Update: Update,
        Firewall: Firewall,
        LAN: LAN,
        ConnectionDevices: ConnectionDevices,
        System: System,
        Sharing: Sharing,
        Profile: Profile,
        PhoneBook: PhoneBook,
        TR069: TR069,
        Power: Power,
        PDPTimer: PDPTimer
    };

})()