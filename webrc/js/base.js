//---------------- global ---------------------------------------

/*******************global end**********************************/

var MACRO__API_ERROR = 255;
var MACRO_SAVE_PIN_ENABLED = 1;
var MACRO_SAVE_PIN_DISABLED = 0;

/*auto connect even when roaming*/
var MACRO_AUTO_CONNECT_ENABLED = 0;
var MACRO_AUTO_CONNECT_DISABLED = 1;

/*wan status*/
var MACRO_PPP_DISCONNECTED = 0;
var MACRO_PPP_CONNECTING = 1;
var MACRO_PPP_CONNECTED = 2;
var MACRO_PPP_DISCONNECTING = 3;

var PPP_DIAL_AUTO = 0;
var PPP_DIAL_MANUAL = 1;

/*network type*/
var MACRO_NETWORKTYPE_NO_SERVICE = 0;
var MACRO_NETWORKTYPE_GPRS = 1;
var MACRO_NETWORKTYPE_EDGE = 2;
var MACRO_NETWORKTYPE_HSPA = 3;
var MACRO_NETWORKTYPE_HSUPA = 4;
var MACRO_NETWORKTYPE_UMTS = 5;
var MACRO_NETWORKTYPE_HSPA_PLUS = 6;
var MACRO_NETWORKTYPE_DC_HSPA_PLUS = 7;
var MACRO_NETWORKTYPE_LTE = 8;
var MACRO_NETWORKTYPE_LTE_PLUS = 9;

/*roam*/
var MACRO_ROAM_DISABLE = 1;
var MACRO_ROAM_ENABLE = 0;

/*wlan status*/
var MACRO_WLAN_DISABLED = 0;
var MACRO_WLAN_ENABLED = 1;
var MACRO_WLAN_WPS = 2;

/*signal level*/
var MACRO_EVDO_LEVEL_ZERO = 0;
var MACRO_EVDO_LEVEL_ONE = 1;
var MACRO_EVDO_LEVEL_TWO = 2;
var MACRO_EVDO_LEVEL_THREE = 3;
var MACRO_EVDO_LEVEL_FOUR = 4;
var MACRO_EVDO_LEVEL_FIVE = 5;
var MACRO_EVDO_API_ERROR = 255;

var MACRO_BATTERY_CHARGING = 0;
var MACRO_BATTERY_COMPLATE = 1;
var MACRO_BATTERY_NOCHARGE = 2;


/*sms status*/
var MACRO_SMS_DISENABLE = 0;
var MACRO_SMS_FULL = 1;
var MACRO_SMS_NORMAL = 2;
var MACRO_SMS_NEW = 3;

var SMS_HANDLE_FORWARD = 0;
var SMS_HANDLE_REPLY = 1;
var SMS_HANDLE_READ = 2;
var SMS_HANDLE_DRAFT = 3;
var SMS_HANDLE_SENT = 4;
var SMS_HANDLE_NEW = 5;

/*security*/
var SECRUTIY_TYPE_DISABLE = 0;
var SECRUTIY_TYPE_WEP = 1;
var SECRUTIY_TYPE_WPA_PSK = 2;
var SECRUTIY_TYPE_WPS2_PSK = 3;
var SECRUTIY_TYPE_WPA_MIXED = 4;

/*802.11 mode*/
var MODE_802_11B = 0
var MODE_802_11G = 1
var MODE_802_11N = 2
var MODE_802_11BG = 3
var MODE_802_11BGN = 4
var MODE_802_11_AUTO = 5

/* network mode*/
var NETWORK_AUTOMATIC = 4;
var NETWORK_GSM_ONLY = 13;
var NETWORK_WCDMA_ONLY = 14;
/*Select wan mode*/
var SELECT_MODE_AUTOMATIC = 0;
var SELECT_MODE_MANUAL = 1;
var SELECT_MODE_LIMITED_SRV = 2;

/*not support char*/
var MACRO_SUPPORT_CHAR_MIN = 32;
var MACRO_SUPPORT_CHAR_MAX = 127;
var MACRO_NOT_SUPPORT_CHAR_COMMA = 44; //,
var MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK = 34; //"
var MACRO_NOT_SUPPORT_CHAR_COLON = 58; //:
var MACRO_NOT_SUPPORT_CHAR_SEMICOLON = 59; //;
var MACRO_NOT_SUPPORT_BACKSLASH_MARK = 92; //\
var MACRO_NOT_SUPPORT_CHAR_38 = 38; //&
var MACRO_NOT_SUPPORT_CHAR_39 = 39; //'
var MACRO_NOT_SUPPORT_CHAR_42 = 42; //*
var MACRO_NOT_SUPPORT_CHAR_47 = 47; ///
var MACRO_NOT_SUPPORT_CHAR_60 = 60; //<
var MACRO_NOT_SUPPORT_CHAR_62 = 62; //>
var MACRO_NOT_SUPPORT_CHAR_63 = 63; //?
var MACRO_NOT_SUPPORT_CHAR_124 = 124; //|

