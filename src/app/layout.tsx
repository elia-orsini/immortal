import Footer from "@/components/footer/Footer";
import "./globals.css";
import { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID && (
        <Script
          id="analytics"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
            enScroll=!1,enFdl=!1,extCurrent=void 0,filename=void 0,targetText=void 0,splitOrigin=void 0;const lStor=localStorage,sStor=sessionStorage,doc=document,docEl=document.documentElement,docBody=document.body,docLoc=document.location,w=window,s=screen,nav=navigator||{},extensions=["pdf","xls","xlsx","doc","docx","txt","rtf","csv","exe","key","pps","ppt","pptx","7z","pkg","rar","gz","zip","avi","mov","mp4","mpe","mpeg","wmv","mid","midi","mp3","wav","wma"];function a(e,t,n,o){const j="${
              process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS_ID
            }",r=()=>Math.floor(Math.random()*1e9)+1,c=()=>Math.floor(Date.now()/1e3),F=()=>(sStor._p||(sStor._p=r()),sStor._p),E=()=>r()+"."+c(),_=()=>(lStor.cid_v4||(lStor.cid_v4=E()),lStor.cid_v4),m=lStor.getItem("cid_v4"),v=()=>m?void 0:enScroll==!0?void 0:"1",p=()=>(sStor.sid||(sStor.sid=c()),sStor.sid),O=()=>{if(!sStor._ss)return sStor._ss="1",sStor._ss;if(sStor.getItem("_ss")=="1")return void 0},a="1",g=()=>{if(sStor.sct)if(enScroll==!0)return sStor.sct;else x=+sStor.getItem("sct")+ +a,sStor.sct=x;else sStor.sct=a;return sStor.sct},i=docLoc.search,b=new URLSearchParams(i),h=["q","s","search","query","keyword"],y=h.some(e=>i.includes("&"+e+"=")||i.includes("?"+e+"=")),u=()=>y==!0?"view_search_results":enScroll==!0?"scroll":enFdl==!0?"file_download":"page_view",f=()=>enScroll==!0?"90":void 0,C=()=>{if(u()=="view_search_results"){for(let e of b)if(h.includes(e[0]))return e[1]}else return void 0},d=encodeURIComponent,k=e=>{let t=[];for(let n in e)e.hasOwnProperty(n)&&e[n]!==void 0&&t.push(d(n)+"="+d(e[n]));return t.join("&")},A=!1,S="${`https://immortal-mags.xyz`}/adblockerbypass",M=k({v:"2",tid:j,_p:F(),sr:(s.width*w.devicePixelRatio+"x"+s.height*w.devicePixelRatio).toString(),ul:(nav.language||void 0).toLowerCase(),cid:_(),_fv:v(),_s:"1",dl:docLoc.origin+docLoc.pathname+i,dt:doc.title||void 0,dr:doc.referrer||void 0,sid:p(),sct:g(),seg:"1",en:u(),"epn.percent_scrolled":f(),"ep.search_term":C(),"ep.file_extension":e||void 0,"ep.file_name":t||void 0,"ep.link_text":n||void 0,"ep.link_url":o||void 0,_ss:O(),_dbg:A?1:void 0}),l=S+"?"+M;if(nav.sendBeacon)nav.sendBeacon(l);else{let e=new XMLHttpRequest;e.open("POST",l,!0)}}a();function sPr(){return(docEl.scrollTop||docBody.scrollTop)/((docEl.scrollHeight||docBody.scrollHeight)-docEl.clientHeight)*100}doc.addEventListener("scroll",sEv,{passive:!0});function sEv(){const e=sPr();if(e<90)return;enScroll=!0,a(),doc.removeEventListener("scroll",sEv,{passive:!0}),enScroll=!1}document.addEventListener("DOMContentLoaded",function(){let e=document.getElementsByTagName("a");for(let t=0;t<e.length;t++)if(e[t].getAttribute("href")!=null){const n=e[t].getAttribute("href"),s=n.substring(n.lastIndexOf("/")+1),o=s.split(".").pop();(e[t].hasAttribute("download")||extensions.includes(o))&&e[t].addEventListener("click",fDl,{passive:!0})}});function fDl(e){enFdl=!0;const t=e.currentTarget.getAttribute("href"),n=t.substring(t.lastIndexOf("/")+1),s=n.split(".").pop(),o=n.replace("."+s,""),i=e.currentTarget.text,r=t.replace(docLoc.origin,"");a(s,o,i,r),enFdl=!1}
              `,
          }}
        />
      )}

      <body className={`${inter.className} cursor-crosshair`}>
        {children}

        <Footer />
      </body>
    </html>
  );
}

export const metadata: Metadata = {
  title: {
    template: "%s | Immortal Mags",
    default:
      "Immortal Mags | Where magazines will never die. The largest online repository of independent magazines.",
  },
  description:
    "Immortal Mags, where magazines will never die. We aim to be the largest online repository of independent magazines. Ranging from Fashion to Design, Coffee, Cycling (and many more!) we collect and document the best magazines we encounter.",
  creator: "Elia Orsini",
  applicationName: "Immortal Mags",
  referrer: "origin-when-cross-origin",
};

export const viewport: Viewport = {
  initialScale: 1,
  maximumScale: 1,
  width: "device-width",
};

export const revalidate = 172800; // revalidate at most every 2 days
