var _$_a011=["application/json","set","json","ajax","showall","","html","#userList","length","<div class='userdetails'>","<span><img class='usericon' src='images/User.png' width='32' height='32'></img></span>","<span>","name","</span></div>","<div id='testscroll'>","</div>","append","230px","slimScroll","#testscroll","label","chat","id","peer","attr","active","addClass","connection","<div></div>","Chat with <strong>","</strong>","<h1></h1>","messages","<div><em>Peer connected.</em></div>","<img class=\"callRemotePeer\" src=\"/images/phone.png\"></img>","<img class=\"CallAudio\" src=\"/images/AudioCall.png\"></img>","<input type=\"text\" class=\"messagebox\" placeholder=\"Enter message\">","click","indexOf","class","removeClass","on","hide",".filler","#connections","data","<div><span class=\"peer\">",": </span> ","getElementsByClassName","getElementById","scrollTop","scrollHeight","close"," has left the chat.","remove",".connection","show","file","constructor","createObjectURL","URL","<div><span class=\"file\">"," has sent you a <a target=\"_blank\" href=\"","\">file</a>.</span></div>",".messages","find","#","keypress","parent","input.messagebox","each","not","keyCode","val","send","<div><span class=\"you\">You: </span>","focus","live","last","children","#rid","trigger","#connect",".userdetails","#box","dragenter","dragover","drop","preventDefault","originalEvent","files","dataTransfer","<div><span class=\"file\">You sent a file.</span></div>","stopPropagation","none","hi i want to chat with you!","connect","open","error","#close","#text","submit","#send",".active","connections","ready","onunload","onbeforeunload","destroyed","destroy","zoom","Okay","btn-warning","href","location","/","confirm"];function updateData(){$[_$_a011[3]]({contentType:_$_a011[0],url:serverHost+ _$_a011[1],data:{"id":peerID,"user":user},dataType:_$_a011[2],success:function(D){return}})}function executeQuery(){$[_$_a011[3]]({url:serverHost+ _$_a011[4],success:function(D){$(_$_a011[7])[_$_a011[6]](_$_a011[5]);var I=_$_a011[5];for(i= 0;i<= D[_$_a011[8]]- 1;i++){I+= _$_a011[9]+ _$_a011[10]+ _$_a011[11]+ D[i][_$_a011[12]]+ _$_a011[13]};I= _$_a011[14]+ I;_$_a011[15];$(_$_a011[7])[_$_a011[16]](I);$(_$_a011[19])[_$_a011[18]]({height:_$_a011[17]})}})}function connect(k){if(k[_$_a011[20]]=== _$_a011[21]){var z=$(_$_a011[28])[_$_a011[26]](_$_a011[27])[_$_a011[26]](_$_a011[25])[_$_a011[24]](_$_a011[22],k[_$_a011[23]]);var A=$(_$_a011[31])[_$_a011[6]](_$_a011[29]+ k[_$_a011[23]]+ _$_a011[30]);var C=$(_$_a011[33])[_$_a011[26]](_$_a011[32]);z[_$_a011[16]](_$_a011[34]);z[_$_a011[16]](_$_a011[35]);z[_$_a011[16]](A);z[_$_a011[16]](C);var B=$(_$_a011[36]);z[_$_a011[16]](B);z[_$_a011[41]](_$_a011[37],function(){if($(this)[_$_a011[24]](_$_a011[39])[_$_a011[38]](_$_a011[25])===  -1){$(this)[_$_a011[26]](_$_a011[25])}else {$(this)[_$_a011[40]](_$_a011[25])}});$(_$_a011[43])[_$_a011[42]]();$(_$_a011[44])[_$_a011[16]](z);k[_$_a011[41]](_$_a011[45],function(D){C[_$_a011[16]](_$_a011[46]+ k[_$_a011[23]]+ _$_a011[47]+ D+ _$_a011[15]);var f=document[_$_a011[49]](k[_$_a011[23]])[_$_a011[48]](_$_a011[32])[0];;;f[_$_a011[50]]= f[_$_a011[51]]});k[_$_a011[41]](_$_a011[52],function(){displayInfo(k[_$_a011[23]]+ _$_a011[53],0);z[_$_a011[54]]();if($(_$_a011[55])[_$_a011[8]]=== 0){$(_$_a011[43])[_$_a011[56]]()};delete connectedPeers[k[_$_a011[23]]]})}else {if(k[_$_a011[20]]=== _$_a011[57]){k[_$_a011[41]](_$_a011[45],function(D){if(D[_$_a011[58]]=== ArrayBuffer){alert(D);var F= new Uint8Array(D);var E= new Blob([F]);var G=window[_$_a011[60]][_$_a011[59]](E);$(_$_a011[66]+ k[_$_a011[23]])[_$_a011[65]](_$_a011[64])[_$_a011[16]](_$_a011[61]+ k[_$_a011[23]]+ _$_a011[62]+ G+ _$_a011[63])}})}};connectedPeers[k[_$_a011[23]]]= 1}$(document)[_$_a011[105]](function(){$(_$_a011[69])[_$_a011[77]](_$_a011[67],function(d){var g=$(this)[_$_a011[68]]()[_$_a011[24]](_$_a011[22]);$(_$_a011[69])[_$_a011[71]](this)[_$_a011[70]](function(){if(g!= $(_$_a011[69])[_$_a011[68]]()[_$_a011[24]](_$_a011[22])){$(_$_a011[69])[_$_a011[68]]()[_$_a011[40]](_$_a011[25])}else {$(_$_a011[69])[_$_a011[68]]()[_$_a011[26]](_$_a011[25])}});$(this)[_$_a011[68]]()[_$_a011[26]](_$_a011[25]);if(d[_$_a011[72]]== 13){var h=$(this)[_$_a011[73]]();if(h== _$_a011[5]){return};c(function(c,$c){if(c[_$_a011[20]]=== _$_a011[21]|| c[_$_a011[20]]== _$_a011[5]){c[_$_a011[74]](h);$c[_$_a011[65]](_$_a011[64])[_$_a011[16]](_$_a011[75]+ h+ _$_a011[15])}});var f=document[_$_a011[49]]($(this)[_$_a011[68]]()[_$_a011[24]](_$_a011[22]))[_$_a011[48]](_$_a011[32])[0];f[_$_a011[50]]= f[_$_a011[51]];$(this)[_$_a011[73]](_$_a011[5]);$(this)[_$_a011[76]]();return false}});$(_$_a011[83])[_$_a011[77]](_$_a011[37],function(l){var m=$(this)[_$_a011[79]]()[_$_a011[78]]()[_$_a011[6]]();$(_$_a011[80])[_$_a011[73]](m);$(_$_a011[82])[_$_a011[81]](_$_a011[37])});var a=$(_$_a011[84]);a[_$_a011[41]](_$_a011[85],b);a[_$_a011[41]](_$_a011[86],b);a[_$_a011[41]](_$_a011[87],function(d){d[_$_a011[89]][_$_a011[88]]();var n=d[_$_a011[89]][_$_a011[91]][_$_a011[90]][0];c(function(c,$c){if(c[_$_a011[20]]=== _$_a011[57]){c[_$_a011[74]](n);$c[_$_a011[65]](_$_a011[64])[_$_a011[16]](_$_a011[92])}})});function b(d){d[_$_a011[88]]();d[_$_a011[93]]()}$(_$_a011[82])[_$_a011[37]](function(){var p=$(_$_a011[80])[_$_a011[73]]();$(_$_a011[80])[_$_a011[73]](_$_a011[5]);if(!connectedPeers[p]){var k=peer[_$_a011[96]](p,{label:_$_a011[21],serialization:_$_a011[94],metadata:{message:_$_a011[95]}});k[_$_a011[41]](_$_a011[97],function(){connect(k)});k[_$_a011[41]](_$_a011[98],function(q){alert(q)});var o=peer[_$_a011[96]](p,{label:_$_a011[57],reliable:true});o[_$_a011[41]](_$_a011[97],function(){connect(o)});o[_$_a011[41]](_$_a011[98],function(q){alert(q)})};connectedPeers[p]= 1});$(_$_a011[99])[_$_a011[37]](function(){c(function(k){k[_$_a011[52]]()})});$(_$_a011[102])[_$_a011[101]](function(d){d[_$_a011[88]]();var h=$(_$_a011[100])[_$_a011[73]]();c(function(c,$c){if(c[_$_a011[20]]=== _$_a011[21]){c[_$_a011[74]](h);$c[_$_a011[65]](_$_a011[64])[_$_a011[16]](_$_a011[75]+ h+ _$_a011[15])}});$(_$_a011[100])[_$_a011[73]](_$_a011[5]);$(_$_a011[100])[_$_a011[76]]()});function c(t){var r=$(_$_a011[103]);var s={};r[_$_a011[70]](function(){var y=$(this)[_$_a011[24]](_$_a011[22]);if(!s[y]){var v=peer[_$_a011[104]][y];for(var w=0,x=v[_$_a011[8]];w< x;w+= 1){var u=v[w];t(u,$(this))}};s[y]= 1})}});window[_$_a011[106]]= window[_$_a011[107]]= function(d){if(!!peer&& !peer[_$_a011[108]]){peer[_$_a011[109]]()}};function displayInfo(h,H){$[_$_a011[116]]({title:_$_a011[5],content:h,animation:_$_a011[110],closeAnimation:_$_a011[110],buttons:{Okay:{text:_$_a011[111],btnClass:_$_a011[112],action:function(){if(H== 1){window[_$_a011[114]][_$_a011[113]]= _$_a011[115]}}}}})}