import { Router } from "express"

import { Goods } from "../models"
import * as yup from "yup"
import { async } from "../middleware"

const router = Router()

const searchParamSchema = yup.object().shape({
  barcode: yup.number(),
  name: yup.string(),
}).required()

router.get(
  "/findAll",
  async(async (req, res) => {
    const { barcode, name } = await searchParamSchema.validate(req.query)
    const data = await Goods.findAll({
      where: Object.assign({}, barcode ? { barcode } : null, name ? { name } : null),
    })
    return res.jsend.success(data)
  })
)

//добавить позицию
//удалить позицию
//закрыть чек

export default router
