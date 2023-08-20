/**************************************************
 * MKOnlinePlayer v2.32
 * 播放列表配置模块
 * 编写：mengkun(http://mkblog.cn)
 * 时间：2017-9-15
 * edit: tuannvbg@gmail.com
 * date: 2022-03-07
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
        id: "data/100.bai.hat.nhac.tre.viet.nam.2022.mp3.zing.vn.json"     // Top 100 nhạc trẻ Việt Nam
    },
	{
		id: "data/playlist19111981.json" //Top 100 Âu Mỹ
	},
	{
		id: "data/playlist12081987.json" //TOp 100 Nhạc trẻ EDM
	},
	{
		id: "data/100.bai.hat.dance.viet.nam.json" //Top 100 Nhạc Dance Việt Nam
	},
	{
		id: "data/100.bai.hat.nhac.phim.viet.nam.hay.nhat.2022.json" //Top 100 bài hát nhạc phim Việt Nam hay nhất 2022 (https://mp3.zing.vn/xhr/media/get-source?type=album&key=LmJmykHNBcRHJpxyHtbmLmyLgzXQsbWsc)
		//https://zingmp3.vn/album/Top-100-Nhac-Tru-Tinh-Hay-Nhat-Luu-Anh-Loan-Phi-Nhung-Nhu-Quynh-Manh-Quynh/ZWZB969F.html
	},
	{
		id: "data/100.bai.hat.tru.tinh.hay.nhat.2022.json"
		//Top 100 bài hát trữ tình hay nhất (https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZnJGykGNdcRmxlNyGTFHLHtkClgQNzFFi)
	},
	{
		id: "data/100.bai.hat.cach.mang.hay.nhat.2022.json"
		//urljson: https://mp3.zing.vn/xhr/media/get-source?type=album&key=LmcHyLGNdcRnxQZtHtvHkGTLhlgWsSCNX
		//url: https://zingmp3.vn/album/Top-100-Nhac-Cach-Mang-Viet-Nam-Truong-Kha-Quang-Ha-Tinh-Ca-Viet-Ta-Minh-Tam/ZWZB96AO.html
	},
	{
		id: "data/100.bai.hat.rap.viet.nam.hay.nhat.2022.json"
		//url: https://zingmp3.vn/album/Top-100-Nhac-Rap-Viet-Nam-Hay-Nhat-Lil-Wuyn-Binz-Rhymastic-Phao/ZWZB96AI.html
		//urljson: https://mp3.zing.vn/xhr/media/get-source?type=album&key=kHxHTZnNdJEmczETHTbHZmtZXSXQaWLBB
	},
	{
		id: "data/100.bai.hat.rock.viet.nam.hay.nhat.2022.json"
		//url: https://zingmp3.vn/album/Top-100-Nhac-Rock-Viet-Nam-Hay-Nhat-VOX-Cuong-Ca-Balin-Kim-Nhu/ZWZB96A0.html
		//urljson: https://mp3.zing.vn/xhr/media/get-source?type=album&key=LmcnyZHaVximxzJyntvGZnyLXShQJmgzB
	},
	{
		id: "data/100.bai.hat.que.huong.viet.nam.hay.nhat.2022.json"
		//url: https://zingmp3.vn/album/Top-100-Nhac-Que-Huong-Hay-Nhat-Phi-Nhung-Chi-Vien-To-My-Duong-Hong-Loan/ZWZB96AU.html
		//urljson: https://mp3.zing.vn/xhr/media/get-source?type=album&key=knJmtZGNBxRmJQDyntbnZHykXzhQaRGiG
	},
	{
		id: "data/100.bai.hat.thieu.nhi.viet.nam.hay.nhat.2022.json"
		//url: https://zingmp3.vn/album/Top-100-Nhac-Thieu-Nhi-Hay-Nhat-Ngoc-Khanh-Chi-Be-Thanh-Ngan-Chan-Be-Minh-Vy/ZWZB96A6.html
		//urljson: https://mp3.zing.vn/xhr/media/get-source?type=album&key=kmcmykHaBximcpAtmtbmkntkhlCpcLXhg
	},
	{
		id: "data/100.bai.hat.nhac.trinh.viet.nam.hay.nhat.2022.json"
		//"url": "https://zingmp3.vn/album/Top-100-Nhac-Trinh-Hay-Nhat-Hung-Cuong-Luu-Anh-Loan-Viet-Hoa-Anh-Trinh/ZWZB96A9.html",
		//"urljson": "https://mp3.zing.vn/xhr/media/get-source?type=album&key=LmxnyZnNdcRmxQayHtFHZmTZgAgWcbGBb"
	},
	{
		id: "data/100.bai.hat.cai.luong.viet.nam.hay.nhat.2022.json"
		//"url": "https://zingmp3.vn/album/Top-100-Cai-Luong-Hay-Nhat-Cam-Loan-Hoan-Lam-Vy-Thuy-Hang-Lam-Quang-Long/ZWZB96A8.html",
		//"urljson": "https://mp3.zing.vn/xhr/media/get-source?type=album&key=kmcntLmaBxinxpCTmybHLmTkhzXWcFphp"
	},
	{
		id: "data/100.bai.hat.khong.loi.viet.nam.hay.nhat.2022.json"
		//"url": "https://zingmp3.vn/album/Top-100-Nhac-Khong-Loi-Viet-Nam-Hay-Nhat-Vu-Dang-Quoc-Viet-Peto-Phuong-Thuy-Duckie/ZWZB96A7.html",
		//"urljson": "https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZmJHtZmaBJRmcQWymyvnkGTZCSXWxBLAi"
	},
	{
		id: "data/album.song.ca.dac.biet.2000.json"
		//Song Ca Đặc Biệt năm 2000
	},
	{
		id: "data/album.zingchart-Tuan-8-2022-Various-Artists.6AFU6A70.json"
		//"urljson": "https://mp3.zing.vn/xhr/media/get-source?type=album&key=LHxnyZSxhWWEsFxtmybmLHykClCpJcHBL",
		//"url": "https://zingmp3.vn/album/zingchart-Tuan-8-2022-Various-Artists/6AFU6A70.htmlhttps://zingmp3.vn/album/zingchart-Tuan-8-2022-Various-Artists/6AFU6A70.html"
	},
	{
		id: "data/album.Nhac-Tre-Huyen-Thoai-Mot-Thoi.ZOB6OA87.json"
		//"url": "https://zingmp3.vn/album/Nhac-Tre-Huyen-Thoai-Mot-Thoi-Dan-Truong-Ung-Hoang-Phuc-Duy-Manh-Ly-Hai/ZOB6OA87.html",
		//"urljson": "https://mp3.zing.vn/xhr/media/get-source?type=album&key=LHJHyZmRghmcFCdtGyFHkHyZhACpcEGXB"
	},
	{
		id: "data/100.Bai.Hat.Nhac.Tre.Hay.Nhat.02.04.2023.json"
		//Top 100 bài hát Nhạc Trẻ hay nhất 02.04.2034d (https://mp3.zing.vn/xhr/media/get-source?type=album&key=ZmJHykmaBxEmczhyHtbmZHyLgcmpFZaEz)
	},
    // 自定义列表教程开始！ - The custom list tutorial begins!
    // 方式一：手动创建列表并添加歌曲信息 - Method 1: Manually create a list and add song information
    // 温馨提示：各大音乐平台获取到的外链有效期均较短，因此 url 值应该设置为空，以让程序临时抓取 - Reminder: The validity period of the external links obtained by major music platforms is relatively short, so the url value should be set to empty to allow the program to temporarily grab
    {
        name: "Tuyển chọn bài hát hay của Jimmii Nguyễn 2021",   // Tên danh sách phát 
        cover: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/e/7/9/2/e7925cdbed9a2b1159b8e63832ec5626.jpg", // Ảnh bìa danh sách phát 
        creatorName: "",        // Tên của người tạo danh sách (tạm thời không được sử dụng, có thể để trống) 
        creatorAvatar: "",      // Hình đại diện của người tạo danh sách (tạm thời không được sử dụng, có thể để trống)
        item: [                 // 这里面放歌曲
            {
                id: "001",  // 音乐ID
                name: "Hoa Bằng Lăng",  // 音乐名字
                artist: "Jimmii Nguyễn", // 艺术家名字
                album: "The Best Of Jimmii Nguyễn",    // 专辑名字
                source: "local",     // Music source
                url_id: "436514312",  // 链接ID
                pic_id: "2946691234868155",  // 封面ID
                lyric_id: "436514312",  // 歌词ID
                pic: "https://dl.dropboxusercontent.com/s/lustc200i1w8rp9/Jimmy.Nguyen.jpg",    // 专辑图片
				lrc: "lrc/Jimmii.Nguyen-Hoa.Bang.Lang.json",
                url: "https://dl.dropboxusercontent.com/s/gmv5bk246o5hntz/Jimmy.Nguyen-Hoa.Bang.Lang.mp3"   // mp3链接（此项建议不填，除非你有该歌曲的比较稳定的外链）
            },
            // 下面演示插入各个平台的音乐。。。
            {
                id: "002",
                name: "Tình Xưa Nghĩa Cũ",
                artist: "Jimmii Nguyễn",
                album: "The Best Of Jimmii Nguyễn", 
                source: "local",      // 网易云
                url_id: "65528",
                pic_id: "18782957139233959",
                lyric_id: "65528",
                pic: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/covers/d/a/da1e8b25e7b9760003e834ee7dcd78e0_1370403629.jpg",
                url: "https://dl.dropboxusercontent.com/s/mp54pull4g9dgmf/Jimmy.Nguyen-Tinh.Xua.Nghia.Cu.mp3"
            },
            {
                id: "003",
                name: "Ngồi Đây Vẫn Mong Đợi",
                artist: "Jimmii Nguyễn",
                album: "The Best Of Jimmii Nguyễn", 
                source: "local",      // 网易云
                url_id: "001JD1SR29d1hS",
                pic_id: "004DYsvN2QCYcj",
                lyric_id: "001JD1SR29d1hS",
                pic: "https://dl.dropboxusercontent.com/s/lustc200i1w8rp9/Jimmy.Nguyen.jpg",
                url: "https://dl.dropboxusercontent.com/s/8ll0330p6v66u6x/Jimmy.Nguyen-Ngoi.Day.Van.Mong.Doi.mp3"     // 腾讯的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            },
            {
                id: "004",
                name: "Cố Quên",
                artist: "Jimmii Nguyễn",
                album: "The Best Of Jimmii Nguyễn", 
                source: "local",         // 虾米
                url_id: "81175",
                pic_id: "81175",
                lyric_id: "81175",
                pic: "https://dl.dropboxusercontent.com/s/lustc200i1w8rp9/Jimmy.Nguyen.jpg",
                url: "https://dl.dropboxusercontent.com/s/oliutpf0r3jyttl/Jimmy.Nguyen-Co.Quen.mp3"     // 虾米的外链有效期较短，插入时 url [必须]设置空值，播放时再临时抓取
            }
        ]
    },
    // 方式二：直接提供网易云歌单ID
    {
        name: "Tuyển chọn nhạc trẻ hay nhất",   // Tên danh sách phát 
        cover: "https://photo-resize-zmp3.zadn.vn/w320_r1x1_jpeg/cover/9/f/e/2/9fe28d775a5825be60eaf40f8b1b8803.jpg", // Ảnh bìa danh sách phát 
        creatorName: "",        // Tên của người tạo danh sách (tạm thời không được sử dụng, có thể để trống) 
        creatorAvatar: "",      // Hình đại diện của người tạo danh sách (tạm thời không được sử dụng, có thể để trống)
        item: [                 // 这里面放歌曲
            {
                id: "001",  // 音乐ID
                name: "Tôi Ngàn Năm Đợi",
				album: "The Best Of Lam Trường", 
			  artist: "Lam Trường",
			  url: "https://dl.dropboxusercontent.com/s/v1y41t8toihe9e3/Lam.Truong-Toi.Ngan.Nam.Doi.mp3",
			  pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
			  lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/dbb16df0fd1d0896ce6d7336fce8d626_1074291237.lrc"
            },
            // 下面演示插入各个平台的音乐。。。
            {
				id: "002",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
				name: "Khi Nào Em Mới Biết",
				artist: "Minh Thuận",
				url: "https://dl.dropboxusercontent.com/s/46bu9zvdkyab0r5/Minh.Thuan-Khi-Nao-Em-Moi-Biet.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/9/490d8de4ff5975b3a7d5f1ddc4729853_1510490359.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/8/6/a/b/86ab94fc46948fdd3a5f3c1b508d9ce2.lrc"
                
            },
            {
                id: "003",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
               name: "Tình Đơn Phương",
				artist: "Lam Trường",
				url: "https://dl.dropboxusercontent.com/s/ac2aa1cf54dohum/Lam.Truong-Tinh.Don.Phuong.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/84e0c113ca4c106bd31ccca004940f70_1074291239.lrc"
            },
            {
                id: "004",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
               name: "Tình Phai",
				  artist: "Lam Trường",
				  url: "https://dl.dropboxusercontent.com/s/6tw7kqpnne1zfgf/Lam.Truong-Tinh.Phai.mp3",
				  pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
				  lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/354547da04d17cfb9954c55cc278c8a8_1074291242.lrc"
            },
            {
                id: "005",
				album: "The Best Of Bằng Kiều",
				source: "local",      // 网易云              
                name: "Trái Tim Bên Lề",
				artist: "Bằng Kiều",
				url: "https://dl.dropboxusercontent.com/s/erqes7ckan8dqa6/Bang.Kieu-Trai.Tim.Ben.Le.mp3?dl=0",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/8/4/84d49670aa357051bd72b18ce0feedd8_1446460401.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/7/a/4/8/7a4859bd34c85b1a0273eb7db6d4e7ef.lrc"
            },
            {
                id: "006",
				album: "The Best Of Phương Thanh",
				source: "local",      // 网易云              
                name: "Một Thời Đã Xa",
          artist: "Phương Thanh",
          url: "https://dl.dropboxusercontent.com/s/grumn8wmecrwz9n/Phuong.Thanh-Mot.Thoi.Da.Xa.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/1/6/f/716f765d92c139123235d20f77e8c585.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2015/f/3/f33595003a668a03b22d6ade7222784c_1074291244.lrc"
            },
            {
                id: "007",
				album: "The Best Of Đan Trường",
				source: "local",      // 网易云              
               name: "Ảo Mộng Tình Yêu",
          artist: "Đan Trường ft Cẩm Ly",
          url: "https://dl.dropboxusercontent.com/s/cqwp99utqm6dp5q/Dan.Truong-Cam.Ly-Ao.Mong.Tinh.Yeu.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/7/2/f/072fc82083bbf30a171de034a71b3dbb.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/f/2/4/5/f2451724474f1de494e0739ada0422e6.lrc"
            },
            {
                id: "008",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云              
                name: "Biệt Khúc",
          artist: "Lam Trường",
          url: "https://dl.dropboxusercontent.com/s/w1ezerhvogocp6t/Lam.Truong-Biet.Khuc.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/690891b89905656129e32e0c6a2de4b7_1074291245.lrc"
            },
            {
                id: "009",
				album: "The Best Of Phương Thanh",
				source: "local",      // 网易云              
                name: "Tình Xa Khuất",
				artist: "Phương Thanh",
				url: 	"https://dl.dropboxusercontent.com/s/yh72fai2b5i6nie/Phuong.Thanh-Tinh.Xa.Khuat.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/7/1/6/f/716f765d92c139123235d20f77e8c585.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/2/4/b/7/24b76dfbd03b9120a167fc8c26408156.lrc"
            },
            {
				id: "010",
				album: "The Best Of Cẩm Ly",
				source: "local",      // 网易云              
				name: "Phố Cũ Vắng Anh",
				artist: "Cẩm Ly",
				url: "https://dl.dropboxusercontent.com/s/ui6zxd50xbrmanp/Cam.Ly-Pho.Cu.Vang.Anh.mp3",
				pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/a/5/3/e/a53e95551cdc52a921e3872b2c68cc30.jpg",
				lrc: "https://static-zmp3.zadn.vn/lyrics/2015/3/b/3b68872d47973918c927f4bbdaec63de_1074291249.lrc"
            },
            {
				id: "011",
				album: "The Best Of Lam Trường",
				source: "local",      // 网易云     
				name: "Tình Đơn Phương 2",
          artist: "Lam Trường",
          url: "https://dl.dropboxusercontent.com/s/zpcge9virw9obxx/Lam.Truong-Tinh.Don.Phuong.2.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/c/0c03c83c0910c8752c256694638c4576_1509937204.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2017/01/05/30fee4f1b4328d3d8dea0fb9a15d7f8f_1074291250.lrc"			
            },
        {
			id: "012",
				album: "The Best Of 1080",
				source: "local",      // 网易云  
          name: "Tình 1088",
          artist: "1088",
          url: "https://dl.dropboxusercontent.com/s/1xdnx8k423v67rr/1088-Tinh.1088.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/6/8/68d5535b971d558f594f10a5affd0a71_1285661324.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/6/5/5/b/655b24e882ca60d109901748ce25eb3c.lrc"
        },
        {
			id: "013",
				album: "The Best Of Phi Hùng",
				source: "local",      // 网易云  
          name: "Tình Đơn Côi",
          artist: "Phi Hùng",
          url: "https://dl.dropboxusercontent.com/s/qdyx8xe14eobmlc/Phi.Hung-Tinh.Don.Coi.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/1/41e23f2e81f47c4f9a621244ef4045a4_1502336403.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2015/0/9/09ba9aa19a0ca7db27fe8290ee8764a5_1074291252.lrc"
        },
        {
			id: "014",
				album: "The Best Of Đan Trường",
				source: "local",      // 网易云  
          name: "Giấc Mơ Mùa Đông",
          artist: "Đan Trường",
          url: "https://dl.dropboxusercontent.com/s/cah5pcrgzsjw54i/Dan.Truong-Giac.Mo.Mua.Dong.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/0/7/2/f/072fc82083bbf30a171de034a71b3dbb.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/2015/f/1/f1e6e0d176af4b85f9e9013d09fb801d_1074291254.lrc"
        },
        {
		  id: "015",
		  album: "The Best Of 1080",
		  source: "local",      // 网易云  
          name: "Dáng Em",
          artist: "Phi Hùng",
          url: "https://dl.dropboxusercontent.com/s/s1he3dkfdm9jwr8/Phi.Hung-Dang.Em.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/4/1/41e23f2e81f47c4f9a621244ef4045a4_1502336403.jpg",
          lrc: "https://static-zmp3.zadn.vn/lyrics/8/b/e/3/8be3598599bd7f925c2c0e4b357e5c77.lrc"
        },
        {
			id: "016",
				album: "The Best Of 1080",
				source: "local",      // 网易云  
          name: "Ngàn Năm Khó Phai",
          artist: "Hoàng Châu",
          url: "https://dl.dropboxusercontent.com/s/0ag30e095qreui2/Hoang.Chau-Ngan.Nam.Kho.Phai.mp3",
          pic: "https://photo-resize-zmp3.zadn.vn/w240_r1x1_jpeg/avatars/3/f/3fb2db6cccf4a23383383394b28b2b31_1514518552.jpg",
          lrc: "https://dl.dropboxusercontent.com/s/bumtqawo4h39gzd/Hoang.Chau-Ngan.Nam.Kho.Phai.lrc?dl=0"
        }
        ]
    },  // 播放列表的最后一项大括号后面不要加逗号
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
				lrc: "lyrics/Dinh.Dai.Vu-My.Nhan.js",
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
    }
];