var AIRBOX = AIRBOX || {};
var dialState = connectedNoDial;
var G_connectTimeTimer = null;
var G_connectTime = 0;
var G_getConnectionDialState = null;
var interBattery=null;
/*------------------------------------------------------------------------
 * 
 * AIRBOX.core
 * ----------
 * AIRBOX.menu
 * AIRBOX.logged
 * AIRBOX.popinLng
 * AIRBOX.popinAuth
 * AIRBOX.fota
 * ----------
 * document.ready
 * 
 --------------------------------------------------------------------------*/

/* -------------------------------------------------------------------------
 class - core
 ----------------------------------------------------------------------------- */
AIRBOX.core = (function() {
    var settings = {
        overEvent: (Modernizr.touch) ? 'click' : 'mouseover focusin',
        clickEvent: (Modernizr.touch) ? 'touchstart click' : 'click',
        downEvent: (Modernizr.touch) ? 'touchstart' : 'mousedown',
        upEvent: (Modernizr.touch) ? 'touchend' : 'mouseup',
        moveEvent: (Modernizr.touch) ? 'touchmove' : 'mousemove',
        isTouch: Modernizr.touch,
        isIos: (navigator.userAgent.match(/(iPad|iPhone|iPod)/g) != null) ? true : false,
        $body: $("body"),
        $header: $("header"),
        $main: $("#main")
    };

    function init(options) {
        $.extend(settings, options);
        AIRBOX.menu.init({});
        AIRBOX.popinLng.init();
        AIRBOX.logged.init();
        AIRBOX.fota.init();
        if (!config.SupportLogin) {
            _supportLoginEvent();
        }
        if (settings.$body.hasClass('index')) {
            AIRBOX.popinAuth.init();
            //AIRBOX.auth.init();
        } else {
            AIRBOX.slide.init({});
            /*AIRBOX.sms.init();
            AIRBOX.connection.init();
            AIRBOX.usage.init();            
            AIRBOX.sharing.init();*/
        }

        if (pageName == "indexPage" && config.IsPopPinBeforeAdmin) {
            simPopinShowEvent();
        }
        if (pageName == "indexPage" && config.isIK40RefreshPopPin) {
            simPopinShowEvent();
        }

    };

    return {
        init: init,
        settings: settings
    };
}());

/*pin、puk、simlock popin when load index page*/
function simPopinShowEvent() {
    if ((simInfo.SIMState == MACRO_UIM_STATE_PIN1_OR_UPIN_REQ) || (simInfo.SIMState == MACRO_UIM_STATE_PUK1_OR_PUK_REQ) ||
        ((simInfo.SIMState == MACRO_UIM_STATE_PERSON_CHECK_REQ) && (simInfo.SIMLockState != SIMLOCK_PERSO_RCK_FORBID))) {
        var o = {
            'message': $(this).attr('title'),
            'url': "index.html"
        };
        AIRBOX.popinAuth.show_simcard_status();
        AIRBOX.popinAuth.show(o);
    }
}

/*----------------
not need password
-----------------*/
function _supportLoginEvent(timeout) {
    if (timeout == "timeout") {
        $("#popinAuth").removeClass("hidden");
        if (!config.SettingsItemList.wifiSettings.isActive) {
            $(".loginTimeout").removeClass("hidden");
        }
        $(".login_wrap,.close").addClass("hidden");
        registerBtnEvent();
        return;
    }

    /*var result = SDK.User.Login("admin", "admin");
    
    switch (result) {
        case LOGIN_STATE_SUCCESS:
            sessionId = SDK.User.GetLoginState();
            AIRBOX.logged.init();
            listenLogout.flushed();
            listenLogout.init();
            break;
        case LOGIN_STATE_SOME_ONE_LOGINED:
            $("#popinAuth").removeClass("hidden");
            $(".otherUserLogin").removeClass("hidden");
            $(".login_wrap,.close").addClass("hidden");
            break;
    }*/
    $(".logouted").addClass("hidden");
    $(".logged").addClass("hidden");
    $(".logged").css("display", "none");
    $("#logout").parent().css("display", "none");
    $("#logoutLan").parent().addClass("hidden");
    config.SettingsItemList.loginSettings.isActive = false;
}

function registerBtnEvent() {
    $("#loginTimeoutBtn").on("click", function() {
        location.reload();
    })
}

/* -------------------------------------------------------------------------
 class - menu
 ----------------------------------------------------------------------------- */
