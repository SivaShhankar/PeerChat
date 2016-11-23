/***************************************************************************/
/*                                                                         */
/*  This obfuscated code was created by Javascript Obfuscator Free Version.*/
/*  Javascript Obfuscator Free Version can be downloaded here              */
/*  http://javascriptobfuscator.com                                        */
/*                                                                         */
/***************************************************************************/
var _$_5330=["rampeerjs.herokuapp.com","443","http://",":","/","open","text","#pid","on","connection","error","log","</br><br/> Please start a new session "];var user;var peerID;var connectedPeers={};var peer,person;var serverIP=_$_5330[0],serverPort=_$_5330[1];var serverHost=_$_5330[2]+ serverIP+ _$_5330[3]+ serverPort+ _$_5330[4];function startPeerSession(){if(person!= null){peer=  new Peer(person,{host:serverIP,port:serverPort,secure:true,debug:3});peer[_$_5330[8]](_$_5330[5],function(a){user= a;peerID= a;$(_$_5330[7])[_$_5330[6]](a)});peer[_$_5330[8]](_$_5330[9],connect);peer[_$_5330[8]](_$_5330[10],function(b){console[_$_5330[11]](b);displayInfo(b+ _$_5330[12],1);return})}}