//WebAPIをNextjsで作る、components/data.js 返り値listを作成すると"http://localhost:3000/api/hello?id=1"にアクセスでOK
import type { NextApiRequest, NextApiResponse } from 'next'
import apidata from '../../components/data'

interface ApiDataItem {
  password: string;
}

//WebAPIを出力
export default function handler(req: NextApiRequest, res: NextApiResponse<ApiDataItem>) {
  let id = Number(req.query.id) //組み込みqueryでURLのid=のvalueを読み取る
  if (id == undefined) { id = 0 }
  if (id >= apidata.length) { id = 0 }

  res.status(200).json(apidata[id]) //list[id]でvalueを得ているだけ
}