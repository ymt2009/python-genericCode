var configManual = {
    isCustomCss: true,
    homeConnectDialShow: 0,
    isWebsiteLink: {
        linkAddress: 'http://myvodafone.vodafone.in',
        name: 'My Vodafone',
        isLoginOutHighlight:true,//val:true Highlight;false login Highlight
        isActive: false
    },
    webChat: {
        linkAddress: 'http://www.vodafone.in/webchat',
        isActive: false
    },
    helplineNumber: {
        title: 'ids_HelplineNumber',
        contents: '1800-120-1111',
        homeAndDefault:1,//1-home page view;2-default page view;3-home and default view;
        isActive: false
    },
    singleLanguage:0,
    SupportOpenNewPage:true,
    OpenNewPageLink: "http://online.vodafone.in",
    openNewPageLinkSimPlmn:{
        simPlmnArr:["40401","40405","40411","40413","40415","40420","40427","40430","40443","40446","40460","40484","40486","40488","40566","40567","405750","405751","405752","405753","405754","405755","405756"],
        isActive:true
    },
    supportSmsDeleteALLsingle:1,
    SupportDNSSetting:1,
    ConnectionActivePopu: true, //true:open,false:close
    IsRoamConnection: true,  //true:open, false:close
    IsRoamConnectionModeTips:true,
    isSmsEncodingOptimization:true,
    isRemoveAutoPINFunction:true,
    isSupportKickOff:true,
    changePasswordWarningFlag:1,
    AutoSearchNetwork:1,
    roamingUpdateFotaTips:1,
    SupportPlmnWifiCountryView:1,
    IsVerifyToken:false,
    isApnEmtypValide:true,
    IsAllowForbidNwRegister:true,
    IsFotaBatteryLevelNeedCheck:true,
    isDownloadFOTABatteryLow30Tips:true,
    isSupportHelpSelectionType:true,
    isRoamConnectionCloseConntected:true,
    NetworkModeSelection:3,
    isNetworkModeSelect: {
        auto: {
            name: 'ids_netMode_Automatic4g3g2g',
            value: 0,
            isActive: true
        },
        only2g3g: {
            name: 'ids_netMode_Automatic3g2g',
            value: 6,
            isActive: true
        },
        only4g: {
            name: 'ids_net_4gOnly',
            value: 3,
            isActive: true
        },
        only3g: {
            name: 'ids_net_3gOnly',
            value: 2,
            isActive: true
        },
        only2g: {
            name: 'ids_net_2gOnly',
            value: 1,
            isActive: true
        },
        only3g4g: {
            name: 'ids_net_3g4gOnly',
            value: 5,
            isActive: true
        }
    },
    differentPlmnDisplayLogoUrlLink:[
    ['53701','http://www.bmobile.com.pg/'],
['54002','http://www.bmobile.com.sb/'],
['28001','http://www.cyta.com.cy/mobile'],
['22005','http://www.vipmobile.rs'],
['72418','http://www.vodafonebrasil.com/'],
['90128','http://setup.vodafone.com'],
['23201','http://www.a1.net'],
['23402','http://www.airtel-vodafone.com'],
['40004','http://www.azerfon-vodafone.com'],
['42602','http://www.bh.zain.com'],
['24602','http://www.bite.lt'],
['24705','http://www.bite.lv'],
['50213','http://www.celcom.com.my'],
['50219','http://www.celcom.com.my'],
['46692','http://www.cht.com.tw'],
['41302','http://www.dialog.lk'],
['42403','http://www.du.ae'],
['24802','http://www.elisa.ee'],
['24405','http://www.elisa.fi'],
['73001','http://www.entel.cl'],
['286251','http://www.kktctelsim.com'],
['52503','http://www.m1.com.sg'],
['28401','http://www.mtel.bg'],
['20601','http://www.proximus.be'],
['20810','http://www.sfr.fr'],
['64710','http://www.sfr.re'],
['29340','http://www.simobil.si'],
['45406','http://www.smartone-vodafone.com'],
['22801','http://www.swisscom.ch'],
['27077','http://www.tango.lu'],
['23801','http://www.tdc.dk'],
['238171','http://www.tdc.no'],
['238172','http://www.tdc.se'],
['50506','http://www.three.com.au/'],
['29403','http://www.vip.mk'],
['21910','http://www.vipnet.hr'],
['64304','http://www.vm.co.mz'],
['63001','http://www.vodacom.cd'],
['65101','http://www.vodacom.co.ls'],
['64004','http://www.vodacom.co.tz'],
['65501','http://www.vodacom.co.za'],
['27602','http://www.vodafone.al'],
['53001','http://www.vodafone.co.nz'],
['50503','http://www.vodafone.com.au'],
['60202','http://www.vodafone.com.eg'],
['54201','http://www.vodafone.com.fj'],
['62002','http://www.vodafone.com.gh'],
['27801','http://www.vodafone.com.mt'],
['42702','http://www.vodafone.com.qa'],
['28602','http://www.vodafone.com.tr'],
['23003','http://www.vodafone.cz'],
['26202','http://www.vodafone.de'],
['26209','http://www.vodafone.de'],
['21401','http://www.vodafone.es'],
['28802','http://www.vodafone.fo'],
['20205','http://www.vodafone.gr'],
['21670','http://www.vodafone.hu'],
['27201','http://www.vodafone.ie'],
['40401','http://www.vodafone.in'],
['40405','http://www.vodafone.in'],
['40411','http://www.vodafone.in'],
['40413','http://www.vodafone.in'],
['40415','http://www.vodafone.in'],
['40420','http://www.vodafone.in'],
['40427','http://www.vodafone.in'],
['40430','http://www.vodafone.in'],
['40443','http://www.vodafone.in'],
['40446','http://www.vodafone.in'],
['40460','http://www.vodafone.in'],
['40484','http://www.vodafone.in'],
['40486','http://www.vodafone.in'],
['40488','http://www.vodafone.in'],
['40566','http://www.vodafone.in'],
['40567','http://www.vodafone.in'],
['405750','http://www.vodafone.in'],
['405751','http://www.vodafone.in'],
['405752','http://www.vodafone.in'],
['405753','http://www.vodafone.in'],
['405754','http://www.vodafone.in'],
['405755','http://www.vodafone.in'],
['405756','http://www.vodafone.in'],
['27402','http://www.vodafone.is'],
//['22210','www.vodafone.it'],http://contatori.vodafone.it
['22210','http://contatori.vodafone.it'],
['20404','http://www.vodafone.nl'],
['26801','http://www.vodafone.pt'],
['22601','http://www.vodafone.ro'],
['23415','http://www.vodafone.uk']
]
}