AIRBOX.menu = (function() {
    var s = {
            $btnLng: $('#linkLanguages'),
            $btnMenu: $('#linkMenu'),
            $btnStart: $('header nav li.start'),
            $subLng: $('#languages'),
            $subMenu: $('#menu'),
            $PopinLng: $('#popin_languages'),
            $TopMenu: $("#TopMenu"),
            $linkTopMenu: $("#linkTopMenu"),
            $btn_help: $("#btn_help"),
            $listHelp: $("#listHelp"),
            $popinListHelp: $("#popin_listHelp"),
            T_HEADER_HEIGHT: 90
        },
        cs = {},
        $_win = $(window);

    function init(options) {
        $.extend(s, options);
        cs = AIRBOX.core.settings;

        $_win.on("resize.menu", _resize);
        _resize();

        _initOver();
        _initClickPopinLng();
        _initMenuLngList();
        _initPopinLngList();
        _initDifferSimCardLng();
        _initTopMenu();
        _initLanMenu();
        _helpMuneHide();
        if(config.isSupportHelpSelectionType){
            _initHelpInfo();
            $("#btn_help").addClass('navigation')
        }
        if (!cs.isTouch) _initOut();
    };

    function _initOver() {
        if (config.singleLanguage) {
            if ($("#languages").find("ul").children('li').size() < 2) {
                $("#linkLanguages").addClass("oneLanguage");
                $("#languages").addClass("hidden");
                $("#linkLanguages").parent("li").addClass("hidden");
                $("#linkLanguages-lan").parent("li").addClass("hidden");
            }
        }

        s.$btnLng.on(cs.overEvent, function(e) {
            e.preventDefault();
            if (!s.$btnLng.hasClass("on")) {
                _hideSubMenu();
                s.$btnLng.addClass("on");
                s.$subLng.fadeIn(100);
            } else {
                _hideSubMenu();
            }

        });
        if(config.isSupportHelpSelectionType){
        s.$btn_help.on(cs.overEvent, function(e) {
            e.preventDefault();
            if (!s.$btn_help.hasClass("on")) {
                _hideSubMenu();
                s.$btn_help.addClass("on");
                s.$listHelp.fadeIn(100);
            } else {
                _hideSubMenu();
            }

        });
        }

        s.$btnMenu.on(cs.overEvent, function(e) {
            e.preventDefault();

            if (!s.$btnMenu.hasClass("on")) {
                _hideSubMenu();
                cs.$header.css({
                    'z-index': 99
                });
                //s.$btnMenu.addClass("on");
                s.$subMenu.fadeIn(100);
            } else
                _hideSubMenu();

        });

        s.$btnStart.on(cs.overEvent, function(e) {
            e.preventDefault();
            _hideSubMenu();
        });

        if (!cs.isTouch) {
            $("#container", cs.$main).on(cs.overEvent, function(e) {
                e.preventDefault();
                _hideSubMenu();
            });
        }

    };

    function _initOut() {
        s.$subLng.on("mouseleave", function(e) {
            e.preventDefault();
            _hideSubMenu()
        });
        if(config.isSupportHelpSelectionType){
        s.$listHelp.on("mouseleave", function(e) {
            e.preventDefault();
            _hideSubMenu()
        });
        }

        s.$subMenu.on("mouseleave", function(e) {
            e.preventDefault();
            _hideSubMenu();
        });
    };

    function _initClickPopinLng() {
        $("li.lng a", s.$subMenu).on(cs.clickEvent, function(event) {
            event.preventDefault();
            _hideSubMenu();
            AIRBOX.popinLng.show();
        });
    };

    function _initMenuLngList() {
        var subLng_HtmlStr = "<ul>";
        $.each(config.allLanguage, function(index, val) {
            if ($.inArray(index, config.sys_language) != -1) {
                if (index == language) {
                    s.$btnLng.html(val);
                }
                subLng_HtmlStr += "<li><a>" + val + "</a></li>"
            }

        });
        s.$subLng.html(subLng_HtmlStr + "</ul>")

    };

    function _initHelpInfo(){
        var help_HtmlStr = "<ul>";
        help_HtmlStr += "<li><a>" + sys.getRes("ids_help_userManual") + "</a></li>"
        $("#listHelp").html(help_HtmlStr + "</ul>")
        $("#popin_listHelp").html(help_HtmlStr + "</ul>")
    };

    function _initDifferSimCardLng() {
        if (config.differSimCardSupportLang.isActive) {
            var simHPLMN = SDK.Network.GetNetworkInfo().PLMN;
            if (simHPLMN == "26002") {
                config.sys_language = config.differSimCardSupportLang.simCardDTPL;
                _initMenuLngList();
                _initPopinLngList();
            } else if (simHPLMN == "21901") {
                config.sys_language = config.differSimCardSupportLang.simCardDTHR;
                _initMenuLngList();
                _initPopinLngList();
            } //DT HR
        }
    };

    function _initPopinLngList() {
        var subLng_HtmlStr = "<ul>";
        $.each(config.allLanguage, function(index, val) {
            if ($.inArray(index, config.sys_language) != -1) {
                if (index == language) {
                    subLng_HtmlStr += "<li><a class=\"on\">" + val + "</a></li>"
                } else {
                    subLng_HtmlStr += "<li><a>" + val + "</a></li>"
                }
            }

        });
        s.$PopinLng.html(subLng_HtmlStr + "</ul>")

    };

    function _initTopMenu() {
        s.$linkTopMenu.on("click", function(event) {
            s.$TopMenu.css({
                "display": "block"
            });
            event.stopPropagation();
        });
        $(window).on("click", function() {
            s.$TopMenu.css({
                "display": "none"
            });
        })

    };

    function _initLanMenu() {
        $("#linkLanguages-lan").on("click", function() {
            $("#popinLng").removeClass("hidden");
        });
        if(config.isSupportHelpSelectionType){
        $("#btn_help_lan").on("click", function() {
            $("#popinHelpLng").removeClass("hidden");
        });
        }
    };


    function _hideSubMenu() {
        s.$subMenu.hide();
        s.$subLng.hide();
        s.$btnMenu.removeClass("on");
        s.$btnLng.removeClass("on");
        if(config.isSupportHelpSelectionType){
            s.$btn_help.removeClass('on');
            s.$listHelp.hide();
        }
        cs.$header.css({
            'z-index': 10
        });
    };

    function _helpMuneHide() {
        if (cs.isIos) {
            $(".btn_help").parent("li").addClass("hidden");
        } else {
            $(".btn_help").parent("li").removeClass("hidden");
        }
    };

    function _resize() {
        /*
        var l = s.$btnMenu.offset().left + (s.$btnMenu.width()/2 - s.$subMenu.width()/2);
        s.$subMenu.css({left : l+"px" });

        var l2 = s.$btnLng.offset().left + (s.$btnLng.width()/2 - s.$subLng.width()/2);
        s.$subLng.css({left : l2+"px" });
        */
        if (!cs.isTouch) {
            if (cs.$body.hasClass("home")) {
                var h = $_win.height() * 0.2;
                cs.$header.css({
                    height: h + "px"
                });
            };
        } else {
            cs.$header.css({
                //height: s.T_HEADER_HEIGHT + "px"
            });
        }
    };

    return {
        init: init,
        hide: _hideSubMenu
    };
}())


/* -------------------------------------------------------------------------
 class - popin auth
 ----------------------------------------------------------------------------- */
