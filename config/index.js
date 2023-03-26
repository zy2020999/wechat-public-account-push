export const config = {
  /**
   * 公众号配置
   */

  // 公众号APP_ID 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_ID: "",

  // 公众号APP_SECRET 
  // 建议不要填这里，请使用文档中github secret的方法进行保密配置，保护您的隐私安全。
  // 如果你非要填这里也行。脚本也能运行
  // APP_SECRET: "",

  /**
   * 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如
   * [
   *  {
   *    // 想要发送的人的名字
   *    name: "老婆0",
   *    // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
   *    id: "o-np76KNBT9E-s-EFAiiciKi8XOI",
   *    // 你想对他发送的模板消息的模板ID
   *    useTemplateId: "zjVglIuCXo4CsraXWEio1iP7sZJ7IQEES9lDsgc4yOU",
   *    // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
   *    openUrl: "https://wangxinleo.cn"
   *   }, 
   * ]
   */
  USERS: [
    {
      // 想要发送的人的名字
      name: "one",
      // 扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      id: "o-np76KNBT9E-s-EFAiiciKi8XOI",
      // 你想对他发送的模板消息的模板ID
      useTemplateId: "1A-cB5gAGThSIExu2cdjcO6WJGDY9SqWTTCv7ri5i-s",
      // 所在省份
      province: "云南",
      // 所在城市
      city: "昆明",
      // 他点击详情后跳转的页面,你可以设置成微博的热榜，也可以设置成其他，网址一定要填对；不填对也没关系，随便你，会打不开而已。
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       // 邹倩myself
      name: "gd1", 
      id: "o-np76KNBT9E-s-EFAiiciKi8XOI",
      useTemplateId: "1p_Xh3PaZrPVoYYGk9AS1IuqAoi1JO-LNNDpdfL99LA",
      province: "云南",
      city: "昆明",
//       http://www.zhouyu8.xyz
      openUrl: "http://www.zhouyu.website"
    },
    {
       // 广东other
      name: "gd2", 
      id: "",
      useTemplateId: "2OzSzNw7Q8qSrTwX1zwu7MlMhdrR_QptsqGevw9t2uo",
      province: "广东",
      city: "深圳",
      openUrl: "http://www.zhouyu8.xyz"
    },
    {
         //曲靖myself
      name: "281",
      id: "",
      useTemplateId: "cvLfMdBoHZCJG6c9V4KR6WIkU0JnoSARSI0nnajEn88",
      province: "云南",
      city: "曲靖",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
     {
         //丽other
      name: "li1",
       //o-np76E8SwRofpnJ2rny7W0_1Bpg
      id: "",
      useTemplateId: "iXLMntPMxYkvv-32CXZk6mfwJHrENqgrBZXVwVsA3IA",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
         //丽myself
      name: "li2",
      //o-np76KNBT9E-s-EFAiiciKi8XOI
      id: "",
      useTemplateId: "iXLMntPMxYkvv-32CXZk6mfwJHrENqgrBZXVwVsA3IA",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
      {
       //媛other
      name: "yuan1",
       //o-np76PFkP2vao4Jfmhry-CTJHew
      id: "",
      useTemplateId: "GVuhRF9GdOASaXE7cbKXltOlTw6nEDKBagtOX4nA0HE",
      province: "云南",
      city: "玉溪",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       //媛myself
      name: "yuan2",
      //o-np76KNBT9E-s-EFAiiciKi8XOI
      id: "",
      useTemplateId: "GVuhRF9GdOASaXE7cbKXltOlTw6nEDKBagtOX4nA0HE",
      province: "云南",
      city: "玉溪",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       //曲靖other
      name: "282",
      id: "",
      useTemplateId: "cvLfMdBoHZCJG6c9V4KR6WIkU0JnoSARSI0nnajEn88",
      province: "云南",
      city: "曲靖",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
      // 西山myself
      name: "xs1",
      id: "",
      useTemplateId: "cvLfMdBoHZCJG6c9V4KR6WIkU0JnoSARSI0nnajEn88",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       // 西山other
      name: "xs2",
      id: "",
      useTemplateId: "cvLfMdBoHZCJG6c9V4KR6WIkU0JnoSARSI0nnajEn88",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
      // 通辽myself
      name: "tl1",
        //o-np76KNBT9E-s-EFAiiciKi8XOI
      id: "",
      useTemplateId: "NiLFI65io3z-CxB8_kf-hIBjEV3CpOofEct8AnHW5SI",
      province: "内蒙古",
      city: "通辽",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       // 通辽other
      name: "tl2",
      // o-np76EYC3rg9b6FjkH_52imEjCA
      id: "",
      useTemplateId: "NiLFI65io3z-CxB8_kf-hIBjEV3CpOofEct8AnHW5SI",
      province: "内蒙古",
      city: "通辽",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    
    {
      // 莎莎myself
      name: "sha1",
       //o-np76KNBT9E-s-EFAiiciKi8XOI
      id: "",
      useTemplateId: "DyI9mtmiqodcc2zJ7yAAhYj2xZWEmrb9Z2tmsRcEo50",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       // 莎莎other
      name: "sha2",
      // o-np76BonucYgvzR9DYO7RojRYo8
      id: "",
      useTemplateId: "DyI9mtmiqodcc2zJ7yAAhYj2xZWEmrb9Z2tmsRcEo50",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
      
    {
      // 梅梅myself
      name: "mei1",
       //o-np76KNBT9E-s-EFAiiciKi8XOI
      id: "",
      useTemplateId: "CLJp1-_yBK-zO77ps1E1Qmz20JAl2qaAEcp60qLKbAQ",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
       // 梅梅other
      name: "mei2",
      // 
      id: "",
      useTemplateId: "CLJp1-_yBK-zO77ps1E1Qmz20JAl2qaAEcp60qLKbAQ",
      province: "云南",
      city: "昆明",
      openUrl: "http://www.zhouyu8.xyz"
    }, 
    {
      name: "老婆3", 
      id: "",
      useTemplateId: "",
      province: "",
      city: "",
      openUrl: "http://www.zhouyu6.xyz"
    }, 
  ],

  /**
   * 回调消息 相关，主要用来展示发送是否成功/失败的数据
   */

  // 回调消息模板id, 用来看自己有没有发送成功的那个模板
  CALLBACK_TEMPLATE_ID: "lH7gw_FUZwMMy3sHhrveiEWzKfxVSN0JxedHIsITBys",

  // 接收成功回调消息的微信号，（一般来说只填自己的微信号, name填不填无所谓）
  CALLBACK_USERS: [
    {
      // 一般都填自己
      name: "自己",
      // 自己的微信id，扫码关注你的微信测试号后生成的一段字符串，在测试号后台能看到
      //o-np76KNBT9E-s-EFAiiciKi8XOI
      id: "",
    }, 
  ],
    
  /**
   * 信息配置
   */

  /** 天气相关 */

  // 默认所在省份, USERS 中没填的话, 会默认拿这里的省份
  PROVINCE: "云南",
  // 默认所在城市, USERS 中没填的话, 会默认拿这里的城市
  CITY: "昆明",

  /** 重要节日相关 */

  /**
   * 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
   * tpye必须填！ 只能 “生日” 和 “节日” 二选一!
   * 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
   * 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
   */
  FESTIVALS: [
    {"type": "生日", "name": "one", "year": "1996", "date": "09-02"},
    {"type": "节日", "name": "结婚纪念日", "year": "2020", "date": "09-03"},
    {"type": "生日", "name": "李四", "year": "1996", "date": "09-31"},
    {"type": "节日", "name": "被搭讪纪念日", "year": "2021", "date": "09-01"},
  ],

  /**
   * 限制重要节日的展示条目, 需要填写数字; 
   * 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
   * 如果为0, 则默认展示全部
   */
  FESTIVALS_LIMIT: 4,

  /** 日期相关 */

  /** 你现在可以随心增加你认为的所有的需要纪念的日子啦！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "love_date" ，在测试号中就是 {{ love_date.DATA }} 
    * */
  CUSTOMIZED_DATE_LIST: [
    // 在一起的日子
    {"keyword": "love_day", date: "2022-10-12"},
    //firstday
     {"keyword": "first_day", date: "2023-03-02"},
    // 媛媛
    {"keyword": "yuan_day", date: "2022-10-17"},
    // 梅梅
    {"keyword": "mei_day", date: "2022-10-19"},
    // 莎莎
    {"keyword": "shasha_day", date: "2022-10-18"},
        // 孙婧原通辽
    {"keyword": "tl_day", date: "2022-08-27"},
            // 广东深圳
    {"keyword": "gd_day", date: "2022-09-03"},
                //28
//     {"keyword": "28_day", date: "2022-09-04"},
    {"keyword": "28_day", date: "2022-10-12"},
    // 结婚纪念日
    {"keyword": "marry_day", date: "2020-01-04"},
    // 退伍日, 不用可以删掉
    {"keyword": "ex_day", date: "2022-08-31"},
    // sakana日
    // {"keyword": "sakana_day", date: "2022-01-06"},
    // ... 
  ],

  /** 插槽 */

  /** 你可以在这里写超多的你想显示的内容了！
    * keyword是指暴露给测试号的模板字段，填什么就暴露什么, 请注意不要和README的出参表中的字段重复。
    * 比如：keyword: "lover_prattle" ，在测试号中就是 {{ lover_prattle.DATA }} 
    * */
  SLOT_LIST: [
    // 这样配置的话，就会每次发送这句话
    {"keyword": "encourage_oneself", contents: "你主要的问题在于读书太少而想得太多"},
    // 这样配置的话，就会每次随机选一句话发送
    {"keyword": "lover_prattle", contents: [
      "因为太喜欢你，所以看谁都像是情敌。",
      "申请成为你爱里的永久居民。",
      "你很傻，你很笨，可我还是很羡慕你，因为你有我",
      "遇见你，就好像捡到了100斤的运气",
    ]},
  ],

  /** 每日一言 */

  // 好文节选的内容类型
  // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
  LITERARY_PREFERENCE: ""


}
