define(function(){
    var m = {
        "appName": "Mesh",
        "httpUrlShow": "www.espressif.com",
        "httpUrl": "https://www.espressif.com",
        "email":"邮箱",
        "password":"密码",
        "login":"登录",
        "forgot": "忘记密码",
        "editPwd": "修改密码",
        "register": "注册",
        "guest": "访客模式",
        "userName": "用户名称",
        "inputPwd": "输入密码",
        "confirmPwd": "确认密码",
        "confirmBtn": "确定",
        "sendBtn": "发送",
        "deleteBtn": "删除",
        "clearBtn": "清除",
        "editBtn": "修改",
        "cancelBtn": "取消",
        "upgradeBtn": "升级",
        "tryAgainBtn": "再试一次",
        "retryBtn": "重试",
        "carryOn": "继续",
        "joinBtn": "加入网络",
        "selectJoinBtn": "选择加入",
        "loading": "正在努力加载中...",
        "loadEvent": "正在加载事件中...",
        "scanning": "设备扫描中...",
        "loadCon": "设备组网中...",
        "search": "搜索名称或位置",
        "searchMAC": "搜索mac或位置",
        "searchByMac": "搜索mac",
        "searchGroup": "搜索名称",
        "editName": "编辑名称",
        "edit": "编辑配对",
        "reconfigure": "重置设备",
        "configNet": "配网",
        "aboutDevice": "关于设备",
        "otaUpdate": "固件升级",
        "association": "设备关联",
        "editDevice": "编辑设备",
        "editGroup": "编辑群组",
        "addDevice": "添加设备",
        "addGroup": "添加群组",
        "addPair": "添加配对",
        "addRoom": "创建房间",
        "deleteDevice": "删除设备",
        "deviceOnline": "设备上线",
        "deviceOffline": "设备离线",
        "deviceOnlineNum": "设备上线个数",
        "deviceOfflineNum": "设备离线个数",
        "groupAll": "全部",
        "scanDevice": "扫描设备",
        "deviceList": "设备列表",
        "warmColdSwitch": "切换冷暖",
        "colorSwitch": "切换彩光",
        "next": "下一步",
        "nextStep": "下一个",
        "light": "灯",
        "switch": "开关",
        "sensor": "传感器",
        "other": "其他",
        "offline": "离线",
        "local": "内网",
        "cloud": "外网",
        "no": "无",
        "read": "阅读",
        "athletics": "运动",
        "dinner": "晚饭",
        "sleep": "睡觉",
        "thinking": "思考",
        "work": "工作",
        "recreation": "娱乐",
        "alarm": "警报",
        "love": "恋爱",
        "deviceType": "设备类型",
        "macAddress": "MAC 地址",
        "version": "版本",
        "time": "用时",
        "deviceVersion": "设备版本",
        "parentNode": "Mdf 版本",
        "rootNode": "Idf 版本",
        "deviceStatus": "设备状态",
        "status": "状态",
        "type": "类型",
        "deviceIP": "设备IP",
        "aboutUs": "关于我们",
        "softwareVersion": "软件版本",
        "officialWebsite": "官网地址",
        "confirmWIFI": "确认家庭WIFI",
        "currentWIFI": "当前WIFI",
        "selectDevice": "选择设备",
        "color": "色彩",
        "scene": "情景",
        "set": "设置",
        "pair": "配对",
        "import": "导入",
        "importDevice": "导入设备",
        "checkUpdates": "检查更新",
        "latestVersion": "已是最新版",
        "helpCenter": "帮助中心",
        "network": "网络",
        "accountInfo": "账户详情",
        "account": "账户",
        "logout": "退出登录",
        "location": "位置信息",
        "info": "详情",
        "floor": "楼层",
        "area": "区域",
        "code": "编号",
        "topology": "拓扑结构",
        "topologyInfo": "拓扑详情",
        "command": "发送命令",
        "setIP": "设置IP",
        "statistical": "统计",
        "onOff": "开/关",
        "brightMode": "明亮模式",
        "blinkMode": "闪烁模式",
        "glitterMode": "流光模式",
        "readMode": "阅读模式",
        "configMode": "模式",
        "cozyMode": "温馨模式",
        "bedtime": "自然就寝",
        "delayedOn": "延时开",
        "delayedOff": "延时关",
        "btnTab": "短按",
        "btnHold": "长按",
        "btnLightness": "灯光亮度",
        "btnColor": "灯光颜色",
        "btnTemperature": "冷暖",
        "eventType": "事件类型",
        "singleGroup": "控制一组设备",
        "multipleGroup": "控制多组设备",
        "adjustment": "调整",
        "fineTuning": "微调",
        "hue": "颜色",
        "temp": "色温",
        "brightness": "亮度",
        "luminance": "亮度",
        "saturation": "饱和度",
        "openLight": "开灯",
        "closeLight": "关灯",
        "colorLight": "彩光",
        "whiteLight": "白光",

        "editNameDesc": "修改设备名称",
        "editNameInput": "请输入新的名称",
        "noAddDeviceDesc": "暂时还没有设备哦！",
        "noAddGroupDesc": "暂时还没有群组哦！",
        "noAddPairDesc": "暂时还没有位置信息哦！",
        "noAddRoomDesc": "暂时还没有房间哦！",
        "listDesc": "点击右上角或下方按钮进行添加吧",
        "videoDesc": "如果你还不了解设备功能，你可以",
        "clickVideoDesc": "查看视频介绍",
        "pairListDesc": "所有添加的配对信息将集中显示在这个列表",
        "remindDesc": "发现新设备，请点击添加。",
        "forgotDesc": "请输入你的邮箱，接受重置密码的邮件",
        "wifiDesc": "当前为5G网络!",
        "wifiConfirmDesc": "设备不支持5G网络，请确认您的路由是否支持2.4G网络",
        "bleConDesc": "请打开蓝牙!",
        "locationConDesc": "请打开地理位置!",
        "wifiNoDesc": "请连接网络!",
        "bleConDesc": "请打开蓝牙!",
        "meshIdDesc": "请输入Mesh ID!",
        "locationConDesc": "请打开地理位置!",
        "emptyEventDesc": "确定要清空该设备下的事件吗?",
        "connetDeviceDesc": "设备连接中...",
        "connetSuccessDesc": "设备连接成功",
        "connetFailDesc": "设备连接失败",
        "deviceOtaDesc": "请选择要升级的设备",
        "deleteTypeDeviceDesc": "确定要重置设备吗?若重置设备该类型下的设备将进入配网状态。",
        "deleteGroupDeviceDesc": "确定要重置设备吗?若重置设备该群组下的设备将进入配网状态。",
        "deleteDeviceDesc": "确定要重置设备吗?若重置设备该设备将进入配网状态。",
        "deleteSuccessDesc": "设备重置成功",
        "deleteFailDesc": "设备重置失败",
        "deleteSelectDesc": "请选择要重置的设备",
        "addGroupDesc": "请输入群组名称",
        "addTimingDesc": "请输入定时名称",
        "addGroupInput": "请输入名称",
        "prohibitEditDesc": "默认组名禁止编辑",
        "prohibitDelDesc": "默认组禁止解散",
        "delGroupDesc": "确定要解散该群组吗?",
        "exitProgramDesc": "再按一次退出程序",
        "logoutDesc": "确认要退出登录吗?",
        "confailTitleDesc": "请检查以下问题",
        "problemDesc1": "设备与路由器的距离是否过远",
        "problemDesc2": "WiFi密码是否正确",
        "problemDesc3": "连接设备处于通电状态",
        "problemDesc4": "设备是否处于初始化状态",
        "causeDesc1": "请确定设备进入黄灯闪烁状态，若未闪烁请重启三次",
        "causeDesc2": "请确定设备已开启并在附近",
        "causeDesc3": "如果蓝牙未打开，请打开蓝牙",
        "causeDesc4": "如果地理位置未打开，请打开地理位置",
        "causeDesc5": "如果刚连接设备，请等待片刻，然后再试一次",
        "causeDesc6": "如果设备未连接或已和其他家庭连接，您可能需要重置设备",
        "scanToDesc": "扫描到",
        "countDeviceDesc": "个设备",
        "associationDesc": "预设条件触发设备自动执行任务",
        "wifiChangeDesc": "WiFi发生变化",
        "noDeviceDesc": "当前路由下没有设备",
        "favoritesDesc": "只显示收藏的",
        "delExistEventDesc": "切换事件类型将清空已存在的事件",
        "longDesc": "输入的字符太长",
        "newVersionTitle": "发现新版本",
        "updateVersionTitle": "立即更新",

        "pullDownDesc": "请下拉刷新",
        "refreshDesc": "请点击'Refresh'按钮刷新",
        "notLoadDesc": "未加载到设备",
        "emailDesc": "请输入邮箱",
        "passwordDesc": "请输入密码",
        "userNameDesc": "请输入用户名",
        "rePasswordDesc": "请输入确认密码",
        "differentDesc": "两次输入的密码不一致",
        "floorDesc": "请选择楼层",
        "areaDesc": "请选择区域",
        "codeDesc": "请输入编码",
        "macDesc": "请输入Mac",
        "existCodeDesc": "输入的编号在选中的楼层区域中已存在",
        "existMacDesc": "输入的MAC已存在",
        "saveSuccessDesc": "保存成功",
        "saveFailDesc": "保存失败",
        "registerSuccessDesc": "注册成功",
        "registerFailDesc": "注册失败",
        "loginFailDesc": "登录失败",
        "editSuccessDesc": "修改成功",
        "editFailDesc": "修改失败",
        "delSuccessDesc": "删除成功",
        "delFailDesc": "删除失败",
        "userNameDesc": "请输入用户名",
        "delayTimeDesc": "请输入延时",
        "rePasswordDesc": "请输入确认密码",
        "downloadSuccessDesc": "下载成功 ",
        "downloadFailDesc": "连接云端失败",
        "sendSuccessDesc": "邮件发送成功",
        "sendFailDesc": "邮件发送失败",
        "deviceUpgradingDesc": "设备升级中...",
        "deviceNoExistDesc": "选中升级的设备已不存在",
        "upgradepPartSucDesc": "部分设备升级成功",
        "upgradeSucDesc": "设备升级成功",
        "upgradingDesc": "正在升级",
        "upgradePartFailDesc": "升级失败",
        "upgradeFailDesc": "设备升级失败，请检查网络后重试",
        "conRouteFailDesc": "连接路由失败",
        "pwdFailDesc": "密码错误",
        "delInfoDesc": "确定要删除该信息吗？",
        "delIPDesc": "确定要清除设备端IP信息吗？",
        "jsonDesc": "json格式有误",
        "farDeviceDesc": "距离设备太远",
        "processDownload": "下载",
        "processTransport": "传输",
        "processCutover": "切换",
        "selectDeviceDesc": "请选择设备",
        "selectRoomDesc": "请选择房间",
        "selectEventDesc": "请选择事件",
        "selectPairDesc": "请选择信息",
        "noConfigDesc": "选中的设备只能做叶子节点，请配合其他Mesh设备使用。",
        "isExistGroupDesc": "群组名称已存在",
        "enterRoomNameDesc": "请输入房间名称!",
        "nameTooLongDesc": "房间名称过长，请小于3个中文或6个字符和数字",
        "nameLongDesc": "名称长度大于0且小于3个中文或6个字符和数字",
        "isExistRoomNameDesc": "房间名称已存在",
        "createRoom": "创建房间",
        "deleteRoom": "删除房间",
        "editRoom": "编辑房间",
        "roomImg": "房间图片",
        "roomName": "房间名称",
        "roomDevice": "房间设备",
        "added": "已添加",
        "notAdded": "未添加",
        "deviceName": "设备名称",
        "editRoomDevice": "编辑房间设备",
        "joinedRoom": "显示已加入其他房间的设备",
        "deleteRoomDesc": "确定要删除该房间吗？",
        "realTimeChange": "当日人流量实时变化",
        "statisticsChange": "当日人流量变化统计",
        "equipmentStatistics": "设备统计占比",
        "today": "今天",
        "total": "总量",
        "quantity": "人数",

        "clearInfo": "清除信息",
        "clearInfoDesc": "确定要清除信息吗？",
        "delaySet": "延时设置",
        "enterDelay": "请输入新的延时时间",
        "notEmpty": "内容不能为空",
        "customData": "请输入自定义数据",
        "bluetoothGateway": "蓝牙网关",
        "distance": "距离",
        "transmitPower": "发送功率",
        "parameterConfig": "参数配置",
        "distanceCalibration": "距离校准",
        "updateContent": "更新内容",
        "statisticalReport": "统计报表",
        "dailyFlow": "当日累计人流",
        "yesterdayFlow": "昨日累计人流",
        "weekFlow": "当周累计人流",
        "monthFlow": "当月累计人流",
        "notification": "通知值",
        "filterEsp": "过滤ESP设备",
        "scanInterval": "蓝牙扫描间隔",
        "scanTime": "蓝牙扫描时间",
        "nearbyDevice": "附近设备",
        "sortByTime": "按时间排序",
        "sortBySignal": "按信号排序",
        "bluetoothDevice": "蓝牙设备",
        "showCloud": "云端",
        "showAWSCloud": "AWS",
        "guideTitle": "各类设备添加操作指南",
        "problem": [
            "1. 给设备上电，并在1~3秒后断电；",
            "2. 等待1-3秒左右，重复第1步的操作；",
            "3. 重复上述步骤3次即可将设备复位"
            ],
        "step": [
            {
                "icon": "icon-plug",
                "step": "第一步",
                "info": "确保设备上电"
            },
            {
                "icon": "icon-setting",
                "step": "第二步",
                "info": "确保设备属于未入网状态，未入网状态表现为刚通电时会出现黄灯闪烁"
            },
            {
                "icon": "icon-setting",
                "step": "第三步",
                "info": '通过"蓝牙搜索"添加设备'
            }
        ],
        "guideList": [
            {
                "icon": "icon-light",
                "name": "灯具类",
                "desc": "吸顶灯，筒灯，吊灯"

            }, {
                "icon": "icon-power",
                "name": "开关类",
                "desc": "Button，Touch"
            }, {
                "icon": "icon-sensor",
                "name": "传感器类",
                "desc": "人体传感器，温湿度传感器"
            }
        ],
        "suchAs": "例如：",
        "preparation": "添加设备前准备工作",
        "blueSearch": "蓝牙搜索",
        "above": "如果以上",
        "stepProblems": "步骤遇到问题",
        "trySteps": "，请尝试一下步骤复位设备",
        "tips": "温馨提示：复位后设备会处于待添加状态，需要重新入网才可以使用。",
        "buy": "前往购买",

        "emptyEventTitle": "清除关联",
        "connetDeviceTitle": "连接设备",
        "connetFailTitle": "连接失败",
        "addGroupTitle": "添加一个新群组",
        "addDelayTitle": "添加延时时间",
        "addTimingTitle": "添加一个新定时",
        "editGroupTitle": "修改群组名称",
        "delGroupTitle": "解散群组",
        "delInfoTitle": "删除信息",
        "downloadBinTitle": "下载升级文件",
        "enterBinUrl": "输入固件连接",
        "noShowTitle": "我的设备未在此处显示",
        "noShowCauseTitle": "设备未显示原因",
        "binServerAddress": "固件服务器地址",
        "eventBtn": "事件按钮",
        "noFound": "未发现设备？可能存在以下问题：",
        "blueEnabled": "系统蓝牙未开启",
        "blueMal": "系统蓝牙故障",
        "locationEnabled": "Android 6.0及以上版本定位未开启",
        "reboot": "如果排除了以上选项，问题依然没有解决，请尝试重启手机",
        "noWifi": "系统 Wi-Fi 未连接",
        "noConfig": "周围未发现已配网的设备",
        "noSearch": "没有搜索到我想要添加的设备？",
        "blueIsEnabled": "蓝牙已开启",
        "lessMeters": "距离20米以内",
        "addDevices": "添加设备时，请检查以下选项：",
        "devicePowered": "设备已供电并处于待添加状态",
        "deviceNoConfig": "需要添加的设备未被其他手机添加",
        "less20Meters": "尽量靠近设备,建议不超过20米",
        "devicesWell": "设备没有损坏",
        "gotIt": "我知道了",
        "goEnable": "去开启",
        "goReboot": "去重启",
        "goConnect": "去连接",
        "office": "办公室",
        "parlor": "客厅",
        "kitchen": "厨房",
        "toilet": "洗手间",
        "terrace": "阳台",
        "study": "书房",
        "cellar": "地下室",
        "bedroom": "卧室",
        "nav":{
            "recent":"最近",
            "device":"设备",
            "group":"群组",
            "user":"我的",
            "room":"房间"
        }
    }
    return {
        m: m
    };
})