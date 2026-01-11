
const EMBED = {"temas": [{
  "id": 20,
  "titulo": "A2 · Direcciones y transporte",
  "caracteres": [
    {"hanzi":"往","pinyin":"wǎng"},
    {"hanzi":"左","pinyin":"zuǒ"},
    {"hanzi":"右","pinyin":"yòu"},
    {"hanzi":"前","pinyin":"qián"},
    {"hanzi":"后","pinyin":"hòu"},
    {"hanzi":"上","pinyin":"shàng"},
    {"hanzi":"下","pinyin":"xià"},
    {"hanzi":"中","pinyin":"zhōng"},
    {"hanzi":"边","pinyin":"biān"},
    {"hanzi":"离","pinyin":"lí"},
    {"hanzi":"第","pinyin":"dì"},
    {"hanzi":"个","pinyin":"gè"},
    {"hanzi":"路","pinyin":"lù"},
    {"hanzi":"口","pinyin":"kǒu"},
    {"hanzi":"地","pinyin":"dì"},
    {"hanzi":"铁","pinyin":"tiě"},
    {"hanzi":"站","pinyin":"zhàn"},
    {"hanzi":"银","pinyin":"yín"},
    {"hanzi":"行","pinyin":"háng"},
    {"hanzi":"近","pinyin":"jìn"},
    {"hanzi":"远","pinyin":"yuǎn"},
    {"hanzi":"东","pinyin":"dōng"},
    {"hanzi":"西","pinyin":"xī"},
    {"hanzi":"南","pinyin":"nán"},
    {"hanzi":"北","pinyin":"běi"},
    {"hanzi":"车","pinyin":"chē"},
    {"hanzi":"坐","pinyin":"zuò"},
    {"hanzi":"骑","pinyin":"qí"},
    {"hanzi":"打","pinyin":"dǎ"},
    {"hanzi":"票","pinyin":"piào"}
  ],
  "vocabulario": [
    {"hanzi":"邮局","pinyin":"yóujú","es":"oficina de correos","frase_zh":"邮局在银行旁边。","frase_es":"La oficina de correos está al lado del banco.","tokens":["邮局","在","银行","旁边","。"]},
    {"hanzi":"银行","pinyin":"yínháng","es":"banco","frase_zh":"我去银行取钱。","frase_es":"Voy al banco a sacar dinero.","tokens":["我","去","银行","取钱","。"]},
    {"hanzi":"地铁站","pinyin":"dìtiězhàn","es":"estación de metro","frase_zh":"地铁站在前边。","frase_es":"La estación de metro está delante.","tokens":["地铁站","在","前边","。"]},
    {"hanzi":"洗手间","pinyin":"xǐshǒujiān","es":"baño","frase_zh":"洗手间在哪里？","frase_es":"¿Dónde está el baño?","tokens":["洗手间","在","哪里","？"]},
    {"hanzi":"广场","pinyin":"guǎngchǎng","es":"plaza","frase_zh":"广场在市中心。","frase_es":"La plaza está en el centro de la ciudad.","tokens":["广场","在","市中心","。"]}
  ],
  "huecos_bank": [
    {"target":"旁边","frase_es":"La oficina de correos está al lado del banco.","tokens":["邮局","在","银行","旁边","。"],"distractores":["前边","后边","中间"]},
    {"target":"银行","frase_es":"Voy al banco a sacar dinero.","tokens":["我","去","银行","取钱","。"],"distractores":["药店","饭馆","机场"]},
    {"target":"地铁站","frase_es":"La estación de metro está delante.","tokens":["地铁站","在","前边","。"],"distractores":["银行","药店","客运站"]},
    {"target":"洗手间","frase_es":"¿Dónde está el baño?","tokens":["洗手间","在","哪里","？"],"distractores":["餐厅","银行","公园"]},
    {"target":"广场","frase_es":"La plaza está en el centro de la ciudad.","tokens":["广场","在","市中心","。"],"distractores":["图书馆","博物馆","学校"]},
    {"target":"前边","frase_es":"La tienda está delante de la escuela.","tokens":["商店","在","学校","前边","。"],"distractores":["后边","旁边","中间"]},
    {"target":"后边","frase_es":"La escuela está detrás del parque.","tokens":["学校","在","公园","后边","。"],"distractores":["旁边","右边","上面"]},
    {"target":"右边","frase_es":"El baño está a la derecha del ascensor.","tokens":["洗手间","在","电梯","的","右边","。"],"distractores":["左边","中间","上面"]},
    {"target":"左边","frase_es":"La farmacia está a la izquierda del banco.","tokens":["药店","在","银行","的","左边","。"],"distractores":["右边","前面","上面"]},
    {"target":"中间","frase_es":"La estación de metro está en el medio de la plaza.","tokens":["地铁站","在","广场","的","中间","。"],"distractores":["旁边","前面","后面"]},
    {"target":"上面","frase_es":"El reloj está encima de la pared.","tokens":["钟","在","墙","的","上面","。"],"distractores":["下面","右边","中间"]},
    {"target":"下面","frase_es":"El aparcamiento está debajo del edificio.","tokens":["停车场","在","楼","的","下面","。"],"distractores":["上面","左边","前面"]},
    {"target":"机场","frase_es":"Tomé un taxi al aeropuerto.","tokens":["我","打","出租车","去","机场","。"],"distractores":["银行","药店","餐厅"]},
    {"target":"公共汽车","frase_es":"El autobús ha llegado.","tokens":["公共汽车","来","了","。"],"distractores":["自行车","出租车","火车"]},
    {"target":"颜色","frase_es":"¿Qué color te gusta?","tokens":["你","喜欢","什么","颜色","？"],"distractores":["需要","然后","左右"]},
    {"target":"需要","frase_es":"Necesito un coche.","tokens":["我","需要","一","辆","车","。"],"distractores":["当然","然后","附近"]},
    {"target":"联系","frase_es":"Por favor, contáctame.","tokens":["请","联系","我","。"],"distractores":["坐","打","买票"]},
    {"target":"餐厅","frase_es":"Comemos en el restaurante.","tokens":["我们","在","餐厅","吃饭","。"],"distractores":["广场","银行","药店"]},
    {"target":"旅行","frase_es":"Me gusta viajar.","tokens":["我","喜欢","旅行","。"],"distractores":["颜色","左右","需要"]},
    {"target":"客运站","frase_es":"La estación de autobuses está lejos.","tokens":["客运站","很","远","。"],"distractores":["银行","药店","餐厅"]},

    /* --- Nuevos huecos: reduplicación, 过, 吧, 最, 路口, distancias, tiempo, alternativas --- */
    {"target":"看看","frase_es":"Echa un vistazo al mapa.","tokens":["你","看看","地图","。"],"distractores":["看一看","问问","试试"]},
    {"target":"吧","frase_es":"Vamos a preguntar a un transeúnte.","tokens":["我们","问一问","路人","吧","。"],"distractores":["吗","呢","了"]},
    {"target":"去过","frase_es":"¿Has ido a Shanghái?","tokens":["你","去过","上海","吗","？"],"distractores":["去了","去","到过"]},
    {"target":"看过","frase_es":"No he visto esta película.","tokens":["我","没","看过","这部电影","。"],"distractores":["看了","看","去过"]},
    {"target":"最","frase_es":"Este restaurante es el más famoso.","tokens":["这家饭馆","最","有名","。"],"distractores":["很","比较","更"]},
    {"target":"还是","frase_es":"¿Vas en autobús o taxi?","tokens":["你","坐","公共汽车","还是","出租车","？"],"distractores":["或者","和","并且"]},
    {"target":"第一个","frase_es":"Sigue recto y gira a la derecha en la primera intersección.","tokens":["一直","往前走","，","在","第一个","路口","往右拐","。"],"distractores":["第二个","最后一个","中间"]},
    {"target":"离","frase_es":"La escuela no está lejos de mi casa.","tokens":["学校","离","我家","不远","。"],"distractores":["在","从","到"]},
    {"target":"从","frase_es":"¿Cómo se va desde la escuela hasta la estación de tren?","tokens":["从","学校","到","火车站","怎么","走","？"],"distractores":["离","在","到"]},
    {"target":"多长时间","frase_es":"¿Cuánto tiempo se tarda desde aquí hasta el aeropuerto?","tokens":["从","这里","到","机场","要","多长时间","？"],"distractores":["多少","多久","多大"]},
    {"target":"小时","frase_es":"Aproximadamente dos horas.","tokens":["大约","两个","小时","左右","。"],"distractores":["分钟","秒","天"]},
    {"target":"吧","frase_es":"Vamos en tren.","tokens":["我们","坐","火车","去","吧","。"],"distractores":["吗","呢","了"]},
    {"target":"到","frase_es":"He llegado a la estación de tren.","tokens":["我","到","火车站","了","。"],"distractores":["去","来","到了"]},
    {"target":"然后","frase_es":"Primero como, luego voy a trabajar.","tokens":["我","先","吃饭","，","然后","去","工作","。"],"distractores":["但是","因为","所以"]}
  ],
  "gramatica": [
    {"es":"Sigue recto y gira a la derecha en la segunda intersección.","zh":"一直往前走，在第二个路口往右拐。","tokens":["一直","往","前","走","，","在","第二个","路口","往","右","拐","。"]},
    {"es":"Vamos a ir a Shanghái en tren, ¿vale?","zh":"我们坐火车去上海吧。","tokens":["我们","坐","火车","去","上海","吧","。"]},
    {"es":"¿Has ido a la Ciudad Prohibida?","zh":"你去过故宫吗？","tokens":["你","去过","故宫","吗","？"]},
    {"es":"No he leído este libro.","zh":"我没看过这本书。","tokens":["我","没","看过","这本书","。"]},
    {"es":"Él ha estudiado un poco de francés.","zh":"他学过一点法语。","tokens":["他","学过","一点","法语","。"]},
    {"es":"¿Cómo se va desde aquí hasta la estación de metro?","zh":"从这儿到地铁站怎么走？","tokens":["从","这儿","到","地铁站","怎么","走","？"]},
    {"es":"Desde aquí al aeropuerto es aproximadamente una hora.","zh":"从这里到机场大约一个小时左右。","tokens":["从","这里","到","机场","大约","一个","小时","左右","。"]},
    {"es":"Este lugar turístico es el más famoso.","zh":"这个景点最有名。","tokens":["这个","景点","最","有名","。"]},
    {"es":"Vamos en taxi al hotel, ¿de acuerdo?","zh":"我们打车去宾馆吧。","tokens":["我们","打车","去","宾馆","吧","。"]},
    {"es":"Voy en bicicleta al parque.","zh":"我骑自行车去公园。","tokens":["我","骑","自行车","去","公园","。"]},
    {"es":"Primero ve recto y luego gira a la izquierda.","zh":"先直走，然后左拐。","tokens":["先","直","走","，","然后","左","拐","。"]},
    {"es":"La biblioteca no está lejos de la estación de metro.","zh":"图书馆离地铁站不远。","tokens":["图书馆","离","地铁站","不远","。"]},
    {"es":"El reloj está en la pared.","zh":"钟在墙上。","tokens":["钟","在","墙","上","。"]},
    {"es":"La farmacia está a la izquierda del banco.","zh":"药店在银行的左边。","tokens":["药店","在","银行","的","左边","。"]},
    {"es":"El aeropuerto está lejos del centro de la ciudad.","zh":"机场离市中心很远。","tokens":["机场","离","市中心","很远","。"]},
    {"es":"¿Vamos de compras, vale?","zh":"我们去购物，好吗？","tokens":["我们","去","购物","，","好","吗","？"]},
    {"es":"¿Tomas autobús o metro?","zh":"你坐公共汽车还是地铁？","tokens":["你","坐","公共汽车","还是","地铁","？"]},
    {"es":"Quiero comprar dos billetes de tren.","zh":"我要买两张火车票。","tokens":["我","要","买","两张","火车票","。"]},
    {"es":"Ha llegado el tren.","zh":"火车到了。","tokens":["火车","到","了","。"]},
    {"es":"Vamos a hacer trekking el fin de semana.","zh":"我们周末去爬山。","tokens":["我们","周末","去","爬山","。"]},
    {"es":"Puedes contactarme.","zh":"你可以联系我。","tokens":["你","可以","联系","我","。"]},
    {"es":"Él sabe hablar chino.","zh":"他会说中文。","tokens":["他","会","说","中文","。"]}
  ]
}]};