/*ssid*/
var MACRO_WLAN_SSID_NUMBER_START = 48;
var MACRO_WLAN_SSID_NUMBER_END = 57;
var MACRO_WLAN_SSID_UP_CHAR_START = 65;
var MACRO_WLAN_SSID_UP_CHAR_END = 90;
var MACRO_WLAN_SSID_LOW_CHAR_START = 97;
var MACRO_WLAN_SSID_LOW_CHAR_END = 122;
var MACRO_WLAN_SSID_CHAR_UNDERLINE = 95;
var MACRO_WLAN_SSID_CHAR_DASH = 45;
var MACRO_WLAN_SSID_CHAR_DOT = 46;
var MACRO_WLAN_SSID_CHAR_SPACE = 32;
var MACRO_WLAN_SSID_HIDDEN = 1;

/*sd card*/
var MACRO_SD_IS_EXIST = 1;
var MACRO_SD_NOT_EXIST = 0;
var MACRO_SD_USB_ONLY = 1;
var MACRO_SD_WEB_ONLY = 0;
var MACRO_SD_SHARE_ENABLE = 1;
var MACRO_SD_SHARE_DISABLE = 0;
var MACRO_SD_ALL = 0;
var MACRO_SD_PATH_DEFINE = 1;
var MACRO_SD_READ_WRITE = 1;
var MACRO_SD_READ_ONLY = 0;

var DEFUALT_PROFILE_VALUE = 1;

var NW_REG_STAT_FAIL = 3;
var NW_REG_STAT_SUCCESS = 2;
var NW_REG_STAT_REGISTRATING = 1;
var NW_REG_STAT_NONE = 0;

/*searching state*/
var NW_NONE_SELECT = 0;
var NW_SELECTING = 1;
var NW_SELECT_SUCCESS = 2;
var NW_SELECT_FAILURE = 3;

/***network mode***/
var NETWORK_MODE_AUTOMATIC = 4;
var NETWORK_MODE_GSM_ONLY = 13;
var NETWORK_MODE_WCDMA_ONLY = 14;

/***network select mode***/
var SEL_MODE_AUTOMATIC = 0;
var SEL_MODE_MANUAL = 1;

/***network type***/
var NW_TYPE_GSM = 1;
var NW_TYPE_UMTS = 2;
var NW_TYPE_LTE = 3;
var NW_TYPE_TD_SCDMA = 9;

/***network state***/
var NW_STATE_AVAILABLE = 1;
var NW_STATE_CURRENT = 2;
var NW_STATE_FORBIDDEN = 3;

var IS_AUTO_ROAM_DISABLE = 0;
var IS_AUTO_ROAM_ENABLE = 1;

var intervalgetNetworkList = null;
var intervalgetNetworkRegisterResult = null;
var interGetSendResult = null;

/****fota*************/
var versionState = null;
var FOTADownloadState = null;
var FOTADownloadInfo = null;
var isFotaCheckEnd = false;
var wanState = null;
var NewVersionNum = null;
var versionNum = null;
var batteryState = null;


/*MAC filter*/
var MAC_FILTER_STATE_DISABLE = 0;
var MAC_FILTER_STATE_ALLOW = 1;
var MAC_FILTER_STATE_DENY = 2;
var MAC_FILTER_STATE_DENYMAX = 10;
/*ClearCode number*/
var ClearCode_NoServices = 33;
var ClearCode_AuthenticationFailure = 29;

/*URL filter*/
var URL_FILTER_STATE_DISABLE = 0;
var URL_FILTER_STATE_ALLOW = 1;
var URL_FILTER_STATE_DENY = 2;

/*helplineNumber state*/
var helpLineNumb_home = 1;
var heplLineNumb_default = 2;
var helpLineNumb_homeAnddefault = 3;

var simHPLMN = SDK.Network.GetNetworkInfo().PLMN;

var objectSize = 0;