AIRBOX.popinAuth = (function() {
    var s = {
            $content: $('#popinAuth'),
            $error: $('#popinAuth p.alert'),
            $cache: $('#popinAuth .cache'),
            URL_SUBMIT: '',
            message: '',
            callback: null,
            url: ''
        },
        $_win = $(window),
        cs = {};
    var kickOffStatus = false;

    function init(options) {
        $.extend(s, options);
        cs = AIRBOX.core.settings;

        _initClose();
        //_initForm();
        _initContentEvent()
    };

    function _initClose() {
        $('span.close', s.$content).on('click', function(event) {
            event.preventDefault();
            if (config.changePasswordWarningFlag) {
                _checkCLoseBtnEvent();
            } else {
                _hide();
            }
        });

        s.$cache.on('click', function(event) {
            event.preventDefault();
            _hide();
        });
    };

    function _show(options) {
        $.extend(s, options);
        if (s.message != "undefined") {
            $("p.error", s.$content).text(s.message);
        }

        s.$content.removeClass("hidden");
        _RememberUsernameAndPw();

    };

    function _hide() {
        if (config.IsPopPinBeforeAdmin) {
            $('.puk_wrap,.simlock_wrap,.pin_wrap').addClass('hidden');
            $('.login_wrap').removeClass('hidden');
        }
        if(config.isUpgradeCompleteTips){
            var FotaUpdatedNotificationState = 0;
            var result = SDK.Update.SetFotaUpdatedNotification(FotaUpdatedNotificationState);
            $(".login_wrap").removeClass('hidden');
            $(".upgradeCompleteTips").addClass('hidden');
        }
        s.$content.addClass("hidden");
        $("input[type=password]").val("");
        dialState = connectedNoDial;
    };

    function _checkCLoseBtnEvent() {
        if (sys.isLogin(sessionId)) {
            if ($(".change_wrap").hasClass("hidden")) {
                var passWarningVal = SDK.User.GetPasswordChangeFlag().change_flag;
                if (passWarningVal == 1) {
                    _hide();
                } else {
                    showChangePass();
                }
            } else {
                _hide();
            }
        } else {
            _hide();
        }
    };

    function showChangePass() {
        $(".login_wrap").addClass("hidden");
        $(".change_wrap").removeClass("hidden");
        $(".pin_wrap").addClass("hidden");
        $(".puk_wrap").addClass("hidden");
        $(".simlock_wrap").addClass("hidden");
        $("#f_submit_change").focus();
        $("#f_password").blur();
        $("#f_username").blur();
        $("#f_submit_change").blur();
        $("#f_submit_change").on("click", function(event) {
            event.preventDefault();
            var choiceAgainVal;
            if ($("input[name='usernamePass']").attr("checked") == 'checked') {
                choiceAgainVal = 1;
            } else {
                choiceAgainVal = 0;
            }
            var result = SDK.User.SetPasswordChangeFlag(choiceAgainVal);
            if (result == API_RESULT_SUCCESS) {
                _pageCutoverEvent();
            } else {
                _pageCutoverEvent();
            }

        });
        adminSetupPage();
    };

    function _pageCutoverEvent() {
        if (dialState == connectedDial) {
            AIRBOX.homeConnectDial.clickSwitchsEvent();
        }

        _submitForm();
        var _url = s.url == null ? "/index.html" : s.url;
        window.location.href = _url;

    }

    function _passwordChangeStatus() {
        var noshowVal = SDK.User.GetPasswordChangeFlag().change_flag;
        if (noshowVal == 1) {
            _pageCutoverEvent();
        } else {
            sessionId = SDK.User.GetLoginState();
            AIRBOX.logged.init();
            listenLogout.flushed();
            listenLogout.init();
            showChangePass();
        }
    }

    function adminSetupPage() {
        $(".userpass_link").off().on("click", function() {
            _submitForm();
            setTimeout(function() {
                var url = "default.html#settings/adminSetup.html";
                window.location.href = url;
            }, 500);
        });
    };

    function _initContentEvent() {
        _initLoginFormEvent();
        _initPinForm();
        _initPukForm();
        _initSimlockForm();
        if (config.SupportLogin) {
            _initLoginUserName();
        }

        s.$error.html("").hide(0);
    }

    function _initLoginFormEvent() {
        var $loginBtn = $("#f_submit_login");

        $loginBtn.on("click", function(event) {
            event.preventDefault();
            _loginEvent();
        }); /*add event to login button*/
        _RememberUsernameAndPw();
    }

    function _RememberUsernameAndPw() {
        var remenberUsernameAndPw = SDK.User.GetAutoRemenberPassword();
        if (config.SupportRememberUsernameAndPw) {
            $(".remenberUserpw").removeClass("hidden");
            var remenberUsernameAndPwFlag =remenberUsernameAndPw.save_flag;
            if (remenberUsernameAndPwFlag == 0) {
                $("#remenberUserAndPw").attr("checked", false);
            } else {
                $("#remenberUserAndPw").attr("checked", true);
                _checkRemenberPwEvent(remenberUsernameAndPw);
            }   
        }
        if(config.LoginUsernameSupport!=3){
            //var saveUserVal = remenberUsernameAndPw.username;
            var saveUserVal="admin";
            if(remenberUsernameAndPw.username!="" &&remenberUsernameAndPw.username!=null && remenberUsernameAndPw.username!=undefined){
                saveUserVal = remenberUsernameAndPw.username;
            }
            $("#f_username").val(saveUserVal);
        }
    }

    function _checkRemenberPwEvent(AutoRemenberPassword) {
        var savepassword = AutoRemenberPassword.password;
        $("#f_password").val(savepassword);
    }

    function _initPinForm() {
        var $pinBtn = $("#btnPinApply");
        var $pinTimes = $("#spnPinTime");
        var $iptPinVal = $("#iptPinCode");
        $iptPinVal.on(cs.clickEvent, function() {
            $("#btnPinApply").removeBtnDisabled();
        });
        $pinBtn.on("click", function(event) {
            event.preventDefault();
            _applyPinEvent();
        }); /*add event to pin button*/

        $pinTimes.html(simInfo.PinRemainingTimes);
        if (config.SupportAutoPin) {
            $("#IschkAutoPin").css("display", "none");
        }
        if (autoPinStatus == SIM_AUTO_PIN_DISABLE) {
            $("#chkAutoPin").attr("checked", false)
        } else {
            $("#chkAutoPin").attr("checked", true);
        }

    }

    function _applyPinEvent() {
        var pinVal = $.trim($("#iptPinCode").val());

        var chkAutoPinChecked = $("#chkAutoPin").attr("checked");
        var chkAutoPinVal = chkAutoPinChecked ? 1 : 0;

        if (false == validatePin(pinVal)) {
            s.$error.html(sys.getRes("ids_sim_pinRule")).removeClass("hidden");
            _errorEvernt($("#iptPinCode"));
            return false;
        }

        var result = SDK.SIM.UnlockPin(pinVal);
        if (result == SIM_UNLOCK_PIN_SUCCESS) {
            if (config.SupportAutoPin) {
                pageInitSimCard(3);
            } else {
                if (chkAutoPinVal) {
                    pageInitSimCard(1);
                } else {
                    pageInitSimCard(0);
                }
            }
        } else if (result == SIM_UNLOCK_PIN_FAILED) {
            simInfo = SDK.SIM.GetSimStatus();

            if (simInfo.PinState == MACRO_UIM_PIN_STATE_BLOCKED) {

                $("#spnPukTime").html(simInfo.PukRemainingTimes);

                $('.pin_wrap').addClass('hidden');

                $('.puk_wrap').removeClass('hidden');

            } else {
                $("#iptPinCode").val("");
                $("#spnPinTime").html(simInfo.PinRemainingTimes);
                s.$error.html(sys.getRes("ids_sim_enterValidCode")).removeClass("hidden");
                //$("#btnPinApply").setBtnDisabled();
                _errorEvernt($("#iptPinCode"));
            }
        } else {
            s.$error.html(sys.getRes("ids_sim_pinRule")).removeClass("hidden");
            _errorEvernt($("#iptPinCode"));
            return false;
        }
    }

    function _initPukForm() {
        var $pukBtn = $("#btnPukApply");
        var $pukTimes = $("#spnPukTime");

        $pukBtn.on("click", function(event) {
            event.preventDefault();
            _applyPukEvent();
        }); /*add event to puk button*/

        $pukTimes.html(simInfo.PukRemainingTimes);
    }

    function _applyPukEvent() {
        var pukVal = $.trim($("#iptPukCode").val());
        var pinNewVal = $.trim($("#iptNewPin").val());
        var pinConfirmVal = $.trim($("#iptConPin").val());

        if (false == validatePuk(pukVal)) {
            s.$error.html(sys.getRes("ids_sim_pukRule")).removeClass("hidden");
            _errorEvernt($("#iptPukCode"));

            return false;
        }

        if (false == validatePin(pinNewVal)) {
            s.$error.html(sys.getRes("ids_sim_newPinRule")).removeClass("hidden");
            _errorEvernt($("#iptNewPin"));

            return false;
        }

        if (false == validatePin(pinConfirmVal)) {
            s.$error.html(sys.getRes("ids_sim_comfirmPinRule")).removeClass("hidden");
            _errorEvernt($("#iptConPin"));

            return false;
        }

        if (pinNewVal != pinConfirmVal) {
            s.$error.html(sys.getRes("ids_sim_pinConfirmed")).removeClass("hidden");
            _errorEvernt($("#iptConPin"));
            _errorEvernt($("#iptNewPin"));

            return false;
        }

        var result = SDK.SIM.UnlockPuk(pukVal, pinNewVal);

        if (result == SIM_UNLOCK_PUK_SUCCESS) {
            pageInitSimCard(3);
        } else {
            simInfo = SDK.SIM.GetSimStatus();
            if ((simInfo.PinState == MACRO_UIM_PIN_STATE_PERMANENTLY_BLOCKED) || (simInfo.SIMState == MACRO_UIM_STATE_PIN1_PERM_BLOCKED)) {
                location.reload();
            } else {
                $("#iptConPin, #iptNewPin, #iptPukCode").val("");
                $("#spnPukTime").html(simInfo.PukRemainingTimes);

                s.$error.html(sys.getRes("ids_fail")).removeClass("hidden");
                _errorEvernt($("#iptPukCode"));
            }

        }
    }

    function _initSimlockForm() {

        var $simlockBtn = $("#btnSimlockApply");
        var $simlockTimes = $("#spnSimlockTime");

        $simlockBtn.on("click", function(event) {
            event.preventDefault();
            _applySimlockEvent();
        }); /*add event to sim lock button*/

        $simlockTimes.html(simInfo.SIMLockRemainingTimes);
        $("#labSimlockState").html(simlock_state_str(simInfo.SIMLockState));
    }

    function _applySimlockEvent() {

        var simLockVal = $("#iptSimlockCode").val();

        if (false == validateSimlock(simLockVal)) {
            s.$error.html(sys.getRes("ids_sim_lockCodeRule")).removeClass("hidden");
            _errorEvernt($("#iptSimlockCode"));

            return false;
        }

        var result = SDK.SIM.UnlockSimlock(simInfo.SIMLockState, simLockVal);

        if (result == API_RESULT_SUCCESS) {
            startLoading();
            initSimCard(function() {
                stopLoading();
                if (config.changePasswordWarningFlag) {
                    _passwordChangeStatus();
                } else {
                    var _url = s.url == null ? "/index.html" : s.url;
                    window.location.href = _url;
                }
            });


        } else {
            simInfo = SDK.SIM.GetSimStatus();

            if (simInfo.SIMLockState == SIMLOCK_PERSO_RCK_FORBID) {
                if (config.isRemoveSimlockRck) {
                    _tipsSimlockPopup();
                } else {
                    _submitForm();
                    window.location.href = s.url;
                }
            } else {

                $("#iptSimlockCode").val("");
                $("#spnSimlockTime").html(simInfo.SIMLockRemainingTimes);
                $("#labSimlockState").html(simlock_state_str(simInfo.SIMLockState));

                s.$error.html(sys.getRes("ids_fail")).removeClass("hidden");
                _errorEvernt($("#iptSimlockCode"));
            }
        }
    }

    function _tipsSimlockPopup() {
        $(".simlockTips_wrap").removeClass("hidden");
        $(".simlock_wrap").addClass("hidden");
        $("#unlockSimlock").css("display", "none");
        if(!config.isRemoveSimlockRckBtnOK){
            $("#f_submit_simlockTips").on("click", function() {
                sessionId = SDK.User.GetLoginState();
                AIRBOX.logged.init();
                listenLogout.flushed();
                listenLogout.init();
                _submitForm();
            })
        }else{
            $(".simlockTips_wrap").find(".form-group").addClass('hidden');
        }
    }

    function _initLoginUserName() {
        switch (config.LoginUsernameSupport) {
            case userNameFixedGray:
                $(".loginUserName").removeClass("hidden");
                $(".loginUserName").children("span").removeClass("hidden");
                $(".loginUserName").children("span").html(sys.getRes(config.loginUserNameSet)); //等接口添加
                $(".loginUserName").css("color", '#999');
                break;
            case userNameEditable:
                $(".loginUserName").removeClass("hidden");
                $("#f_username").removeClass("hidden");
                break;
            case userNameHide:
                $(".loginUserName").addClass("hidden");
                break;
            case 4:
                $(".loginUserName").removeClass("hidden");
                $("#f_username").removeClass("hidden");
                $("#f_username").prop("disabled",true);
                break;
            default:
                $(".loginUserName").addClass("hidden");
        }
    }

    function _loginEvent() {
        s.$error.html("");
        var $f_username = $("input[name='f_username']");
        var $f_password = $("input[name='f_password']");
        var passwordVal = $.trim($f_password.val());
        var $UserAndPwVal;
        if (config.SupportRememberUsernameAndPw) {
            $UserAndPwVal = $("#remenberUserAndPw").prop("checked")==true ? 1 : 0;
        }

        var usernameVal = "admin";
        var errorUserPass = "ids_login_wrongPwd";

        if (config.LoginUsernameSupport == userNameEditable && config.SupportLogin) {
            errorUserPass = "ids_login_nameOrPwdWrong";
            usernameVal = $.trim($f_username.val());
            if (usernameVal == "") {
                s.$error.html(sys.getRes("ids_login_inputUserName")).removeClass("hidden");
                _errorEvernt($f_username);
                return;
            }
        }
        if(config.supportChangeUserName.isActive){
            usernameVal = config.supportChangeUserName.changeUserName;
        }
        if (passwordVal == "") {
            s.$error.html(sys.getRes("ids_login_inputPwd")).removeClass("hidden");
            _errorEvernt($f_password);
            return;
        }
        if (!kickOffStatus) {
            _setLogin("Login");
        } else {
            _setLogin("ForceLogin");
        }

        function _setLogin(type) {
            s.$error.html("");
            $("#f_password").focus();
            if (type == "ForceLogin") {
                var result = SDK.User.ForceLogin(usernameVal, passwordVal);
            } else {
                var result = SDK.User.Login(usernameVal, passwordVal);
            }
            _getLoginResult(result);
            _errorEvernt($f_password);
        }

        function _getLoginResult(result) {
            switch (result) {
                case LOGIN_STATE_SUCCESS:
                    if (config.SupportRememberUsernameAndPw) {
                            rsetRmemberUsernameAndPw($UserAndPwVal, usernameVal, passwordVal);
                    }
                    if ((simInfo.SIMState == MACRO_UIM_STATE_PIN1_OR_UPIN_REQ) ||
                        (simInfo.SIMState == MACRO_UIM_STATE_PUK1_OR_PUK_REQ) ||
                        ((simInfo.SIMState == MACRO_UIM_STATE_PERSON_CHECK_REQ) && (simInfo.SIMLockState != SIMLOCK_PERSO_RCK_FORBID))) {

                        sessionId = SDK.User.GetLoginState();
                        AIRBOX.logged.init();
                        listenLogout.flushed();
                        listenLogout.init();
                        show_simcard_status();
                        
                    } else {
                        if (config.changePasswordWarningFlag) {
                            _passwordChangeStatus();
                        } else {
                            _pageCutoverEvent();
                        }

                    }

                    break;
                case LOGIN_STATE_PASSWORD_WRONG:
                    s.$error.html(sys.getRes(errorUserPass)).removeClass("hidden");
                    $f_password.val("");
                    break;
                case LOGIN_STATE_SOME_ONE_LOGINED:
                    if (!config.isSupportKickOff) {
                        s.$error.html(sys.getRes("ids_login_otherLogin")).removeClass("hidden");
                    } else {
                        _showkickoffPop();
                    }
                    break;
                case LOGIN_STATE_LOGIN_TIMES_USEDOUT:
                    s.$error.html(sys.getRes("ids_login_timeuseout")).removeClass("hidden");
                    break;
                default:
                    break;
            }
        }

        function _showkickoffPop() {
            kickOffStatus = true;
            $("#popinAuth").css("display", "none");
            sys.confirm("ids_isSupportKickOff", function() {
                $("#popinAuth").css("display", "block");
                _setLogin("ForceLogin");
            }, function() {
                kickOffStatus = false;
                $("#popinAuth").css("display", "block");
                _hide();
            });
        }


    }

    function show_simcard_status() {

        if (simInfo.SIMState == MACRO_UIM_STATE_PUK1_OR_PUK_REQ) {
            $('.puk_wrap').removeClass('hidden');
        } else if (simInfo.SIMState == MACRO_UIM_STATE_PERSON_CHECK_REQ) {
            $('.simlock_wrap').removeClass('hidden');
        } else {
            $('.pin_wrap').removeClass('hidden');
        }

        $('.login_wrap').addClass('hidden');
    }

    function rsetRmemberUsernameAndPw(saveFlag, username, password) {
        var result = SDK.User.SetAutoRemenberPassword(saveFlag, username, password);
    }

    function pageInitSimCard(auto_pin_flag) {
        startLoading();

        initSimCard(function() {
            var result = SDK.SIM.GetSimStatus();

            if ((result.SIMState == MACRO_UIM_STATE_READY) || (result.SIMState == MACRO_UIM_STATE_PIN1_PERM_BLOCKED)) {
                if ((auto_pin_flag == 1 || auto_pin_flag == 0) && (result.SIMState == MACRO_UIM_STATE_READY)) {
                    SDK.SIM.SetAutoEnterPinState(auto_pin_flag, $.trim($("#iptPinCode").val()));
                }
                stopLoading();
                if (config.changePasswordWarningFlag) {
                    _passwordChangeStatus();
                } else {
                    _submitForm();
                    window.location.href = s.url;
                }
            } else {
                stopLoading();

                if ((result.SIMState == MACRO_UIM_STATE_PERSON_CHECK_REQ) && (result.SIMLockState == SIMLOCK_PERSO_RCK_FORBID)) {
                    _submitForm();
                    window.location.href = s.url;
                } else {

                    $("#spnSimlockTime").html(result.SIMLockRemainingTimes);
                    $("#labSimlockState").html(simlock_state_str(result.SIMLockState));

                    $('.pin_wrap').addClass('hidden');
                    $('.puk_wrap').addClass('hidden');
                    $('.simlock_wrap').removeClass('hidden');
                }
            }
        });
    }

    function _submitForm() {
        s.$content.fadeOut(150);
        AIRBOX.logged.init();
        _hide();

        var getType = {};

        if (s.callback && getType.toString.call(s.callback) === '[object Function]') s.callback();
    }

    function _errorEvernt(id) {
        id.on("keypress", function(event) {
            s.$error.html("").addClass("hidden");
        })
    }

    return {
        init: init,
        show: _show,
        show_simcard_status: show_simcard_status
    };
}())


