// @author Junchen Yi
// @version ${2021.7.22} ${19:37}
var time_now_server,time_now_client,time_end,time_server_client;
 
        time_end=new Date("2021/8/22 23:59:59");//结束的时间
        time_end=time_end.getTime();//获取的是毫秒
 
        time_now_server=new Date();//开始的时间
        time_now_server=time_now_server.getTime();
        setTimeout("show_time()",1000);
 
        function show_time()
        {
            var timer = document.getElementById("timer");
            var hourid = document.getElementById("hour");
            if(!timer){
                return ;
            }
            timer.innerHTML =time_now_server;
 
            var time_now,time_distance,str_time;
            var int_day,int_hour,int_minute,int_second;
            var time_now=new Date();
            time_now=time_now.getTime();
            time_distance=time_end-time_now;
            if(time_distance>0)
            {
                int_day=Math.floor(time_distance/86400000)
                time_distance-=int_day*86400000;
                int_hour=Math.floor(time_distance/3600000)
                time_distance-=int_hour*3600000;
                int_minute=Math.floor(time_distance/60000)
                time_distance-=int_minute*60000;
                int_second=Math.floor(time_distance/1000)
 
                if(int_hour < 10)
                    int_hour="0"+int_hour;
                if(int_minute<10)
                    int_minute="0"+int_minute;
                if(int_second<10)
                    int_second="0"+int_second;
                str_time=int_day+"天"+int_hour+"时"+int_minute+"分"+int_second+"秒";
                timer.innerHTML=str_time;
                setTimeout("show_time()",1000);
            }
            else
            {
                timer.innerHTML =0;
            }
        }