var popUp = {
    show: function(options) {
        var defaults = {
            type: "alert",
            width: "auto",
            height: "auto",
            title: "",
            msg: "",
            time: 2000,
            okText: sys.getRes("ids_btn_ok"),
            cancelText: sys.getRes("ids_btn_cancel")
        };
        var opts = $.extend(defaults, options);
        $("#btnPopUpOk").html(opts.okText)
        $("#btnPopUpCancel").html(opts.cancelText)
        if ($("#popUpMask").css("display") == "none") {
            if (!(!($.browser.msie && ($.browser.version == "6.0") && !$.support.style))) {
                $("#popUpMask,#popUpWrap,#popUpBox").css({
                    height: $("#wrap").height()
                });
            }
            $("#popUpMask,#popUpWrap,#popUpBox").css({
                display: "block"
            });
            $("#popUpMask").show("slow").css({
                opacity: 0.8
            });
        }
        if (opts.type == "confirm") {
            $("#okBtnWrap,#cancelBtnWrap,#popUpClose").css({
                "display": "inline"
            });
            $("#popUpClose").unbind("click").bind("click", function() {
                popUp.hide();
            })
        } else if (opts.type == "alert") {
            $("#okBtnWrap,#popUpClose").css({
                display: "inline"
            });
            $("#cancelBtnWrap").hide(0);
            $("#popUpClose").unbind().bind("click", function() {
                popUp.hide();
                if ($.isFunction(opts.callback)) {
                    opts.callback.apply();
                }
            })
        } else if (opts.type == "openBox") {
            $("#okBtnWrap,#cancelBtnWrap").hide(0);
            $("#popUpClose").css({
                display: "inline"
            });
            $("#popUpClose").unbind().bind("click", function() {
                popUp.hide();
            });
        } else if (opts.type == "showBox") {
            $("#okBtnWrap,#cancelBtnWrap,#popUpClose").hide(0);
        } else {
            $("#okBtnWrap,#cancelBtnWrap,#popUpClose").hide(0);
            if (opts.time != -1) {
                setTimeout(function() {
                    popUp.hide();
                }, opts.time)
            }
        }
        $("#popUpTitle").html(opts.title);
        $("#popUpContent").html(opts.msg);
        $("#popUpWrap").css({
            height: $("#popUpBox").height() + 20 + "px"
        });

        /*$("#popUpBox,#popUpWrap").css({
            "top":($("#popUpMask").height() - $("#popUpWrap").outerHeight()) / 2 + "px"
        }).fadeIn(200);*/

        if ($.browser.msie) {
            if (($.browser.version == "6.0" || $.browser.version == "7.0") && $("#popUpBtnWrap .btnWrap").size() == 0) {
                $("#popUpBtnWrap .btnNormal").css("border", "none");
                $("#popUpBtnWrap .btnNormal").wrap("<div class='btnWrap'></div>");
            }
        }

        $("#btnPopUpOk").unbind("click").bind("click", function() {
            popUp.hide();
            if ($.isFunction(opts.callback)) {
                opts.callback.apply();
            }
        })

        $("#cancelBtnWrap,#popUpClose").unbind("click").bind("click", function() {
            popUp.hide();
            if ($.isFunction(opts.cancelcallback)) {
                opts.cancelcallback.apply();
            }
        })

        $("body").addClass("noSwipe");
    },

    hide: function() {
        $("#popUpMask,#popUpWrap,#popUpBox").fadeOut(0);
        $("#popUpBox").fadeOut(200);
        $("body").removeClass("noSwipe");
    },

    alert: function(msg, callback) {
        var option = {
            type: "alert",
            msg: msg,
            callback: callback
        }
        popUp.show(option);
    },
    confirm: function(msg, callback, cancelcallback,opts) {
        var option = {
            type: "confirm",
            msg: msg,
            callback: callback,
            cancelcallback: cancelcallback
        }
        $.extend(option, opts);
        popUp.show(option);
    },
    prompt: function(msg, time) {
        var option = {
            type: "msg",
            msg: msg,
            time: time
        }
        popUp.show(option);
    },
    popWin: function(title, htmlStr) {
        var option = {
            type: "confirm",
            title: title,
            msg: htmlStr
        }
        popUp.show(option);
    },
    showBox: function(msg) {
        var option = {
            type: "showBox",
            msg: msg
        }
        popUp.show(option);
    }

}