/* -------------------------------------------------------------------------
     class - airbox fota
     ----------------------------------------------------------------------------- */
AIRBOX.fota = (function() {
    var s = {
            $content: $(".item-update")
        },
        cs = {};

    function init(options) {
        $.extend(s, options);
        cs = AIRBOX.core.settings;
        initUpdateClickEvents();
        //showFotaMainThread(connectionState);
    };

    function initUpdateClickEvents() {
        $("#downloadImg").off().on(cs.clickEvent, function(event) {
            cf.moveToIndex(getIndexByPageUrl("#more/update.html"));
            setTimeout(function() {
                page.changePage("#more/update.html");
            }, 500);
        });
        $("#btnStartDownload").off().on(cs.clickEvent, function(event) {
            showConfirmDownload();
        });
        $("#btnStartUpdate").off().on(cs.clickEvent, function(event) {
            showConfirmUpdate();
        });
        $("#btnStopUpdate").off().on(cs.clickEvent, function(event) {
            stopDownloadFOTA();
        });
    }

    function showFotaMainThread(iwanState) {
        if (iwanState == MACRO_PPP_CONNECTED) {
            if (!(versionState == VERSION_NO_SERVICE || versionState == VERSION_CHECK_ERROR)) {
                startCheckUpgradeState();
            }
        } else {
            Fotabox.noNewVersion();
        }
    }

    function showVersionInfo() {
        if (versionState == null) {
            var result = SDK.Update.SetCheckNewVersion();
            if (result == API_RESULT_SUCCESS) {
                versionInfo = SDK.Update.GetDeviceNewVersion();
            } else {
                versionInfo = {
                    State: VERSION_CHECK_ERROR,
                    Version: ""
                }
            }
        } else if (versionState == VERSION_CHECKING) {
            versionInfo = SDK.Update.GetDeviceNewVersion();
            if (versionInfo.State == VERSION_CHECK_ERROR) {
                Fotabox.noNewVersion();
                isFotaCheckEnd = true;
                return;
            }
        } else if (versionState == VERSION_CHECK_ERROR) {
            Fotabox.noNewVersion();
            isFotaCheckEnd = true;
            return;
        }
        if (versionInfo && versionInfo != null) {
            versionState = versionInfo.State;
            NewVersionNum = versionInfo.Version;
        }

        if (versionState == VERSION_CHECKING) {
            isFotaCheckEnd = false;
            Fotabox.noNewVersion();
            return;
        }
        if (versionState == VERSION_NEW_NO) {
            Fotabox.noNewVersion();
            isFotaCheckEnd = true;
            return;
        }
        if (versionState == VERSION_NEW_YES) {
            isFotaCheckEnd = true;
            Fotabox.haveVersion();
            return;
        }
    }

    function downLoadImageHover() {
        $(".downloadImg").hover(function() {
            $(".tooltipImg,.tooltip-arrow").css("display", "block");
            $(".tooltipImg").html(sys.getRes("ids_fota_haveNewVersion"));
        }, function() {
            $(this).find(".tooltipImg,.tooltip-arrow").stop(true, true).hide();
        });
    }

    function startCheckUpgradeState() {
        UpgradeInfo = SDK.Update.GetDeviceUpgradeState();
        FOTADownloadState = UpgradeInfo.Status;
        downloadProcess = UpgradeInfo.Process;
        if (FOTADownloadState == FOTA_DOWNLOAD_STATE_COMPLETED) {
            if (config.IsAutoUpgrade) {
                Fotabox.Upgrading();
            } else {
                Fotabox.VersionDownloaded();
            }
        } else if (FOTADownloadState == FOTA_DOWNLOAD_STATE_DOWNLOADING) {
            listenLogout.stop();
            showDownloadFOTABox();
        } else if (FOTADownloadState == FOTA_DOWNLOAD_STATE_FREE) {
            showVersionInfo();
        } else {
            sys.alert("ids_error");
        }
    }

    function showDownloadFOTABox() {
        Fotabox.Downloading();
        showFOTADownloadProcess();
    }

    function showFOTADownloadProcess() {
        if (FOTADownloadState == FOTA_DOWNLOAD_STATE_COMPLETED) {
            $("#spnDownloadProcess").html("100%");
            Fotabox.Upgrading();
        } else if (FOTADownloadState == FOTA_DOWNLOAD_STATE_DOWNLOADING) {
            $("#spnDownloadProcess").html(downloadProcess + "%");
        } else {
            Fotabox.haveVersion();
        }
    }

    function startDownloadFOTA() {
        var roamingVal = SDK.System.GetSystemStatus().Roaming;
        if (config.roamingUpdateFotaTips && roamingVal == 0) {
            sys.confirm("ids_fotaUpdate_openRoaming_meg", function() {
                var result = SDK.Update.SetFOTAStartDownload();
                if (result == API_RESULT_SUCCESS) {
                    startCheckUpgradeState();
                } else {
                    sys.alert("ids_error");
                }
            });
        } else {
            var result = SDK.Update.SetFOTAStartDownload();
            if (result == API_RESULT_SUCCESS) {
                startCheckUpgradeState();
            } else {
                sys.alert("ids_error");
            }
        }

    }

    function stopDownloadFOTA() {
        var result = SDK.Update.SetDeviceUpdateStop();
        if (result == API_RESULT_SUCCESS) {
            listenLogout.start();
            Fotabox.haveVersion();
            startCheckUpgradeState();
        } else {
            sys.alert("ids_error");
        }
    }

    function startUpdateFOTA() {
        var result = SDK.Update.SetDeviceStartUpdate();
        if (result == API_RESULT_SUCCESS) {
            Fotabox.Upgrading();
        } else {
            sys.alert("ids_error");
        }
    }

    function fotaDownloadBatteryLow(){
        var isBatteryEnough= false
        if(systemStatusInfo.bat_cap < config.FOTA_BATTERY_ENOUGH_LEVEL){
            sys.confirm("ids_fotaDownload_battery_low_tips", function() {
                checkFotaBatteryEnoughState()
            }, function() {
                stopCheckBatteryStatus()
                page.changePage("#more/update.html");
            });
        }
        return isBatteryEnough
    }

    function checkFotaBatteryEnoughState() {
        var isBatteryEnough = false;
        if(systemStatusInfo.chg_state == FOTA_BATTERY_CHARGING){
            isBatteryEnough= true
            popUp.hide()
            stopCheckBatteryStatus()
        }else if (systemStatusInfo.bat_cap > config.FOTA_BATTERY_ENOUGH_LEVEL) {
            isBatteryEnough = true;
            stopCheckBatteryStatus()
        }else {
            isBatteryEnough= fotaDownloadBatteryLow()
            startCheckBatteryStatus()
        }

        return isBatteryEnough;
    }

    function getfotaBatteryEnoughState() {
        var isBatteryEnough = false;
        if (config.IsFotaBatteryLevelNeedCheck) {
            if (systemStatusInfo.bat_cap > config.FOTA_BATTERY_ENOUGH_LEVEL) {
                isBatteryEnough = true;
            }
        } else {
            if (batteryState == FOTA_BATTERY_STATE_ENOUGH) {
                isBatteryEnough = true;
            }
        }
        return isBatteryEnough;
    }

    function showConfirmDownload() {
        var isBatteryEnough = config.isDownloadFOTABatteryLow30Tips ? checkFotaBatteryEnoughState():getfotaBatteryEnoughState();
        if (isBatteryEnough || !config.isNeedBattery) {
            startDownloadFOTA();
        } else {
            sys.alert("ids_fota_batteryTips");
        }
    }

    function showConfirmUpdate() {
        var isBatteryEnough = getfotaBatteryEnoughState();
        if (isBatteryEnough || !config.isNeedBattery) {
            startUpdateFOTA();
        } else {
            sys.alert("ids_fota_batteryTips");
        }
    }

    function startCheckBatteryStatus() {
        var that = this;
        if (that.interBattery != null) {
            that.stopCheckBatteryStatus();
        }
        that.interBattery = setInterval(function() {
            that.checkFotaBatteryEnoughState();
        }, 3000);
    }
function stopCheckBatteryStatus() {
    var that = this;
    if (that.interBattery != null) {
        clearInterval(that.interBattery);
        that.interBattery = null;
    }
}

    var Fotabox = {
        checkVersion: function() {
            sys.prompt('<div id="showVersionInfoDiv">' + sys.getRes("ids_fota_checking") + '</div>', -1);
        },

        Downloading: function() {
            $("#fotaDownloading,.downloadImg").css("display", "block");
            $("#noNewVersion,#haveVersion,#VersionDownloaded").css("display", "none");
            downLoadImageHover();
            $(".NewVersionNum").html(NewVersionNum);
            var BAR_WIDTH = $("div.bar", $("#more")).width();
            $("div.progress", $("#more")).css("width", downloadProcess / 100 * BAR_WIDTH + "px");
        },

        haveVersion: function() {
            $("#noNewVersion,#fotaDownloading,#VersionDownloaded").css("display", "none");
            $(".downloadImg,#haveVersion").css("display", "block");
            downLoadImageHover();
            $(".downloadImg,#downloadProces").css("cursor", "pointer");
            $(".NewVersionNum").html(NewVersionNum);
        },

        VersionDownloaded: function() {
            $("#noNewVersion,.downloadImg,#haveVersion,#fotaDownloading").css("display", "none");
            $("#VersionDownloaded").css("display", "block");
        },

        Upgrading: function() {
            initProgressBar($("article#more"), 1);
            popUp.showBox('<div id="showLoadingDiv">' + sys.getRes("ids_fota_upgrading") + '<div style="color: red;">' + sys.getRes("ids_fota_upgradingTips") + '</div></div>');
            $("#popUpTitle").html(sys.getRes("ids_fota_updateTitle"));
            setTimeout(function() {
                window.location.reload();
            }, 120000)
        },
        hide: function() {
            popUp.hide();
        },
        noNewVersion: function() {
            versionNum = SDK.System.GetSystemInfo().SwVersion;
            $(".downloadImg,#haveVersion,#fotaDownloading,#VersionDownloaded").css("display", "none");
            $("#noNewVersion").css("display", "block");
            $("#CurrVersionNum").html(versionNum);
        }
    }

    return {
        init: init,
        showFotaMainThread: showFotaMainThread,
        initUpdateClickEvents: initUpdateClickEvents
    };
}())

