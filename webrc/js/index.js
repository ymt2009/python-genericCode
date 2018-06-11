// JavaScript Document
var networkTypeStr;

var loginPage = "connection/connectionStatus.html";

var networkInfo = SDK.Network.GetNetworkInfo();
var networkName = networkInfo.NetworkName;

var systemStatuslist = SDK.System.GetSystemStatus();
var unreadSmsCount = SDK.SMS.GetSMSStorageState();

var simInfo = SDK.SIM.GetSimStatus();
var simCardState = simInfo.SIMState;
var pinState = simInfo.PinState;
var pinTime = simInfo.PinRemainingTimes;
var simlockState = simInfo.SIMLockState;
var simlockTime = simInfo.SIMLockRemainingTimes;
var unreadunmb;
//var objectSize = 0;
$(function($) {
    refreshImgStatus();
    startRefreshImgStatus();
    //homeModePage();
    $(document).keypress(function(e) {
        if (e.which == 13) {
            $("body.index [data-type='submit']:visible").click();
            var $focusEment = $("body.index [data-type='focus']:visible");
            if ($focusEment.size() == 1) {
                $focusEment.select();
            }
        }
    });
    if (sys.isLogin(sessionId)) {
        listenLogout.flushed();
        listenLogout.init();
    }

    if (config.homeConnectDialShow) {
        homeConnectStateShowBtn();
    }

    /***************** TT *******************/

    $(".conStatus").on('click', function(event) {
        loginPage = "connection/connectionStatus.html";
        checkLogin();
    });

    $(".usages").on('click', function(event) {
        loginPage = "usage/usageHistory.html";
        checkLogin();
    });

    $(".sms").on('click', function(event) {
        loginPage = "sms/smsList.html";
        checkLogin();
    });
    $(".settings").on('click', function(event) {
        loginPage = "settings/settings.html";
        checkLogin();
    });

    $(".sharing").on('click', function(event) {
        loginPage = "sharing/sharingSetting.html";
        checkLogin();
    });

    $(".more").on('click', function(event) {
        loginPage = "more/more.html";
        checkLogin();
    });

    $(".phonebook").on('click', function(event) {
        loginPage = "phonebook/phoneBookSetting.html";
        checkLogin();
    });

    $(".downloadImg").on('click', function(event) {
        loginPage = "more/update.html";
        checkLogin();
    });
    //$(".y-inputFocus").JPlaceHolder({top:"6px"});
   /* if (config.helplineNumber.isActive) {
        $(".helplineNumber").removeClass("hidden");
        $(".helplineNumber span").html(sys.getRes(config.helplineNumber.title));
        $(".helplineNumber").append(config.helplineNumber.contents);
    }*/
    showSmsState(systemStatuslist.SmsState,unreadSmsCount.UnreadSMSCount);
    if(config.differentPlmnDisplayLogoUrlLink.length >0){
        $.each(config.differentPlmnDisplayLogoUrlLink,function(i,v){
            if(simInfo.PLMN == v[0]){
                $(".logo").attr("href", v[1]);
            }
        })
    }
});

/*function homeModePage() {
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
}*/

function showSimCardState(simCardState, pinState, simlockState) {
    var $indexSimCardStatus = $("#simCardStatus");
    var $indexConStatus = $(".con-normal");
    var simStateStr = getSimCardState(simCardState, pinState);
    switch (simStateStr) {
        case "noCard":
            $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_noSimCard"));
            $indexConStatus.addClass("hidden")
            break;
        case "simIniting":
            $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_initializing"));
            $indexConStatus.addClass("hidden");
            break;
        case "invalid":
            $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_invalidSimCard"));
            $indexConStatus.addClass("hidden")
            break;
        case "pinReq":
            $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_pinRequired"));
            $indexConStatus.addClass("hidden")
            break;
        case "pukReq":
            $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_pukRequired"));
            $indexConStatus.addClass("hidden")
            break;
        case "normal":
            $indexSimCardStatus.addClass("hidden");
            $indexConStatus.removeClass("hidden")
            break;
        case "simLock":
            if (simlockState == SIMLOCK_PERSO_RCK_FORBID) {
                $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_lockForbidden"));
            } else {
                $indexSimCardStatus.removeClass("hidden").html(sys.getRes("ids_sim_simLocked"));
            }
            $indexConStatus.addClass("hidden")
            break;
        default:
            $indexSimCardStatus.addClass("hidden")
            $indexConStatus.removeClass("hidden")
    }
}