const state={contenido:EMBED,temaActual:EMBED.temas[0],seleccion:{tipo:null,modo:null},session:{len:10,infinite:false}};

function h(tag,props={},children=[]) { const el=document.createElement(tag); for(const [k,v] of Object.entries(props)){ if(k==='class') el.className=v; else if(k.startsWith('on')) el.addEventListener(k.slice(2).toLowerCase(),v); else el.setAttribute(k, v) } (Array.isArray(children)?children:[children]).forEach(c=>{ if(typeof c==='string') el.appendChild(document.createTextNode(c)); else if(c) el.appendChild(c) }); return el }
function mount(n){ const app=document.getElementById('app'); app.innerHTML=''; app.appendChild(n) }
function header(){ return h('div',{class:'header container'},[ h('div',{class:'logo'},'Sg'), h('div',{},[h('h1',{},'Segolingo')]) ]) }
function home(){ const tipos=h('div',{class:'grid'},[
  tipoCard('Práctica de Caracteres','caracteres',[ submodoRadio('caracteres','hanzi_pinyin','Hanzi → pinyin'), submodoRadio('caracteres','pinyin_hanzi','Pinyin → hanzi') ]),
  tipoCard('Práctica de Vocabulario','vocabulario',[ submodoRadio('vocabulario','huecos','Rellenar huecos'), submodoRadio('vocabulario','parejas','Enlazar palabras') ]),
  tipoCard('Práctica de Gramática','gramatica',[ submodoRadio('gramatica','ordenar','Ordenar palabras') ])
]);
const empezarBtn=h('button',{class:'button',onClick:chooseSessionLen},'Empezar');
return h('div',{},[ header(), h('div',{class:'container grid'},[ h('div',{class:'card'},[ h('div',{class:'section-title'},'Tipo de prueba'), tipos, h('div',{style:'margin-top:12px;'}, empezarBtn) ]) ]) ]); }
function submodoRadio(tipo,valor,label){ const id=`${tipo}-${valor}`; const input=h('input',{type:'radio',name:`modo-${tipo}`,id,value:valor}); input.addEventListener('change',()=>{ state.seleccion.tipo=tipo; state.seleccion.modo=valor }); const lab=h('label',{for:id},label); return h('div',{},[input,lab]) }
function tipoCard(titulo,tipo,children){ return h('div',{class:'card'},[h('h3',{},titulo),...children]) }
function chooseSessionLen(){ const {tipo,modo}=state.seleccion; if(!tipo||!modo){ alert('Selecciona tipo y modo de prueba'); return } const cont=h('div',{class:'container card'}); cont.appendChild(h('h2',{},'Selecciona nº de preguntas')); const opts=h('div',{class:'inline-options'},[ sessionBtn(5), sessionBtn(10), sessionBtn(15), sessionBtn(20), sessionBtn('∞') ]); cont.appendChild(opts); cont.appendChild(h('div',{style:'margin-top:12px'}, h('button',{class:'button ghost',onClick:()=>render()},'Volver'))); mount(h('div',{},[header(),cont])); }
function sessionBtn(val){ const label=val==='∞'?'Bucle infinito':''+val; return h('button',{class:'button',onClick:()=>{ if(val==='∞'){ state.session.len=Infinity; state.session.infinite=true; } else { state.session.len=val; state.session.infinite=false; } start(); }}, label) }
function start(){ const {tipo,modo}=state.seleccion; if(!tipo||!modo){ alert('Selecciona tipo y modo de prueba'); return } if(tipo==='caracteres') mount(caracteresChoiceUI(modo)); if(tipo==='vocabulario') mount(vocabularioUI(modo)); if(tipo==='gramatica') mount(gramaticaUI(modo)) }
function shuffle(arr){ const a=arr.slice(); for(let i=a.length-1;i>0;i--){ const j=Math.floor(Math.random()*(i+1)); [a[i],a[j]]=[a[j],a[i]] } return a }
function arraysEqual(a,b){ if(a.length!==b.length) return false; for(let i=0;i<a.length;i++) if(a[i]!==b[i]) return false; return true }
function emptyUI(msg){ return h('div',{},[header(), h('div',{class:'container card'},[ h('p',{},msg), h('button',{class:'button ghost',onClick:()=>render()},'Volver') ]) ]) }
function render(){ mount(home()) }
// ========= 1) Caracteres =========
function extraerMonosilabos(){ const base=state.temaActual?.caracteres||[]; return base.filter(x=> (x.hanzi||'').length===1 && !(x.pinyin||'').includes(' ')); }
function caracteresChoiceUI(modo){ const pool=extraerMonosilabos(); if(pool.length<4) return emptyUI('No hay suficientes caracteres monosilábicos'); const useLen = Number.isFinite(state.session.len)? Math.min(state.session.len, pool.length) : Math.min(10,pool.length); let ronda=shuffle(pool).slice(0, useLen); let idx=0; let aciertos=0, errores=0; let colaFallos=[]; const fallosDetalle=new Map(); const cont=h('div',{class:'container'});
 function fin(){ if(state.session.infinite){ siguiente(); return; } cont.innerHTML=''; cont.appendChild(h('h2',{},'Informe de sesión')); const rep=h('div',{class:'report'}); rep.appendChild(h('div',{},`✔️ Aciertos: ${aciertos} · ❌ Errores: ${errores}`)); const ul=h('ul',{}); if(fallosDetalle.size){ rep.appendChild(h('div',{},'Preguntas falladas (al menos una vez):')); for(const [key,count] of fallosDetalle){ const p=key.split('
'); ul.appendChild(h('li',{},`${p[0]} · prompt: ${p[1]} · correcta: ${p[2]} · intentos fallidos: ${count}`)); } } else { ul.appendChild(h('li',{},'No hubo fallos.')); } rep.appendChild(ul); rep.appendChild(h('button',{class:'button',onClick:()=>render()},'Volver')); cont.appendChild(rep); }
 function siguiente(){ let item=null; if(idx<ronda.length){ item=ronda[idx++]; } else if(colaFallos.length){ item=colaFallos.shift(); } else { if(state.session.infinite){ ronda=shuffle(pool).slice(0, Math.min(10,pool.length)); idx=0; item=ronda[idx++]; } else { return fin(); } }
 cont.innerHTML=''; if(modo==='hanzi_pinyin'){ cont.appendChild(h('div',{class:'char-big'}, item.hanzi)); const opciones=crearOpciones(item.pinyin, pool.map(p=>p.pinyin)); cont.appendChild(opcionesGrid(opciones,(val,btn)=>{ if(val===item.pinyin){ aciertos++; btn.classList.add('correct'); setTimeout(siguiente,250); } else { errores++; btn.classList.add('wrong'); const k=`${modo}
${item.hanzi}
${item.pinyin}`; fallosDetalle.set(k,(fallosDetalle.get(k)||0)+1); colaFallos.push(item); setTimeout(siguiente,350); } }, false)); } else { cont.appendChild(h('div',{class:'pinyin-big'}, item.pinyin)); const opciones=crearOpciones(item.hanzi, pool.map(p=>p.hanzi)); cont.appendChild(opcionesGrid(opciones,(val,btn)=>{ if(val===item.hanzi){ aciertos++; btn.classList.add('correct'); setTimeout(siguiente,250); } else { errores++; btn.classList.add('wrong'); const k=`${modo}
${item.pinyin}
${item.hanzi}`; fallosDetalle.set(k,(fallosDetalle.get(k)||0)+1); colaFallos.push(item); setTimeout(siguiente,350); } }, true)); }
 cont.appendChild(h('div',{style:'margin-top:12px'}, h('button',{class:'button ghost',onClick:()=>render()},'Volver'))); }
 siguiente(); return h('div',{},[header(),cont]) }
function crearOpciones(correcta, universo){ const distractores=shuffle(universo.filter(v=>v!==correcta)).slice(0,3); return shuffle([correcta,...distractores]) }
function opcionesGrid(valores,onPick,hanziMode){ const grid=h('div',{class:'option-grid'}); valores.forEach(v=>{ const cls=hanziMode?'option hanzi-option':'option'; const btn=h('div',{class:cls,onClick:(e)=>onPick(v,e.currentTarget)}, v); grid.appendChild(btn) }); return grid }
// ========= 2) Vocabulario =========
function vocabularioUI(modo){ if(modo==='huecos') return huecosUI(); if(modo==='parejas') return parejasUI(); return emptyUI('Modo de vocabulario desconocido') }
function huecosUI(){ const bank = state.temaActual?.huecos_bank || []; if(bank.length<4) return emptyUI('No hay suficientes frases'); const useLen = Number.isFinite(state.session.len)? Math.min(state.session.len, bank.length) : Math.min(10, bank.length); let items = shuffle(bank).slice(0,useLen); let idx=0; let aciertos=0, errores=0; const cont=h('div',{class:'container'}); const feedback=h('div',{class:'feedback'}); function fin(){ if(state.session.infinite){ idx=0; items=shuffle(bank).slice(0, Math.min(10, bank.length)); paso(); return; } cont.innerHTML=''; cont.appendChild(h('h2',{},'Informe de sesión')); cont.appendChild(h('div',{class:'report'},`✔️ Aciertos: ${aciertos} · ❌ Errores: ${errores}`)); cont.appendChild(h('button',{class:'button',onClick:()=>render()},'Volver')); } function paso(){ if(idx>=items.length) return fin(); const it=items[idx++]; cont.innerHTML=''; feedback.textContent=''; feedback.className='feedback'; cont.appendChild(h('h2',{},'Rellenar huecos')); cont.appendChild(h('p',{}, it.frase_es || '')); const tokens=it.tokens.slice(); const pick = tokens.findIndex(t=> t===it.target); const correcta=tokens[pick]; const fraseConHueco=tokens.map((t,j)=> j===pick ? '____' : t).join(' '); cont.appendChild(h('p',{class:'card'},fraseConHueco)); const baseDistr = (it.distractores||[]).filter(d=> d!==correcta && !tokens.includes(d)); let opciones = shuffle([correcta, ...baseDistr.slice(0,3)]); const safePool = ["问题","兴趣","鼻子","耳朵","皮肤","身材","女孩子","蓝色","脸","嘴","俩","另","更","短","矮","重要","中等","最近","苗条","胖"]; let i=0; while(opciones.length<4 && i<safePool.length){ const cand=safePool[i++]; if(cand!==correcta && !tokens.includes(cand) && !opciones.includes(cand)) opciones.push(cand); } const box=h('div',{class:'grid'}); opciones.forEach(op=> box.appendChild(h('button',{class:'button ghost',onClick:()=>{ if(op===correcta){ aciertos++; feedback.className='feedback ok'; feedback.textContent='✔️ Correcto'; setTimeout(paso,350); } else { errores++; feedback.className='feedback err'; feedback.textContent='❌ Incorrecto'; } }}, op)) ); cont.appendChild(box); cont.appendChild(feedback); cont.appendChild(h('div',{style:'margin-top:12px'}, [h('button',{class:'button ghost',onClick:()=>render()},'Volver')])); } paso(); return h('div',{},[header(),cont]) }
function parejasUI(){ const items=state.temaActual?.vocabulario || []; if(items.length<1) return emptyUI('No hay vocabulario para emparejar'); const sample=shuffle(items).slice(0,6); let izquierda=shuffle(sample.map((v,i)=>({ id:'L'+i, text:v.hanzi, key:i }))); let derecha=shuffle(sample.map((v,i)=>({ id:'R'+i, text:v.es, key:i }))); let seleccion={left:null,right:null}; let leftSelEl=null, rightSelEl=null; const leftList=h('div',{class:'list'}); const rightList=h('div',{class:'list'}); const feedback=h('div',{class:'feedback'}); function onClickSide(item, side, el){ if(side==='left'){ if(seleccion.left && seleccion.left.id===item.id){ seleccion.left=null; if(leftSelEl) leftSelEl.className='list-item'; leftSelEl=null; return; } seleccion.left=item; if(leftSelEl) leftSelEl.className='list-item'; leftSelEl=el; el.className='list-item selected'; } else { if(seleccion.right && seleccion.right.id===item.id){ seleccion.right=null; if(rightSelEl) rightSelEl.className='list-item'; rightSelEl=null; return; } seleccion.right=item; if(rightSelEl) rightSelEl.className='list-item'; rightSelEl=el; el.className='list-item selected'; } if(seleccion.left && seleccion.right){ if(seleccion.left.key===seleccion.right.key){ feedback.className='feedback ok'; feedback.textContent='✔️ ¡Bien!'; const remove=(arr,id)=>arr.splice(arr.findIndex(x=>x.id===id),1); remove(izquierda,seleccion.left.id); remove(derecha,seleccion.right.id); seleccion={left:null,right:null}; leftSelEl=null; rightSelEl=null; renderLists(); if(!izquierda.length) feedback.textContent='🎉 ¡Has completado todas las parejas!'; } else { feedback.className='feedback err'; feedback.textContent='❌ No es la pareja correcta'; } } } function renderLists(){ leftList.innerHTML=''; izquierda.forEach(item=>{ const el=h('div',{class:'list-item', onClick:()=>onClickSide(item,'left',el)}, item.text); leftList.appendChild(el) }); rightList.innerHTML=''; derecha.forEach(item=>{ const el=h('div',{class:'list-item', onClick:()=>onClickSide(item,'right',el)}, item.text); rightList.appendChild(el) }); } renderLists(); return h('div',{},[header(), h('div',{class:'container'},[ h('h2',{},'Enlazar palabras con su significado'), h('div',{class:'list-columns'},[leftList,rightList]), feedback, h('div',{style:'margin-top:12px'}, [h('button',{class:'button ghost',onClick:()=>render()},'Volver')]) ]) ]); }
// ========= 3) Gramática =========
function gramaticaUI(modo){ if(modo!=='ordenar') return emptyUI('Modo de gramática desconocido'); let items=shuffle(state.temaActual?.gramatica||[]); const useLen = Number.isFinite(state.session.len)? Math.min(state.session.len, items.length) : items.length; items=items.slice(0,useLen); if(!items.length) return emptyUI('No hay ejercicios de gramática'); let idx=0; let aciertos=0, errores=0; const cont=h('div',{class:'container'}); const feedback=h('div',{class:'feedback'}); function fin(){ if(state.session.infinite){ idx=0; items=shuffle(state.temaActual?.gramatica||[]); items=items.slice(0, items.length); renderStep(); return; } cont.innerHTML=''; cont.appendChild(h('h2',{},'Informe de sesión')); cont.appendChild(h('div',{class:'report'},`✔️ Aciertos: ${aciertos} · ❌ Errores: ${errores}`)); cont.appendChild(h('button',{class:'button',onClick:()=>render()},'Volver')); } function renderStep(){ if(idx>=items.length) return fin(); const it=items[idx++]; cont.innerHTML=''; feedback.textContent=''; feedback.className='feedback'; cont.appendChild(h('h2',{},'Ordenar palabras')); cont.appendChild(h('p',{},'Frase en español: '+it.es)); const tokens=it.tokens.slice(); const correct=tokens.slice(); const poolItems=shuffle(tokens.map((tk,ix)=>({text:tk,id:ix}))); const builder=h('div',{id:'sentence-builder'}); const pool=h('div',{class:'grid'}); const chosen=[]; function addToBuilder(itm){ if(chosen.includes(itm.id)) return; chosen.push(itm.id); const sp=h('span',{class:'token selected', onClick:()=>{ const ix=chosen.indexOf(itm.id); if(ix>-1){ chosen.splice(ix,1); sp.remove(); const poolBtn=pool.querySelector(`[data-id="${itm.id}"]`); if(poolBtn) poolBtn.className='token'; } }}, itm.text); builder.appendChild(sp); const pb=pool.querySelector(`[data-id="${itm.id}"]`); if(pb) pb.className='token selected'; }
 poolItems.forEach(itm=>{ const btn=h('button',{class:'token','data-id':String(itm.id), onClick:()=>{ if(chosen.includes(itm.id)){ const ix=chosen.indexOf(itm.id); if(ix>-1) chosen.splice(ix,1); const spans=[...builder.querySelectorAll('.token.selected')]; const sp=spans.find(s=>s.textContent===itm.text); if(sp) sp.remove(); btn.className='token'; } else { addToBuilder(itm); } }}, itm.text); pool.appendChild(btn) }); cont.appendChild(pool); cont.appendChild(h('div',{class:'section-title'},'Tu frase:')); cont.appendChild(builder); const acciones=h('div',{style:'margin-top:12px'},[ h('button',{class:'button',onClick:()=>{ const chosenTexts=chosen.map(id=>tokens[id]); if(arraysEqual(chosenTexts, correct)){ aciertos++; feedback.className='feedback ok'; feedback.textContent='✔️ ¡Correcto!'; setTimeout(renderStep,450); } else { errores++; feedback.className='feedback err'; feedback.textContent='❌ Comprueba el orden'; } }}, 'Comprobar'), h('button',{class:'button ghost',onClick:()=>{ renderStep(); }}, 'Siguiente'), h('button',{class:'button ghost',onClick:()=>render()}, 'Volver') ]); cont.appendChild(feedback); cont.appendChild(acciones); }
 renderStep(); return h('div',{},[header(),cont]); }

render();