/* -------------------------------------------------------------------------
 class - airbox when logged
 ----------------------------------------------------------------------------- */
AIRBOX.logged = (function() {
    var s = {},
        cs = {};

    function init(options) {
        $.extend(s, options);
        cs = AIRBOX.core.settings;
        $("#logout").on(cs.clickEvent, function(event) {
            event.preventDefault();
            logoutEvent();
        });
        $("#logoutLan").on("click", function(event) {
            event.preventDefault();
            logoutEvent();
        });

        $("#login").on(cs.clickEvent, function(event) {
            event.preventDefault();
            logintEvent();
            $("#f_password").focus();
        });



        if (sys.isLogin(sessionId)) {
            _logIn();
        } else {
            _logOut();
        }

        if (config.isWebsiteLink.isActive) {
            $(".alcatelLink").find("a").append(config.isWebsiteLink.name);
        }
        if (config.webChat.isActive) {
            $(".webChatLink").removeClass("hidden");
            $(".webChatIcon").attr("target", "_blank");
            $(".webChatIcon").attr("href", config.webChat.linkAddress);
            $(".webChatIcon").attr("title", sys.getRes("ids_tips_livechat"));
        }
    };

    function logoutEvent() {
        if (API_RESULT_SUCCESS == SDK.User.Logout())
            location.reload();
    }

    function logintEvent() {

        var o = {
            'message': $(this).attr('title'),
            'url': "index.html"
        };

        AIRBOX.popinAuth.show(o);
    }

    function _logIn() {
        $('.guest').addClass('hidden');
        $('.logged').removeClass('hidden');
        $('.logouted').addClass('hidden');
        if (config.isWebsiteLink.isActive) {
            alwaysHighlight();
        }
    }

    function _logOut() {
        $('.guest').removeClass('hidden'); //hal can delete
        $('.logged').addClass('hidden');
        $('.logouted').removeClass('hidden');
        if (config.isWebsiteLink.isActive) {
            if (config.isWebsiteLink.isLoginOutHighlight) {
                alwaysHighlight();
            } else {
                logOutHighlight();
            }
        }
    }

    function alwaysHighlight() {
        $(".alcatelLink").removeClass("hidden");
        $(".alcatelLink").removeClass("alcatelLinkGray");
        $(".alcatelLink").find("a").attr("href", config.isWebsiteLink.linkAddress);
        $(".alcatelLink").find("a").attr("target", "_blank");
    }

    function logOutHighlight() {
        $(".alcatelLink").removeClass("hidden");
        $(".alcatelLink").addClass("alcatelLinkGray");
        $(".alcatelLink").find("a").attr("href", "#");
        $(".alcatelLink").find("a").attr("target", "");
    }

    return {
        init: init,
        _logOut: _logOut,
        _logIn: _logIn

    };
}())