var sys = {
    getRes: function(strId) {
        return resourceInfo[strId];
    },


    getIpAddr: function(IP) {
        if (IP == MACRO_INVALID_STR) {
            return "0.0.0.0";
        } else {
            return IP;
        }
    },


    isLogin: function(sessionId) {
        return (sessionId == LOGIN_STATE_SUCCESS ? true : false);
    },

    alert: function(strId, callback) {
        var resMsg = resourceInfo[strId];
        /*
         alert((resMsg != null || resMsg != undefined) ? resMsg : strId);
         if (callback != null) callback();
         */
        popUp.alert(callback == null ? (resMsg != undefined ? resMsg : strId) : resMsg != undefined ? resMsg : strId, callback);
        if (config.AutoSearchNetwork) {
            var networkSettings = SDK.Network.GetNetworkSettings();
            var networkSelection = networkSettings.NetselectionMode;
            if (networkSelection == 1) {
                page.reloadMain();
                $("#loading").css("display", "none");
            }
        }

    },

    confirm: function(strId, callback, cancelcallback,opts) {
        var resMsg = resourceInfo[strId];
        popUp.confirm(callback == null ? (resMsg != undefined ? resMsg : strId) : resMsg != undefined ? resMsg : strId, callback, cancelcallback,opts);
    },

    prompt: function(strId, time) {
        var resMsg = resourceInfo[strId];
        popUp.prompt(time == null ? (resMsg != undefined ? resMsg : strId) : resMsg != undefined ? resMsg : strId, time)
    },


    getTimeDesc: function(time_sec) {
        var that = this;
        var days = Math.floor(time_sec / 86400);
        var hours = Math.floor((time_sec - days * 86400) / 3600);
        var minutes = Math.floor((time_sec - days * 86400 - hours * 3600) / 60);
        var str = "";
        str += days + "&nbsp;" + ((days <= 1) ? that.getRes("ids_day") : that.getRes("ids_days")) + "&nbsp;";
        str += hours +"&nbsp;" + ((hours <= 1) ? that.getRes('ids_hour') : that.getRes('ids_hours')) + "&nbsp;";
        str += ((minutes < 10) ? "0" : "") + "&nbsp;" + minutes + "&nbsp;" + ((minutes <= 1) ? that.getRes("ids_minute") : that.getRes("ids_minutes"));
        return str;
    },


    covertNum: function(number) {
        var that = this;
        return number >= (1024 * 1024 * 1024) ? (number / (1024 * 1024 * 1024)).toFixed(2) + "&nbsp;" + that.getRes("ids_usage_GB") : (number >= (1024 * 1024) ? (number / (1024 * 1024)).toFixed(2) + "&nbsp;" + that.getRes("ids_usage_MB")  : (number / 1024).toFixed(2) + "&nbsp;"+ that.getRes("ids_usage_KB"));
    }

};

