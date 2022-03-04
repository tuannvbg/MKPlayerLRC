/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 * Edit: tuannvbg@gmail.com
 * Date: 2022-03-04
 * Target: use MKOnlineMusicPlayer with playlist use add .lrc dependent server
 *************************************************/
// 建议修改前先备份一下
// 获取 歌曲的网易云音乐ID 或 网易云歌单ID 的方法：
// 先在 js/player.js 中开启调试模式，然后按 F12 打开浏览器的控制台。播放歌曲或点开歌单即可看到相应信息

var musicList = [
    // 以下三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    // 预留列表：搜索结果
    {
        name: "搜索结果",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：正在播放
    {
        name: "正在播放",   // 播放列表名字
        cover: "",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },
    // 预留列表：播放历史
    {
        name: "播放历史",   // 播放列表名字
        cover: "images/history.png",          // 播放列表封面
        creatorName: "",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: []
    },  
    // 以上三个系统预留列表请勿更改，否则可能导致程序无法正常运行！
    //*********************************************
    // 自定义列表开始，您可以自由添加您的自定义列表
    {
        name: "Nhạc Trẻ Tâm Trạng",   // 播放列表名字
        cover: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/cover/4/d/f/4/4df47ce9d90a1c29acd2bbd647682b90.jpg",          // 播放列表封面
        creatorName: "Tuấn",        // 列表创建者名字
        creatorAvatar: "",      // 列表创建者头像
        item: [
			{
                id: "001",  // 音乐ID
                name: "Hoa Nở Không Màu",  // 音乐名字
                artist: "Hoài Lâm", // 艺术家名字
                album: "Nhạc Trẻ Tuyển Chọn",    // 专辑名字
                source: "local",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
				lrc: "lyrics/Hoai.Lam-Hoa.No.Khong.Mau.lrc",
                pic: "https://avatar-ex-swe.nixcdn.com/song/2020/05/15/c/f/3/0/1589532035884_500.jpg",    // 专辑图片
                url: "https://dl.dropboxusercontent.com/s/si2mga7b5imfobl/Hoai.Lam-Hoa.No.Khong.Mau.mp3?dl=0"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
			{
				id: "002",
				name: "Buồn Làm Chi Em Ơi",
				artist: "Hoài Lâm",
				album: "Nhạc Trẻ Tuyển Chọn",
				source: "local",
				lrc: "lyrics/Hoai.Lam-Buon.Lam.Chi.Em.Oi.lrc",
				pic: "https://avatar-ex-swe.nixcdn.com/song/2020/06/12/5/b/c/b/1591950830200_500.jpg",
				url: "https://dl.dropboxusercontent.com/s/nc2x565rw5y5cgj/Hoai.Lam-Buon.Lam.Chi.Em.Oi.mp3?dl=0"
			}
		]
    },
    {
        name: "Nhạc Việt Nam 2022",   // 播放列表名字
        cover: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/f/3/f3ccdd27d2000e3f9255a7e3e2c48800_1519897848.jpg", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "001",  // 音乐ID
                name: "Mỹ Nhân",  // 音乐名字
                artist: "Đinh Đại Vũ", // 艺术家名字
                album: "Nhạc Trẻ Tuyển Chọn",    // 专辑名字
                source: "local",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
				lrc: "lyrics/Dinh.Dai.Vu-My.Nhan.js",
                pic: "https://avatar-ex-swe.nixcdn.com/song/2019/11/28/1/e/6/0/1574932935845.jpg",    // 专辑图片
                url: "https://dl.dropboxusercontent.com/s/0d2ooyr1d3eg3s7/Dinh.Dai.Vu-My.Nhan.mp3"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            }
		]
    },
    
    // 自定义列表教程开始！
    // 方式一：手动创建列表并添加歌曲信息
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取
    {
        name: "Nhạc Việt Nam",   // 播放列表名字
        cover: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_webp/covers/f/3/f3ccdd27d2000e3f9255a7e3e2c48800_1519897848.jpg", // 播放列表封面图像
        creatorName: "",        // 列表创建者名字(暂时没用到，可空)
        creatorAvatar: "",      // 列表创建者头像(暂时没用到，可空)
        item: [                 // 这里面放歌曲
            {
                id: "001",  // 音乐ID
                name: "Mỹ Nhân",  // 音乐名字
                artist: "Đinh Đại Vũ", // 艺术家名字
                album: "Nhạc Trẻ Tuyển Chọn",    // 专辑名字
                source: "local",     // 音乐来源
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
				lrc: "https://dl.dropboxusercontent.com/s/mith3saibgoet94/Dinh.Dai.Vu-My.Nhan.js",
                pic: "https://avatar-ex-swe.nixcdn.com/song/2019/11/28/1/e/6/0/1574932935845.jpg",    // 专辑图片
                url: "https://dl.dropboxusercontent.com/s/0d2ooyr1d3eg3s7/Dinh.Dai.Vu-My.Nhan.mp3"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "65528",
                name: "Huynh Đệ À",
                artist: "Đinh Đại Vũ",
                album: "Nhạc Trẻ Tuyển Chọn",
                source: "local",      // 网易云
                url_id: "65528",
                pic_id: "18782957139233959",
                lyric_id: "65528",
				lrc: "lyrics/Dinh.Dai.Vu-Huynh.De.A.json",
				lrczmp3: "https://static-zmp3.zadn.vn/lyrics/1/1/7/c/117c480ea17fe29e30ce12a9a66da40e.lrc",
                pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/9/8/d/7/98d7998a7c74ce85500fb19f8ede6150.jpg",
                url: "https://dl.dropboxusercontent.com/s/whm7q7qd1l54wuc/Dinh.Dai.Vu-Huynh.De.A.mp3"
            },
            {
                id: "003",
                name: "Bước Qua Đời Nhau (Remix)",
                artist: "Lê Bảo Bình",
                album: "Việt Nam Remix",
                source: "local",      // 腾讯
                url_id: "001JD1SR29d1hS",
                pic_id: "004DYsvN2QCYcj",
                lyric_id: "001JD1SR29d1hS",
				lrc: "[00:00.12] Mà cớ sao ta giờ đây\n[00:02.00] Bước qua đời nhau\n[00:04.24] Rồi trái tim ta phải đau\n[00:06.12] Nhớ nhung vì nhau\n[00:08.37] Và có khi nào em thấy\n[00:10.24] Tiếc nuối về ngày xưa\n[00:12.86] Vội vàng quá để mình mất nhau\n[00:16.24] Ngày đấy giá anh và em\n[00:18.12] Chúng ta đừng cố chấp\n[00:20.37] Ngày đấy giá anh và em\n[00:22.25] Chúng ta bình tĩnh hơn\n[00:24.50] Ngày đấy giá anh kìm nén\n[00:26.03] Mỗi khi mình cãi vã\n[00:28.62] Để hai ta hai ta sẽ không\n[00:32.37] Bước qua đời nhau\n[01:04.75] Mình bước qua đời nhau\n[01:07.02] Để làm nhau đau\n[01:09.27] Để làm nhau khóc\n[01:10.38] Gặp nhau không muốn chào\n[01:12.64] Mình bước qua đời nhau\n[01:14.89] Để lại thương đau\n[01:17.14] Để lại vệt sâu\n[01:18.27] Có xóa mờ được đâu\n[01:20.13] Mình đã từng hạnh phúc\n[01:22.76] Phải không em ơi\n[01:24.64] Mình từng chung lối\n[01:26.14] Khổ đau lẫn tiếng cười\n[01:28.39] Mình đã luôn từng nói\n[01:30.63] À không thể chưa\n[01:32.88] Mình từng thế ước\n[01:34.39] Mãi không bao giờ xa\n[01:36.26] Mà cớ sao ta giờ đây\n[01:38.14] Bước qua đời nhau\n[01:40.38] Rồi trái tim ta phải đau\n[01:42.27] Nhớ nhung vì nhau\n[01:44.51] Và có khi nào em thấy\n[01:46.39] Tiếc nuối về ngày xưa\n[01:49.01] Vội vàng quá để mình mất nhau\n[01:52.02] Ngày đấy giá anh và em\n[01:54.27] Chúng ta đừng cố chấp\n[01:56.51] Ngày đấy giá anh và em\n[01:58.39] Chúng ta bình tĩnh hơn\n[02:00.26] Ngày đấy giá anh kìm nén\n[02:02.14] Mỗi khi mình cãi vã\n[02:04.77] Để hai ta hai ta sẽ không\n[02:08.51] Bước qua đời nhau\n[02:41.01] Mình bước qua đời nhau\n[02:42.89] Để làm nhau đau\n[02:45.14] Để làm nhau khóc\n[02:46.25] Gặp nhau không muốn chào\n[02:48.50] Mình bước qua đời nhau\n[02:50.76] Để lại thương đau\n[02:53.01] Để lại vệt sâu\n[02:54.15] Có xóa mờ được đâu\n[02:56.39] Mình đã từng hạnh phúc\n[02:59.00] Phải không em ơi\n[03:00.88] Mình từng chung lối\n[03:02.04] Khổ đau lẫn tiếng cười\n[03:04.26] Mình đã luôn từng nói\n[03:06.89] À không thể chưa\n[03:09.14] Mình từng thế ước\n[03:10.25] Mãi không bao giờ xa\n[03:12.13] Mà cớ sao ta giờ đây\n[03:14.03] Bước qua đời nhau\n[03:16.26] Rồi trái tim ta phải đau\n[03:18.14] Nhớ nhung vì nhau\n[03:20.39] Và có khi nào em thấy\n[03:22.25] Tiếc nuối về ngày xưa\n[03:24.88] Vội vàng quá để mình mất nhau\n[03:28.26] Ngày đấy giá anh và em\n[03:30.14] Chúng ta đừng cố chấp\n[03:32.38] Ngày đấy giá anh và em\n[03:34.25] Chúng ta bình tĩnh hơn\n[03:36.51] Ngày đấy giá anh kìm nén\n[03:38.37] Mỗi khi mình cãi vã\n[03:41.01] Để hai ta hai ta sẽ không\n[03:44.38] Bước qua đời nhau",
                pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/cover/c/7/6/0/c76000d7918cc2494095343c9faea307.jpg",
                url: "https://dl.dropboxusercontent.com/s/h81w2ojv42yv6tg/Phi.Nguyen-Buoc.Qua.Doi.Nhau.Remix.mp3"     // 腾讯的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            },
            {
                id: "004",
                name: "Hoa Hải Đường",
                artist: "Jack",
                album: "The Best Of Jack",
                source: "local",    // 虾米
                url_id: "81175",
                pic_id: "81175",
                lyric_id: "81175",
				lrc: "https://dl.dropboxusercontent.com/s/vfkvtpjysgre7v5/Jack-Hoa.Hai.Duong.lrc",
                pic: "https://photo-resize-zmp3.zadn.vn/w480_r1x1_webp/cover/a/8/6/2/a8626a5671f5a01250a074c4c8140cae.jpg",
                url: "https://dl.dropboxusercontent.com/s/dle05qjk3nidc83/Jack-Hoa.Hai.Duong.mp3?dl=0"     // 虾米的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            }
        ]
    }  // 播放列表的最后一项大括号后面不要加逗号
];
