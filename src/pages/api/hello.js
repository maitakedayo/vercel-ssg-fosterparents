//WebAPIをNextjsで作る、components/data.js 返り値listを作成すると"http://localhost:3000/api/hello?id=1"にアクセスでOK

import apidata from '../../components/data'

//WebAPIを出力
export default function handler(req, res) {
  let id = req.query.id //組み込みqueryでURLのid=のvalueを読み取る
  if (id == undefined) { id = 0 }
  if (id >= apidata.length) { id = 0 }

  res.json(apidata[id]) //list[id]でvalueを得ているだけ
}