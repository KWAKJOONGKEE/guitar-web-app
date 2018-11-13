//Simple Server WebSocket 작성
const WebSocket = require('ws');
//WebSocket Server 객체 생성
const wss = new WebSocket.Server({port:40510});

//event: connection, message event 처리
wss.on('connection',function (ws) {
    //client에서 보낸 메시지를 서버에서 수신 받음
    ws.on('message', function(msg){
        console.log('수신 받은 메시지 : %s', msg);
    });
    // 서버에서 클라이언트에게 메시지를 전송
    setInterval(() => ws.send(`${new Date()}`),3000);
    }
);
