(window.webpackJsonp=window.webpackJsonp||[]).push([[41,2],{445:function(e,t,n){var content=n(494);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(63).default)("217ce988",content,!0,{sourceMap:!1})},479:function(e,t,n){"use strict";n.r(t);n(1),n(49),n(57),n(18);const r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6,m=(Math.sqrt(5),Math.sqrt(5),e=>0|Math.floor(e)),l=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function d(e=Math.random){const t=c(e),n=new Float64Array(t).map((e=>l[e%12*2])),d=new Float64Array(t).map((e=>l[e%12*2+1]));return function(e,l){let c=0,h=0,N=0;const s=(e+l)*r,i=m(e+s),f=m(l+s),v=(i+f)*o,k=e-(i-v),y=l-(f-v);let _,w;k>y?(_=1,w=0):(_=0,w=1);const x=k-_+o,A=y-w+o,M=k-1+2*o,S=y-1+2*o,D=255&i,K=255&f;let P=.5-k*k-y*y;if(P>=0){const e=D+t[K];P*=P,c=P*P*(n[e]*k+d[e]*y)}let I=.5-x*x-A*A;if(I>=0){const e=D+_+t[K+w];I*=I,h=I*I*(n[e]*x+d[e]*A)}let R=.5-M*M-S*S;if(R>=0){const e=D+1+t[K+1];R*=R,N=R*R*(n[e]*M+d[e]*S)}return 70*(c+h+N)}}function c(e){const t=512,p=new Uint8Array(t);for(let i=0;i<256;i++)p[i]=i;for(let i=0;i<255;i++){const t=i+~~(e()*(256-i)),n=p[i];p[i]=p[t],p[t]=n}for(let i=256;i<t;i++)p[i]=p[i-256];return p}var h={name:"PfiveSketch",components:{VueP5:function(){return n.e(44).then(n.t.bind(null,578,7))}},props:{imageTitle:{type:String,required:!0,default:""}},data:function(){return{lines:[],p5LogoImage:null,startTime:Date.now(),currentTime:Date.now(),noisePositionX:[0,0,0],noisePositionY:[0,0,0],noiseProgress:[.001,.002,.003],noiseScale:.008,simplexNoise:d(),speedX:1,speedY:1}},computed:{msSinceStart:function(){return this.currentTime-this.startTime},blue:function(){return Math.floor(.03*this.msSinceStart)%255},p5LogoRotationAngle:function(){return 1e-4*this.msSinceStart%Math.PI*2},side:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;return 2*Math.min(e,t)}},methods:{preload:function(e){this.image=e.loadImage("/".concat(this.imageTitle,".jpg"))},setup:function(e){e.createCanvas(this.side,this.side),this.image.resize(this.side,this.side)},draw:function(e){this.currentTime=Date.now(),this.image.loadPixels();for(var t=this.image.pixels.length,i=0;i<e.width;i+=6)for(var n=0;n<e.height;n+=6){var r=i+n*this.image.width,o=this.warp(i,n,3e-6*this.msSinceStart/1e3,615,e);o=(r-parseInt(o))%t*4,this.image.set(i,n,e.color(this.image.pixels[o],this.image.pixels[o+1],this.image.pixels[o+2]))}this.image.updatePixels(),e.image(this.image,0,0)},keyPressed:function(e){71===e.keyCode&&this.toggleGreen()},toggleRed:function(){this.red=255-this.red},toggleGreen:function(){this.green=255-this.green},pushLine:function(line){var e=this.lines;e.push(line),this.lines=e.slice(-100)},windowResized:function(e){e.resizeCanvas(this.side,this.side)},warp:function(e,t,n,r,o){var m=this.simplexNoise((e+0)*n,(t+0)*n)*r,l=this.simplexNoise((e+5.2)*n,(t+1.3)*n)*r,q=o.createVector(m,l),d=this.simplexNoise((e+4*q.x+1.7)*n,(t+4*q.y+9.2)*n)*r,c=this.simplexNoise((e+4*q.x+8.3)*n,(t+4*q.y+2.8)*n)*r,h=o.createVector(d,c);return this.simplexNoise((e+4*h.x)*n,(t+4*h.y)*n)*r}}},N=n(56),component=Object(N.a)(h,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p5-template justify-content-center"},[t("vue-p5",{on:{preload:e.preload,setup:e.setup,draw:e.draw,keypressed:e.keyPressed,windowresized:e.windowResized}})],1)}),[],!1,null,null,null);t.default=component.exports},493:function(e,t,n){"use strict";n(445)},494:function(e,t,n){var r=n(62)(!1);r.push([e.i,"\n.description[data-v-748d77e6] {\n  font-family: Acrom, sans-serif;\n  font-size: 0.8em;\n  font-weight: bold;\n  cursor: pointer;\n}\n.description[data-v-748d77e6]:hover {\n  color: #91a79d;\n}\n.p-5[data-v-748d77e6] {\n  justify-content: space-around;\n}\n.sketch[data-v-748d77e6] {\n  width: 100%;\n}\n",""]),e.exports=r},583:function(e,t,n){"use strict";n.r(t);n(24),n(1),n(49),n(57);var r={name:"ReleasesPage",components:{PfiveSketch:function(){return Promise.resolve().then(n.bind(null,479))}},data:function(){return{releases:[{name:"releases/TheWayOfTheDog",artistName:"Anderdog",releaseName:"The Way of the Dog",image:"the_way_of_the_dog"},{name:"releases/LovelyGrinch",artistName:"KIKOK",releaseName:"Lovely Grinch",image:"lovely_grinch"},{name:"releases/ImaginedAwakenings",artistName:"H. Ruine / MIKHAIL KIREEV",releaseName:"Imagined / Awakenings",image:"imagined_awakenings"},{name:"releases/Dryoma",artistName:"ВСЕСЛАВЪ",releaseName:"Дрёма",image:"dryoma"},{name:"releases/Imagine",artistName:"Anderdog and Dessin Bizarre",releaseName:"Imagine",image:"imagine"},{name:"releases/Veter",artistName:"Ne Tvoy Drug",releaseName:"Veter",image:"veter"},{name:"releases/KoMaKokokeiDorogaVNebo",artistName:"Ko+Ma",releaseName:"Дорога в небо (Kokokei Edit)",image:"doroga_v_nebo_kokokei_edit"},{name:"releases/Quietud",artistName:"Ilya Orange",releaseName:"Quietud",image:"quietud"},{name:"releases/NewLife",artistName:"DJ HeadSick",releaseName:"New Life",image:"new_life"},{name:"releases/ShinraBanshou",artistName:"HAJIME KOJIRO",releaseName:"SHINRA BANSHOU",image:"shinra_banshou"},{name:"releases/Helix",artistName:"Morakh",releaseName:"Helix",image:"helix"},{name:"releases/DogRemixDog",artistName:"Anderdog",releaseName:"Dog Remix Dog",image:"dog_remix_dog"},{name:"releases/BosporusAcident",artistName:"Raveny x Morphtables",releaseName:"Bosporus Acident",image:"bosporus_accident"},{name:"releases/YaBilSputnicomSolnca",artistName:"Yella Gin",releaseName:"Я Был Спутником Солнца",image:"yella_gin_ya_bil_sputnicom_solnca"},{name:"releases/DogEatDog",artistName:"Anderdog",releaseName:"Dog Eat Dog",image:"anderdog_dog_eat_dog"},{name:"releases/KokokeiMandarin",artistName:"Kokokei",releaseName:"Mandarin",image:"mandarin"},{name:"releases/FieldsOfDomodevskaya",artistName:"Kisser",releaseName:"Fields of Domodevskaya",image:"fields_of_domodevskaya"},{name:"releases/SunInsteadOfHead",artistName:"Max Ananyev",releaseName:"Sun Instead Of Head",image:"sun_instead_of_head"},{name:"releases/GroundedRectangle",artistName:"Ambidextrous",releaseName:"Grounded Rectangle",image:"grounded_rectangle"},{name:"releases/Xazy",artistName:"Ne Tvoy Drug",releaseName:"Xazy",image:"xazy"},{name:"releases/DorogaVNebo",artistName:"Ko+Ma",releaseName:"Дорога в небо",image:"doroga_v_nebo"},{name:"releases/ChertaNova",artistName:"Andrey Rasputin",releaseName:"Cherta-nova",image:"cherta-nova"},{name:"releases/AnderdogKelgoma",artistName:"Anderdog",releaseName:"Kelgoma",image:"anderdog_kelgoma"},{name:"releases/KokokeiMimoza",artistName:"Kokokei",releaseName:"Mimoza",image:"kokokei"},{name:"releases/AnderdogAndreyLeto",artistName:"Anderdog and Andrey Leto",releaseName:"Romantic Selection",image:"anderdogandreyleto"},{name:"releases/MorakhLimes",artistName:"Morakh",releaseName:"Limes",image:"morakh"},{name:"releases/VvvedenskayaAttempts",artistName:"Vvvedenskaya",releaseName:"Attempts",image:"vvvedenskaya"},{name:"releases/MicrodogEastSide",artistName:"Microdog",releaseName:"East Side of the Breaktown",image:"microdog"},{name:"releases/AmbidextrousErrorism",artistName:"Ambidextrous",releaseName:"Errorism",image:"ambidextrous_cassette_1"},{name:"releases/KoMaRealFace",artistName:"Ko+Ma",releaseName:"По-настоящему счастливое лицо стремится стать кругом",image:"koma"},{name:"releases/AnderdogSleepParalysis",artistName:"Anderdog",releaseName:"Sleep Paralysis",image:"anderdog"}],releasePage:null,showReleasePage:!1}}},o=(n(493),n(56)),component=Object(o.a)(r,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"releases"},[t("div",{staticClass:"container-fluid"},[t("div",{staticClass:"row p-5"},e._l(e.releases,(function(n){return t("div",{key:"".concat(n.name,".sketch"),staticClass:"col-md-4 col-sm-6 col-xs-12 sketch align-items-center"},[t("NuxtLink",{staticClass:"btn",attrs:{to:"/".concat(n.name)}},[t("PfiveSketch",{staticClass:"p5-sketch",attrs:{"image-title":"".concat(n.image)}}),e._v(" "),t("div",{key:"".concat(n.name,".description"),staticClass:"text-white"},[t("p",{staticClass:"description"},[e._v(e._s(n.artistName))]),e._v(" "),t("p",{staticClass:"description"},[e._v(e._s(n.releaseName))])])],1)],1)})),0)])])}),[],!1,null,"748d77e6",null);t.default=component.exports;installComponents(component,{PfiveSketch:n(479).default})}}]);