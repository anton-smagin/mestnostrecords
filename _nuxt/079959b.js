(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{453:function(e,t,n){"use strict";n.r(t);n(1),n(49),n(57),n(18);const r=.5*(Math.sqrt(3)-1),o=(3-Math.sqrt(3))/6,l=(Math.sqrt(5),Math.sqrt(5),e=>0|Math.floor(e)),h=new Float64Array([1,1,-1,1,1,-1,-1,-1,1,0,-1,0,1,0,-1,0,0,1,0,-1,0,1,0,-1]);function c(e=Math.random){const t=d(e),n=new Float64Array(t).map((e=>h[e%12*2])),c=new Float64Array(t).map((e=>h[e%12*2+1]));return function(e,h){let d=0,m=0,f=0;const s=(e+h)*r,i=l(e+s),w=l(h+s),x=(i+w)*o,v=e-(i-x),y=h-(w-x);let S,P;v>y?(S=1,P=0):(S=0,P=1);const M=v-S+o,k=y-P+o,T=v-1+2*o,N=y-1+2*o,z=255&i,A=255&w;let C=.5-v*v-y*y;if(C>=0){const e=z+t[A];C*=C,d=C*C*(n[e]*v+c[e]*y)}let I=.5-M*M-k*k;if(I>=0){const e=z+S+t[A+P];I*=I,m=I*I*(n[e]*M+c[e]*k)}let R=.5-T*T-N*N;if(R>=0){const e=z+1+t[A+1];R*=R,f=R*R*(n[e]*T+c[e]*N)}return 70*(d+m+f)}}function d(e){const t=512,p=new Uint8Array(t);for(let i=0;i<256;i++)p[i]=i;for(let i=0;i<255;i++){const t=i+~~(e()*(256-i)),n=p[i];p[i]=p[t],p[t]=n}for(let i=256;i<t;i++)p[i]=p[i-256];return p}var m={name:"PfiveSketch",components:{VueP5:function(){return n.e(39).then(n.t.bind(null,540,7))}},props:{imageTitle:{type:String,required:!0,default:""}},data:function(){return{lines:[],p5LogoImage:null,startTime:Date.now(),currentTime:Date.now(),noisePositionX:[0,0,0],noisePositionY:[0,0,0],noiseProgress:[.001,.002,.003],noiseScale:.008,simplexNoise:c(),speedX:1,speedY:1}},computed:{msSinceStart:function(){return this.currentTime-this.startTime},blue:function(){return Math.floor(.03*this.msSinceStart)%255},p5LogoRotationAngle:function(){return 1e-4*this.msSinceStart%Math.PI*2},side:function(){var e=this.$el.clientWidth,t=this.$el.clientHeight;return 2*Math.min(e,t)}},methods:{preload:function(e){this.image=e.loadImage("/".concat(this.imageTitle,".jpg"))},setup:function(e){e.createCanvas(this.side,this.side),this.image.resize(this.side,this.side)},draw:function(e){this.currentTime=Date.now(),this.image.loadPixels();for(var t=this.image.pixels.length,i=0;i<e.width;i+=6)for(var n=0;n<e.height;n+=6){var r=i+n*this.image.width,o=this.warp(i,n,3e-6*this.msSinceStart/1e3,615,e);o=(r-parseInt(o))%t*4,this.image.set(i,n,e.color(this.image.pixels[o],this.image.pixels[o+1],this.image.pixels[o+2]))}this.image.updatePixels(),e.image(this.image,0,0)},keyPressed:function(e){71===e.keyCode&&this.toggleGreen()},toggleRed:function(){this.red=255-this.red},toggleGreen:function(){this.green=255-this.green},pushLine:function(line){var e=this.lines;e.push(line),this.lines=e.slice(-100)},windowResized:function(e){e.resizeCanvas(this.side,this.side)},warp:function(e,t,n,r,o){var l=this.simplexNoise((e+0)*n,(t+0)*n)*r,h=this.simplexNoise((e+5.2)*n,(t+1.3)*n)*r,q=o.createVector(l,h),c=this.simplexNoise((e+4*q.x+1.7)*n,(t+4*q.y+9.2)*n)*r,d=this.simplexNoise((e+4*q.x+8.3)*n,(t+4*q.y+2.8)*n)*r,m=o.createVector(c,d);return this.simplexNoise((e+4*m.x)*n,(t+4*m.y)*n)*r}}},f=n(56),component=Object(f.a)(m,(function(){var e=this,t=e._self._c;return t("div",{staticClass:"p5-template justify-content-center"},[t("vue-p5",{on:{preload:e.preload,setup:e.setup,draw:e.draw,keypressed:e.keyPressed,windowresized:e.windowResized}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);