var popUpPopin = {
    show: function(options) {
        var defaults = {
            type: "alert",
            width: "auto",
            height: "auto",
            title: "",
            msg: "",
            time: 2000,
            okText: sys.getRes("ids_btn_ok"),
            cancelText: sys.getRes("ids_btn_cancel")
        };
        var opts = $.extend(defaults, options);
        $("#btnPopUpOkPopin").html(opts.okText)
        $("#btnPopUpCancelPopin").html(opts.cancelText)
        if ($("#popUpMaskPopin").css("display") == "none") {
            if (!(!($.browser.msie && ($.browser.version == "6.0") && !$.support.style))) {
                $("#popUpMaskPopin,#popUpWrapPopin,#popUpBoxPopin").css({
                    height: $("#wrap").height()
                });
            }
            $("#popUpMaskPopin,#popUpWrapPopin,#popUpBoxPopin").css({
                display: "block"
            });
            $("#popUpMaskPopin").show("slowPopin").css({
                opacity: 0.8
            });
        }
        if (opts.type == "confirm") {
            $("#okBtnWrapPopin,#cancelBtnWrapPopin,#popUpClosePopin").css({
                "display": "inline"
            });
            $("#popUpClosePopin").unbind("click").bind("click", function() {
                popUpPopin.hide();
            })
        } else if (opts.type == "alert") {
            $("#okBtnWrapPopin,#popUpClosePopin").css({
                display: "inline"
            });
            $("#cancelBtnWrapPopin").hide(0);
            $("#popUpClosePopin").unbind().bind("click", function() {
                popUpPopin.hide();
                if ($.isFunction(opts.callback)) {
                    opts.callback.apply();
                }
            })
        } else if (opts.type == "openBox") {
            $("#okBtnWrapPopin,#cancelBtnWrapPopin").hide(0);
            $("#popUpClose").css({
                display: "inline"
            });
            $("#popUpClosePopin").unbind().bind("click", function() {
                popUpPopin.hide();
            });
        } else if (opts.type == "showBox") {
            $("#okBtnWrapPopin,#cancelBtnWrapPopin,#popUpClosePopin").hide(0);
        } else {
            $("#okBtnWrapPopin,#cancelBtnWrapPopin,#popUpClosePopin").hide(0);
            if (opts.time != -1) {
                setTimeout(function() {
                    popUpPopin.hide();
                }, opts.time)
            }
        }
        $("#popUpTitlePopin").html(opts.title);
        $("#popUpContentPopin").html(opts.msg);
        $("#popUpWrapPopin").css({
            height: $("#popUpBoxPopin").height() + 20 + "px"
        });

        /*$("#popUpBox,#popUpWrap").css({
            "top":($("#popUpMask").height() - $("#popUpWrap").outerHeight()) / 2 + "px"
        }).fadeIn(200);*/

        if ($.browser.msie) {
            if (($.browser.version == "6.0" || $.browser.version == "7.0") && $("#popUpBtnWrapPopin .btnWrap").size() == 0) {
                $("#popUpBtnWrapPopin .btnNormal").css("border", "none");
                $("#popUpBtnWrapPopin .btnNormal").wrap("<div class='btnWrap'></div>");
            }
        }

        $("#btnPopUpOkPopin").unbind("click").bind("click", function() {
            popUpPopin.hide();
            if ($.isFunction(opts.callback)) {
                opts.callback.apply();
            }
        })

        $("#cancelBtnWrapPopin,#popUpClosePopin").unbind("click").bind("click", function() {
            popUpPopin.hide();
            if ($.isFunction(opts.cancelcallback)) {
                opts.cancelcallback.apply();
            }
        })

        $("body").addClass("noSwipe");
    },
    hide: function() {
        $("#popUpMaskPopin,#popUpWrapPopin,#popUpBoxPopin").fadeOut(0);
        $("#popUpBoxPopin").fadeOut(200);
        $("body").removeClass("noSwipe");
    },
    confirm: function(msg, callback, cancelcallback,opts) {
        var option = {
            type: "confirm",
            msg: msg,
            callback: callback,
            cancelcallback: cancelcallback
        }
        $.extend(option, opts);
        popUpPopin.show(option);
    }
};
var sysPopin= {
    confirm: function(strId, callback, cancelcallback,opts) {
        var resMsg = resourceInfo[strId];
        popUpPopin.confirm(callback == null ? (resMsg != undefined ? resMsg : strId) : resMsg != undefined ? resMsg : strId, callback, cancelcallback,opts);
    }
};


var listenLogout = {
    init: function() {
        var that = this;
        that.start();
        that.listenObj($("#container,header,#main"));
        if (config.SupportLogin) {
            that.heartbeat();
        }
    },

    logoutMethod: null,

    start: function() {
        var that = this;
        if (that.logoutMethod != null) {
            that.stop();
        }
        if (config.SupportLogin) {
            that.logoutMethod = setTimeout('listenLogout.logout();', 300000);
        }

    },

    stop: function() {
        var that = this;
        if (that.logoutMethod != null) {
            clearTimeout(that.logoutMethod);
            that.logoutMethod = null;
        }
    },

    listenObj: function(DomObject) {
        var that = this;
        DomObject.live("keydown touchstart", function() {
            that.stop();
        });

        DomObject.live('keyup touchend click', function() {
            that.start();
        });
    },

    flushed: function() {
        SDK.User.HeartBeat();
    },

    logout: function() {
        if (API_RESULT_SUCCESS == SDK.User.Logout()) {
            location.reload();
        }
    },

    heartbeat: function() {
        var that = this;
        setInterval(function() {
            that.flushed();
        }, 10000);
    }

};


