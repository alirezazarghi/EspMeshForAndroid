define(["vue","MINT", "Util", "txt!../../pages/scan.html", "../js/reports", "../js/scanInfo", "../js/scanContent"],
    function(v, MINT, Util, scan, reports, scanInfo, scanContent) {

        var Scan = v.extend({

            template: scan,
            data: function(){
                return {
                    addFlag: false,
                    deviceList: this.$store.state.deviceList,
                    rootMac: "",
                    curSelect: 1,
                    scanInfo: {"enable": "", "type": "", "notice_threshold": "", "esp_module_filter": "",
                          "ble_scan_interval": "", "g_ble_scan_window": ""}
                }
            },

            methods:{
                show: function() {
                    var self = this;
                    self.deviceList  = self.$store.state.deviceList
                    self.onBackScan();
                    self.addFlag = true;
                    self.curSelect = 1;
                    MINT.Indicator.open();
                    window.onGetScan = this.onGetScan;
                    Util.setStatusBarWhite();
                    setTimeout(function(){
                        self.getScan();
                    },500);
                },
                selectItem: function(num) {
                    const self = this;
                    switch (num) {
                        case 1:
                            self.$refs.info.hide();
                            self.$refs.reports.hide();
                            self.$refs.content.hide();
                            break;
                        case 2:
                            self.$refs.info.show();
                            self.$refs.reports.hide();
                            self.$refs.content.hide();
                            break;
                        case 3:
                            self.$refs.reports.show();
                            self.$refs.info.hide();
                            self.$refs.content.hide();
                            break;
                        case 4:
                            self.$refs.info.hide();
                            self.$refs.reports.hide();
                            self.$refs.content.show();
                            break;
                    }
                    this.curSelect = num;
                },
                hide: function () {
                    this.$refs.info.hide();
                    this.$refs.reports.hide();
                    this.$refs.content.hide();
                    this.addFlag = false;
                    Util.setStatusBarBlue();
                    MINT.Indicator.close();
                    this.$emit("scanShow");
                },
                onBackScan: function () {
                    window.onBackPressed = this.hide;
                },
                getType: function() {
                    var self = this,
                        val = "";
                    if (!Util._isEmpty(self.scanInfo.type)) {
                        $.each(SNIFFER_TYPE, function(i, item) {
                            if (item.value == self.scanInfo.type) {
                                val = item.label;
                                return false;
                            }
                        });
                    }
                    return val;
                },
                getNotice: function() {
                    var self = this,
                        val = "";
                    if (!Util._isEmpty(self.scanInfo.notice_threshold)) {
                        val = self.scanInfo.notice_threshold
                    }
                    return val;
                },
                getInterval: function() {
                    var self = this,
                        val = "";
                    if (!Util._isEmpty(self.scanInfo.ble_scan_interval)) {
                        val = self.scanInfo.ble_scan_interval
                    }
                    return val;
                },
                getWindow: function() {
                    var self = this,
                        val = "";
                    if (!Util._isEmpty(self.scanInfo.ble_scan_window)) {
                        val = self.scanInfo.ble_scan_window
                    }
                    return val;
                },
                getFilter: function(value) {
                    var self = this,
                        val = "";
                    if (!Util._isEmpty(self.scanInfo.esp_module_filter)) {
                        $.each(SNIFFER_FILTER, function(i, item) {
                            if (item.value == self.scanInfo.esp_module_filter) {
                                val = item.label;
                                return false;
                            }
                        });
                    }
                    return val;
                },
                getScan: function() {
                    var data = '{"' + MESH_MAC + '": ' + JSON.stringify(this.getRootMac()) +
                        ',"'+DEVICE_IP+'": "'+this.$store.state.deviceIp+'","' + MESH_REQUEST +
                        '": "' + GET_SNIFFER + '", "callback": "onGetScan"}';
                    espmesh.requestDevice(data);

                },
                getRootMac: function () {
                    var mac = "", self = this;
                    $.each(self.deviceList, function(i, item){
                        if(item.layer == 1) {
                            mac = item.mac;
                            return false;
                        }
                    });
                    self.rootMac = mac;
                    return mac;
                },
                showInfo: function() {
                    if(this.deviceList.length > 0) {
                        this.$refs.info.show();
                    }
                },
                showReports: function () {
                    this.$refs.reports.show();
                },
                showDevice: function () {
                    this.$refs.content.show();
                },
                getColor: function () {
                    var hueValue = 0, saturation = 0, luminance = 0, status = 0, rgb = "#6b6b6b";
                    $.each(this.deviceInfo.characteristics, function(i, item) {
                        if (item.cid == HUE_CID) {
                            hueValue = item.value;
                        }else if (item.cid == SATURATION_CID) {
                            saturation = item.value;
                        }else if (item.cid == VALUE_CID) {
                            luminance = item.value;
                        } else if (item.cid == STATUS_CID) {
                            status = item.value;
                        }
                    })
                    if (status == STATUS_ON) {
                        rgb = Raphael.hsb2rgb(hueValue / 360, saturation / 100, luminance / 100).hex;
                    }
                    return rgb;
                },
                onGetScan: function(res) {
                    console.log();
                    if (!Util._isEmpty(res)) {
                        this.scanInfo = JSON.parse(res).result;
                    } else {
                        this.scanInfo = {"enable": "", "type": "", "notice_threshold": "", "esp_module_filter": "",
                            "ble_scan_interval": "", "g_ble_scan_window": ""}
                    }
                    MINT.Indicator.close();
                }
            },
            components: {
                "v-reports": reports,
                "v-scanInfo": scanInfo,
                "v-scanContent": scanContent
            }

        });

        return Scan;
    });