function showindexPageWanInfo(networkName) {
    var wanConnectStateStr;
    var wanNetworkNameStr = getNetworkNameStr(networkName);

    $("#spnWanNetworkName").html(wanNetworkNameStr);
    $("#spnWanNetworkName").attr("title",wanNetworkNameStr);

}

/* --------------------------------
    refresh
----------------------------------------- */

function showSignalState(iLen) {
    var $signalImg = $(".glyphicon-single");
    var value = /^[0,1,2,3,4]$/;
    iLen = parseInt(iLen);
    if (iLen > 4) {
        iLen = 4;
    }
    iLen = value.test(iLen) ? iLen : 0;
    $signalImg.css("background-position", "0 -" + iLen * 77 + "px");
}

function showSmsState(ismsState, unreadunmb) {
    var value = /^[0,1,2,3]$/;
    ismsState = parseInt(ismsState);
    ismsState = value.test(ismsState) ? ismsState : 0;
    if (ismsState == MACRO_SMS_FULL) {
        $("#smsStatus").html("");
        $("#smsStatus").removeClass("glyphicon-sms-new hidden").addClass("glyphicon-sms-full");
    } else if (ismsState == MACRO_SMS_NEW) {
        if (unreadunmb == 0) {
            $("#smsStatus").html("");
            $("#smsStatus").removeClass("glyphicon-sms-new hidden");
        } else {
            $("#smsStatus").html(unreadunmb); //unread sms unmber
            $("#smsStatus").removeClass("glyphicon-sms-full hidden").addClass("glyphicon-sms-new");
        }
    } else {
        $("#smsStatus").addClass("hidden");
    }
}

function showNwType(iNetworkType) {
    var $networkType = $("#spnWanNetworkType");
    var $normalStatus = $("#normalStatus");
    var $noService = $("#noService");
    var wanNetworkTypeStr = getNetworkTypeStr(iNetworkType);
    networkTypeStr = wanNetworkTypeStr;
    if (wanNetworkTypeStr == "NA") {
        $normalStatus.addClass("hidden");
        $networkType.addClass("hidden");
        $noService.removeClass("hidden");
    } else {
        if (config.differNetworkTypeStylematchMcc) {
            var Mcc = SDK.Network.GetNetworkInfo().mcc;
            if (iNetworkType == 8) {
                if ($.inArray(Mcc, config.MccArrLTE) != -1) {
                    wanNetworkTypeStr = "LTE";
                } else if ($.inArray(Mcc, config.MccArr4G) != -1) {
                    wanNetworkTypeStr = "4G";
                } else {
                    wanNetworkTypeStr = "4G";
                }
            }
            $normalStatus.removeClass("hidden");
            $noService.addClass("hidden");
            $networkType.removeClass("hidden").html(wanNetworkTypeStr);
        } else {
            $normalStatus.removeClass("hidden");
            $noService.addClass("hidden");
            $networkType.removeClass("hidden").html(wanNetworkTypeStr);
        }
    }
}