(function() {
    var cache = {};
    this.tmpl = function(template_id, data) {
        var fn = cache[template_id];
        this.get = function(dataid) {
            var id = dataid.split(":")[0];
            var res = data[id] ? (dataid.charAt(dataid.length - 1) == ":" ? data[id] + ':' : data[id]) : 'null';
            return res;
        }

        if (!fn) {
            var template = document.getElementById(template_id).innerHTML;
            fn = new Function("data", "var p=[]; p.push('" +
                template
                .replace(/[\r\t\n]/g, " ")
                .split("'").join("\\'")
                .replace(/\${(.+?)}/g, "',this.get(\'$1\'),'")
                .split("${").join("');")
                .split("}").join("p.push('") + "');return p.join('');");
            cache[template_id] = fn;
        }
        return fn();
    };

    //init module
    $.each(config.modules, function(i, v) {
        if (v.isActive) {
            objectSize++;
            $(".phonebook,.sharing").removeClass("hidden");
        }
        if (v.isActive == false) {
            $("." + v.module).remove();
        }
    });
    if (objectSize == 5) {
        $(".sms").addClass("sms-noSD");
        $(".settings").addClass("settings-noSD");
    } else {
        if (objectSize > 5) {
            $(".sms").removeClass("sms-noSD");
            $(".settings").removeClass("settings-noSD");
        }
    }

})();


(function($) {
    $.extend({
        postForm: function(options) {
            var defaults = {
                action: "",
                dataType: "json",
                error: function() {
                    sys.alert("ids_requestError");
                }
            };

            var opts = $.extend(defaults, options);
            $.ajax({
                type: "post",
                url: opts.action + "?rand=" + Math.random(),
                data: opts.data || {
                    some: "a"
                },
                async: false,
                cache: false,
                dataType: opts.dataType,
                success: function(data) {
                    opts.success(data);
                },
                error: function() {
                    opts.error()
                }
            });
        },


        getData: function(options) {
            var backdata = null;
            var defaults = {
                url: "",
                type: "post",
                data: "d=1",
                async: false,
                dataType: "json",
                success: function(data) {
                    backdata = data;
                }
            };

            var opts = $.extend(defaults, options);
            $.ajax({
                type: opts.type,
                async: opts.async,
                url: opts.url,
                data: opts.data,
                dataType: opts.dataType,
                success: function(data) {
                    opts.success(data)
                },
                error: function() {
                    backdata = null
                }
            });
            return backdata;
        }
    });


    $.fn.extend({
        findSelectRes: function(datas) {
            return this.each(function() {
                var option_HtmlStr = "";
                $.each(datas, function(index, val) {
                    option_HtmlStr += "<option value='" + index + "'>" + val + "</option>"
                });
                $(this).html(option_HtmlStr)
            });
        },

        setBtnDisabled: function() {
            return this.each(function() {
                $(this).attr("disabled", true).addClass("btnDisable").removeClass("hover");
                if ($.browser.msie) {
                    if ($.browser.version == "6.0" || $.browser.version == "7.0") {
                        $(this).parent(".btnWrap").addClass("disable");
                    }
                }
            })
        },

        removeBtnDisabled: function() {
            return this.each(function() {
                $(this).removeAttr("disabled").removeClass("btnDisable");
                if ($.browser.msie) {
                    if ($.browser.version == "6.0" || $.browser.version == "7.0") {
                        $(this).parent(".btnWrap").removeClass("disable");
                    }
                }
            })
        },


        setData: function(data) {
            return this.each(function() {
                $(this).html(data[$(this).attr("id")]);
            })
        },


        replaceTpl: function() {
            return this.each(function() {
                $(this).replaceWith(tmpl($(this).attr("id"), resourceInfo));
            })
        },

        selectFocus: function() {
            return this.each(function() {
                $(this).val("").focus();
            })
        },

        showRule: function(ruleStr) {
            var ruleMsg = sys.getRes(ruleStr)
            return this.each(function() {
                var thisParent = $(this).parent("li");
                var ruleBox = thisParent.find(".rule");
                if (ruleBox.size() < 1) {
                    thisParent.append("<p class='rule'>" + ruleMsg + "</p>")
                } else {
                    thisParent.find(".rule").html(ruleMsg);
                }

                //$(this).selectFocus();
                $(this).addClass("errorIpt");
                $(this).bind("focusin", function() {
                    $(this).removeClass("errorIpt");
                    thisParent.find(".rule").remove();
                });
            });
        },

        showWarn: function(ruleStr) {
            var ruleMsg = sys.getRes(ruleStr)
            return this.each(function() {
                var ruleBox = $("#warning").find(".rule");
                if (ruleBox.size() < 1) {
                    $("#warning").addClass("rule").html(ruleMsg).css("display", "");
                }
                $(this).addClass("errorIpt");
                $(this).bind("focusin", function() {
                    $(this).removeClass("errorIpt");
                    $("#warning").html("").removeClass("rule");
                });
            });
        },
        fileInputInit: function() {
            return this.each(function() {
                var $this = $(this);
                $this.change(function() {
                    var fileVal = $this.val();
                    var fileValArr = fileVal.split("\\");
                    var fileName = fileValArr[fileValArr.length - 1];
                    var fileName_short = fileName.length > 20 ? fileName.slice(0, 4) + "..." + fileName.slice(-13) : fileName;
                    var $tip = $(".file-name");
                    if (fileVal != "") {
                        $tip.html(fileName_short).attr("title", fileName);
                    } else {
                        $tip.html(sys.getRes("ids_sys_noFileChosen"));
                    }
                }).change();
            })
        }
    });
})(jQuery);

