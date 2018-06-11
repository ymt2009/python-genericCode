    /*------------------------------------------------------------------------
             * ----------
             * page
             * defaultPage
             * AIRBOX.slide
             * ----------
             * AIRBOX.connection
             * AIRBOX.sms
             * AIRBOX.usage 
             * AIRBOX.sharing
             --------------------------------------------------------------------------*/

    var networkInfo = SDK.Network.GetNetworkInfo();
    var networkName = networkInfo.NetworkName;

    var simInfo = SDK.SIM.GetSimStatus();
    var simCardState = simInfo.SIMState;
    var pinState = simInfo.PinState;
    var pinTime = simInfo.PinRemainingTimes;
    var pukTime = simInfo.PukRemainingTimes;
    var simlockState = simInfo.SIMLockState;
    var simlockTime = simInfo.SIMLockRemainingTimes;
    var wanUsage, connectTime;
    var systemStatusInfo = SDK.System.GetSystemStatus();
    var tmp_connectedNum = systemStatusInfo.TotalConnNum;
    var tmp_unreadSMSCount = 0;
    if (systemStatusInfo.SmsState != 0) {
        tmp_unreadSMSCount = systemStatusInfo.UnreadSMSCount;
    }

    var usageSettingInfo = SDK.Statistics.GetUsageSettings();
    timeLimitTimes = usageSettingInfo.TimeLimitTimes;
    var connectionStatus = SDK.Connection.GetConnectionState().ConnectionStatus;
    /*wan status*/
    var MACRO_PPP_DISCONNECTED = 0;
    var MACRO_PPP_CONNECTING = 1;
    var MACRO_PPP_CONNECTED = 2;
    var MACRO_PPP_DISCONNECTING = 3;
    var s = {
            $content: $("article#connection"),
            $switchs: $("article#connection .switch"),
            $spnWanConnectState: $("article#connection#spnWanConnectState")
           };
    var page = {
         PinCodesettings: function(callback){ 
            if(config.ConnectionActivePopu){
                var connectionStatus = SDK.Connection.GetConnectionState().ConnectionStatus;        
            if(connectionStatus == MACRO_PPP_CONNECTED || connectionStatus == MACRO_PPP_CONNECTING || connectionStatus == MACRO_PPP_DISCONNECTING) {
                        sys.confirm("ids_wan_connectedRule", function(){
                            page._disconnetFunction(callback)
                        }, function(){},{okText:sys.getRes("ids_btn_wan_disconnect")}) 

                }else{
                   // $("#btnPopUpOk").html(sys.getRes("ids_btn_ok"));
                    callback.apply();
                }
            }else{
             // $("#btnPopUpOk").html(sys.getRes("ids_btn_ok"));  
              callback.apply();
            }
          },
  
          PinCodesettings1: function(callback){ 
            if(config.ConnectionActivePopu){
                var connectionStatus = SDK.Connection.GetConnectionState().ConnectionStatus;        
            if(connectionStatus == MACRO_PPP_CONNECTED || connectionStatus == MACRO_PPP_CONNECTING || connectionStatus == MACRO_PPP_DISCONNECTING) {
                        sys.confirm("ids_wan_connectedRuleIndia", function(){
                            page._disconnetFunction(callback)
                        }, function(){},{okText:sys.getRes("ids_btn_wan_disconnect")}) 

                }else{
                   // $("#btnPopUpOk").html(sys.getRes("ids_btn_ok"));
                    callback.apply();
                }
            }else{
             // $("#btnPopUpOk").html(sys.getRes("ids_btn_ok"));  
              callback.apply();
            }
          },

         _disconnetFunction: function(callback){
            var result = SDK.Connection.DisConnect();
                if (result == API_RESULT_SUCCESS) {
                    page._switchDisconnecting();
                    getConnectionDialState();
                    page.startLoading();
                    setTimeout(function(){
                            callback.apply();
                            page.stopLoading();
                        }, 2000);
                } else {
                    sys.alert("ids_fail", function() {
                        page_switchConnected();
                    });
                }
          },
     
        _switchDisconnecting:function() {
               s.$switchs.removeClass().addClass("switch loading");
               s.$spnWanConnectState.html(sys.getRes("ids_wan_disconnecting"));
           },
         
         _switchConnected: function() {
            s.$switchs.removeClass().addClass('switch on');
            s.$spnWanConnectState.html(sys.getRes("ids_wan_connected"));
        },

        changePage: function(url) {
            var that = this;
            $(window).unbind('hashchange', that.initload);
            url = url.replace(/^.*#/, '');
            var pageMenu = url.split("/")[0];
            document.location.hash = url;
            $.ajax({
                type: "GET",
                url: url + "?rand=" + Math.random(),
                dataType: "html",
                beforeSend: function() {
                    that.startLoading()
                },
                complete: function() {
                    that.stopLoading()
                },
                success: function(data) {
                    $("#" + pageMenu).html("").empty().html(data);
                    $(window).bind('hashchange', that.initload);
                },
                error: function() {
                    page.changePage(url)
                }


            });
        },
        initload: function() {
            var url = document.location.hash;
            url = url.replace(/^.*#/, '');
            if (url != "") {
                page.changePage(url)
            } else {
                page.changePage("connection/connectionStatus.html");
            }
        },

        reloadMain: function() {
            var url = location.href;
            page.changePage(url)
        },

        ajaxlink: function() {
            $('.changePageLink').live('click', function() {
                var url = $(this).attr('href');
                url = url.replace(/^.*#/, '');
                page.changePage(url);
            });
        },

        /* setCurrentMenu:function (currentMenu) {
        if (currentMenu != null) {
            $("#topMenu li").removeClass("current");
            $("#topMenu li").eq(currentMenu - 1).addClass("current");
        }
    },*/

        startLoading: function() {
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

        },

        stopLoading: function() {
            $("#mask,#loading").css("display", "none");
        },

        ajaxPage: function(url, articleId) {
            $.ajax({
                type: "GET",
                url: url + "?rand=" + Math.random(),
                dataType: "html",
                success: function(data) {
                    $(articleId).html("").empty().html(data);
                }
            });
        },

        pageInit: function() {
            $(".btnNormal:enabled").bind("mouseover", function() {
                $(this).addClass("hover");
            })
            $(".btnNormal:enabled").bind("mouseout", function() {
                $(this).removeClass("hover");
            })
            $("button,a").bind('focus', function() {
                if (this.blur) {
                    this.blur();
                };
            });
            if ($.browser.msie) {
                if ($.browser.version == "6.0" || $.browser.version == "7.0") {
                    $("#mainBox .btnNormal").css("border", "none");
                    $("#mainBox .btnNormal").wrap("<div class='btnWrap'></div>");
                }
            }
            if (pageName != "networkRegist" && intervalgetNetworkRegisterResult != null) {
                clearInterval(intervalgetNetworkRegisterResult);
                intervalgetNetworkRegisterResult = null;
            }

            if (pageName != "networkSelection" && intervalgetNetworkList != null) {
                clearTimeout(intervalgetNetworkList);
                intervalgetNetworkList = null;
            }

            if (pageName != "sendResult" && interGetSendResult != null) {
                clearTimeout(interGetSendResult);
                interGetSendResult = null;
            }
        }

    }

    var defaultPage = {
        init: function() {
            listenLogout.flushed();
            var that = this;
            if($.trim(config.titleValue)==''||config.titleValue=='None'){
                document.title ="";
            }else{
                document.title = config.titleValue;
            }
            sessionId = SDK.User.GetLoginState();
            if (sys.isLogin(sessionId)) {
                page.initload();
                listenLogout.init();
            } else {
                window.location.href = "index.html";
            }
            page.pageInit()
            page.ajaxlink();
            that.refreshImgStatus();
            that.startRefreshImgStatus();
            that.showArticleContent();
            showSmsCardState(simCardState, pinState, simlockState);

        },

        showArticleContent: function() {
            var htmlContent = [];
            // for each module
            $.each(contentConfig, function(i, v) {
                var articleTemplate = $("<article>", {
                    "id": v.module
                }).addClass(v.className);
                htmlContent.push(articleTemplate);
                $('#container #content').append(htmlContent);
                var navElement = "<li><a href='javascript:void(0)'><span class='hide'>{{" + v.module + "}}</span></a></li>";
                $("#main ul.nav").append(navElement);
                page.ajaxPage(v.path + ".html", "#" + v.module);
            });
        },

        showSignalState: function(iLen) {
            var $signalImg = $(".status-wrap .singal-wrap span");
            var value = /^[0,1,2,3,4]$/;
            iLen = parseInt(iLen);
            if (iLen > 4) {
                iLen = 4;
            }
            iLen = value.test(iLen) ? iLen : 0;
            $signalImg.removeClass().addClass("icon singal" + iLen);
            /*connection*/
            var $ConnsignalImg = $("#signalImg");

            $ConnsignalImg.removeClass().addClass("icon singal" + iLen);
        },

        showWanState: function(iwanState) {
            var $wanImg = $(".status-wrap .network-wrap span");
            var value = /^[2]$/;
            iwanState = parseInt(iwanState);
            iwanState = value.test(iwanState) ? 1 : 0;
            $wanImg.removeClass().addClass("icon network" + iwanState);
        },

        showSmsState: function(ismsState) {
            var $smsImg = $(".status-wrap .sms-wrap span");
            var value = /^[0,1,2,3]$/;
            ismsState = parseInt(ismsState);
            ismsState = value.test(ismsState) ? ismsState : 0;
            if (ismsState == MACRO_SMS_FULL) {
                $smsImg.parent().removeClass("hidden");
                $smsImg.removeClass().addClass("icon sms1");
                if (config.SmsIconRedirecting) {
                    defaultPage.SmsRedirecting($smsImg);
                }
            } else if (ismsState == MACRO_SMS_NEW) {
                $smsImg.parent().removeClass("hidden");
                $smsImg.removeClass().addClass("icon sms3");
                if (config.SmsIconRedirecting) {
                    defaultPage.SmsRedirecting($smsImg);
                }
            } else {
                $smsImg.parent().addClass("hidden");
            }
        },

        SmsRedirecting: function(smsImg) {
            smsImg.bind("click", function() {
                cf.moveToIndex(getIndexByPageUrl("#sms/smsList.html"));
                setTimeout(function() {
                    page.changePage("#sms/smsList.html");
                }, 500);
            });
        },

        showWlanState: function(iwlanState, iuserNum, itotalConnNum) {
            var $wlanImg = $(".status-wrap .wifi-wrap span");
            var $userNumWrap = $(".status-wrap .count");
            var $userNum = $(".status-wrap #userNum");
            var value = /^[0,1,2]$/;
            iwlanState = parseInt(iwlanState);
            iwlanState = value.test(iwlanState) ? iwlanState : 0;
            if (iwlanState != 0 && iuserNum > 0) {
                $userNumWrap.removeClass("hidden");
                $userNum.html(iuserNum);
            } else {
                $userNumWrap.addClass("hidden");
            }
            if (iwlanState == 2) {
                $userNumWrap.hide();
                $wlanImg.parent().css({
                    "width": "28px"
                });
                $wlanImg.removeClass().addClass("icon wifi2").html("WPS");
            } else {
                $userNumWrap.show();
                $wlanImg.parent().css({
                    "width": "19px"
                });
                $wlanImg.html("").removeClass().addClass("icon wifi" + iwlanState);
            }
            /*connection*/
            $("#spnconnectedPerson").html(itotalConnNum);
        },


        showBatteryState: function(ibatteryState, ibatterylvl, ibatterycap) {
            var $batteryIcon = $(".status-wrap .battery-icon");
            var $batteryImg = $("#batteryImg");
            var $iconBarCon = $(".icons .bar");
            var $iconBarStatus = $(".status-wrap .battery-icon-wrap .bar");
            var $batteryInfos = $("#infos-battery");
            if (!config.isNeedBattery) {
                $batteryInfos.prev().css("display", "none");
                $batteryInfos.css("display", "none");
                $("#infos-network,#infos-people").css("margin", "20px 0");
                return;
            }
            $(".battery-icon-wrap").removeClass("hidden");
            $batteryImg.removeClass();
            switch (ibatteryState) {
                case MACRO_BATTERY_CHARGING:
                    if (ibatterycap == 100) {
                        $iconBarStatus.addClass("hidden");
                        $iconBarCon.addClass("hidden");
                        $batteryIcon.addClass("battery100");
                        $batteryImg.addClass('icon battery4');
                    } else {
                        $iconBarStatus.addClass("hidden");
                        $iconBarCon.addClass("hidden");
                        $batteryIcon.removeClass("hidden").addClass("batterying");
                        $batteryImg.addClass('icon battery6');
                    }
                    break;
                case MACRO_BATTERY_COMPLATE:
                    $iconBarStatus.addClass("hidden");
                    $iconBarCon.addClass("hidden");
                    $batteryIcon.addClass("battery100");
                    $batteryImg.addClass('icon battery4');
                    break;
                default:
                    $batteryIcon.removeClass("batterying");
                    if (ibatterycap > 0 && ibatterycap < 5) {
                        $iconBarStatus.addClass("hidden");
                        $iconBarCon.addClass("hidden");
                        $batteryIcon.removeClass("hidden").addClass("battery0");
                        $batteryImg.addClass("icon battery0");
                    } else if (ibatterycap >= 5 && ibatterycap <= 10) {
                        $iconBarStatus.addClass("hidden");
                        $iconBarCon.addClass("hidden");
                        $batteryIcon.removeClass("hidden").addClass("battery5");
                        $batteryImg.addClass("icon battery5");
                    } else if (ibatterycap > 99) {
                        $iconBarStatus.addClass("hidden");
                        $iconBarCon.addClass("hidden");
                        $batteryIcon.addClass("battery100");
                        $batteryImg.addClass('icon battery4');
                    } else {
                        $batteryIcon.addClass("hidden");
                        $batteryImg.addClass("hidden");
                        $iconBarStatus.removeClass("hidden");
                        $iconBarCon.removeClass("hidden");
                        initProgressBar2($("li.battery-icon-wrap"), ibatterycap / 100);
                        initProgressBar2($("article#connection"), ibatterycap / 100);
                    }
            }
            $("#ibatterylvl").html(ibatterycap);
        },
        showNwType: function(iNetworkType) {
            var wanNetworkTypeStr = getNetworkTypeStr(iNetworkType);
            $spnWanNetworkType=$("#spnWanNetworkType")
            if (wanNetworkTypeStr == "NA") {
                $(".nw-type").addClass("hidden");
                $spnWanNetworkType.html(sys.getRes("ids_net_noService")).css({
                    "font-size": "19px"
                });
            } else {
                if (config.differNetworkTypeStylematchMcc) {
                    var Mcc = SDK.Network.GetNetworkInfo().mcc;
                    if (iNetworkType == 8) {
                        if ($.inArray(Mcc, config.MccArrLTE) != -1) {
                            wanNetworkTypeStr = "LTE";
                            config.isNetworkModeSelect.only4g.isActive = false;
                            config.isNetworkModeSelect.onlylte.isActive = true;
                        } else if ($.inArray(Mcc, config.MccArr4G) != -1) {
                            wanNetworkTypeStr = "4G";
                        } else {
                            wanNetworkTypeStr = "4G";
                        }
                    }

                    $(".nw-type").removeClass("hidden").html(wanNetworkTypeStr);
                    if (wanNetworkTypeStr.length < 6) {
                        $spnWanNetworkType.html(wanNetworkTypeStr).css({
                            "font-size": "40px"
                        });
                    } else {
                        $spnWanNetworkType.html(wanNetworkTypeStr).css({
                            "font-size": "19px"
                        });
                    }
                } else {
                    $(".nw-type").removeClass("hidden").html(wanNetworkTypeStr);
                    if (wanNetworkTypeStr.length < 6) {
                        $spnWanNetworkType.html(wanNetworkTypeStr).css({
                            "font-size": "40px"
                        });
                    } else {
                        $spnWanNetworkType.html(wanNetworkTypeStr).css({
                            "font-size": "19px"
                        });
                    }
                }

            }
            if (config.differNetworkTypeStyle) {
                var networkStyle;
                $.each(config.networkTypeStyle, function(i, v) {
                    if (i == iNetworkType) {
                        networkStyle = config.networkTypeStyle[i];
                    }
                });

                if (iNetworkType == 0) {
                    $(".nw-type").addClass("hidden");
                } else {
                    $(".nw-type").removeClass("hidden").html(networkStyle);
                }
            }
        },

        refreshImgStatus: function() {
            var that = this;
            SDK.requestJsonRpcAsync("GetUsageRecord", {
                current_time: getSystemTime()
            }, "7.1", function(data) {
                if (data == null) return;
                showUseHistory(data.HUseData, data.HCurrUseUL, data.HCurrUseDL, data.RoamUseData, data.RCurrUseUL, data.RCurrUseDL, data.TConnTimes, data.CurrConnTimes, data.MonthlyPlan);
            });

            //SDK.requestJsonRpcAsync("GetConnectionState", null, "7.1", function(data) {
            //  wanUsage = parseInt(data.UlBytes) + parseInt(data.DlBytes);
            //    connectTime = data.ConnectionTime;                                                            
            //});

            SDK.System.GetAsyncSystemStatus(function(data) {
                if (data == null) return;
                var _imgInfo = data;
                //console.log(_imgInfo.Roaming);
                /* right top status bar refresh*/
                that.showSignalState(_imgInfo.SignalStrength);
                that.showSmsState(_imgInfo.SmsState);
                that.showWlanState(_imgInfo.WlanState, _imgInfo.curr_num, _imgInfo.TotalConnNum);
                that.showNwType(_imgInfo.NetworkType);
                that.showWanState(_imgInfo.ConnectionStatus);
                that.showBatteryState(_imgInfo.chg_state, _imgInfo.bat_level, _imgInfo.bat_cap);
                showRoamIcon(_imgInfo.Roaming);
                /* online update need status refresh*/
                var value = /^[0,5]$/;
                batteryState = value.test(_imgInfo.bat_level) ? FOTA_BATTERY_STATE_ON_ENOUGH : FOTA_BATTERY_STATE_ENOUGH;
                AIRBOX.fota.showFotaMainThread(_imgInfo.ConnectionStatus);

                /* connection page need status refresh*/
                var ConnectionStateInfo = SDK.Connection.GetConnectionState();
                wanUsage = parseInt(ConnectionStateInfo.UlBytes) + parseInt(ConnectionStateInfo.DlBytes);
                connectTime = ConnectionStateInfo.ConnectionTime;
                showdefaultPageWanInfo(_imgInfo.ConnectionStatus, _imgInfo.NetworkName, wanUsage, connectTime);

                /* refresh connectedDevice and smsList page list when count changed */
                if (pageName == "connectedDevice") {
                    if (tmp_connectedNum != _imgInfo.TotalConnNum) {
                        AIRBOX.connectedDevice.init();
                    }
                    tmp_connectedNum = _imgInfo.TotalConnNum;
                }
                if (_imgInfo.SmsState != 0) {
                    var SMSStorageState = SDK.SMS.GetSMSStorageState();
                    var unreadSMSCount = SMSStorageState.UnreadSMSCount;
                    var smsReportState = SMSStorageState.UnreadReport;
                    if (tmp_unreadSMSCount < unreadSMSCount || smsReportState == 1) {
                        if (pageName == "smsList") {
                            AIRBOX.smsList.init();
                        } else if (pageName == "smsRead") {
                            AIRBOX.smsRead.initRead();
                        }
                    }
                    tmp_unreadSMSCount = unreadSMSCount;
                }
            });
            if (config.isClearCode) {
                _clearCode();
            }
        },

        refreshImgInterval: null,
        startRefreshImgStatus: function() {
            var that = this;
            if (that.refreshImgInterval != null) {
                that.stopRefreshImgStatus();
            }
            that.refreshImgInterval = setInterval(function() {
                that.refreshImgStatus();
            }, 10000);
        },

        stopRefreshImgStatus: function() {
            var that = this;
            if (that.refreshImgInterval != null) {
                clearInterval(that.refreshImgInterval);
                that.refreshImgInterval = null;
            }
        }
    }

    $(function() {
    	$(".status-wrap .sms-wrap").bind("click", function(){
                cf.moveToIndex(getIndexByPageUrl("#sms/smsList.html"));
                 setTimeout(function() {
                page.changePage("#sms/smsList.html");
                 }, 100);
                })
        if ($.browser.msie) {
            if ($.browser.version == "6.0" || $.browser.version == "7.0") {
                $("#navigation .btnNormal").css("border", "none");
                $("#navigation .btnNormal").wrap("<div class='btnWrap'></div>");
            }
        }
    })

    /* -------------------------------------------------------------------------
     class - slide
     ----------------------------------------------------------------------------- */
    AIRBOX.slide = (function() {
        var s = {
                $container: $("#main #container"),
                $shadow: $("#shadow"),
                $content: $("#main #content"),
                $btnLeft: $("#main .btnSlide.left"),
                $btnRight: $("#main .btnSlide.right"),
                $nav: $("#main ul.nav"),
                widthArticle: 0,
                numArticle: 0,
                nbArticles: 0,
                moving: false,
                ARTICLE_MARGIN: 21,
                EASING: 'easeOutSine',
                SPEED: 350,
                HEIGHT: 460,
                HEIGHT_BUTTON: $("#main .btnSlide.left").height()
            },
            cs = {},
            $_win = $(window);

        s.numArticle = getIndexByPageUrl();

        function init(options) {
            $.extend(s, options);
            cs = AIRBOX.core.settings;

            $_win.on("resize.slide", _resize); //add resize event when windows resize

            _initContent();
            _initBtn();
            _initNav();

            if (cs.isTouch) _initTouch();

            _resize();
        };

        function _initContent() {
            s.widthArticle = $("article", s.$content).outerWidth() + s.ARTICLE_MARGIN;
            s.nbArticles = $("article", s.$content).length;

            s.$content.css({
                width: (s.widthArticle * s.nbArticles) + "px"
            });
        };

        function _initNav() {
            _slide();

            $("li", s.$nav).each(function(i) {
                $(this).on(cs.clickEvent, {
                    index: i
                }, function(event) {
                    event.preventDefault();
                    var data = event.data;

                    s.numArticle = data.index;
                    cf.moveToIndex(s.numArticle)
                    _slide();
                });
            })
        };

        function _initBtn() {
            s.$btnLeft.on(cs.clickEvent, function(e) {
                e.preventDefault();
                if (s.moving) return;
                cf.moveToIndex('pre');
                if (s.numArticle == 0) {
                    s.numArticle = contentConfig.length - 1;
                } else {
                    s.numArticle--;
                }
                _slide();
            });

            s.$btnRight.on(cs.clickEvent, function(e) {
                e.preventDefault();
                if (s.moving) return;
                cf.moveToIndex('next');
                if (s.numArticle == contentConfig.length - 1) {
                    s.numArticle = 0;
                } else {
                    s.numArticle++;
                }
                _slide();
            });
        };

        function _initTouch() {
            /*fix win10 and win8 touch firefox input and select canot use bug*/
            if(navigator.userAgent.indexOf("Firefox")>0 && Modernizr.touch && navigator.userAgent.indexOf("Windows NT 10")>0){  
                return;
            }
            if(navigator.userAgent.indexOf("Firefox")>0 && Modernizr.touch && (navigator.userAgent.indexOf("Windows NT 6")>0 || navigator.userAgent.indexOf("Windows NT 8")>0)){  
                return;
            }
            /**/
            $.extend($.fn.swipe.defaults, {
                excludedElements: ".noSwipe"
            });
            cs.$body.swipe({
                swipeLeft: function(event, direction, distance, duration, fingerCount) {
                    cf.moveToIndex('next');
                    s.numArticle = getIndexByPageUrl();
                    if (s.numArticle == contentConfig.length - 1) {
                        s.numArticle = 0;
                    } else {
                        s.numArticle++;
                    }
                    _slide();
                },
                swipeRight: function(event, direction, distance, duration, fingerCount) {
                    cf.moveToIndex('pre');
                    s.numArticle = getIndexByPageUrl();
                    if (s.numArticle == 0) {
                        s.numArticle = contentConfig.length - 1;
                    } else {
                        s.numArticle--;
                    }
                    _slide();
                },
                threshold: 40
            });
        }

        function _slide() {
            $("li", s.$nav).removeClass("on");
            $("li:eq(" + s.numArticle + ")", s.$nav).addClass("on");
        };

        function _resize() {
            _initNav();
            var $navHeader = $("#headerNav"),
                l = s.$content.position().left,
                t = s.$container.position().top + (s.HEIGHT / 2 - s.HEIGHT_BUTTON / 2),
                l1 = $_win.width() / 2 - s.$nav.width() / 2,
                t0 = $navHeader.offset().top + $navHeader.height(),
                t1 = t0 + ((cs.$header.height() - t0) / 2 - s.$nav.height() / 2);

            s.$btnRight.css({
                top: t + "px"
            });
            s.$btnLeft.css({
                top: t + "px"
            });

            s.$container.css({
                left: Math.floor(s.$container.offset().left + "px")
            });

            s.$nav.css({
                left: l1 + "px",
                //top: cs.$header.height() + s.HEIGHT + "px"
            });
        };

        function _initClickItem() {
            $(".activePre .article-mask").off().on(cs.clickEvent, function() {
                cf.moveToIndex('pre')
            });
            $(".activeNext .article-mask").off().on(cs.clickEvent, function() {
                cf.moveToIndex('next')
            });
        }
        return {
            init: init,
            initClickItem: _initClickItem
        };
    }())

    function getIndexByPageUrl(url) {
        if (!url) {
            var url = document.location.hash;
        }
        url = url.replace(/^.*#/, '');
        var pageMenu = url.split("/")[0];
        var pageIndex = 0;
        $.each(contentConfig, function(i, v) {
            if (v.module == pageMenu) {
                pageIndex = i;
            }
        });

        return pageIndex;
    };

    /*************************connection start********************************/
    function showSmsCardState(simCardState, pinState, simlockState, callback) {
        var $simCardStatus = $(".statusContent");
        var $connectShow = $(".connectShow");
        var $smsShow = $("#smsContent");
        var simStateStr = getSimCardState(simCardState, pinState);
        switch (simStateStr) {
            case "noCard":
                $simCardStatus.html(sys.getRes("ids_sim_noSimCard"));
                $connectShow.css("display", "none");
                $smsShow.css("display", "none");
                break;
            case "simIniting":
                $simCardStatus.html(sys.getRes("ids_sim_initializing"));
                $connectShow.css("display", "none");
                $smsShow.css("display", "none");
                break;
            case "invalid":
                $simCardStatus.html(sys.getRes("ids_sim_invalidSimCard"));
                $connectShow.css("display", "none");
                $smsShow.css("display", "none");
                break;
            case "pinReq":
                $simCardStatus.html("").append('<a class=\"simstatus-link\">' + sys.getRes("ids_sim_pinRequired") + '</a>');
                $simCardStatus.append('<div class=\"simstatus-text\">' + sys.getRes("ids_sim_pinRequiredTips") + '</div>');
                $connectShow.css("display", "none");
                $smsShow.css("display", "none");
                break;
            case "pukReq":
                $simCardStatus.html("").append('<a class=\"simstatus-link\">' + sys.getRes("ids_sim_pukRequired") + '</a>');
                $simCardStatus.append('<div class=\"simstatus-text\">' + sys.getRes("ids_sim_pukRequiredTips") + '</div>');
                $connectShow.css("display", "none");
                $smsShow.css("display", "none");
                break;
            case "normal":
                $simCardStatus.css("display", "none");
                $connectShow.css("display", "block");
                $smsShow.css("display", "block");
                if (callback) {
                    callback();
                }
                break;
            case "simLock":
                if (simlockState == SIMLOCK_PERSO_RCK_FORBID) {
                    $simCardStatus.html(sys.getRes("ids_sim_lockForbidden"));
                    $connectShow.css("display", "none");
                    $smsShow.css("display", "none");
                } else {
                    $simCardStatus.html("").append('<a class=\"simstatus-link\">' + sys.getRes("ids_sim_simLocked") + '</a>');
                    $simCardStatus.append('<div class=\"simstatus-text\">' + sys.getRes("ids_sim_simLockedTips") + '</div>');
                    $connectShow.css("display", "none");
                    $smsShow.css("display", "none");
                }
                break;
        }
        $(".simstatus-link").bind("click", function() {
            cf.moveToIndex(getIndexByPageUrl("#settings/pinManagement.html"));
            setTimeout(function() {
                page.changePage("#settings/pinManagement.html");
            }, 500);
        });
    }

    function showdefaultPageWanInfo(connectionState, networkName, wanUsage, connectTime) {
        var $connectImg = $("#connectImg");
        var $mainNetType = $("#mainNetType");
        var $switchs = $("article#connection .switch")
        var wanUsageStr = sys.covertNum(wanUsage == null ? 0 : wanUsage);
        var wanConnectStateStr;
        var wanNetworkNameStr = getNetworkNameStr(networkName);

        switch (connectionState) {
            case MACRO_PPP_CONNECTED:
                wanConnectStateStr = sys.getRes("ids_wan_connected");
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
                break;
            case MACRO_PPP_DISCONNECTING:
                wanConnectStateStr = sys.getRes("ids_wan_disconnecting");
                $switchs.removeClass().addClass("switch loading");
                break;
            default:
                wanConnectStateStr = sys.getRes("ids_wan_disconnected");
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
        if (connectionState != MACRO_PPP_CONNECTED) {
            rate = 0;
            connectTime = 0;
            wanUsage = 0;
            wanUsageStr = sys.covertNum(wanUsage = 0);
        }
        $("#spnWanNetworkName").html(wanNetworkNameStr);
        if (wanNetworkNameStr == "&nbsp;") {
            $("#spnWanNetworkName").attr("title", "");
        } else {
            $("#spnWanNetworkName").attr("title", wanNetworkNameStr);
        }

        if (G_connectTimeTimer != null) {
            clearInterval(G_connectTimeTimer);
            G_connectTimeTimer = null;
        }
        if (connectionState == 2) {
            G_connectTime = connectTime
            $("#spnConnectTime").html(getDurTime(G_connectTime));

            G_connectTimeTimer = setInterval(function() {
                G_connectTime++;
                $("#spnConnectTime").html(getDurTime(G_connectTime));
            }, 1000)
        } else {
            $("#spnConnectTime").html(getDurTime(connectTime));
        }
        $("#spnWanUsage").html(wanUsageStr);
        $("#spnWanConnectState").html(wanConnectStateStr);
        if (config.simCardOperatorName) {
            var SIMstates = SDK.SIM.GetSimStatus().SIMState;
            if (SIMstates == 7) {
                simOperatorName(wanNetworkNameStr);
            }
        }
    }

    function simOperatorName(wanNetworkNameStr) {
        $(".simOperatorName").removeClass("hidden");
        $(".operatorName").html(wanNetworkNameStr);
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

    /*************************connection end********************************/

    /*************************Usage satrt********************************/

    function showUseHistory(HUseData, HCurrUseUL, HCurrUseDL, RoamUseData, RCurrUseUL, RCurrUseDL, TConnTimes, CurrConnTimes, MonthlyPlan) {
        $("#home_total_usage").html(sys.covertNum(HUseData));
        $("#home_curr_upload").html(sys.covertNum(HCurrUseUL));
        $("#home_curr_download").html(sys.covertNum(HCurrUseDL));
        $("#roam_total_usage").html(sys.covertNum(RoamUseData));
        $("#roam_curr_upload").html(sys.covertNum(RCurrUseUL));
        $("#roam_curr_download").html(sys.covertNum(RCurrUseDL));
        $("#max_usage").html(sys.covertNum(MonthlyPlan));
        $("#total_times").html(getDuringHours(TConnTimes));
        $("#curr_times").html(getDuringHours(CurrConnTimes));
        var usageSettingsInfos = SDK.Statistics.GetUsageSettings();
        var TimeLimitFlags = usageSettingsInfos.TimeLimitFlag;
        var AutoDisconnFlags = usageSettingsInfos.AutoDisconnFlag;
        if (MonthlyPlan == 0) {
            $("#usage .bar,#max_usage_sets").css("display", "none");
        } else {
            initProgressBar($("article#usage"), HUseData / MonthlyPlan)
            $("#usage .bar,#max_usage_sets").css("display", "block");
        }
        if (MonthlyPlan != 0 && HUseData >= MonthlyPlan && AutoDisconnFlags == 1) {
            $("#usage_limit_icon").css("display", "block");
        } else {
            $("#usage_limit_icon").css("display", "none");
        }
        if (timeLimitTimes != 0 && CurrConnTimes >= timeLimitTimes * 60 && TimeLimitFlags == 1) {
            $("#time_limit_icon").css("display", "block");
        } else {
            $("#time_limit_icon").css("display", "none");
        }
        $("#start_dataConsumption").html(sys.covertNum(HUseData));
        $("#start_timePassed").html(getTimePassed(CurrConnTimes));
        /*if (clearTime != null)
            clearTime = clearTime.split(" ")[0];
        $("#lblClearTime").html(clearTime)*/
    }
    /*************************Usage end********************************/

    /*************************default unit satrt***********************/
    function initScroll($content) {
        $('.scroll-pane', $content).jScrollPane();
        $('.scroll-pane .jspPane', $content).children().off('resize').resize(function(e) {
            initScroll($content);
        });
    };

    function getDurTime(time) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time - hours * 3600) / 60);
        var second = time - hours * 3600 - minutes * 60;

        function formatTiem(time) {
            time = parseInt(time);
            return (time < 10 ? "0" : "") + time;
        }
        return hours + ":" + formatTiem(minutes) + ":" + formatTiem(second);
    }

    function getTimePassed(time) {
        var day = Math.floor(time / (3600 * 24));
        var hours = Math.floor((time - day * 3600 * 24) / 3600);
        var minutes = Math.floor((time - day * 3600 * 24 - hours * 3600) / 60);

        return day + " " + sys.getRes("ids_usage_day") + " " + hours + " " + sys.getRes("ids_usage_hours") + " " + minutes + " " + sys.getRes("ids_usage_minutes");
    }

    function getDuringHours(time) {
        var hours = Math.floor(time / 3600);
        var minutes = Math.floor((time - hours * 3600) / 60);

        return hours + "&nbsp;"+sys.getRes("ids_usage_hrs") + "&nbsp;" + minutes + "&nbsp;" + sys.getRes("ids_usage_min");
    }

    function getUrlPara(paraName) {
        var sUrl = location.href;
        var sReg = "(?:\\?|&){1}" + paraName + "=([^&]*)"
        var re = new RegExp(sReg, "gi");
        re.exec(sUrl);
        return RegExp.$1;
    }


    function check_password(str) {
        return /^[A-Za-z0-9\-\+\!\^\$\@\#\&\*]{4,16}$/.test(str);
    }


    function check_ssid(str) {
        return /^[A-Za-z0-9\.\s\-\_]+$/.test(str);
    }


    function check_profile_password(str) {
        return !(/[\s'\"\\]/g.test(str))
    }

    function checkProfileName(name) {
        return !(/[:;\,\"\\&%<>?\+]+/g.test(name));
    }

    function show_sms_time(seconds) {
        var time_i = parseInt(seconds);
        var time_base = new Date(1980, 0, 6, 0, 0, 0, 0);
        var time_space = time_base.getTime();
        var all_time_space = new Date(time_i * 1000 + time_space);
        var nowDateTime = new Date(parseInt((all_time_space.getTime())));

        var year = nowDateTime.getFullYear();
        var month = nowDateTime.getMonth() + 1;
        var day = nowDateTime.getDate();
        var hours = nowDateTime.getHours();
        var minutes = nowDateTime.getMinutes();
        var seconds = nowDateTime.getSeconds();

        function isDayLightTime(time) {
            var now = new Date(time);
            var start = new Date();
            start.setMonth(0);
            start.setDate(1);
            start.setHours(0);
            start.setMinutes(0);
            start.setSeconds(0);

            var middle = new Date(start.getTime());
            middle.setMonth(6);
            if ((middle.getTimezoneOffset() - start.getTimezoneOffset()) == 0) {
                return false;
            }
            var margin = 0;
            if (now.getTimezoneOffset() < 0) {
                margin = start.getTimezoneOffset();
            } else {
                margin = middle.getTimezoneOffset();
            }
            if (now.getTimezoneOffset() == margin) {
                return true;
            }
            return false;
        }

        function formatStr(val) {
            var times = parseInt(val);
            var timeStr = times.toString();
            return times < 10 ? "0" + timeStr : timeStr;
        }

        hours = isDayLightTime(nowDateTime) ? hours - 1 : hours;
        var timeStr = year + "-" + month + "-" + day + " " + hours + ":" + formatStr(minutes) + ":" + formatStr(seconds);
        return timeStr;
    }

    function show_SD_time(sms_time) {
        var time_i = parseInt(sms_time);
        //var time_base = new Date(1970,0,6,0,0,0,0);
        //var time_space = time_base.getTime();
        var all_time_space = new Date(time_i * 1000);
        var nowDateTime = new Date(parseInt((all_time_space.getTime())));
        var year = nowDateTime.getFullYear();
        var month = nowDateTime.getMonth() + 1;
        var day = nowDateTime.getDate();
        return year + "-" + month + "-" + day + " " + nowDateTime.toLocaleTimeString();
        //return nowDateTime.toLocaleDateString() + " " + nowDateTime.toLocaleTimeString();
    }

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

    function fomatTime(smsTime) {
        var curDate = new Date();
        var curYear = curDate.getFullYear();
        var curMonth = curDate.getMonth() + 1;
        var curDay = curDate.getDate();

        var smsDay, smsMonth, smsYear, smsHour, smsMinutes, tmpDate, tmpTime, hourUnit, twelveHour;
        tmpDate = smsTime.split(" ")[0];
        tmpTime = smsTime.split(" ")[1];
        smsDay = tmpDate.split("-")[0];
        smsMonth = tmpDate.split("-")[1];
        smsYear = tmpDate.split("-")[2];
        smsHour = tmpTime.split(":")[0];
        smsMinutes = tmpTime.split(":")[1];

        switch (config.SmsTimeFormat) {
            case sms_time_type_ymd:
                tmpTime = smsHour + ":" + smsMinutes;
                //tmpDate;// = smsDay + "-" + smsMonth + "-" + smsYear;
                break;
            case sms_time_type_dmy:
                tmpTime = smsHour + ":" + smsMinutes;
                tmpDate = smsYear + "-" + smsMonth + "-" + smsDay;
                break;
            case sms_time_type_mdy:
                twelveHour = smsHour % 12 || 12;
                if (smsHour > 0 && smsHour < 12) {
                    hourUnit = "AM";
                } else {
                    hourUnit = "PM";
                }
                tmpTime = twelveHour + ":" + smsMinutes + hourUnit;
                tmpDate = smsMonth + "/" + smsYear + "/" + smsDay;
                break;
            case sms_time_type:
                tmpTime = smsHour + ":" + smsMinutes;
                tmpDate = smsYear + "/" + smsMonth + "/" + smsDay;
                break;
            default:
                tmpTime = smsHour + ":" + smsMinutes;
                tmpDate = smsDay + "/" + smsMonth + "/" + smsYear;
        }
        if (curYear == smsDay && curMonth == smsMonth && curDay == smsYear) {
            smsTime = tmpTime;
        } else {
            smsTime = tmpDate + " " + tmpTime;
            if (config.SmsTimeFormat == sms_time_type_mdy) {
                smsTime = tmpTime + " " + tmpDate;
            }
        }
        return smsTime;
    }

    function isASCIIData(str) {
        if (str == null) {
            return true;
        }
        var i = 0;
        var char_i;
        var num_char_i;
        for (i = 0; i < str.length; i++) {
            char_i = str.charAt(i);
            num_char_i = char_i.charCodeAt();
            if (num_char_i > 255) {
                return false;
            }
        }
    }


    function isHexaDigit(digit) {
        var hexVals = new Array("0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "A", "B", "C", "D", "E", "F", "a", "b", "c", "d", "e", "f");
        var len = hexVals.length;
        var i = 0;
        var ret = false;
        for (i = 0; i < len; i++) {
            if (digit == hexVals[i]) {
                break;
            }
        }

        if (i < len) {
            ret = true;
        }
        return ret;
    }


    function isHexaData(data) {
        var len = data.length;
        var i = 0;
        for (i = 0; i < len; i++) {
            if (isHexaDigit(data.charAt(i)) == false) {
                return false;
            }
        }
        return true;
    }

    function check_input_char_deleteBackSlash(str){
        var i;
        var char_i;
        var num_char_i;
        if (str == "") {
            return true;
        }

        for (i = 0; i < str.length; i++) {
            char_i = str.charAt(i);
            num_char_i = char_i.charCodeAt();
            if ((num_char_i > MACRO_SUPPORT_CHAR_MAX) || (num_char_i < MACRO_SUPPORT_CHAR_MIN)) {
                return false;
            } else if ((MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_COLON == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_SEMICOLON == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_38 == num_char_i)) {
                return false;
            } else {
                continue;
            }
        }
        return true;

    }


    function check_input_char(str) {
        var i;
        var char_i;
        var num_char_i;
        if (str == "") {
            return true;
        }

        for (i = 0; i < str.length; i++) {
            char_i = str.charAt(i);
            num_char_i = char_i.charCodeAt();
            if ((num_char_i > MACRO_SUPPORT_CHAR_MAX) || (num_char_i < MACRO_SUPPORT_CHAR_MIN)) {
                return false;
            } else if ((MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_COLON == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_SEMICOLON == num_char_i) || (MACRO_NOT_SUPPORT_BACKSLASH_MARK == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_38 == num_char_i)) {
                return false;
            } else {
                continue;
            }
        }
        return true;
    }


    function is_wep_key(key, key_encrp) {
        var len = key.length;
        if (key_encrp == 0) {
            if (len != 5 && len != 10) {
                return false;
            }
        }


        if (key_encrp == 1) {
            if (len != 13 && len != 26) {
                return false;
            }
        }

        switch (len) {
            case 5:
            case 13:
                if (isASCIIData(key) == false) {
                    return false;
                }
                break;
            case 10:
            case 26:
                if (isHexaData(key) == false) {
                    return false;
                }
                break;
            default:
                return false;
        }
        return true;
    }


    function isNumber(str) {
        var i;
        if (str.length <= 0) {
            return false;
        }
        for (i = 0; i < str.length; i++) {
            var c = str.charCodeAt(i);
            if (c < 48 || c > 57) {
                return false;
            }
        }
        return true;
    }


    function IsSameSubnetAddrs(Ip1, Ip2, mask) {
        var addrParts1 = Ip1.split(".");
        var addrParts2 = Ip2.split(".");
        var maskParts = mask.split(".");
        for (i = 0; i < 4; i++) {
            if (((Number(addrParts1[i])) & (Number(maskParts[i]))) != ((Number(addrParts2[i])) & (Number(maskParts[i])))) {
                return false;
            }
        }
        return true;
    }

    function isSameSubnetAvailableIp(startIp, homeIp) {
        var S = startIp.split(".");
        var H = homeIp.split(".");

        if (parseInt(S[3]) > (parseInt(H[3]) + 10) || parseInt(S[3]) < parseInt(H[3])) {
            return true;
        } else {
            return false;
        }
    }

    function getLeftMostZeroBitPos(num) {
        var i = 0;
        var numArr = [128, 64, 32, 16, 8, 4, 2, 1];
        for (i = 0; i < numArr.length; i++)
            if ((num & numArr[i]) == 0)
                return i;
        return numArr.length;
    }


    function getRightMostOneBitPos(num) {
        var i = 0;
        var numArr = [1, 2, 4, 8, 16, 32, 64, 128];
        for (i = 0; i < numArr.length; i++)
            if (((num & numArr[i]) >> i) == 1)
                return (numArr.length - i - 1);
        return -1;
    }


    function isValidSubnetMask(mask) {
        var i = 0;
        var num = 0;
        var zeroBitPos = 0,
            oneBitPos = 0;
        var zeroBitExisted = false;
        if (mask == '0.0.0.0') {
            return false;
        }
        if (mask == '255.255.255.255') {
            return false;
        }
        var maskParts = mask.split('.');
        if (maskParts.length != 4) {
            return false;
        }
        for (i = 0; i < 4; i++) {
            if (isNaN(maskParts[i]) == true) {
                return false;
            }
            if (maskParts[i] == '') {
                return false;
            }
            if (maskParts[i].indexOf(' ') != -1) {
                return false;
            }
            if ((maskParts[i].indexOf('0') == 0) && (maskParts[i].length != 1)) {
                return false;
            }
            num = parseInt(maskParts[i]);
            if (num < 0 || num > 255) {
                return false;
            }
            if (zeroBitExisted == true && num != 0) {
                return false;
            }
            zeroBitPos = getLeftMostZeroBitPos(num);
            oneBitPos = getRightMostOneBitPos(num);
            if (zeroBitPos < oneBitPos) {
                return false;
            }
            if (zeroBitPos < 8) {
                zeroBitExisted = true;
            }
        }
        return true;
    }


    function isValidIpAddress(address) {
        var addrParts = address.split('.');
        if (addrParts.length != 4) {
            return false;
        }
        for (i = 0; i < 4; i++) {
            if (isNaN(addrParts[i]) == true) {
                return false;
            }
            if (addrParts[i] == '') {
                return false;
            }
            if (addrParts[i].indexOf(' ') != -1) {
                return false;
            }
            if ((addrParts[i].indexOf('0') == 0) && (addrParts[i].length != 1)) {
                return false;
            }
        }
        if ((addrParts[0] <= 0 || addrParts[0] == 127 || addrParts[0] > 223) || (addrParts[1] < 0 || addrParts[1] > 255) || (addrParts[2] < 0 || addrParts[2] > 255) || (addrParts[3] <= 0 || addrParts[3] >= 255)) {
            return false;
        }
        return true;

    }

    function inet_aton(a) {
        var n;
        n = a.split(/\./);
        if (n.length != 4) {
            return 0;
        }
        return ((n[0] << 24) | (n[1] << 16) | (n[2] << 8) | n[3]);
    }


    function inet_ntoa(n) {
        var a;
        a = (n >> 24) & 255;
        a += "."
        a += (n >> 16) & 255;
        a += "."
        a += (n >> 8) & 255;
        a += "."
        a += n & 255;
        return a;
    }


    function is_broadcast_or_network_address(Ip, Netmask) {
        var ip;
        var mask;
        var netaddr;
        var broadaddr;
        ip = inet_aton(Ip);
        mask = inet_aton(Netmask);
        netaddr = ip & mask;
        broadaddr = netaddr | ~mask;
        if (netaddr == ip || ip == broadaddr) {
            return false;
        }
        return true;
    }

    function IsAvailableIpPool(homeIp, startIp, endIp) {
        var H = homeIp.split(".");
        var S = startIp.split(".");
        var E = endIp.split(".");

        var x3 = 256 * 256 * 256;
        var x2 = 256 * 256;
        var x1 = 256;

        var H1 = (parseInt(H[0]) * x3) + (parseInt(H[1]) * x2) + (parseInt(H[2]) * x1) + parseInt(H[3]);
        var S1 = (parseInt(S[0]) * x3) + (parseInt(S[1]) * x2) + (parseInt(S[2]) * x1) + parseInt(S[3]);
        var E1 = (parseInt(E[0]) * x3) + (parseInt(E[1]) * x2) + (parseInt(E[2]) * x1) + parseInt(E[3]);

        return (S1 > (H1 + 10) || E1 < H1);
    }

    function check_host_name(name) {
        var doname = /^([\w-]+\.)+(home)$/;
        if (!doname.test(name)) {
            return false;
        }
        return true;
    }


    function check_input_dirname(str) {
        var i;
        var char_i;
        var num_char_i;
        if (str == "") {
            return true;
        }
        for (i = 0; i < str.length; i++) {
            char_i = str.charAt(i);
            num_char_i = char_i.charCodeAt();
            if ((MACRO_NOT_SUPPORT_CHAR_COMMA == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_QUOTATION_MARK == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_COLON == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_SEMICOLON == num_char_i) || (MACRO_NOT_SUPPORT_BACKSLASH_MARK == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_38 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_42 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_60 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_62 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_63 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_42 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_47 == num_char_i) || (MACRO_NOT_SUPPORT_CHAR_124 == num_char_i)) {
                return false;
            } else {
                continue;
            }
        }
        return true;
    }

    function formatHtmlStr(str) {
        var args = arguments,
            re = new RegExp("%([1-" + args.length + "])", "g");
        return String(str).replace(re, function($1, $2) {
            return args[$2];
        });
    }
    /*************************default unit end***********************/
