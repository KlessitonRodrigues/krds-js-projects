export const getVideoChunk = async () => {
  const params = {
    expire: "1700115465",
    ei: "qV9VZZKIEKakobIPn4WgwAM",
    ip: "45.7.76.204",
    id: "o-ADYE6nNS6n7mGoGDs6GXTOzDZ85l4mT0rozIh_EX5NKW",
    itag: "399",
    aitags:
      "133,134,135,136,137,160,242,243,244,247,248,278,394,395,396,397,398,399",
    source: "youtube",
    requiressl: "yes",
    mh: "Mi",
    mm: "31,29",
    mn: "sn-p4p8xuxax-uixe,sn-pmcg-4vgl",
    ms: "au,rdu",
    mv: "m",
    mvi: "2",
    pl: "24",
    initcwndbps: "772500",
    spc: "UWF9f5NYO0le6eVlmIBSzT6LRNL2LLc",
    vprv: "1",
    svpuc: "1",
    mime: "video/mp4",
    ns: "nhjguAXRaa2oQoSlFTg3ebcP",
    gir: "yes",
    clen: "29754624",
    dur: "290.665",
    lmt: "1699954422575304",
    mt: "1700093578",
    fvip: "7",
    keepalive: "yes",
    fexp: "24007246",
    beids: "24350018",
    c: "WEB_EMBEDDED_PLAYER",
    txp: "5537434",
    n: "A6K4Kou09-Mj8A",
    sparams:
      "expire,ei,ip,id,aitags,source,requiressl,spc,vprv,svpuc,mime,ns,gir,clen,dur,lmt",
    sig: "ANLwegAwRgIhAOXvBt8s0FQxS4Basxmw2YTBoJdWwRaMxARzDSxJVXPbAiEAkEC9zUDQqS4nNm74-lNdnCO94W239xJ8FlgVvTNjLN4=",
    lsparams: "mh,mm,mn,ms,mv,mvi,pl,initcwndbps",
    lsig: "AM8Gb2swRAIgNqa5XHLaK7AwV1am2Yz4Y95GXFPdqCbODaZAAPezve8CIB2Dl0iITXzrnpzzJ0ZCC51qCwjxMtf2MGRXAvHiGkGQ",
    alr: "yes",
    cpn: "9lPpqqBpo1dcfOfm",
    cver: "1.20231112.00.00",
    range: "0-999999999999",
    rn: "1",
    rbuf: "0",
    pot: "Mm4IpsRh3MpNUwie5-WRAuIF0xNBmXQvzhLRR096WI95cZ1dWXp8R6_zAmf85aidgrRSJJ22WRjbam8PH-hgePh1Muylcks3EI__K6GsSIaPJg_R9Hy7cS7YvYqQ3MkIM5yupg7KMMCrBPdJbqYpjA==",
    ump: "1",
    srfvp: "1",
  };

  const query = new URLSearchParams(params).toString();
  return fetch(
    `https://rr2---sn-p4p8xuxax-uixe.googlevideo.com/videoplayback?${query}`,
    {
      headers: {
        accept: "*/*",
        "accept-language": "en-US,en;q=0.9",
        "sec-ch-ua": '"Chromium";v="119", "Not?A_Brand";v="24"',
        "sec-ch-ua-mobile": "?0",
        "sec-ch-ua-platform": '"Linux"',
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "cross-site",
        "x-client-data": "CPnbygE=",
        Referer: "https://www.youtube.com/",
        "Referrer-Policy": "strict-origin-when-cross-origin",
      },
      body: "x\u0000",
      method: "POST",
    }
  );
};