/****htmlEncode***/
String.prototype.HTMLEncode = function() {
        var temp = document.createElement("div");
        (temp.textContent != null) ? (temp.textContent = this) : (temp.innerText = this);
        var output = temp.innerHTML;
        temp = null;
        return output;
    }
    /****htmlDecode***/
String.prototype.HTMLDecode = function() {
    var temp = document.createElement("div");
    temp.innerHTML = this;
    var output = temp.innerText || temp.textContent;
    temp = null;
    return output;
}

/**********************common unit start*********************************/
function getSimCardState(simState, pinState) {
    var state;
    switch (simState) {
        case MACRO_UIM_STATE_PIN1_OR_UPIN_REQ:
            state = "pinReq";
            break;
        case MACRO_UIM_STATE_READY:
            state = "normal";
            break;
        case MACRO_UIM_STATE_PUK1_OR_PUK_REQ:
            state = "pukReq";
            break;
        case MACRO_UIM_STATE_PERSON_CHECK_REQ:
            state = "simLock";
            break;
        case MACRO_UIM_STATE_INITING:
            state = "simIniting";
            break;
        case MACRO_UIM_STATE_ILLEGAL:
        case MACRO_UIM_STATE_PIN1_PERM_BLOCKED:
            state = "invalid";
            break;
        default:
            state = "noCard";
    }
    return state;

}

function getNetworkTypeStr(networkType) {
    var wanNetworkTypeStr = "NA";
    $.each(config.SupportNetworkType, function(i, v) {
        if (i == networkType) {
            wanNetworkTypeStr = config[v];
            if(config.supportPLMNViewTypeIsLTE.isActive){
                if(networkType == 8 || networkType == 9){
                    if($.inArray(simHPLMN,config.supportPLMNViewTypeIsLTE.plmnArr) != -1){
                        wanNetworkTypeStr="LTE";
                        config.networkModePLMNDisplayLTE = 'LTE';
                    }else{
                        config.networkModePLMNDisplayLTE = '';
                    }
                }else{
                    config.networkModePLMNDisplayLTE = '';
                }
            }
        }
    });

    return wanNetworkTypeStr;
}

function getNetworkNameStr(networkName) {
    switch (networkName) {
        case "":
        case "N/A":
        case "NA":
            wanNetworkNameStr = "&nbsp;";
            break;
        default:
            wanNetworkNameStr = networkName;
    }

    return wanNetworkNameStr;

}


function showRoamIcon(wanRoam) {
    if (config.SupportRoamingIcon) {
        wanRoam = 3;
    }
    switch (parseInt(wanRoam)) {
        case MACRO_ROAM_ENABLE:
            $(".glyphicon-roaming").removeClass("hidden");
            $(".item-connection .roaming").removeClass("hidden");
            $(".status-wrap .roaming").removeClass("hidden");
            $(".international .roaming").removeClass("hidden");
            $(".icons .connection-roaming").removeClass("hidden");
            break;
        case MACRO_ROAM_DISABLE:
            $(".glyphicon-roaming").addClass("hidden");
            $(".item-connection .roaming").addClass("hidden");
            $(".status-wrap .roaming").addClass("hidden");
            $(".international .roaming").addClass("hidden");
            $(".icons .connection-roaming").addClass("hidden");
            break;
        default:
            $(".glyphicon-roaming").addClass("hidden");
            $(".item-connection .roaming").addClass("hidden");
            $(".status-wrap .roaming").addClass("hidden");
            $(".international .roaming").addClass("hidden");
            $(".icons .connection-roaming").addClass("hidden");
    }
    var s1 = {
            $warnColor: $("article#connection .warnColor"),
            $solidline: $(".item-connection div.infos")
           };
    var connectStatus = SDK.Connection.GetConnectionState().ConnectionStatus;
    var connectSettingsInfo = SDK.Connection.GetConnectionSettings();
    var isAutoRoam = connectSettingsInfo.RoamingConnect;
    //console.log(parseInt(wanRoam)==1);
    if(config.IsRoamConnection){
        if(parseInt(wanRoam)==0){
            s1.$warnColor.removeClass("hidden22");
            s1.$solidline.css("bottom","0px");
         $("#connection .warnColor").css({
            "margin-bottom":"5px"
         });
         $(".item-connection .state").css("margin","5px 0 5px 0");
        }else{
           s1.$warnColor.addClass("hidden22");
           s1.$solidline.css("bottom","20px");
        }
    }
}

