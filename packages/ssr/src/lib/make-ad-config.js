module.exports = {
  defaultClient: () => ({
    adUnit: "d.thetimes.co.uk",
    biddersConfig: {
      bidders: {
        amazon: {
          accountId: "3360",
          slots: []
        },
        appnexus: {
          placementId: "5823281"
        },
        indexExchange: {
          siteId: "1234"
        },
        rubicon: {
          accountId: "14062",
          siteId: "70608",
          zoneId: "335918"
        }
      },
      bucketSize: 0.25,
      maxBid: 15,
      minPrice: 0.01,
      timeout: 3000
    },
    bidderSlots: ["ad-header", "ad-inline"],
    networkId: "25436805",
    pageTargeting: {
      aid: "198c4b2f-ecec-4f34-be53-c89f83bc1b44",
      breakpoint: "medium",
      cips: null,
      cont: "art",
      e_uuid: "70388aec-7ba7-11e8-9c4a-473552a1b7c8",
      edition_id: "2018-07-05",
      eid: "JEK5925426746",
      ksg:
        "rzxmnyauv,sxzr5crda,pev88aflc,rs3e69b9t,qlrbrdisn,rqwt3l0vs,sqmyjv5y9,rs3w2whbv,rs2085or4,rw2q4y17n,rzxih7667,scd1httgm,rzxl9c9fc,rpwvy2tn3,oqq16c2eg,r3ge6ar30,szocxchms,rwusiipqe,scdzf5ue6,rzxlpwpj6,rpciv6gcv,scdy6k7fb,rpwr6s9yr,rpwxlidyq,rpwu9ul78,sx3y60mw4,scd369xa5,scd078y6q,q46ihbha4,sx3v2r3pl,p3cjf0mwf,rzxlzfg0s,rpwn918i6,rs269dhm1,sm60t5hdn,sat5wladc,scdyr0lr3,sat5h0dgj,sx3qr25yt,rs0a3n41s,sx3p6kpap,rzxmft3c7,rpwrel6lh,sau8ybfqv,rwuo9cp64,rpwtrhrep,scdxdxpny,sa158303k,sx3vrj8rn,rpwsw2wub,savahmdfp,rzxit9roh,szocq7e5b,sx3xy0rye,scd26efxg,scd4rp3dr,rzxmboyaj,sat4w5zr7,sa16lfkyn,rs20gu0ke,sau87bmgh,sau97llqr,sat6hypaq,sx3ysbbbg,rs22revlt,rv2fvbuyb,sx3wx1na1,sat6qec0x,scd561zdz,rwusbvbt6,rzxlxc8x9,sa2zih6pd,rpwunrlt9,scdye0ajw,sx3u2t0e7,rzxl2zwob,rs3gjttqi,sg1ia8twm,rsz87n468,pw58k5bt6,sx3oafly1,rzxj7jvxu,scd5qqxhc,sat55dl3g,rwuslm2uu,rsy610y7q,rwusge2br,sx3rsty6b,rs2zo0n9z,qu9h151f0,r6ddwq5od,rwusduoa8,sat4jqdso,rpww778sp,rz1gxal44,sx3sprq73,rzxmjser7,rs28i1y2j,rzxl5rcy4,rs238l43d,rpwubont7,sx3oy1hl6,sqmye2ubk,scmxb0crl,sau9itubd,scd6cqj7w,szoco0ngh,sx3navh0o,sa2vm2scg,rs3ct5unb,scd1rcsns",
      kuid: "L3uO9V7m",
      kw: "couple,poisoned,by,russian,nerve,agent,novichok,novichok,poisoning",
      log: "1",
      om_v_id: "0159ff285be100121d968d18a23605078001607000c48",
      ppid: "JEK5925426746",
      pw: "1",
      ra: "0",
      refresh: "false",
      search: "null",
      share_token: "null",
      shared: "0",
      teaser: false,
      testmode: "lite"
    },
    slotTargeting: {
      path: "/news",
      sec_id: "null",
      section: "news",
      slot: "news",
      zone: "current_edition"
    }
  }),

  defaultServer: () => ({
    adUnit: "",
    biddersConfig: {},
    bidderSlots: [],
    networkId: "",
    pageTargeting: {},
    slotTargeting: {}
  })
};
