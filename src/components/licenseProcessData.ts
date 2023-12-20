import { LicenseProcessProps } from 'types/data';

const LicenseProcessesData = async (): Promise<LicenseProcessProps[]> => {
  return [
    {
      cardTitle: "Utilizing the Foreign Drivers License Conversion System",
      cardText: "Learning Examples for Road Tests for Exchanging your Foreign Drivers License for a Japanese License",
      btnText: "Check Example Answers",
      introduction: "Before delving into practical examples, it is essential to acquire fundamental driving skills. These include: The ability to stop accurately within a distance of 0-30cm from the stop line. The capability to make a left turn without skidding and executing a wide turn from a position where the vehicle is shifted to the left (for anti-rollover measures). If proficiency in these skills is lacking, it is advisable to undergo training at a driving practice facility or practice using rental vehicles.",
      development: "As part of your preparation for learning, start by obtaining the course diagram from the website of the driving license examination center where you will take the test (if available, as not all websites may have this information). For example, in the case of the Kanagawa Prefectural Police Drivers License Center, you can obtain it from the following site: https://www.police.pref.kanagawa.jp/tetsuzuki/menkyo/mes83120.html - Course for Exchanging your Foreign Drivers License (外国免許切替コース-普通PDF).",
      transition: "Please obtain a sample diagram from this website https://www.ippatsumenkyo.com/fuchuuuntenmenkyoshikenjou/ . For example, for the Kanagawa Prefecture Police Drivers License Center, you can retrieve it from the following page. https://www.ippatsumenkyo.com/kanagawakenuntenmenkyosikenjou/ The route is different, but you can refer to this example.",
      examOfBlk: "The colored lines in the example diagram correspond to the following action blocks.",
      startBlk: "Start moving Block・State your name・Lock the doors・Adjust the seat・Adjust the mirrors・Fasten the seatbelt・Apply the foot brake・Start the engine・Shift to D・Release the handbrake・Signal to proceed・Rotate your head from -90° to 90°・Start moving",
      stopBlk: "Stop Block・Signal・Turn your head 90 degrees・Move to within 30cm of the edge・Stop within 30cm of the stop line・Apply the handbrake・Shift to P・Cancel the signal・Turn off the engine・Check the rear and exit the vehicle",
      turnBlk: "Right/Left Turn and Lane Change Block・Signal・90° Head Turn・Move Within 50cm of the Edge・90° Head Turn・Right/Left Turn or Lane Change",
      examOfStaticBlk: "The example diagram corresponds to the following static action blocks.",
      pauseStaBlk: "🛑Pause Block(Inverted Triangle Mark)・stop within 100cm of the stop line・pause for 2 seconds・rotate your head from -90° to 90°・proceed",
      walkStaBlk: "🚸Crosswalk Block(Barcode Mark)・Rotate your head from -45° to 45°",
      poorVisibStaBlk: "⑤⑦⑭⑮Poor Visibility Intersection Block(Black Rectangle Mark)・Proceed with Caution(7 kilometers per hour)・Rotate your head from -45° to 45°",
      conclusion: "Under Maintenance",
    },
    {
      cardTitle: "At the Drivers License Center, taking the on-the-spot license examination (general test)",
      cardText: "Learning Examples for the driving test for ordinary passenger vehicles at the Drivers License Center.",
      btnText: "Check Example Answers",
      introduction: "Before delving into practical examples, it is essential to acquire fundamental driving skills. These include: The ability to stop accurately within a distance of 0-30cm from the stop line. The capability to make a left turn without skidding and executing a wide turn from a position where the vehicle is shifted to the left (for anti-rollover measures). If proficiency in these skills is lacking, it is advisable to undergo training at a driving practice facility or practice using rental vehicles.",
      development: "As part of your preparation for learning, start by obtaining the course diagram from the website of the driving license examination center where you will take the test (if available, as not all websites may have this information). For example, in the case of the Kanagawa Prefectural Police Drivers License Center, you can obtain it from the following site: https://www.police.pref.kanagawa.jp/tetsuzuki/menkyo/mes83120.html - Course for Regular Provisional License (普通仮免許コースPDF).",
      transition: "Please obtain a sample diagram from this website https://www.ippatsumenkyo.com/fuchuuuntenmenkyoshikenjou/ . For example, for the Kanagawa Prefecture Police Drivers License Center, you can retrieve it from the following page. https://www.ippatsumenkyo.com/kanagawakenuntenmenkyosikenjou/",
      examOfBlk: "The colored lines in the example diagram correspond to the following action blocks.",
      startBlk: "Start moving Block・State your name・Lock the doors・Adjust the seat・Adjust the mirrors・Fasten the seatbelt・Apply the foot brake・Start the engine・Shift to D・Release the handbrake・Signal to proceed・Rotate your head from -90° to 90°・Start moving",
      stopBlk: "Stop Block・Signal・Turn your head 90 degrees・Move to within 30cm of the edge・Stop within 30cm of the stop line・Apply the handbrake・Shift to P・Cancel the signal・Turn off the engine・Check the rear and exit the vehicle",
      turnBlk: "Right/Left Turn and Lane Change Block・Signal・90° Head Turn・Move Within 50cm of the Edge・90° Head Turn・Right/Left Turn or Lane Change",
      examOfStaticBlk: "The example diagram corresponds to the following static action blocks.",
      pauseStaBlk: "🛑Pause Block(Inverted Triangle Mark)・stop within 100cm of the stop line・pause for 2 seconds・rotate your head from -90° to 90°・proceed",
      walkStaBlk: "🚸Crosswalk Block(Barcode Mark)・Rotate your head from -45° to 45°",
      poorVisibStaBlk: "⑤⑦⑭⑮Poor Visibility Intersection Block(Black Rectangle Mark)・Proceed with Caution(7 kilometers per hour)・Rotate your head from -45° to 45°",
      conclusion: "Under Maintenance",
    },
    {
      cardTitle: "飛び込み一発免許試験（一般試験）",
      cardText: "仮免許技能試験の範例を学ぶ。",
      btnText: "Check Example Answers",
      introduction: "範例を学ぶ前に、最低限の運転技術を身につけることが必要です。その1、停止線までの距離を0-30cmに正確に停止できること。その2、車を左に寄せた状態(巻き込み対策)から脱輪と大回りをすることなく左折できることの二点が求められます。この技術が不足している場合、自動車練習場での講習や、貸し車両を利用して練習することができます。",
      development: "学習のための事前準備の一環として、まずは、受験する運転免許試験場のウェブサイトからコース図を入手してください（ウェブサイトに無い場合も）。例えば、神奈川県警察運転免許センターの場合は、以下サイトから取得することができます。https://www.police.pref.kanagawa.jp/tetsuzuki/menkyo/mes83120.html 普通仮免許コースPDF",
      transition: "次にこのウェブサイト https://www.ippatsumenkyo.com/fuchuuuntenmenkyoshikenjou/ から範例図を入手してください。例えば、神奈川県警察運転免許センターの場合は、以下ページから取得することができます。https://www.ippatsumenkyo.com/kanagawakenuntenmenkyosikenjou/",
      examOfBlk: "範例図のカラー罫線には以下のアクションブロックが対応しています。",
      startBlk: "発進Block・後方確認して乗車・名前を言う・鍵を閉める・座席調整・ミラータッチ・シートベルト・フットブレーキを踏む・エンジンをかける・ドライブにチェンジ・サイドブレーキを解除・合図・-90°+90°首振り・発進",
      stopBlk: "停止Block・合図・90°首振り・端まで30cm未満に寄せる・停止線まで30cm未満・サイドブレーキ・Pにチェンジ・合図を解除する・エンジンを停止させる・後方確認して車から降りる",
      turnBlk: "右/左折/進路変更Block・合図・90°首振り・端まで50cm未満に寄せる・90°首振り・右左折進路変更",
      examOfStaticBlk: "範例図には以下の静的アクションブロックが対応しています。",
      pauseStaBlk: "🛑一時停止Block(逆三角形マーク)・停止線まで100cm未満・2s停止・-90°+90°首振り・発進",
      walkStaBlk: "🚸横断歩道Block(バーコードマーク)・-45°+45°首振り",
      poorVisibStaBlk: "⑤⑦⑭⑮見通しの悪い交差点Block(黒長方形マーク)・徐行・-45°+45°首振り",
      conclusion: "Under Maintenance",
    },
  ];
};

export default LicenseProcessesData;