/* -------------------------------------------------------------------------
 class - popin Languages
 ----------------------------------------------------------------------------- */
AIRBOX.popinLng = (function() {
    var s = {
            $popin: $('#popinLng'),
            $cache: $('#popinLng .cache'),
            $popinHelpLng: $("#popinHelpLng"),
            $popinHelpLngCache: $("#popinHelpLng .cache")
        },
        cs = {};

    function init(options) {
        $.extend(s, options);
        cs = AIRBOX.core.settings;

        _initClose();
    };

    function _show(options) {
        $.extend(s, options);
        s.$popin.removeClass("hidden");
        if(config.isSupportHelpSelectionType){
            s.$popinHelpLng.removeClass("hidden");
        }
    };

    function _hide() {
        s.$popin.addClass("hidden");
        s.$cache.off();
        if(config.isSupportHelpSelectionType){
            s.$popinHelpLng.addClass("hidden");
            s.$popinHelpLngCache.off();
        }
    };

    function _initClose() {
        s.$cache.on('click', function(event) {
            event.preventDefault();
            _hide();
        });
        if(config.isSupportHelpSelectionType){
            s.$popinHelpLngCache.on('click', function(event) {
            event.preventDefault();
            _hide();
            });
        }
    };

    return {
        init: init,
        show: _show,
        hide: _hide
    };
}())



