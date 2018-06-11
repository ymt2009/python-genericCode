jQuery.extend(config, configAuto);
jQuery.extend(config, configManual);
var Support = 1;
var NotSupport = 0;


config.MoreItemList.Ussd.isActive = config.SupportUssd == Support;
config.MoreItemList.tr069.isActive = config.SupportTr069 == Support;
config.MoreItemList.wps.isActive = config.SupportWps == Support;
config.MoreItemList.Diagnostic.isActive = config.SupportNetDiagnostic == Support;
config.MoreItemList.DNSSetting.isActive = config.SupportDNSSetting == Support;
config.modules.sharing.isActive = config.SupportSD == Support;
config.modules.phonebook.isActive = config.SupportPhonebook == Support;
config.SupportSmsRedirect = config.SupportSmsRedirect == Support;
config.isSmsCenterEditable = config.isSmsCenterEditable == Support;
config.SupportAddProfile = config.SupportAddProfile == Support;
config.profileItemIptype.isActive = config.SupportProfileIpType == Support;
config.SupportPeopleNum = config.SupportPeopleNum == Support;
config.isNeedBattery = config.isNeedBattery == Support;
config.SettingsItemList.wifiSettings.isActive = config.SupportWiFi == Support;
config.SettingsItemList.advanced.isActive = config.SupportAdvancedSettings == Support;
config.SupportEditPassword = config.SupportEditPassword == Support;
config.TimeForNonInbox = config.TimeForNonInbox == Support;
config.SupportTimeLine = config.SupportTimeLine == Support;
config.SupportRememberUsernameAndPw = config.SupportRememberUsernameAndPw == Support;
config.SupportWiFiCertification = config.SupportWiFiCertification == Support;
config.AutoSearchNetwork = config.AutoSearchNetwork == Support;
config.SupportRoamingIcon = config.SupportRoamingIcon == Support;
config.isHardwareVersion = config.isHardwareVersion == Support;
config.isSystemIpAddress = config.isSystemIpAddress == Support;
config.isSystemSubnetMask = config.isSystemSubnetMask == Support;
config.changePasswordWarningFlag = config.changePasswordWarningFlag == Support;
config.isClearCode = config.isClearCode == Support;
config.isRemoveSimlockRck = config.isRemoveSimlockRck == Support;
config.SmsIconRedirecting = config.SmsIconRedirecting == Support;
config.isSimCardDTPLSupportUssd = config.isSimCardDTPLSupportUssd == Support;
config.homeConnectDialShow = config.homeConnectDialShow == Support;
config.SupportUssdBalance = config.SupportUssdBalance == Support;
config.isSimDialPinOperationWarn = config.isSimDialPinOperationWarn == Support;
config.simCardOperatorName = config.simCardOperatorName == Support;
config.singleLanguage = config.singleLanguage == Support;
config.differNetworkTypeStyle = config.differNetworkTypeStyle == Support;
config.SupportLogin = config.SupportLogin == Support;
config.SupportConnectionIpMode = config.SupportConnectionIpMode == Support;
config.supportSmsDeleteALLsingle = config.supportSmsDeleteALLsingle == Support;
config.roamingUpdateFotaTips = config.roamingUpdateFotaTips == Support;
config.SupportPlmnWifiCountryView = config.SupportPlmnWifiCountryView == Support;
config.onlineUM = config.onlineUM == Support;

config.MoreItemList.powerSaving.isActive = config.SupportPowerSaving != NotSupport;
config.SecurityItemList.Firewall.isActive = config.FirewallSupport != NotSupport;
config.SecurityItemList.Portfwding.isActive = config.PortfwdingSupport != NotSupport;
config.SecurityItemList.DMZ.isActive = config.DmzSupport != NotSupport;
config.SecurityItemList.Ipfilter.isActive = config.IpfilterSupport != NotSupport;
config.SecurityItemList.URLFilter.isActive = config.URLFilterSupport != NotSupport;
config.SecurityItemList.PortFilter.isActive = config.PortFilterSupport != NotSupport;
config.SecurityItemList.Upnp.isActive = config.UpnpSupport != NotSupport;
config.SecurityItemList.VPN.isActive = config.VPNSupport != NotSupport;
config.MacFilterSupport = config.MacFilterSupport != NotSupport;

config.WifiMaxUserSum = config.AllowMaxWifiNumber; //
config.IsShowWlanCountry = config.ShowWifiCountry; //
config.IsAutoUpgrade = config.FotaUpgradeMode == Support; //true means when fota downloaded auto upgrade no tips for user to confirm. 

defind = (function() {
    /* modules settings -----------------------------------------------------  */
    //
    // Array containing information about modules to be displayed
    //
    // Each part stands for a module, with its unique ID and its status:
    //
    //      - the short name is the unique ID for each module
    //      - switch "isActive" to false to turn off the desired module
    var tempModules = [];
    $.each(config.modules, function(i, v) {
        if (v.isActive == true) {
            tempModules.push(config.modules[i]);
        }
    });
    modules = tempModules;

    $.each(config.SecurityItemList, function(i, v) {
        if (v.isActive) {
            config.SettingsItemList.security.isActive = true;
        }
    });

    return {
        modules: modules
    };
}());