function showConnectStatus(connectionState) {
    switch (connectionState) {
        case MACRO_PPP_CONNECTED:
            wanConnectStateStr = sys.getRes("ids_wan_connected");
            $("#glyghiconConnectStatus").addClass("glyphicon-connected").removeClass("glyphicon-disConnected hidden");
            $("#spnWanConnectState").html(wanConnectStateStr);
            $(".spnWanConState").html(sys.getRes("ids_btn_wan_disconnect"));
            $(".connectDialModule").removeClass("gray");
            break;
        case MACRO_PPP_CONNECTING:
            wanConnectStateStr = sys.getRes("ids_wan_connecting");
            $("#glyghiconConnectStatus").addClass("hidden")
            $("#spnWanConnectState").html(wanConnectStateStr);
            $(".spnWanConState").html(sys.getRes("ids_wan_connecting"));
            break;
        case MACRO_PPP_DISCONNECTING:
            wanConnectStateStr = sys.getRes("ids_wan_disconnecting");
            $("#glyghiconConnectStatus").addClass("hidden")
            $("#spnWanConnectState").html(wanConnectStateStr);
            $(".spnWanConState").html(sys.getRes("ids_wan_disconnecting"));
            break;
        default:
            wanConnectStateStr = sys.getRes("ids_wan_disconnected");
            $(".spnWanConState").html(sys.getRes("ids_connect"));
            $("#spnWanConnectState").html(wanConnectStateStr);
            $("#glyghiconConnectStatus").addClass("glyphicon-disConnected").removeClass("glyphicon-connected hidden");
            break;
    }
}

function _clearCode() {
    var connectStauts = SDK.Connection.GetConnectionState().ConnectionStatus;
    if (connectStauts == MACRO_PPP_CONNECTED) {
        $(".clearCode").addClass("hidden");
    } else {
        var clearCodeVal = SDK.Connection.GetConnectionState().ClearCode;
        var mPdpRejectCounts = SDK.Connection.GetConnectionState().mPdpRejectCount;
        if (mPdpRejectCounts >= 3) {
            if (clearCodeVal == ClearCode_AuthenticationFailure) {
                $(".clearCode").removeClass("hidden");
                $(".clearCode").html(sys.getRes("ids_clearCode_Twentynine") + "&nbsp;-" + clearCodeVal + "-");
            } else if (clearCodeVal == ClearCode_NoServices) {
                $(".clearCode").removeClass("hidden");
                $(".clearCode").html(sys.getRes("ids_clearCode_Thirtythree") + "&nbsp;-" + clearCodeVal + "-");
            }
        }
    }
}

function refreshImgStatus() {
    var that = this;

    SDK.System.GetAsyncSystemStatus(function(data) {
        if (data == null) return;
        showSignalState(data.SignalStrength);
        if (data.SmsState != 0) {
            SDK.requestJsonRpcAsync("GetSMSStorageState", null, "6.4", function(data) {
                unreadunmb = data.UnreadSMSCount;
            });
            showSmsState(data.SmsState, unreadunmb);
        }
        showNwType(data.NetworkType);
        showConnectStatus(data.ConnectionStatus);
        showRoamIcon(data.Roaming);
        connectionState = data.ConnectionStatus;
        AIRBOX.fota.showFotaMainThread(connectionState);
        showindexPageWanInfo(data.NetworkName);
        showdHomePageWanInfo(data.ConnectionStatus);
    });
    showSimCardState(simCardState, pinState, simlockState);
    if (config.isClearCode) {
        _clearCode();
    }
}

var refreshImgInterval = null;

function startRefreshImgStatus() {
    var that = this;
    if (that.refreshImgInterval != null) {
        that.stopRefreshImgStatus();
    }
    that.refreshImgInterval = setInterval(function() {
        that.refreshImgStatus();
    }, 10000);
}

function stopRefreshImgStatus() {
    var that = this;
    if (that.refreshImgInterval != null) {
        clearInterval(that.refreshImgInterval);
        that.refreshImgInterval = null;
    }
}
/* -----------------
check login
--------------------- */

function checkLogin() {
    if (sys.isLogin(sessionId)) {
        var loginhref = "default.html#" + loginPage;
        window.location.href = loginhref;
    } else {
        var url = "default.html#" + loginPage;

        var o = {
            'message': $(this).attr('title'),
            'url': url
        };

        AIRBOX.popinAuth.show(o);
        if (config.LoginUsernameSupport == userNameEditable && config.SupportLogin) {
            $("#f_username").focus();
        } else {
            $("#f_password").focus();
        }
    }

}
//homeConnectStateShow
function homeConnectStateShowBtn() {
    $(".conStatus").addClass("connectDialBtn");
    $(".connectDialModule").removeClass("hidden");
    AIRBOX.homeConnectDial.init();
}