/* -------------------------------------------------------------------------
     class - airbox connection
----------------------------------------------------------------------------- */
AIRBOX.homeConnectDial = (function() {
    var s = {
            $switchs: $(".connectDialModule .switch"),
            $connectDialModule: $(".connectDialModule")
        },
        cs = {};

    function init(options) {
        $.extend(s, options);
        cs = AIRBOX.core.settings;
        _initSwitch();
        // _initStatus();
    };

    function _initStatus() {
        showSmsCardState(simCardState, pinState, simlockState);
        defaultPage.refreshImgStatus();
    }

    function _initSwitch() {
        var simState = SDK.SIM.GetSimStatus().SIMState;
        // var networkInfo = SDK.Network.GetNetworkInfo().NetworkType;
        var networkInfoNumber = /^[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]$/;
        if (simState != MACRO_UIM_STATE_READY) {
            $(".connectDialModule").addClass("gray");
        }
        /*
        s.$switchs.off(cs.clickEvent).on(cs.clickEvent, function(event) {
            event.preventDefault();
    event.stopPropagation();
            if(simState == 7 &&  networkTypeStr != "NA"){//networkInfoNumber.test(networkInfo)){
                if(sys.isLogin(sessionId)) {
                clickSwitchsEvent(simState);
                
            }else{
                dialState = 1;
                connectLogintEvent(simState);
            }
            }
            
        });
        */

        s.$connectDialModule.off('click').on("click", function(event) {
            if (simState == MACRO_UIM_STATE_READY && networkTypeStr != "NA") { //networkInfoNumber.test(networkInfo)){
                if (sys.isLogin(sessionId)) {
                    clickSwitchsEvent(simState);

                } else {
                    dialState = connectedDial;
                    connectLogintEvent(simState);
                }
            }

        });
        if (sys.isLogin(sessionId)) {
            AIRBOX.logged._logIn();
        } else {
            AIRBOX.logged._logOut();
        }
    };

    function clickSwitchsEvent(simState) {
        if (simState == null || simState == undefined) {
            var simState = SDK.SIM.GetSimStatus().SIMState;
        }
        if (simState == MACRO_UIM_STATE_READY) {
            if (!s.$switchs.hasClass('on') && !s.$switchs.hasClass('loading')) {
                _connect();
            } else {
                _disconnect();
            }
        }

    }

    function connectLogintEvent(simState) {

        var o = {
            'message': $(this).attr('title'),
            'url': "index.html"
        };

        AIRBOX.popinAuth.show(o);
        $("#f_password").focus();

    }

    function _connect() {
        var iNetworkType = SDK.Network.GetNetworkInfo().NetworkType;
        if (getNetworkTypeStr(iNetworkType) == "NA") {
            sys.alert("ids_fail");
            return false;
        }
        var usageSettingsInfo = SDK.Statistics.GetUsageSettings();
        var monthlyDataPlan = usageSettingsInfo.MonthlyPlan;
        var UsedData = SDK.Statistics.GetUsageRecord().HUseData;
        var isAutoUsage = usageSettingsInfo.TimeLimitTimes;
        var UsedTimes = usageSettingsInfo.UsedTimes;
        var AutoDisconnFlag = usageSettingsInfo.AutoDisconnFlag;
        var TimeLimitFlag = usageSettingsInfo.TimeLimitFlag;
        if (((monthlyDataPlan <= UsedData) && (Number(AutoDisconnFlag) == 1 && monthlyDataPlan !=0)) || ((isAutoUsage <= UsedTimes) && (Number(TimeLimitFlag) == 1))) {
            sys.alert("ids_wan_tips");
            return false;
        }
        var result = SDK.Connection.Connect();
        if (result == API_RESULT_SUCCESS) {
            _switchConnecting();
            getConnectionDialState();
        } else {
            sys.alert("ids_fail", function() {
                _switchDisconnected();
            });
        }
    }

    function _disconnect() {
        var result = SDK.Connection.DisConnect();
        if (result == API_RESULT_SUCCESS) {
            _switchDisconnecting();
            getConnectionDialState();
        } else {
            sys.alert("ids_fail", function() {
                _switchConnected();
            });
        }
    }

    function _switchDisconnected() {
        s.$switchs.removeClass("loading on").addClass("switch");
        $(".spnWanConState").html(sys.getRes("ids_connect"));
    };

    function _switchDisconnecting() {
        s.$switchs.removeClass("on").addClass("switch loading");
        $(".spnWanConState").html(sys.getRes("ids_wan_disconnecting"));
        $("#spnWanConnectState").html(sys.getRes("ids_wan_disconnecting"));
    }

    function _switchConnecting() {
        s.$switchs.removeClass("on").addClass("switch loading");
        $(".spnWanConState").html(sys.getRes("ids_wan_connecting"));
        $("#spnWanConnectState").html(sys.getRes("ids_wan_connecting"));
    }

    function _switchConnected() {
        s.$switchs.removeClass("loading").addClass('switch on');
        $(".spnWanConState").html(sys.getRes("ids_btn_wan_disconnect"));
    };

    return {
        init: init,
        clickSwitchsEvent: clickSwitchsEvent
    };
}())

function getSystemTime() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    var currentMonth = currentDate.getMonth() + 1;
    var currentDay = currentDate.getDate();
    var currentHours = currentDate.getHours();
    var currentMinutes = currentDate.getMinutes();
    var currentSecs = currentDate.getSeconds();
    var currentTime = "";
    currentTime += currentYear + "-";
    currentTime += ((currentMonth < 10) ? "0" : "") + currentMonth + "-";
    currentTime += ((currentDay < 10) ? "0" : "") + currentDay + " ";
    currentTime += ((currentHours < 10) ? "0" : "") + currentHours + ":";
    currentTime += ((currentMinutes < 10) ? "0" : "") + currentMinutes + ":";
    currentTime += ((currentSecs < 10) ? "0" : "") + currentSecs;
    return currentTime
}

function showdHomePageWanInfo(connectionState) {
    var $switchs = $(".connectDialModule .switch");
    switch (connectionState) {
        case MACRO_PPP_CONNECTED:
            wanConnectStateStr = sys.getRes("ids_connect");
            $switchs.removeClass().addClass("switch on");
            if (config.SupportOpenNewPage) {
                if(config.openNewPageLinkSimPlmn.isActive){
                    var simHPLMN = SDK.Network.GetNetworkInfo().PLMN;
                    if($.inArray(simHPLMN,config.openNewPageLinkSimPlmn.simPlmnArr) != -1){
                        startOpenNewPage();
                    }
                }else{
                    startOpenNewPage();
                }
            }
            break;
        case MACRO_PPP_CONNECTING:
            wanConnectStateStr = sys.getRes("ids_wan_connecting");
            $switchs.removeClass().addClass("switch loading");
            $("#spnWanConnectState").html(wanConnectStateStr);
            break;
        case MACRO_PPP_DISCONNECTING:
            wanConnectStateStr = sys.getRes("ids_wan_disconnecting");
            $switchs.removeClass().addClass("switch loading");
            $("#spnWanConnectState").html(wanConnectStateStr);
            break;
        default:
            wanConnectStateStr = sys.getRes("ids_btn_wan_disconnect");
            $switchs.removeClass().addClass("switch");
            if (config.SupportOpenNewPage) {
                if(config.openNewPageLinkSimPlmn.isActive){
                    var simHPLMN = SDK.Network.GetNetworkInfo().PLMN;
                    if($.inArray(simHPLMN,config.openNewPageLinkSimPlmn.simPlmnArr) != -1){
                        initOpenNewPage();
                    }
                }else{
                    initOpenNewPage();
                }
            }
            break;
    }
    $("#spnWanConState").html(wanConnectStateStr);
}






/* -------------------------------------------------------------------------
 READY
 ----------------------------------------------------------------------------- */
$(window).ready(function() {
    if($.trim(config.titleValue)==''||config.titleValue=='None'){
        document.title ="";
    }else{
        document.title = config.titleValue;
    }
    if ($(window).width() < 320)
        $('head').append('<meta name="viewport" content="initial-scale=0.75, minimum-scale=0.75, maximum-scale=0.75, user-scalable=no">');

    AIRBOX.core.init({});
});

/* -------------------------------------------------------------------------
 LANGUAGE EVENTS
 ----------------------------------------------------------------------------- */
$(document).ready(function() {

    $("#languages ul li a").click(function(event) {
        event.preventDefault();
        var currentLang = this.innerHTML;
        $.each(config.allLanguage, function(index, val) {
            if ($.inArray(index, config.sys_language) != -1) {
                if (val == currentLang) {
                    language = index;
                }
            }

        });
        //$("a.navigation#linkLanguages")[0].innerHTML = language;
        AIRBOX.menu.hide();
        setLanguageEvent(language);
    });

    $("#popinLng .popin ul li a").click(function(event) {
        event.preventDefault();
        var currentLang = this.innerHTML;
        $.each(config.allLanguage, function(index, val) {
            if ($.inArray(index, config.sys_language) != -1) {
                if (val == currentLang) {
                    language = index;
                }
            }

        });
        $("#popinLng .popin ul li a").removeClass('on');
        $(this).addClass('on');
        $("a.navigation#linkLanguages")[0].innerHTML = language;
        AIRBOX.popinLng.hide();
        setLanguageEvent(language);
    });
    if(config.isSupportHelpSelectionType){
    $("#listHelp ul li a").click(function(event) {
        event.preventDefault();
        selectionHelpManual();
     })
    $("#popin_listHelp ul li a").click(function(event) {
        event.preventDefault();
         selectionHelpManual();
     })
    }
    setfunctionAttributes();
});

function selectionHelpManual(){
    var language = SDK.System.GetLanguage();
    $(".help-iframe").empty().remove();
    $("body").append("<iframe class='help-iframe' src='/help/USER_Manual_" + language + ".pdf' style='display: none'></iframe>");
    setTimeout(function() {
        location.reload();
    }, 100)
}

