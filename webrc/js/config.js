var config = {
    allLanguage: {
        al: 'Shqipe',
        ar: 'العربية',
        br: 'Português(Brasil)',
        bu: 'български',
        ch: '简体中文',
        du: 'Nederlands',
        en: 'English',
        en_uk: 'English(UK)',
        en_us: 'English(US)',
        fr: 'Français',
        ge: 'Deutsch',
        gk: 'Ελληνικά',
        hg: 'Magyar',
        it: 'Italiano',
        ja: '日本語',
        mk: 'Македонија',
        pg: 'Português(Portugal)',
        po: 'Polski',
        ro: 'Română',
        ru: 'Русский',
        sp: 'Español',
        sp_latam: 'Español(Latam)',
        sr: 'Srpski',
        tw: '繁體中文',
        ur: 'Українська',
        da: 'Dansk',
        kz: 'Қазақша',
        kr: '한글',
        th: 'ไทย',
        cs: 'čeština',
        hr: 'Hrvatski',
        se: 'Sverige',
        sk: 'Slovensko',
        wr: 'اردو',
        vi: 'Vietnamese',
        tr: 'Turkish',
        si: 'Slovenian',
        fi: 'Suomi',
        no: 'Norge',
        ee: 'eesti',
        fa: 'فارسی',
        lv: 'Latvijas',
        lt: 'Lietuvos',
        id: 'Indonesia',
        my: 'Bahasa Malaysia'
    },
    sys_language: ['en', 'fr', 'it', 'sp'],
    sys_custom_language: [],
    differSimCardSupportLang: {
        isActive: false,
        simCardDTPL: [],
        simCardDTHR: []
    },
    langChioce: ["ar", "wr"],
    titleValue: "Alcatel",
    isLogoLink: "http://www.alcatelonetouch.com", //modify add 前缀：http://
    isLatamSMS: false,
    isSupportKickOff: false,
    isCustomCss: false,
    BandSupport: 2,
    WifiMaxUserSum: 15,
    WifiChannelAmount: 13,
    changePasswordWarningFlag: 0,
    isClearCode: 0,
    SmsTimeFormat: 4, //eg:2(HH:MM:SS AM(PM)month/day/year);1(DD-MM-YY HH:MM:SS);0(YY-MM-DD HH:MM:SS);3(DD/MM/YY HH:MM:SS);4(YY/MM/DD HH:MM:SS);5(DD.MM.YYYY HH:MM)
    isSmsCenterEditable: 0,
    SmsIconRedirecting: 0,
    LoginUsernameSupport: 3, //eg:1(fixed and gray);2(editable);3(hide,default is hide);4(login support user name,and input disabled,but adminSetup don't support.)
    SupportSmsRedirect: 0,
    SupportSD: 0,
    SupportPhonebook: 0,
    isSimCardDTPLSupportUssd: 0,
    homeConnectDialShow: 0,
    loginUserNameSet: 'ids_login_userName',
    isSimlockNckDigit: 10,
    isHardwareVersion: 0,
    isSystemIpAddress: 1,
    isSystemSubnetMask: 1,
    isUsageNotAccurateTips: false,
    isSimDialPinOperationWarn: 0,
    simCardOperatorName: 0,
    isRemoveSimlockRck: 0,
    isRemoveSimlockRckBtnOK:false,
    SupportProfileIpType: 0,
    SupportAddProfile: 1,
    SupportUssd: 0,
    SupportUssdBalance: 0,
    SupportTr069: 0,
    SupportWps: 1,
    SupportPeopleNum: 1,
    SupportWiFi: 1,
    SupportAdvancedSettings: 1,
    isNeedBattery: 1,
    WifiSwitchSupport: 1,
    SupportEditPassword: 1, //0-Disable;1-Enable
    SupportLogin: 1, //0-not support login;1-support login
    TimeForNonInbox: 0,
    SupportTimeLine: 0,
    NetworkModeSelection: 2, //eg:1(AUTO、3G/2G only);2(AUTO/4G only/3G only/2G only);3(AUTO/3G/2G only/4G only/3G only/2G only);4(AUTO/3G Only/3G/4G Only);5(AUTO/3G/2G only/3G only/2G only)
    SupportRememberUsernameAndPw: 0,
    SupportWiFiCertification: 0,
    SupportWlanInactivityTimer:0,//Configure wifi off time(0-Disable;1-Enable)
    SupportPDPTimer:0,//Suport PDP Timer(0-Disable;1-Enable)
    AutoSearchNetwork: 0,
    SupportRoamingIcon: 0,
    SupportPowerSaving: 0,
    FirewallSupport: 0,
    PortfwdingSupport: 0,
    DmzSupport: 0,
    IpfilterSupport: 0,
    URLFilterSupport: 0,
    PortFilterSupport: 0,
    UpnpSupport: 0,
    VPNSupport: 0,
    MacFilterSupport: 1,
    MaxPortfwdingNum: 16,
    MaxIpfilterNum: 16,
    MaxURLfilterNum: 10,
    MaxMacFilterNum: 10,
    MaxPortfilterNum: 10,
    IsShowWlanCountry: 0, //0:no;1:yes
    IsShowWlanAutoDisabledTips: 1, //0:no;1:yes
    singleLanguage: 0,
    differNetworkTypeStyle: 0,
    SupportNetDiagnostic: 0,
    SupportConnectionIpMode: 0,
    FotaUpgradeMode: 1,
    IsSupportSimHotPlug: false,
    IsPopPinBeforeAdmin: false,
    isIK40RefreshPopPin:false,
    IsFotaBatteryLevelNeedCheck: false,
    FOTA_BATTERY_ENOUGH_LEVEL: 30,
    customerWifiChannelAmount: [],
    SupportOpenNewPage: false,
    networkModePLMNDisplayLTE:'',
    isSupportClearDot:false,
    isSmsEncodingOptimization:false,
    isRemoveAutoPINFunction:false,
    isSupportHelpSelectionType:false,
    supportPLMNViewTypeIsLTE:{
        plmnArr:[],
        isActive:false
    },
    OpenNewPageLink: "http://www.alcatel-mobile.com/",
    openNewPageLinkSimPlmn:{
        simPlmnArr:[],
        isActive:false
    },
    supportSmsDeleteALLsingle: 0,
    IsAllowForbidNwRegister: false,
    DefaultCountry: "GB", //WIFI Channal default country code
    SupportAutoPin: 0, //0:Support;1:no Support
    differNetworkTypeStylematchMcc: 0, //0:no;1:yes
    SupportDNSSetting: 0,
    SupportmoovLogo: 0, //0:no;1:yes
    SupportdifferLanguageLogo: 0, //0:no;1:yes
    ConnectionActivePopu: true, //true:open,false:close
    IsRoamConnection: false, //true:open, false:close
    IsRoamConnectionModeTips:false,
    isRoamConnectionCloseConntected:false,
    isDownloadFOTABatteryLow30Tips:false,
    roamingUpdateFotaTips:0,
    SupportPlmnWifiCountryView:0,
    onlineUM:0,//是否开启在线UM
    onlineUmUrlPrefix:"http://www.alcatel-move.com/um/",//在线UM前缀
    umPath:"",
    umNamePrefix:"USER_Manual_",//UM name前缀
    wifiCountryNameLangView:[],
    SupportApIsotation:true,
    networkModeDisplayLTE:false,
    isSVNInfo:false,
    isUpgradeCompleteTips:false,
    isApnEmtypValide:false,
    //isUssdCmdStrRule:false,
    differentPlmnDisplayLogoUrlLink:[],//元素是数组eg:[['2222','url'],['2222','url']]
    isSupportWiFiSleep:false,
    networkTypeText3GTo4G:false,
    supportSendSMSThirty:{
        phoneNumberCount:3,
        isActive:false
    },
    supportChangeUserName:{
        changeUserName:'',
        isActive:false
    },
    SupportPhoneNumCustomeLinkAddress: {
        idsName: '',
        linkAddress: '',
        isActive: false
    },
    helplineNumber: {
        title: 'ids_HelplineNumber',
        contents: '',
        homeAndDefault: 1, //1-home page view;2-default page view;3-home and default view;
        isActive: false
    },
    isLoginTitlePassword: {
        name: "ids_password",
        isActive: true
    },
    isWebsiteLink: {
        linkAddress: 'http://www.alcatelonetouch.com', //modify add 前缀：http://
        name: 'Alcatel',
        isLoginOutHighlight: false, //val:true Highlight;false login Highlight
        isActive: false
    },
    webChat: {
        linkAddress: 'http://www.alcatelonetouch.com', //modify add 前缀：http://
        isActive: false
    },
    NetTypeNOSERVICE: 'NA', //NO_SERVICE
    NetTypeGPRS: '2G', //GPRS
    NetTypeEDGE: '2G', //EDGE
    NetTypeHSPA: '3G', //HSPA
    NetTypeHSUPA: '3G', //HSUPA
    NetTypeUMTS: '3G', //UMTS
    NetTypeHSPAPLUS: '3G+', //HSPA_PLUS
    NetTypeDCHSPAPLUS: '3G+', //DC_HSPA_PLUS
    NetTypeLTE: '4G', //LTE
    NetTypeLTEPLUS: '4G+', //LTE_PLUS
    SupportNetworkType: [
        'NetTypeNOSERVICE',
        'NetTypeGPRS',
        'NetTypeEDGE',
        'NetTypeHSPA',
        'NetTypeHSUPA',
        'NetTypeUMTS',
        'NetTypeHSPAPLUS',
        'NetTypeDCHSPAPLUS',
        'NetTypeLTE',
        'NetTypeLTEPLUS'
    ],
    MccArrLTE: [],
    MccArr4G: [],
    networkTypeStyle: ['NA', 'GPRS', 'EDGE', 'HSPA', 'HSUPA', 'UMTS', 'HSPA_PLUS', 'DC_HSPA_PLUS', 'LTE', 'LTE_PLUS'],
    isipLeaseTime: [{
            name: 'ids_hour',
            value: 1
        },
        /*{
            name:'ids_hours',
            value:2
        },*/
        {
            name: 'ids_hours',
            value: 6
        }, {
            name: 'ids_hours',
            value: 12
        }, {
            name: 'ids_hours',
            value: 24
        }
    ],
    profileItemIptype: {
        selItemVal: [{
            name: 'IPV4',
            value: 0
        }, {
            name: 'IPV6',
            value: 2
        }, {
            name: 'IPV4V6',
            value: 3
        }],
        isActive: false
    },
    isNetworkModeSelect: {
        auto: {
            name: 'ids_auto',
            value: 0,
            isActive: true
        },
        only2g: {
            name: 'ids_net_2gOnly',
            value: 1,
            isActive: true
        },
        only3g: {
            name: 'ids_net_3gOnly',
            value: 2,
            isActive: true
        },
        only4g: {
            name: 'ids_net_4gOnly',
            value: 3,
            isActive: true
        },
        only2g3g: {
            name: 'ids_net_2g3gOnly',
            value: 6,
            isActive: true
        },
        only3g4g: {
            name: 'ids_net_3g4gOnly',
            value: 5,
            isActive: true
        }
    },
    MoreItemList: {
        powerSaving: {
            titleName: 'ids_security_PowerSavingTitle',
            hrefAddress: '#more/powerSaving.html',
            className: 'changeLink',
            isActive: true
        },
        wps: {
            titleName: 'ids_title_wps',
            hrefAddress: '#more/wpsSetting.html',
            className: 'changeLink',
            isActive: true
        },
        onlineUpdate: {
            titleName: 'ids_more_onlineUpdate',
            hrefAddress: '#more/update.html',
            className: 'changeLink',
            isActive: true
        },
        Ussd: {
            titleName: 'ids_title_ussd',
            hrefAddress: '#more/ussdSetting.html',
            className: 'changeLink',
            isActive: true

        },
        Diagnostic: {
            titleName: 'ids_diagnostic',
            hrefAddress: '#more/diagnostic.html',
            className: 'changeLink',
            isActive: true

        },
        tr069: {
            titleName: 'ids_title_tr069',
            hrefAddress: '#more/tr069.html',
            className: 'changeLink',
            isActive: true
        },

        Ping: {
            titleName: 'ids_title_ping',
            hrefAddress: '#more/pingSetting.html',
            className: 'changeLink',
            isActive: false
        },
        DNSSetting: {
            titleName: "ids_title_dnsSetting",
            hrefAddress: '#more/dnsSetting.html',
            className: 'changeLink',
            isActive: false
        }
    },
    SettingsItemList: {
        wifiSettings: {
            titleName: 'ids_title_wifiSettings',
            hrefAddress: '#settings/wifiSetting.html',
            className: 'changePageLink',
            isActive: true
        },
        loginSettings: {
            titleName: 'ids_title_loginSettings',
            hrefAddress: '#settings/adminSetup.html',
            className: 'changePageLink',
            isActive: true
        },
        profilesMant: {
            titleName: 'ids_title_profilesManagement',
            hrefAddress: '#settings/profileManagement.html',
            className: 'changePageLink',
            isActive: true
        },
        pinCodeSettings: {
            titleName: 'ids_title_pinCodeSettings',
            hrefAddress: '#settings/pinManagement.html',
            className: 'changePageLink',
            isActive: true
        },
        connectMode: {
            titleName: 'ids_title_connectMode',
            hrefAddress: '#settings/connectionMode.html',
            className: 'changePageLink',
            isActive: true
        },
        networkMode: {
            titleName: 'ids_title_networkMode',
            hrefAddress: '#settings/networkSelection.html',
            className: 'changePageLink',
            isActive: true
        },
        advanced: {
            titleName: 'ids_title_advanced',
            hrefAddress: '#settings/routerSetting.html',
            className: 'changePageLink',
            isActive: true
        },
        security: {
            titleName: 'ids_security',
            hrefAddress: '#settings/securitySetting.html',
            className: 'changePageLink',
            isActive: false
        },
        about: {
            titleName: 'ids_title_about',
            hrefAddress: '#settings/systemSetting.html',
            className: 'changePageLink',
            isActive: true
        }
    },
    SecurityItemList: {
        Firewall: {
            titleName: 'ids_security_firewallSwitch',
            description: 'ids_security_firewallDes',
            hrefAddress: '#settings/firewallSetting.html',
            className: 'changePageLink',
            isActive: true
        },
        Portfwding: {
            titleName: 'ids_security_portForwarding',
            description: 'ids_security_pfDescription',
            hrefAddress: '#settings/portForwarding.html',
            className: 'changePageLink',
            isActive: true
        },
        DMZ: {
            titleName: 'ids_security_dmzTitle',
            description: 'ids_security_dmzDescription',
            hrefAddress: '#settings/dmzSetting.html',
            className: 'changePageLink',
            isActive: true
        },
        Upnp: {
            titleName: 'ids_security_upnp',
            description: 'ids_security_upnpDescription',
            hrefAddress: '#settings/upnpSetting.html',
            className: 'changePageLink',
            isActive: true
        },
        Ipfilter: {
            titleName: 'ids_security_ipFilter',
            description: 'ids_security_ipFilterDescription',
            hrefAddress: '#settings/ipFilter.html',
            className: 'changePageLink',
            isActive: true
        },
        URLFilter: {
            titleName: 'ids_security_urlFilterTitle',
            description: 'ids_security_urlFilterDescription',
            hrefAddress: '#settings/urlFilterSetting.html',
            className: 'changePageLink',
            isActive: true
        },
        PortFilter: {
            titleName: '',
            description: '',
            hrefAddress: '#settings/portFilter.html',
            className: 'changePageLink',
            isActive: true
        },
        VPN: {
            titleName: '',
            description: '',
            hrefAddress: '#settings/vpn.html',
            className: 'changePageLink',
            isActive: true
        },
    },
    modules: {
        connection: {
            module: 'connection',
            path: 'connection/connectionStatus',
            className: 'item blue item-connection',
            isActive: true
        },
        usage: {
            module: 'usage',
            path: 'usage/usageHistory',
            className: 'red item item-usage',
            isActive: true

        },
        sms: {
            module: 'sms',
            path: 'sms/smsList',
            className: 'pink item item-sms',
            isActive: true
        },
        settings: {
            module: 'settings',
            path: 'settings/settings',
            className: 'green item item-settings',
            isActive: true
        },
        sharing: {
            module: 'sharing',
            path: 'sharing/sharingSetting',
            className: 'yellow item item-sharing',
            isActive: true
        },
        more: {
            module: 'more',
            path: 'more/more',
            className: 'orange item item-more',
            isActive: true
        },
        phonebook: {
            module: 'phonebook',
            path: 'phonebook/phoneBookSetting',
            className: 'scarlet item item-phoneBook',
            isActive: true
        }
    },

    IsVerifyToken:false,
    IsEncryptionAndToken:true,//是否开启加密传输及header，token验证2017-10.24
    whiteListApi : [
        "GetLoginToken",
        "GetToken",
        "GetLoginState",
        "HeartBeat",
        "GetPasswordChangeFlag",
        "GetAutoRemenberPassword",
        "SetAutoRemenberPassword",
        "GetSimStatus",
        "UnlockPin",
        "UnlockPuk",
        "UnlockSimlock",
        "GetAutoValidatePinState",
        "SetAutoValidatePinState",
        "GetConnectionState",
        "GetConnectionSettings",
        "GetNetworkInfo",
        "GetNetworkRegisterState",
        "GetNetworkSettings",
        "GetWlanState",
        "GetWlanSettings",
        "GetWlanSupportMode",
        "getSmsInitState",
        "GetSMSContactList",
        "GetSMSContentList",
        "GetSMSStorageState",
        "GetSendSMSResult",
        "GetSMSSettings",
        "GetSingleSMS",
        "GetUsageRecord",
        "GetUsageSettings",
        "GetDeviceNewVersion",
        "GetDeviceUpgradeState",
        "SetCheckNewVersion",
        "GetMacFilterSettings",
        "getPortFwding",
        "getDMZInfo",
        "getIPFilterList",
        "getFirewallSwitch",
        "getUrlFilterSettings",
        "GetLanSettings",
        "GetConnectedDeviceList",
        "GetBlockDeviceList",
        "GetSystemInfo",
        "SetLanguage",
        "GetCurrentLanguage",
        "GetSystemStatus",
        "GetSystemStatus",
        "SetDeviceRestore",
        "GetUpnpSettings",
        "getNewPageFlagSemaphore",
        "setNewPageFlagSemaphore",
        "getDNSInfo",
        "GetWanAccess",
        "GetProfilePromptFlag",
        "GetDLNASettings",
        "GetSambaStatus",
        "GetFtpStatus",
        "GetUsbcardStatus",
        "GetSDCardSpace",
        "GetSDFileList",
        "GetSDcardStatus",
        "GetProfileList",
        "getPhoneBookInitState",
        "getPhoneBooklistInfo",
        "getPhoneBookInfo",
        "getPhoneBookSingle",
        "GetClientConfiguration",
        "GetPowerSavingMode"
    ]

}; //config end