function initProgressBar($content, progress) {
    var BAR_WIDTH = $("div.bar", $content).width();
    var $progress = $("div.progress", $content),
        w = progress * BAR_WIDTH;
    $progress.animate({
        width: w + "px"
    }, 600);
}

function initProgressBar2($content, progress) {
    var BAR_WIDTH = $("div.bar", $content).height();
    var $progress = $("div.progress", $content),
        h = progress * BAR_WIDTH;
    $progress.animate({
        height: h + "px"
    }, 600);
}

function startOpenNewPage() {
    if (open_newPage_local_state == 0) {
        params = {
            "flag_state": 1
        };
        var result = SDK.System.setNewPageFlagSemaphore(params);
        if (result != null) {
            open_newPage_local_state = SDK.System.getNewPageFlagSemaphore().flag_state;
        }
        window.open(config.OpenNewPageLink);
    }
}

function initOpenNewPage() {
    if (open_newPage_local_state == 1) {
        params = {
            "flag_state": 0
        };
        var result = SDK.System.setNewPageFlagSemaphore(params);
        if (result != null) {
            open_newPage_local_state = SDK.System.getNewPageFlagSemaphore().flag_state;
        }
    }
}

function initVodafonePage() {
    var simHPLMN = SDK.Network.GetNetworkInfo().PLMN;
    switch (simHPLMN) {
        case "40401":
        case "40405":
        case "40411":
        case "40413":
        case "40415":
        case "40420":
        case "40427":
        case "40430":
        case "40443":
        case "40446":
        case "40460":
        case "40484":
        case "40486":
        case "40488":
        case "40566":
        case "40567":
        case "405750":
        case "405751":
        case "405752":
        case "405753":
        case "405754":
        case "405755":
        case "405756":
            config.homeConnectDialShow = 1;
            config.isWebsiteLink.isActive = true;
            config.webChat.isActive = true;
            config.helplineNumber.isActive = true;
            config.singleLanguage = 1;
            break;
        default:
            config.homeConnectDialShow = 0;
            config.isWebsiteLink.isActive = false;
            config.webChat.isActive = false;
            config.helplineNumber.isActive = false;
            config.singleLanguage = 0;
            break;
    }
}
$(function(){
    initVodafonePage();
});

/************************************common unit end*****************************/

/*input focus all*/

;
(function($) {
    $.fn.JPlaceHolder = function(opts) {
        opts = $.extend({
            top: "0"
        }, opts || {});

        var self = this;
        $.extend(self, {
            //check
            _check: function() {
                return 'placeholder' in document.createElement('input');
            },
            //start init
            init: function() {
                if (!this._check()) {
                    this.fix();
                }
            },
            //active code
            fix: function() {
                self.each(function(index, element) {
                    var self = $(this),
                        txt = self.attr('placeholder');
                    self.wrap($('<div></div>').css({
                        position: 'relative',
                        zoom: '1',
                        border: 'none',
                        background: 'none',
                        padding: 'none',
                        margin: 'none'
                    }));
                    var pos = self.position(),
                        h = self.outerHeight(true),
                        paddingleft = self.css('padding-left');
                    var holder = $('<span></span>').text(txt).css({
                        position: 'absolute',
                        left: pos.left,
                        top: opts.top,
                        height: h,
                        lienHeight: h,
                        paddingLeft: paddingleft,
                        color: '#aaa'
                    }).appendTo(self.parent());
                    self.focusin(function(e) {
                        holder.hide();
                    }).focusout(function(e) {
                        if (!self.val()) {
                            holder.show();
                        }
                    });
                    holder.click(function(e) {
                        holder.hide();
                        self.select();
                    });
                });
            }
        });
        self.init();
    };


})(jQuery);


/*end*/