function setfunctionAttributes() {
    $("input[name='iptSimlockCode']").attr("maxlength", config.isSimlockNckDigit);
}

function setLanguageEvent(languageID) {
    var result = SDK.System.SetLanguage(languageID);

    if (result == API_RESULT_SUCCESS) {
        location.reload();
    } else {
        sys.alert("ids_fail");
    }
}

function simlock_state_str(simlockStatus) {
    var simLockStateStr;
    switch (simlockStatus) {
        case SIMLOCK_PERSO_NET_PIN_REQUIRED:
            simLockStateStr = sys.getRes("ids_sim_nck") + ":";
            break;
        case SIMLOCK_PERSO_NETSUB_PIN_REQUIRED:
            simLockStateStr = sys.getRes("ids_sim_nsck") + ":"
            break;
        case SIMLOCK_PERSO_SP_PIN_REQUIRED:
            simLockStateStr = sys.getRes("ids_sim_spck") + ":"
            break;
        case SIMLOCK_PERSO_CORP_PIN_REQUIRED:
            simLockStateStr = sys.getRes("ids_sim_cck") + ":";
            break;
        case SIMLOCK_PERSO_PH_FSIM_PIN_REQUIRED:
            simLockStateStr = sys.getRes("ids_sim_pck") + ":";
            break;
        case SIMLOCK_PERSO_NET_PUK_REQUIRED:
        case SIMLOCK_PERSO_NETSUB_PUK_REQUIRED:
        case SIMLOCK_PERSO_SP_PUK_REQUIRED:
        case SIMLOCK_PERSO_CORP_PUK_REQUIRED:
        case SIMLOCK_PERSO_PH_FSIM_PUK_REQUIRED:
            simLockStateStr = sys.getRes("ids_sim_rck") + ":";
            break;
        default:
            break;
    }

    return simLockStateStr;
}

function initSimCard(callback) {
    SDK.requestJsonRpcAsync("GetSimStatus", null, "2.1", function(data) {
        if (data != null && !data.hasOwnProperty("error")) {
            simCardState = data.SIMState;
            pinState = data.PinState;
            simlockState = data.SIMLockState;
            if (data.SIMState == MACRO_UIM_STATE_INITING) {
                startLoading();
                setTimeout(function() {
                    initSimCard(callback);
                }, 1000);
            } else {
                stopLoading()
                if (data.SIMState == MACRO_UIM_STATE_READY) {
                    initSMSStatus(callback);
                } else {
                    callback();
                }
            }
        } else {
            setTimeout(function() {
                initSimCard(callback);
            }, 1000);
        }
    });

}

function initSMSStatus(callback) {
    startLoading();
    SDK.requestJsonRpcAsync("getSmsInitState", null, "6.1", function(data) {
        if (data != null && !data.hasOwnProperty("error")) {
            if (data.state == SMS_INIT_STATUS_INITING) {
                setTimeout(function() {
                    initSMSStatus(callback);
                }, 5000);
            } else {
                if (pageName == 'indexPage') {
                    showSimCardState(simCardState, pinState, simlockState);
                } else {
                    showSmsCardState(simCardState, pinState, simlockState);
                }
                callback(); //SMS Inited ready
                stopLoading()
            }
        } else {
            setTimeout(function() {
                stopLoading()
                callback();
                if (pageName == 'indexPage') {
                    showSimCardState(simCardState, pinState, simlockState);
                } else {
                    showSmsCardState(simCardState, pinState, simlockState);
                }
            }, 10000);
        }
    });
}

function startLoading() {
    if (!(!($.browser.msie && ($.browser.version == "6.0") && !$.support.style))) {
        $("#mask,#loading").css({
            height: $("#wrap").height()
        });
    }
    $("#mask,#loading").css({
        display: "block"
    });
    $("#mask").css({
        opacity: 0.01
    })

}

function stopLoading() {
    $("#mask,#loading").css("display", "none");
}


//UM download
$(function($) {
    if(config.onlineUM){
        $(".btn_help").attr('target','_blank').attr('href',config.onlineUmUrlPrefix+config.umPath+"/"+config.umNamePrefix+language+".pdf")
    }else{
        if(!config.isSupportHelpSelectionType){
            $(".btn_help").off("click").on("click", function() {
                    var language = SDK.System.GetLanguage();
                    $(".help-iframe").empty().remove();
                    $("body").append("<iframe class='help-iframe' src='/help/USER_Manual_" + language + ".pdf' style='display: none'></iframe>");
                    setTimeout(function() {
                        location.reload();
                    }, 100)
               
            })
        }
    }

    initSimCard(function() {}) //when refresh page add init simcard function.
})
/***************end*******************/

var checkSimHotPlug = {
    simState: 11,
    checkSimStateInterval: null,
    startCheckSimStateInterval: function() {
        var that = this;
        if (that.checkSimStateInterval != null) {
            clearInterval(that.refreshImgInterval);
            that.checkSimStateInterval = null;
        }
        that.simState = SDK.SIM.GetSimStatus().SIMState;
        that.checkSimStateInterval = setInterval(function() {
            SDK.requestJsonRpcAsync("GetSimStatus", {}, "2.1", function(data) {
                if (data == null) return;
                simCardState = data.SIMState;
                pinState = data.PinState;
                simlockState = data.SIMLockState;
                if ((that.simState != MACRO_UIM_STATE_UNKNOWN && data.SIMState == MACRO_UIM_STATE_UNKNOWN) || (that.simState == MACRO_UIM_STATE_UNKNOWN && data.SIMState != MACRO_UIM_STATE_UNKNOWN)) {
                    location.reload();
                }
                that.simState = data.SIMState;
            });
        }, 30000);
    }
}

if (config.IsSupportSimHotPlug) {
    checkSimHotPlug.startCheckSimStateInterval();
}
/********************dial setinterval 3s*****************************/
function getConnectionDialState() {
    if (G_getConnectionDialState != null) {
        clearInterval(G_getConnectionDialState)
        G_getConnectionDialState = null;
    }

    G_getConnectionDialState = setInterval(function() {
        SDK.System.GetAsyncSystemStatus(function(data) {
            if (data.ConnectionStatus != 1 && data.ConnectionStatus != 3) {
                if (G_getConnectionDialState != null) {
                    clearInterval(G_getConnectionDialState)
                    G_getConnectionDialState = null;
                }
            }

            var ConnectionStateInfo = SDK.Connection.GetConnectionState();
            wanUsage = parseInt(ConnectionStateInfo.UlBytes) + parseInt(ConnectionStateInfo.DlBytes);
            connectTime = ConnectionStateInfo.ConnectionTime;
            showdefaultPageWanInfo(data.ConnectionStatus, data.NetworkName, wanUsage, connectTime);

        })
    }, 3000)
}
/********helplineNumber********/
$(function() {
    helplineNumber();
})
function helplineNumber() {
    if (config.helplineNumber.isActive) {
        switch (config.helplineNumber.homeAndDefault) {
            case helpLineNumb_home:
                $(".helplineNumber").removeClass("hidden");
                $(".helplineNumber span").html(sys.getRes(config.helplineNumber.title));
                $(".helplineNumber").append(config.helplineNumber.contents);
                break;
            case heplLineNumb_default:
                $(".helplineNumberDefault").removeClass("hidden");
                $(".helplineNumberDefault span").html(sys.getRes(config.helplineNumber.title));
                $(".helplineNumberDefault").append(config.helplineNumber.contents);
                break;
            case helpLineNumb_homeAnddefault:
                $(".helplineNumber,.helplineNumberDefault").removeClass("hidden");
                $(".helplineNumber span,.helplineNumberDefault span").html(sys.getRes(config.helplineNumber.title));
                $(".helplineNumber,.helplineNumberDefault").append(config.helplineNumber.contents);
                break;
            default:
                $(".helplineNumber,.helplineNumberDefault").addClass("hidden");
        }
    }
}
